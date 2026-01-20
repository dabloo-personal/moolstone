"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let scene: THREE.Scene,
            camera: THREE.PerspectiveCamera,
            renderer: THREE.WebGLRenderer,
            particles: THREE.Points,
            lines: THREE.LineSegments,
            stone: THREE.Mesh;

        let mouseX = 0, mouseY = 0;
        let targetX = 0, targetY = 0;

        const particleCount = 140;
        const maxDistance = 160;
        const particlesData: { velocity: THREE.Vector3 }[] = [];

        const init = () => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
            camera.position.z = 450;

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            containerRef.current?.appendChild(renderer.domElement);

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
                        -0.8 + Math.random() * 1.6,
                        -0.8 + Math.random() * 1.6,
                        -0.8 + Math.random() * 1.6
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
            lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(particleCount * particleCount * 3), 3).setUsage(THREE.DynamicDrawUsage));
            lineGeometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(particleCount * particleCount * 3), 3).setUsage(THREE.DynamicDrawUsage));
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

            document.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('resize', handleResize);

            const animate = () => {
                const animationId = requestAnimationFrame(animate);
                mouseX += (targetX - mouseX) * 0.05;
                mouseY += (targetY - mouseY) * 0.05;
                camera.position.x += (mouseX - camera.position.x) * 0.05;
                camera.position.y += (-mouseY - camera.position.y) * 0.05;
                camera.lookAt(scene.position);

                stone.rotation.y += 0.005;
                stone.rotation.x += 0.002;

                const positions = (particles.geometry.attributes.position as THREE.BufferAttribute).array;
                const linePos = (lines.geometry.attributes.position as THREE.BufferAttribute).array;
                const lineCol = (lines.geometry.attributes.color as THREE.BufferAttribute).array;
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
                        const alpha = 1.0 - distToCore / 220;
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
                return animationId;
            };

            const animId = animate();

            return { animId, handleMouseMove, handleResize };
        };

        const result = init();

        return () => {
            if (result) {
                cancelAnimationFrame(result.animId);
                document.removeEventListener('mousemove', result.handleMouseMove);
                window.removeEventListener('resize', result.handleResize);
                if (containerRef.current && renderer.domElement) {
                    containerRef.current.removeChild(renderer.domElement);
                }
                scene.traverse((object) => {
                    if (object instanceof THREE.Mesh) {
                        object.geometry.dispose();
                        if (Array.isArray(object.material)) {
                            object.material.forEach((material) => material.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                });
                renderer.dispose();
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 pointer-events-none"
            id="canvas-container"
        />
    );
};

export default HeroBackground;
