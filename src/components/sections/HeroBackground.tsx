"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const animationFrameRef = useRef<number>(0);
    const isMountedRef = useRef<boolean>(true);

    useEffect(() => {
        if (!containerRef.current) return;
        isMountedRef.current = true;

        // Clear any existing content to prevent double-init
        while (containerRef.current.firstChild) {
            containerRef.current.removeChild(containerRef.current.firstChild);
        }

        let scene: THREE.Scene,
            camera: THREE.PerspectiveCamera,
            renderer: THREE.WebGLRenderer,
            particles: THREE.Points,
            lines: THREE.LineSegments,
            stone: THREE.Mesh;

        let mouseX = 0, mouseY = 0;
        let targetX = 0, targetY = 0;

        const particleCount = 120; // Slightly reduced for performance
        const maxDistance = 150;
        const particlesData: { velocity: THREE.Vector3 }[] = [];

        const init = () => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
            camera.position.z = 450;

            renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
                powerPreference: "high-performance"
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
            renderer.setSize(window.innerWidth, window.innerHeight);
            containerRef.current?.appendChild(renderer.domElement);
            rendererRef.current = renderer;

            const stoneGeometry = new THREE.BoxGeometry(60, 60, 60);
            const stoneMaterial = new THREE.MeshPhongMaterial({
                color: 0x0a0a0a,
                emissive: 0xff6a00,
                emissiveIntensity: 0.6,
                flatShading: true,
                shininess: 100
            });
            stone = new THREE.Mesh(stoneGeometry, stoneMaterial);
            scene.add(stone);

            const wireMaterial = new THREE.MeshBasicMaterial({
                color: 0xffae00,
                wireframe: true,
                transparent: true,
                opacity: 0.15
            });
            const stoneWire = new THREE.Mesh(new THREE.BoxGeometry(72, 72, 72), wireMaterial);
            stone.add(stoneWire);

            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);
            for (let i = 0; i < particleCount; i++) {
                positions[i * 3] = Math.random() * 800 - 400;
                positions[i * 3 + 1] = Math.random() * 800 - 400;
                positions[i * 3 + 2] = Math.random() * 800 - 400;
                particlesData.push({
                    velocity: new THREE.Vector3(
                        -0.5 + Math.random(),
                        -0.5 + Math.random(),
                        -0.5 + Math.random()
                    )
                });
            }
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
            particles = new THREE.Points(geometry, new THREE.PointsMaterial({
                color: 0xff6a00,
                size: 2.5,
                blending: THREE.AdditiveBlending,
                transparent: true,
                opacity: 0.8
            }));
            scene.add(particles);

            const lineGeometry = new THREE.BufferGeometry();
            // Increased buffer size to prevent overflow (particleCount * particleCount * 2 vertices for safety)
            const maxVertices = particleCount * particleCount * 2;
            lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(maxVertices * 3), 3).setUsage(THREE.DynamicDrawUsage));
            lineGeometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(maxVertices * 3), 3).setUsage(THREE.DynamicDrawUsage));

            lines = new THREE.LineSegments(lineGeometry, new THREE.LineBasicMaterial({
                vertexColors: true,
                blending: THREE.AdditiveBlending,
                transparent: true
            }));
            scene.add(lines);

            scene.add(new THREE.AmbientLight(0xffffff, 0.1));
            const pointLight = new THREE.PointLight(0xff6a00, 1.5, 600);
            pointLight.position.set(0, 0, 100);
            scene.add(pointLight);

            const handleMouseMove = (e: MouseEvent) => {
                targetX = (e.clientX - window.innerWidth / 2) * 0.05;
                targetY = (e.clientY - window.innerHeight / 2) * 0.05;
            };

            const handleResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            };

            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('resize', handleResize);

            let isVisible = true;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    isVisible = entry.isIntersecting;
                },
                { threshold: 0.1 }
            );
            if (containerRef.current) observer.observe(containerRef.current);

            const animate = () => {
                if (!isMountedRef.current) return;
                animationFrameRef.current = requestAnimationFrame(animate);

                if (!isVisible) return; // Skip rendering if not visible

                mouseX += (targetX - mouseX) * 0.05;
                mouseY += (targetY - mouseY) * 0.05;
                camera.position.x += (mouseX - camera.position.x) * 0.05;
                camera.position.y += (-mouseY - camera.position.y) * 0.05;
                camera.lookAt(scene.position);

                stone.rotation.y += 0.005;
                stone.rotation.x += 0.002;

                const positions = (particles.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
                const linePos = (lines.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
                const lineCol = (lines.geometry.attributes.color as THREE.BufferAttribute).array as Float32Array;

                let vertexIndex = 0;
                let colorIndex = 0;
                let lineCount = 0;

                for (let i = 0; i < particleCount; i++) {
                    positions[i * 3] += particlesData[i].velocity.x * 0.3;
                    positions[i * 3 + 1] += particlesData[i].velocity.y * 0.3;
                    positions[i * 3 + 2] += particlesData[i].velocity.z * 0.3;

                    if (Math.abs(positions[i * 3]) > 400) particlesData[i].velocity.x *= -1;
                    if (Math.abs(positions[i * 3 + 1]) > 400) particlesData[i].velocity.y *= -1;
                    if (Math.abs(positions[i * 3 + 2]) > 400) particlesData[i].velocity.z *= -1;

                    const distToCore = Math.sqrt(positions[i * 3] ** 2 + positions[i * 3 + 1] ** 2 + positions[i * 3 + 2] ** 2);
                    if (distToCore < 220) {
                        const alpha = Math.max(0, 1.0 - distToCore / 220);
                        linePos[vertexIndex++] = positions[i * 3];
                        linePos[vertexIndex++] = positions[i * 3 + 1];
                        linePos[vertexIndex++] = positions[i * 3 + 2];
                        linePos[vertexIndex++] = 0;
                        linePos[vertexIndex++] = 0;
                        linePos[vertexIndex++] = 0;
                        lineCol[colorIndex++] = 1 * alpha;
                        lineCol[colorIndex++] = 0.4 * alpha;
                        lineCol[colorIndex++] = 0;
                        lineCol[colorIndex++] = 0.2 * alpha;
                        lineCol[colorIndex++] = 0.1 * alpha;
                        lineCol[colorIndex++] = 0;
                        lineCount++;
                    }

                    for (let j = i + 1; j < particleCount; j++) {
                        const dx = positions[i * 3] - positions[j * 3];
                        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                        if (dist < maxDistance) {
                            const alpha = (1.0 - dist / maxDistance) * 0.4;
                            linePos[vertexIndex++] = positions[i * 3];
                            linePos[vertexIndex++] = positions[i * 3 + 1];
                            linePos[vertexIndex++] = positions[i * 3 + 2];
                            linePos[vertexIndex++] = positions[j * 3];
                            linePos[vertexIndex++] = positions[j * 3 + 1];
                            linePos[vertexIndex++] = positions[j * 3 + 2];
                            lineCol[colorIndex++] = 1 * alpha;
                            lineCol[colorIndex++] = 0.6 * alpha;
                            lineCol[colorIndex++] = 0;
                            lineCol[colorIndex++] = 1 * alpha;
                            lineCol[colorIndex++] = 0.6 * alpha;
                            lineCol[colorIndex++] = 0;
                            lineCount++;
                        }
                    }
                }

                particles.geometry.attributes.position.needsUpdate = true;
                lines.geometry.attributes.position.needsUpdate = true;
                lines.geometry.attributes.color.needsUpdate = true;
                lines.geometry.setDrawRange(0, lineCount * 2);

                renderer.render(scene, camera);
            };

            animate();

            return () => {
                isMountedRef.current = false;
                cancelAnimationFrame(animationFrameRef.current);
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('resize', handleResize);
                observer.disconnect();

                if (renderer) {
                    renderer.dispose();
                    if (renderer.domElement && renderer.domElement.parentNode) {
                        renderer.domElement.parentNode.removeChild(renderer.domElement);
                    }
                }

                scene.traverse((object) => {
                    if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.LineSegments) {
                        object.geometry?.dispose();
                        if (object.material) {
                            if (Array.isArray(object.material)) {
                                object.material.forEach(m => m.dispose());
                            } else {
                                object.material.dispose();
                            }
                        }
                    }
                });
            };
        };

        const cleanupFunction = init();

        return () => {
            if (cleanupFunction) cleanupFunction();
        };
    }, []);

    return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />;
};


export default HeroBackground;
