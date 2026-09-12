import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RotateCw, Layers, Zap, Eye } from "lucide-react";

export default function Xerox3DViewer() {
  const mountRef = useRef(null);
  const [isRotating, setIsRotating] = useState(true);
  const isRotatingRef = useRef(isRotating);
  isRotatingRef.current = isRotating;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 450;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.background = null;

    // --- Camera Setup ---
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(3.8, 3.2, 4.8);
    camera.lookAt(0, 0.6, 0);

    // --- Renderer Setup ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // --- Materials Palette ---
    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x1e2430, // Charcoal Navy body
      roughness: 0.35,
      metalness: 0.65,
    });

    const lightAccentMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6, // Vibrant Cobalt / Electric Blue accent
      roughness: 0.2,
      metalness: 0.8,
    });

    const bodySecondaryMat = new THREE.MeshStandardMaterial({
      color: 0x2e384d, // Slate grey secondary
      roughness: 0.4,
      metalness: 0.5,
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x93c5fd,
      transmission: 0.75,
      opacity: 0.85,
      transparent: true,
      roughness: 0.1,
      ior: 1.5,
      reflectivity: 0.9,
    });

    const laserBeamMat = new THREE.MeshBasicMaterial({
      color: 0x00f5ff, // Bright Cyan Laser
      transparent: true,
      opacity: 0.9,
    });

    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0x0284c7, // Glowing Sky Blue screen
      emissiveIntensity: 0.55,
      roughness: 0.2,
    });

    const paperMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.8,
      metalness: 0.05,
    });

    const paperPrintedMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.7,
      metalness: 0.05,
    });

    // --- Root Machine Group ---
    const machineGroup = new THREE.Group();
    scene.add(machineGroup);

    // 1. Base Pedestal & Wheels
    const baseGeo = new THREE.BoxGeometry(2.0, 0.25, 1.8);
    const baseMesh = new THREE.Mesh(baseGeo, darkMetalMat);
    baseMesh.position.y = 0.125;
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    machineGroup.add(baseMesh);

    // 4 Caster Feet
    const footGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.12, 16);
    const footMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8, roughness: 0.3 });
    [
      [-0.85, -0.75],
      [0.85, -0.75],
      [-0.85, 0.75],
      [0.85, 0.75],
    ].forEach(([x, z]) => {
      const foot = new THREE.Mesh(footGeo, footMat);
      foot.position.set(x, 0.06, z);
      machineGroup.add(foot);
    });

    // 2. High-Capacity Paper Cassette Base (Lower Cabinets)
    const lowerBodyGeo = new THREE.BoxGeometry(1.9, 1.0, 1.7);
    const lowerBody = new THREE.Mesh(lowerBodyGeo, bodySecondaryMat);
    lowerBody.position.y = 0.75;
    lowerBody.castShadow = true;
    machineGroup.add(lowerBody);

    // Paper Tray 1 & Tray 2 Front Faces
    for (let i = 0; i < 2; i++) {
      const trayFaceGeo = new THREE.BoxGeometry(1.78, 0.38, 0.05);
      const trayFace = new THREE.Mesh(trayFaceGeo, darkMetalMat);
      trayFace.position.set(0, 0.52 + i * 0.44, 0.86);
      machineGroup.add(trayFace);

      // Handle slit
      const handleGeo = new THREE.BoxGeometry(0.45, 0.06, 0.06);
      const handle = new THREE.Mesh(handleGeo, lightAccentMat);
      handle.position.set(0, 0.52 + i * 0.44, 0.9);
      machineGroup.add(handle);

      // Tray paper level indicator
      const gaugeGeo = new THREE.BoxGeometry(0.18, 0.04, 0.02);
      const gaugeMat = new THREE.MeshBasicMaterial({ color: 0x10b981 }); // Green paper full gauge
      const gauge = new THREE.Mesh(gaugeGeo, gaugeMat);
      gauge.position.set(0.65, 0.52 + i * 0.44, 0.89);
      machineGroup.add(gauge);
    }

    // 3. Central Print Engine & Mid Section
    const midSectionGeo = new THREE.BoxGeometry(1.85, 0.65, 1.65);
    const midSection = new THREE.Mesh(midSectionGeo, darkMetalMat);
    midSection.position.y = 1.55;
    midSection.castShadow = true;
    machineGroup.add(midSection);

    // Horizontal Cyan Accent Trim Line
    const trimGeo = new THREE.BoxGeometry(1.88, 0.04, 1.68);
    const trim = new THREE.Mesh(trimGeo, lightAccentMat);
    trim.position.y = 1.88;
    machineGroup.add(trim);

    // 4. Flatbed Scanner Unit (Upper Platen)
    const scannerBedGeo = new THREE.BoxGeometry(2.1, 0.3, 1.9);
    const scannerBed = new THREE.Mesh(scannerBedGeo, bodySecondaryMat);
    scannerBed.position.y = 2.05;
    scannerBed.castShadow = true;
    machineGroup.add(scannerBed);

    // Scanner Glass Top Bed
    const glassGeo = new THREE.BoxGeometry(1.7, 0.04, 1.3);
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.position.set(0, 2.22, 0);
    machineGroup.add(glassMesh);

    // Active Laser Scanner Sweep Bar (inside glass)
    const laserBarGeo = new THREE.BoxGeometry(0.12, 0.03, 1.25);
    const laserBar = new THREE.Mesh(laserBarGeo, laserBeamMat);
    laserBar.position.set(-0.6, 2.21, 0);
    machineGroup.add(laserBar);

    // Laser Glow Line
    const laserLight = new THREE.PointLight(0x00f5ff, 2.5, 1.8);
    laserLight.position.set(-0.6, 2.25, 0);
    machineGroup.add(laserLight);

    // 5. Automatic Document Feeder (ADF Top Lid)
    const adfBaseGeo = new THREE.BoxGeometry(1.85, 0.28, 1.5);
    const adfBase = new THREE.Mesh(adfBaseGeo, darkMetalMat);
    adfBase.position.set(-0.05, 2.36, 0);
    adfBase.castShadow = true;
    machineGroup.add(adfBase);

    // Slanted Document Feeder Tray (Input)
    const adfInputGeo = new THREE.BoxGeometry(0.9, 0.04, 1.1);
    const adfInput = new THREE.Mesh(adfInputGeo, darkMetalMat);
    adfInput.position.set(-0.6, 2.56, 0);
    adfInput.rotation.z = Math.PI * 0.08;
    machineGroup.add(adfInput);

    // Incoming stack of paper on ADF tray
    const adfPaperGeo = new THREE.BoxGeometry(0.75, 0.05, 0.9);
    const adfPaper = new THREE.Mesh(adfPaperGeo, paperMat);
    adfPaper.position.set(-0.58, 2.61, 0);
    adfPaper.rotation.z = Math.PI * 0.08;
    machineGroup.add(adfPaper);

    // 6. Interactive Touchscreen HUD & Control Console
    const consoleArmGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.45, 16);
    const consoleArm = new THREE.Mesh(consoleArmGeo, darkMetalMat);
    consoleArm.position.set(1.0, 2.25, 0.7);
    consoleArm.rotation.z = -Math.PI * 0.15;
    machineGroup.add(consoleArm);

    const screenHolderGeo = new THREE.BoxGeometry(0.75, 0.52, 0.08);
    const screenHolder = new THREE.Mesh(screenHolderGeo, darkMetalMat);
    screenHolder.position.set(1.15, 2.45, 0.75);
    screenHolder.rotation.y = -Math.PI * 0.22;
    screenHolder.rotation.x = -Math.PI * 0.12;
    machineGroup.add(screenHolder);

    const screenDisplayGeo = new THREE.BoxGeometry(0.68, 0.44, 0.02);
    const screenDisplay = new THREE.Mesh(screenDisplayGeo, screenMat);
    screenDisplay.position.set(1.15, 2.45, 0.8);
    screenDisplay.rotation.y = -Math.PI * 0.22;
    screenDisplay.rotation.x = -Math.PI * 0.12;
    machineGroup.add(screenDisplay);

    // Green Status Indicator Pill on Top of Display
    const ledIndicatorGeo = new THREE.SphereGeometry(0.035, 16, 16);
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const ledMesh = new THREE.Mesh(ledIndicatorGeo, ledMat);
    ledMesh.position.set(1.35, 2.68, 0.68);
    machineGroup.add(ledMesh);

    // 7. Output Catch Tray with Gliding Printed Sheets
    const outputTrayGeo = new THREE.BoxGeometry(0.85, 0.03, 1.2);
    const outputTray = new THREE.Mesh(outputTrayGeo, bodySecondaryMat);
    outputTray.position.set(-1.25, 1.35, 0);
    outputTray.rotation.z = -Math.PI * 0.07;
    machineGroup.add(outputTray);

    // Output tray stopper rim
    const outputRimGeo = new THREE.BoxGeometry(0.04, 0.12, 1.2);
    const outputRim = new THREE.Mesh(outputRimGeo, lightAccentMat);
    outputRim.position.set(-1.65, 1.45, 0);
    machineGroup.add(outputRim);

    // Stacking Printed Papers in Catch Tray
    const stackedPaperGeo = new THREE.BoxGeometry(0.7, 0.06, 0.95);
    const stackedPaper = new THREE.Mesh(stackedPaperGeo, paperPrintedMat);
    stackedPaper.position.set(-1.23, 1.39, 0);
    stackedPaper.rotation.z = -Math.PI * 0.07;
    machineGroup.add(stackedPaper);

    // Active Animated Gliding Paper Sheet
    const glidingPaperGeo = new THREE.BoxGeometry(0.65, 0.008, 0.9);
    const glidingPaper = new THREE.Mesh(glidingPaperGeo, paperMat);
    glidingPaper.position.set(-0.85, 1.48, 0);
    machineGroup.add(glidingPaper);

    // 8. Ground Soft Shadow & Reflection Plane
    const groundGeo = new THREE.PlaneGeometry(8, 8);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.28 });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = 0;
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    // Decorative Ambient Floor Glow Ring
    const ringGeo = new THREE.RingGeometry(1.6, 2.2, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = -Math.PI / 2;
    ringMesh.position.y = 0.01;
    scene.add(ringMesh);

    // --- Lighting Setup ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    mainKeyLight.position.set(5, 7, 6);
    mainKeyLight.castShadow = true;
    mainKeyLight.shadow.mapSize.width = 1024;
    mainKeyLight.shadow.mapSize.height = 1024;
    mainKeyLight.shadow.bias = -0.0005;
    scene.add(mainKeyLight);

    // Rim Blue Accent Light
    const blueRimLight = new THREE.DirectionalLight(0x38bdf8, 2.0);
    blueRimLight.position.set(-5, 4, -4);
    scene.add(blueRimLight);

    // Soft Front Fill Light
    const frontFillLight = new THREE.DirectionalLight(0xe0f2fe, 1.0);
    frontFillLight.position.set(0, 3, 5);
    scene.add(frontFillLight);

    // --- Mouse Drag Interaction & Rotation ---
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationY = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (!isDragging) {
        const rect = container.getBoundingClientRect();
        const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        targetRotationY = normX * 0.25;
        return;
      }
      const deltaX = e.clientX - previousMousePosition.x;
      machineGroup.rotation.y += deltaX * 0.008;
      targetRotationY = machineGroup.rotation.y;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // --- Animation Loop ---
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Idle floating
      machineGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.04;

      // Rotation handling
      if (isRotatingRef.current && !isDragging) {
        machineGroup.rotation.y += 0.005;
      } else if (!isDragging) {
        machineGroup.rotation.y += (targetRotationY - machineGroup.rotation.y) * 0.05;
      }

      // Scanner Laser Sweep
      const laserPos = Math.sin(elapsedTime * 2.8) * 0.65;
      laserBar.position.x = laserPos;
      laserLight.position.x = laserPos;
      laserLight.intensity = 1.8 + Math.sin(elapsedTime * 6.0) * 0.7;

      // Gliding Paper Ejection
      const paperCycle = (elapsedTime * 0.7) % 1;
      const startX = -0.7;
      const endX = -1.25;
      const startY = 1.55;
      const endY = 1.41;

      glidingPaper.position.x = startX + (endX - startX) * paperCycle;
      glidingPaper.position.y = startY + (endY - startY) * paperCycle;
      glidingPaper.rotation.z = -Math.PI * (0.02 + paperCycle * 0.05);

      if (paperCycle > 0.88) {
        glidingPaper.scale.setScalar(1 - (paperCycle - 0.88) * 4);
      } else {
        glidingPaper.scale.set(1, 1, 1);
      }

      // Pulse floor ring
      ringMesh.scale.setScalar(1.0 + Math.sin(elapsedTime * 2.0) * 0.04);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[440px] sm:h-[500px] lg:h-[560px] flex items-center justify-center select-none">
      {/* Three.js Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
      />

      {/* Floating HUD Overlay Badges */}
      <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md border border-slate-700/60 rounded-xl px-3.5 py-2 shadow-xl flex items-center space-x-2.5 pointer-events-none">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
        </span>
        <div>
          <div className="text-[11px] font-semibold text-white tracking-wide uppercase flex items-center gap-1.5">
            <span>EasePrint Smart Kiosk 3D</span>
            <span className="bg-cyan-500/20 text-cyan-300 text-[9px] px-1.5 py-0.5 rounded font-mono">ONLINE</span>
          </div>
          <p className="text-[10px] text-slate-400">High-Yield Laser Engine • Hyderabad Station</p>
        </div>
      </div>

      {/* Dynamic Laser & Scanner Callout */}
      <div className="absolute top-1/4 right-3 sm:right-6 bg-slate-900/85 backdrop-blur-md border border-cyan-500/30 rounded-xl p-3 shadow-lg max-w-[170px] pointer-events-none hidden sm:block">
        <div className="flex items-center space-x-1.5 text-cyan-400 text-xs font-bold mb-1">
          <Zap className="w-3.5 h-3.5 animate-pulse" />
          <span>Optical Scanner</span>
        </div>
        <p className="text-[11px] text-slate-300 leading-tight">
          Active optical scan bed with 600 DPI fast duplexing.
        </p>
      </div>

      {/* Tray Capacity Callout */}
      <div className="absolute bottom-14 left-3 sm:left-6 bg-slate-900/85 backdrop-blur-md border border-slate-700/60 rounded-xl p-3 shadow-lg max-w-[175px] pointer-events-none hidden sm:block">
        <div className="flex items-center space-x-1.5 text-emerald-400 text-xs font-bold mb-1">
          <Layers className="w-3.5 h-3.5" />
          <span>Paper Trays 1 & 2</span>
        </div>
        <p className="text-[11px] text-slate-300 leading-tight">
          Dual 1000-sheet cassettes supporting 75 GSM & glossy sheets.
        </p>
      </div>

      {/* Floating Interactive Controls */}
      <div className="absolute bottom-3 right-3 flex items-center space-x-2 bg-slate-900/85 backdrop-blur-md border border-slate-700/70 rounded-xl p-1.5 shadow-xl">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            isRotating ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-slate-400 hover:text-white"
          }`}
          title="Toggle 360 Auto-Rotation"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? "animate-spin" : ""}`} />
          <span className="hidden xs:inline">{isRotating ? "Auto Orbit" : "Paused"}</span>
        </button>
        <span className="text-[10px] text-slate-400 px-2 flex items-center gap-1 font-mono">
          <Eye className="w-3 h-3 text-slate-500" />
          <span>Drag to Rotate 360°</span>
        </span>
      </div>
    </div>
  );
}
