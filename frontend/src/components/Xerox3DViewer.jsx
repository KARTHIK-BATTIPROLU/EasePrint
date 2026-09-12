import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Xerox3DViewer() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 750;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.background = null;

    // --- Responsive Placement: Small on right at scroll 0, quickly enlarges & glides to middle on scroll ---
    const isMobile = width < 1024;
    const machinePosX = isMobile ? 0 : 2.4;
    const targetLookX = isMobile ? 0 : 0.6;
    const initialBaseScale = isMobile ? 0.38 : 0.36;

    // --- Camera Setup with Dynamic Perspective ---
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    const cameraPos = new THREE.Vector3(isMobile ? 4.2 : 5.4, 3.4, 6.8);
    const cameraTarget = new THREE.Vector3(targetLookX, 0.9, 0);
    camera.position.copy(cameraPos);
    camera.lookAt(cameraTarget);

    // Camera presets for the 4 interactive tour stages
    const PRESETS = [
      // 0: Overview - Balanced 3/4 angle showcasing the entire sleek kiosk
      { pos: new THREE.Vector3(isMobile ? 4.2 : 5.4, 3.4, 6.8), target: new THREE.Vector3(isMobile ? 0 : 1.3, 0.9, 0) },
      // 1: Laser Core - Close-up on the internal photonics chamber & sweeping scanner
      { pos: new THREE.Vector3(isMobile ? 0.0 : 2.2, 3.8, 4.2), target: new THREE.Vector3(isMobile ? 0 : 2.2, 1.5, 0) },
      // 2: Touch HUD - Focused perspective on the articulated OLED console
      { pos: new THREE.Vector3(isMobile ? 2.4 : 3.6, 2.9, 3.5), target: new THREE.Vector3(isMobile ? 1.0 : 2.6, 1.8, 0.6) },
      // 3: Paper Trays - Low perspective showcasing the dual cassettes & gliding paper
      { pos: new THREE.Vector3(isMobile ? 2.2 : 3.4, 1.6, 4.4), target: new THREE.Vector3(isMobile ? 0 : 1.8, 0.7, 0.3) },
    ];

    // --- Renderer Setup ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // --- HIGH-TECH CYBER-INDUSTRIAL MATERIALS PALETTE ---
    const pearlWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.2,
      metalness: 0.15,
    });

    const slateTrimMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.35,
      metalness: 0.35,
    });

    const darkChassisMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.28,
      metalness: 0.75,
    });

    const cobaltAccentMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.18,
      metalness: 0.85,
    });

    const copperStatorMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.25,
      metalness: 0.85,
    });

    const smokedGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transmission: 0.85,
      opacity: 0.88,
      transparent: true,
      roughness: 0.08,
      ior: 1.52,
      reflectivity: 0.9,
    });

    const neonCyanGlowMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
    });

    const laserBeamMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.95,
    });

    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x0a101d,
      emissive: 0x0284c7,
      emissiveIntensity: 0.75,
      roughness: 0.15,
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

    // --- Machine Root Group ---
    const machineGroup = new THREE.Group();
    machineGroup.scale.set(initialBaseScale, initialBaseScale, initialBaseScale);
    machineGroup.position.set(machinePosX, isMobile ? 0.0 : 0.20, 0);
    scene.add(machineGroup);

    // =========================================================================
    // 1. BEVELED OCTAGONAL TITANIUM PEDESTAL & PERIMETER GLOW
    // =========================================================================
    const baseChassisGeo = new THREE.BoxGeometry(2.04, 0.20, 1.84);
    const baseChassis = new THREE.Mesh(baseChassisGeo, darkChassisMat);
    baseChassis.position.y = 0.10;
    baseChassis.castShadow = true;
    baseChassis.receiveShadow = true;
    machineGroup.add(baseChassis);

    // Glowing Neon Perimeter Line
    const perimeterStripGeo = new THREE.BoxGeometry(2.08, 0.03, 1.88);
    const perimeterStrip = new THREE.Mesh(perimeterStripGeo, neonCyanGlowMat);
    perimeterStrip.position.y = 0.19;
    machineGroup.add(perimeterStrip);

    // 4 High-Tech Leveling Pods
    const footGeo = new THREE.CylinderGeometry(0.09, 0.11, 0.12, 16);
    const footMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.9, roughness: 0.2 });
    [
      [-0.88, -0.78],
      [0.88, -0.78],
      [-0.88, 0.78],
      [0.88, 0.78],
    ].forEach(([x, z]) => {
      const foot = new THREE.Mesh(footGeo, footMat);
      foot.position.set(x, 0.06, z);
      machineGroup.add(foot);
    });

    // =========================================================================
    // 2. DUAL HIGH-SPEED SMART CASSETTES (LOWER UNIT)
    // =========================================================================
    const lowerBodyGeo = new THREE.BoxGeometry(1.94, 0.96, 1.74);
    const lowerBody = new THREE.Mesh(lowerBodyGeo, pearlWhiteMat);
    lowerBody.position.y = 0.70;
    lowerBody.castShadow = true;
    lowerBody.receiveShadow = true;
    machineGroup.add(lowerBody);

    // Side Aerodynamic Cooling Vents
    [-0.98, 0.98].forEach((xSide) => {
      for (let v = 0; v < 4; v++) {
        const ventGeo = new THREE.BoxGeometry(0.02, 0.04, 0.75);
        const vent = new THREE.Mesh(ventGeo, slateTrimMat);
        vent.position.set(xSide, 0.45 + v * 0.14, 0);
        machineGroup.add(vent);
      }
    });

    // 2 Slide-Out Drawers with Recessed Handles & LED Reserves
    for (let i = 0; i < 2; i++) {
      const trayFaceGeo = new THREE.BoxGeometry(1.82, 0.36, 0.04);
      const trayFace = new THREE.Mesh(trayFaceGeo, slateTrimMat);
      trayFace.position.set(0, 0.50 + i * 0.42, 0.88);
      machineGroup.add(trayFace);

      // Recessed Anodized Cobalt Handle
      const handleGeo = new THREE.BoxGeometry(0.50, 0.05, 0.06);
      const handle = new THREE.Mesh(handleGeo, cobaltAccentMat);
      handle.position.set(0, 0.50 + i * 0.42, 0.92);
      machineGroup.add(handle);

      // Glowing Capacity Gauge
      const gaugeGeo = new THREE.BoxGeometry(0.20, 0.035, 0.02);
      const gaugeMat = new THREE.MeshBasicMaterial({ color: i === 0 ? 0x10b981 : 0x06b6d4 });
      const gauge = new THREE.Mesh(gaugeGeo, gaugeMat);
      gauge.position.set(0.68, 0.50 + i * 0.42, 0.91);
      machineGroup.add(gauge);
    }

    // =========================================================================
    // 3. TRANSPARENT SMOKED-GLASS PHOTONICS CHAMBER & ROTATING LASER DRUM
    // =========================================================================
    const midSectionGeo = new THREE.BoxGeometry(1.88, 0.58, 1.68);
    const midSection = new THREE.Mesh(midSectionGeo, pearlWhiteMat);
    midSection.position.y = 1.48;
    midSection.castShadow = true;
    machineGroup.add(midSection);

    // Front Smoked-Glass Observation Viewport
    const observationGlassGeo = new THREE.BoxGeometry(1.68, 0.38, 0.06);
    const observationGlass = new THREE.Mesh(observationGlassGeo, smokedGlassMat);
    observationGlass.position.set(0, 1.48, 0.86);
    machineGroup.add(observationGlass);

    // Inside Chamber: Rotating Laser Imaging Drum (Visible through glass!)
    const drumGroup = new THREE.Group();
    drumGroup.position.set(0, 1.48, 0.45);
    machineGroup.add(drumGroup);

    const drumGeo = new THREE.CylinderGeometry(0.22, 0.22, 1.35, 24);
    const drumMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.2,
      metalness: 0.9,
    });
    const drumMesh = new THREE.Mesh(drumGeo, drumMat);
    drumMesh.rotation.z = Math.PI / 2;
    drumGroup.add(drumMesh);

    // Copper Stator Bands on Drum
    [-0.45, 0, 0.45].forEach((xOffset) => {
      const ringGeo = new THREE.TorusGeometry(0.23, 0.02, 16, 24);
      const ring = new THREE.Mesh(ringGeo, copperStatorMat);
      ring.position.x = xOffset;
      ring.rotation.y = Math.PI / 2;
      drumGroup.add(ring);
    });

    // Internal Glowing Core Light
    const internalCoreLight = new THREE.PointLight(0x00f0ff, 2.2, 1.8);
    internalCoreLight.position.set(0, 1.48, 0.6);
    machineGroup.add(internalCoreLight);

    // Accent Rim Dividing Lower and Upper Units
    const accentRimGeo = new THREE.BoxGeometry(1.92, 0.04, 1.72);
    const accentRim = new THREE.Mesh(accentRimGeo, cobaltAccentMat);
    accentRim.position.y = 1.78;
    machineGroup.add(accentRim);

    // =========================================================================
    // 4. SCANNER BED & ACTIVE VOLUMETRIC LASER ARRAY
    // =========================================================================
    const scannerBedGeo = new THREE.BoxGeometry(2.14, 0.26, 1.94);
    const scannerBed = new THREE.Mesh(scannerBedGeo, pearlWhiteMat);
    scannerBed.position.y = 1.94;
    scannerBed.castShadow = true;
    machineGroup.add(scannerBed);

    const glassPlatenGeo = new THREE.BoxGeometry(1.74, 0.025, 1.34);
    const glassPlaten = new THREE.Mesh(glassPlatenGeo, smokedGlassMat);
    glassPlaten.position.set(0, 2.08, 0);
    machineGroup.add(glassPlaten);

    // Animated Sweeping Laser Bar
    const laserBarGeo = new THREE.BoxGeometry(0.12, 0.02, 1.30);
    const laserBar = new THREE.Mesh(laserBarGeo, laserBeamMat);
    laserBar.position.set(-0.6, 2.07, 0);
    machineGroup.add(laserBar);

    const laserLight = new THREE.PointLight(0x0284c7, 3.5, 2.2);
    laserLight.position.set(-0.6, 2.14, 0);
    machineGroup.add(laserLight);

    // =========================================================================
    // 5. AERODYNAMIC AUTO-DOCUMENT FEEDER (ADF) CANOPY
    // =========================================================================
    const adfBaseGeo = new THREE.BoxGeometry(1.90, 0.24, 1.54);
    const adfBase = new THREE.Mesh(adfBaseGeo, darkChassisMat);
    adfBase.position.set(-0.04, 2.24, 0);
    adfBase.castShadow = true;
    machineGroup.add(adfBase);

    const adfIntakeGeo = new THREE.BoxGeometry(0.92, 0.04, 1.12);
    const adfIntake = new THREE.Mesh(adfIntakeGeo, pearlWhiteMat);
    adfIntake.position.set(-0.58, 2.44, 0);
    adfIntake.rotation.z = Math.PI * 0.08;
    machineGroup.add(adfIntake);

    const adfPaperGeo = new THREE.BoxGeometry(0.76, 0.04, 0.92);
    const adfPaper = new THREE.Mesh(adfPaperGeo, paperMat);
    adfPaper.position.set(-0.56, 2.48, 0);
    adfPaper.rotation.z = Math.PI * 0.08;
    machineGroup.add(adfPaper);

    // =========================================================================
    // 6. ARTICULATED ROBOTIC BOOM & CURVED HOLOGRAPHIC OLED CONSOLE
    // =========================================================================
    const boomJoint1Geo = new THREE.CylinderGeometry(0.045, 0.045, 0.48, 16);
    const boomJoint1 = new THREE.Mesh(boomJoint1Geo, darkChassisMat);
    boomJoint1.position.set(1.02, 2.15, 0.72);
    boomJoint1.rotation.z = -Math.PI * 0.16;
    machineGroup.add(boomJoint1);

    const boomKnuckleGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const boomKnuckle = new THREE.Mesh(boomKnuckleGeo, cobaltAccentMat);
    boomKnuckle.position.set(1.16, 2.36, 0.76);
    machineGroup.add(boomKnuckle);

    const screenHolderGeo = new THREE.BoxGeometry(0.78, 0.54, 0.07);
    const screenHolder = new THREE.Mesh(screenHolderGeo, darkChassisMat);
    screenHolder.position.set(1.22, 2.46, 0.82);
    screenHolder.rotation.y = -Math.PI * 0.24;
    screenHolder.rotation.x = -Math.PI * 0.10;
    machineGroup.add(screenHolder);

    // Glowing Bezel Rim
    const bezelGeo = new THREE.BoxGeometry(0.80, 0.56, 0.02);
    const bezel = new THREE.Mesh(bezelGeo, cobaltAccentMat);
    bezel.position.set(1.22, 2.46, 0.81);
    bezel.rotation.y = -Math.PI * 0.24;
    bezel.rotation.x = -Math.PI * 0.10;
    machineGroup.add(bezel);

    const screenDisplayGeo = new THREE.BoxGeometry(0.72, 0.46, 0.02);
    const screenDisplay = new THREE.Mesh(screenDisplayGeo, screenMat);
    screenDisplay.position.set(1.22, 2.46, 0.86);
    screenDisplay.rotation.y = -Math.PI * 0.24;
    screenDisplay.rotation.x = -Math.PI * 0.10;
    machineGroup.add(screenDisplay);

    const ledIndicatorGeo = new THREE.SphereGeometry(0.035, 16, 16);
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const ledMesh = new THREE.Mesh(ledIndicatorGeo, ledMat);
    ledMesh.position.set(1.42, 2.70, 0.76);
    machineGroup.add(ledMesh);

    const hudLedLight = new THREE.PointLight(0x38bdf8, 1.8, 1.6);
    hudLedLight.position.set(1.22, 2.10, 0.84);
    machineGroup.add(hudLedLight);

    // =========================================================================
    // 7. ACTIVE SMART OUTPUT CHUTE & GLIDING DOCUMENT
    // =========================================================================
    const outputTrayGeo = new THREE.BoxGeometry(0.88, 0.035, 1.24);
    const outputTray = new THREE.Mesh(outputTrayGeo, darkChassisMat);
    outputTray.position.set(-1.26, 1.32, 0);
    outputTray.rotation.z = -Math.PI * 0.07;
    machineGroup.add(outputTray);

    const outputRimGeo = new THREE.BoxGeometry(0.04, 0.14, 1.24);
    const outputRim = new THREE.Mesh(outputRimGeo, cobaltAccentMat);
    outputRim.position.set(-1.68, 1.42, 0);
    machineGroup.add(outputRim);

    const stackedPaperGeo = new THREE.BoxGeometry(0.72, 0.06, 0.98);
    const stackedPaper = new THREE.Mesh(stackedPaperGeo, paperPrintedMat);
    stackedPaper.position.set(-1.24, 1.36, 0);
    stackedPaper.rotation.z = -Math.PI * 0.07;
    machineGroup.add(stackedPaper);

    const glidingPaperGeo = new THREE.BoxGeometry(0.66, 0.008, 0.92);
    const glidingPaper = new THREE.Mesh(glidingPaperGeo, paperMat);
    glidingPaper.position.set(-0.7, 1.52, 0.1);
    machineGroup.add(glidingPaper);

    // =========================================================================
    // 8. LEVITATING DUAL COUNTER-ROTATING ENERGY RINGS & SOFT CONTACT SHADOW
    // =========================================================================
    const groundGeo = new THREE.CircleGeometry(2.3, 48);
    const groundMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.12,
    });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.set(machinePosX, isMobile ? 0.0 : 0.20, 0);
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    // Outer Translucent Cyan Ring
    const outerRingGeo = new THREE.RingGeometry(1.2, 1.8, 64);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
    });
    const outerRingMesh = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRingMesh.rotation.x = -Math.PI / 2;
    outerRingMesh.position.set(machinePosX, isMobile ? 0.01 : 0.21, 0);
    scene.add(outerRingMesh);

    // Inner Electric Blue Ring (Counter-rotating)
    const innerRingGeo = new THREE.RingGeometry(0.7, 1.05, 48);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.16,
      side: THREE.DoubleSide,
    });
    const innerRingMesh = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRingMesh.rotation.x = -Math.PI / 2;
    innerRingMesh.position.set(machinePosX, isMobile ? 0.02 : 0.22, 0);
    scene.add(innerRingMesh);

    // --- Studio Lighting Scheme ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(6, 8, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    const skyRimLight = new THREE.DirectionalLight(0xbae6fd, 2.2);
    skyRimLight.position.set(-5, 4, -4);
    scene.add(skyRimLight);

    const fillLight = new THREE.DirectionalLight(0xf1f5f9, 1.8);
    fillLight.position.set(0, 4, 5);
    scene.add(fillLight);

    // --- Animation Loop (Model is FIXED in place — no scroll transitions) ---
    // --- Static Model Setup (100% Still, No Movement, No Transitions) ---
    const fixedX = isMobile ? 0 : machinePosX;
    const fixedY = isMobile ? 0.0 : 0.20;
    const fixedScale = isMobile ? 0.40 : initialBaseScale;

    machineGroup.scale.set(fixedScale, fixedScale, fixedScale);
    machineGroup.position.set(fixedX, fixedY, 0);
    machineGroup.rotation.set(0, 0, 0);

    groundMesh.position.set(fixedX, fixedY, 0);
    outerRingMesh.position.set(fixedX, fixedY + 0.01, 0);
    innerRingMesh.position.set(fixedX, fixedY + 0.02, 0);

    const scaleFactor = fixedScale / 0.48;
    outerRingMesh.scale.setScalar(scaleFactor);
    innerRingMesh.scale.setScalar(scaleFactor);
    groundMesh.scale.setScalar(scaleFactor);

    // Fixed camera at Overview perspective - zero movement
    camera.position.set(isMobile ? 4.2 : 5.4, 3.4, 6.8);
    camera.lookAt(new THREE.Vector3(isMobile ? 0 : 1.3, 0.9, 0));

    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
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
      renderer.render(scene, camera);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
      {/* Full-bleed Three.js Canvas - Clean & Still */}
      <div
        ref={mountRef}
        className="w-full h-full flex items-center justify-center"
      />
    </div>
  );
}
