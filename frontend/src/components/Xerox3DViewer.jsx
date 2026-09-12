import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Play, Pause, RotateCw, Eye, Sparkles, Zap, Layers, Cpu } from "lucide-react";

export default function Xerox3DViewer() {
  const mountRef = useRef(null);

  // Cinematic Tour States
  const STAGES = [
    { id: "overview", label: "Overview", desc: "Heavy-Duty Autonomous Campus Kiosk", icon: Eye, duration: 5.5 },
    { id: "scanner", label: "Optical Scanner", desc: "600 DPI Auto-Duplexing Glass Bed", icon: Zap, duration: 4.5 },
    { id: "screen", label: "Touch HUD", desc: "EasePrint OS Live Dispatch Console", icon: Cpu, duration: 4.5 },
    { id: "trays", label: "Paper Trays", desc: "Dual 1000-Sheet High-Speed Drawers", icon: Layers, duration: 4.5 },
  ];

  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isTourPlaying, setIsTourPlaying] = useState(true);
  const isTourPlayingRef = useRef(isTourPlaying);
  isTourPlayingRef.current = isTourPlaying;

  const activeStageRef = useRef(0);
  activeStageRef.current = activeStageIndex;

  const stageTimeRef = useRef(0);

  const selectStage = (index) => {
    setActiveStageIndex(index);
    stageTimeRef.current = 0;
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 550;
    const height = container.clientHeight || 520;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.background = null; // Completely transparent to blend into light background

    // --- Camera Setup & Presets ---
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    const cameraPos = new THREE.Vector3(3.6, 2.9, 4.5);
    const cameraTarget = new THREE.Vector3(0, 0.85, 0);
    camera.position.copy(cameraPos);
    camera.lookAt(cameraTarget);

    const PRESETS = [
      // 0: Overview
      { pos: new THREE.Vector3(3.6, 2.9, 4.5), target: new THREE.Vector3(0, 0.85, 0) },
      // 1: Scanner
      { pos: new THREE.Vector3(0.0, 3.4, 2.0), target: new THREE.Vector3(0, 2.1, 0) },
      // 2: Touch HUD
      { pos: new THREE.Vector3(2.2, 2.8, 1.8), target: new THREE.Vector3(1.15, 2.45, 0.75) },
      // 3: Paper Trays
      { pos: new THREE.Vector3(1.8, 1.25, 2.9), target: new THREE.Vector3(0, 0.7, 0.4) },
    ];

    // --- Renderer Setup ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // --- LIGHT COLOR PALETTE (Modern Architectural Platinum & Crisp White) ---
    const primaryWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc, // Pure clean platinum white
      roughness: 0.25,
      metalness: 0.15,
    });

    const slateTrimMat = new THREE.MeshStandardMaterial({
      color: 0x334155, // Elegant slate contrast
      roughness: 0.35,
      metalness: 0.5,
    });

    const cobaltAccentMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7, // Vibrant Sky / Electric Blue
      roughness: 0.2,
      metalness: 0.8,
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xe0f2fe,
      transmission: 0.8,
      opacity: 0.9,
      transparent: true,
      roughness: 0.08,
      ior: 1.5,
      reflectivity: 0.95,
    });

    const laserBeamMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7, // Cyan-Blue Laser Sweep
      transparent: true,
      opacity: 0.95,
    });

    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0x0369a1,
      emissiveIntensity: 0.65,
      roughness: 0.2,
    });

    const paperMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.85,
      metalness: 0.05,
    });

    const paperPrintedMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.8,
      metalness: 0.05,
    });

    // --- Machine Group ---
    const machineGroup = new THREE.Group();
    scene.add(machineGroup);

    // 1. Base Pedestal & Caster Feet
    const baseGeo = new THREE.BoxGeometry(2.0, 0.22, 1.8);
    const baseMesh = new THREE.Mesh(baseGeo, slateTrimMat);
    baseMesh.position.y = 0.11;
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    machineGroup.add(baseMesh);

    const footGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.12, 16);
    const footMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.3 });
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

    // 2. Paper Cassettes Lower Unit (Crisp White with Slate Trays)
    const lowerBodyGeo = new THREE.BoxGeometry(1.92, 1.0, 1.72);
    const lowerBody = new THREE.Mesh(lowerBodyGeo, primaryWhiteMat);
    lowerBody.position.y = 0.72;
    lowerBody.castShadow = true;
    lowerBody.receiveShadow = true;
    machineGroup.add(lowerBody);

    // Paper Tray 1 & Tray 2 Front Panels
    for (let i = 0; i < 2; i++) {
      const trayFaceGeo = new THREE.BoxGeometry(1.8, 0.38, 0.04);
      const trayFace = new THREE.Mesh(trayFaceGeo, slateTrimMat);
      trayFace.position.set(0, 0.52 + i * 0.44, 0.87);
      machineGroup.add(trayFace);

      // Metallic Handle
      const handleGeo = new THREE.BoxGeometry(0.48, 0.06, 0.06);
      const handle = new THREE.Mesh(handleGeo, cobaltAccentMat);
      handle.position.set(0, 0.52 + i * 0.44, 0.91);
      machineGroup.add(handle);

      // Paper Level LED indicator
      const gaugeGeo = new THREE.BoxGeometry(0.18, 0.04, 0.02);
      const gaugeMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
      const gauge = new THREE.Mesh(gaugeGeo, gaugeMat);
      gauge.position.set(0.65, 0.52 + i * 0.44, 0.9);
      machineGroup.add(gauge);
    }

    // 3. Central Print Engine Unit
    const midSectionGeo = new THREE.BoxGeometry(1.86, 0.65, 1.66);
    const midSection = new THREE.Mesh(midSectionGeo, primaryWhiteMat);
    midSection.position.y = 1.54;
    midSection.castShadow = true;
    machineGroup.add(midSection);

    // Electric Blue Accent Horizon Trim
    const trimGeo = new THREE.BoxGeometry(1.9, 0.04, 1.7);
    const trim = new THREE.Mesh(trimGeo, cobaltAccentMat);
    trim.position.y = 1.86;
    machineGroup.add(trim);

    // 4. Scanner Bed Unit (Light Slate & Glass)
    const scannerBedGeo = new THREE.BoxGeometry(2.1, 0.28, 1.9);
    const scannerBed = new THREE.Mesh(scannerBedGeo, primaryWhiteMat);
    scannerBed.position.y = 2.02;
    scannerBed.castShadow = true;
    machineGroup.add(scannerBed);

    // Scanner Glass Flatbed
    const glassGeo = new THREE.BoxGeometry(1.7, 0.03, 1.3);
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.position.set(0, 2.17, 0);
    machineGroup.add(glassMesh);

    // Moving Laser Bar Sweep inside scanner
    const laserBarGeo = new THREE.BoxGeometry(0.14, 0.025, 1.26);
    const laserBar = new THREE.Mesh(laserBarGeo, laserBeamMat);
    laserBar.position.set(-0.6, 2.16, 0);
    machineGroup.add(laserBar);

    const laserLight = new THREE.PointLight(0x0284c7, 3.2, 2.0);
    laserLight.position.set(-0.6, 2.22, 0);
    machineGroup.add(laserLight);

    // 5. Automatic Document Feeder (ADF Top Lid)
    const adfBaseGeo = new THREE.BoxGeometry(1.86, 0.26, 1.5);
    const adfBase = new THREE.Mesh(adfBaseGeo, slateTrimMat);
    adfBase.position.set(-0.05, 2.32, 0);
    adfBase.castShadow = true;
    machineGroup.add(adfBase);

    // Slanted Feeder Input Tray
    const adfInputGeo = new THREE.BoxGeometry(0.9, 0.04, 1.1);
    const adfInput = new THREE.Mesh(adfInputGeo, primaryWhiteMat);
    adfInput.position.set(-0.6, 2.52, 0);
    adfInput.rotation.z = Math.PI * 0.08;
    machineGroup.add(adfInput);

    // Top paper stack
    const adfPaperGeo = new THREE.BoxGeometry(0.75, 0.05, 0.9);
    const adfPaper = new THREE.Mesh(adfPaperGeo, paperMat);
    adfPaper.position.set(-0.58, 2.57, 0);
    adfPaper.rotation.z = Math.PI * 0.08;
    machineGroup.add(adfPaper);

    // 6. Interactive Touchscreen Console
    const consoleArmGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.45, 16);
    const consoleArm = new THREE.Mesh(consoleArmGeo, slateTrimMat);
    consoleArm.position.set(1.0, 2.22, 0.7);
    consoleArm.rotation.z = -Math.PI * 0.15;
    machineGroup.add(consoleArm);

    const screenHolderGeo = new THREE.BoxGeometry(0.75, 0.52, 0.08);
    const screenHolder = new THREE.Mesh(screenHolderGeo, slateTrimMat);
    screenHolder.position.set(1.15, 2.42, 0.75);
    screenHolder.rotation.y = -Math.PI * 0.22;
    screenHolder.rotation.x = -Math.PI * 0.12;
    machineGroup.add(screenHolder);

    const screenDisplayGeo = new THREE.BoxGeometry(0.68, 0.44, 0.02);
    const screenDisplay = new THREE.Mesh(screenDisplayGeo, screenMat);
    screenDisplay.position.set(1.15, 2.42, 0.8);
    screenDisplay.rotation.y = -Math.PI * 0.22;
    screenDisplay.rotation.x = -Math.PI * 0.12;
    machineGroup.add(screenDisplay);

    const ledIndicatorGeo = new THREE.SphereGeometry(0.035, 16, 16);
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const ledMesh = new THREE.Mesh(ledIndicatorGeo, ledMat);
    ledMesh.position.set(1.35, 2.65, 0.68);
    machineGroup.add(ledMesh);

    // 7. Output Catch Tray with Gliding Paper Sheets
    const outputTrayGeo = new THREE.BoxGeometry(0.85, 0.03, 1.2);
    const outputTray = new THREE.Mesh(outputTrayGeo, slateTrimMat);
    outputTray.position.set(-1.25, 1.35, 0);
    outputTray.rotation.z = -Math.PI * 0.07;
    machineGroup.add(outputTray);

    const outputRimGeo = new THREE.BoxGeometry(0.04, 0.12, 1.2);
    const outputRim = new THREE.Mesh(outputRimGeo, cobaltAccentMat);
    outputRim.position.set(-1.65, 1.45, 0);
    machineGroup.add(outputRim);

    const stackedPaperGeo = new THREE.BoxGeometry(0.7, 0.06, 0.95);
    const stackedPaper = new THREE.Mesh(stackedPaperGeo, paperPrintedMat);
    stackedPaper.position.set(-1.23, 1.39, 0);
    stackedPaper.rotation.z = -Math.PI * 0.07;
    machineGroup.add(stackedPaper);

    const glidingPaperGeo = new THREE.BoxGeometry(0.65, 0.008, 0.9);
    const glidingPaper = new THREE.Mesh(glidingPaperGeo, paperMat);
    glidingPaper.position.set(-0.85, 1.48, 0);
    machineGroup.add(glidingPaper);

    // 8. Ground Soft Contact Shadow (Clean Light Floor)
    const groundGeo = new THREE.PlaneGeometry(8, 8);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.18 });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = 0;
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    // Soft Ambient Cyan Floor Halo
    const ringGeo = new THREE.RingGeometry(1.5, 2.3, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = -Math.PI / 2;
    ringMesh.position.y = 0.01;
    scene.add(ringMesh);

    // --- Studio Lighting for Crisp Light Palette ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(6, 8, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Soft Sky Blue Rim Light
    const skyRimLight = new THREE.DirectionalLight(0xbae6fd, 1.6);
    skyRimLight.position.set(-5, 4, -4);
    scene.add(skyRimLight);

    // Warm Front Soft Fill
    const fillLight = new THREE.DirectionalLight(0xf1f5f9, 1.4);
    fillLight.position.set(0, 4, 5);
    scene.add(fillLight);

    // --- Mouse Drag Interaction ---
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let dragRotationY = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      dragRotationY += deltaX * 0.008;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // --- Animation & Cinematic Tour Loop ---
    let clock = new THREE.Clock();
    let animationFrameId;

    const currentLookAt = new THREE.Vector3().copy(cameraTarget);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Cinematic Tour Sequencer
      if (isTourPlayingRef.current && !isDragging) {
        stageTimeRef.current += delta;
        const currentStageDef = STAGES[activeStageRef.current];
        if (stageTimeRef.current >= currentStageDef.duration) {
          stageTimeRef.current = 0;
          const nextIndex = (activeStageRef.current + 1) % STAGES.length;
          setActiveStageIndex(nextIndex);
        }
      }

      // Target Preset Camera & LookAt
      const targetPreset = PRESETS[activeStageRef.current] || PRESETS[0];
      camera.position.lerp(targetPreset.pos, 0.038);
      currentLookAt.lerp(targetPreset.target, 0.038);
      camera.lookAt(currentLookAt);

      // Machine Subtle Float & User Drag Rotation
      if (activeStageRef.current === 0) {
        machineGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.03;
        machineGroup.rotation.y = dragRotationY + Math.sin(elapsedTime * 0.5) * 0.05;
      } else {
        machineGroup.position.y = 0;
        machineGroup.rotation.y = dragRotationY;
      }

      // Scanner Laser Sweep Animation
      const laserPos = Math.sin(elapsedTime * 2.8) * 0.65;
      laserBar.position.x = laserPos;
      laserLight.position.x = laserPos;
      laserLight.intensity = 2.4 + Math.sin(elapsedTime * 6.0) * 0.8;

      // Gliding Paper Ejection Animation
      const paperCycle = (elapsedTime * 0.7) % 1;
      const startX = -0.7;
      const endX = -1.25;
      const startY = 1.54;
      const endY = 1.41;

      glidingPaper.position.x = startX + (endX - startX) * paperCycle;
      glidingPaper.position.y = startY + (endY - startY) * paperCycle;
      glidingPaper.rotation.z = -Math.PI * (0.02 + paperCycle * 0.05);

      if (paperCycle > 0.88) {
        glidingPaper.scale.setScalar(1 - (paperCycle - 0.88) * 4);
      } else {
        glidingPaper.scale.set(1, 1, 1);
      }

      // Halo Pulse
      ringMesh.scale.setScalar(1.0 + Math.sin(elapsedTime * 2.0) * 0.04);

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Handler ---
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
    <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[600px] flex items-center justify-center select-none">
      {/* Three.js Canvas - Pure Seamless Floating Model (No Enclosing Box) */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
      />

      {/* Top Floating Status Pill - Light Modern Glass */}
      <div className="absolute top-2 left-2 sm:left-4 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl px-4 py-2 shadow-lg shadow-slate-200/50 flex items-center space-x-3 pointer-events-none z-10">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
        </span>
        <div>
          <div className="text-xs font-bold text-slate-900 tracking-wide flex items-center gap-1.5">
            <span>EasePrint Smart Kiosk 3D</span>
            <span className="bg-sky-50 text-sky-700 text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold border border-sky-200">
              ACTIVE
            </span>
          </div>
          <p className="text-[11px] text-slate-500">
            {STAGES[activeStageIndex].desc}
          </p>
        </div>
      </div>

      {/* Bottom Cinematic Tour Navigation Bar (Light Palette) */}
      <div className="absolute bottom-3 left-2 right-2 sm:left-auto sm:right-4 flex flex-col sm:flex-row items-center gap-2 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-2 shadow-xl shadow-slate-200/60 z-10">
        {/* Play/Pause Tour Toggle */}
        <button
          onClick={() => setIsTourPlaying(!isTourPlaying)}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            isTourPlaying
              ? "bg-sky-50 text-sky-700 border border-sky-200"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
          title={isTourPlaying ? "Pause Cinematic Tour" : "Play Cinematic Tour"}
        >
          {isTourPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          <span>{isTourPlaying ? "Camera Tour" : "Paused"}</span>
        </button>

        {/* Stage Selector Pills */}
        <div className="flex items-center bg-slate-100/90 p-1 rounded-xl">
          {STAGES.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={s.id}
                onClick={() => selectStage(idx)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-white text-sky-700 shadow-sm shadow-slate-300/50 scale-105"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-sky-600" : "text-slate-400"}`} />
                <span className="hidden xs:inline">{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
