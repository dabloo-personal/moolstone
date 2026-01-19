import shutil
import os

src = r"C:\Users\lenovo\.gemini\antigravity\brain\31229495-de1b-4a37-98a5-803e2e80c1bf\uploaded_image_1768626940073.png"
dst = r"e:\Moolstone\src\app\amazon-services-hero.png"

try:
    shutil.copy(src, dst)
    print(f"Successfully copied {src} to {dst}")
except Exception as e:
    print(f"Error copying file: {e}")
