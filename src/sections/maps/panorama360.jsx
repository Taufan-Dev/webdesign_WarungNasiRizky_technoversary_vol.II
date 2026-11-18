import { useEffect, useRef, useState, useCallback } from "react";

const FullscreenIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
  </svg>
);

const RotateIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
  </svg>
);

const CompassIcon = () => (
  <svg className="w-5 h-5 text-highlight" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const Panorama360 = ({ panoramaUrl, title = "Panorama 360°" }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  const [loadedUrl, setLoadedUrl] = useState("");
  const isLoading = loadedUrl !== panoramaUrl;
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [yaw, setYaw] = useState(0); // 0 to 360
  const [pitch, setPitch] = useState(0); // -40 to 40
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, initialYaw: 0, initialPitch: 0 });

  // Load image
  useEffect(() => {
    let active = true;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = panoramaUrl;
    img.onload = () => {
      if (!active) return;
      imageRef.current = img;
      setLoadedUrl(panoramaUrl);
    };
    img.onerror = () => {
      if (!active) return;
      // Fallback panorama jika URL gagal
      img.src =
        "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2400";
    };
    return () => {
      active = false;
    };
  }, [panoramaUrl]);

  // Render Loop
  const drawPanorama = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imageRef.current) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const img = imageRef.current;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;

    ctx.clearRect(0, 0, cw, ch);

    // Calculate source slice based on yaw and pitch
    // FOV width in image pixels
    const fovAngle = 90 / zoomLevel; // degrees
    const sliceWidth = (fovAngle / 360) * iw;
    const sliceHeight = sliceWidth * (ch / cw);

    // Normalized X position (0 to iw)
    const normYaw = ((yaw % 360) + 360) % 360;
    const sourceX = (normYaw / 360) * iw;

    // Pitch offset
    const pitchOffset = (pitch / 90) * (ih * 0.25);
    const sourceY = Math.max(
      0,
      Math.min(ih - sliceHeight, (ih - sliceHeight) / 2 - pitchOffset)
    );

    // Draw wrapping panorama
    if (sourceX + sliceWidth <= iw) {
      ctx.drawImage(
        img,
        sourceX,
        sourceY,
        sliceWidth,
        sliceHeight,
        0,
        0,
        cw,
        ch
      );
    } else {
      // Wraps around the 360 seam
      const firstPartWidth = iw - sourceX;
      const secondPartWidth = sliceWidth - firstPartWidth;
      const splitCanvasX = (firstPartWidth / sliceWidth) * cw;

      ctx.drawImage(
        img,
        sourceX,
        sourceY,
        firstPartWidth,
        sliceHeight,
        0,
        0,
        splitCanvasX,
        ch
      );
      ctx.drawImage(
        img,
        0,
        sourceY,
        secondPartWidth,
        sliceHeight,
        splitCanvasX,
        0,
        cw - splitCanvasX,
        ch
      );
    }
  }, [yaw, pitch, zoomLevel]);

  // Auto-rotate tick
  useEffect(() => {
    if (!isAutoRotate || isDragging || isLoading) return;
    const interval = setInterval(() => {
      setYaw((prev) => (prev + 0.15) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isAutoRotate, isDragging, isLoading]);

  // Trigger draw when yaw, pitch, zoom changes
  useEffect(() => {
    drawPanorama();
  }, [drawPanorama]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      drawPanorama();
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawPanorama]);

  // Mouse / Touch handlers for 360 drag interaction
  const handlePointerDown = (e) => {
    setIsDragging(true);
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    dragStartRef.current = {
      x: clientX,
      y: clientY,
      initialYaw: yaw,
      initialPitch: pitch,
    };
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    const deltaX = clientX - dragStartRef.current.x;
    const deltaY = clientY - dragStartRef.current.y;

    // Sensitivitas drag
    const sensitivity = 0.3 / zoomLevel;
    const newYaw = (dragStartRef.current.initialYaw - deltaX * sensitivity + 360) % 360;
    const newPitch = Math.max(
      -35,
      Math.min(35, dragStartRef.current.initialPitch + deltaY * sensitivity)
    );

    setYaw(newYaw);
    setPitch(newPitch);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Compass heading label
  const getCompassDirection = () => {
    const deg = (yaw + 360) % 360;
    if (deg >= 337.5 || deg < 22.5) return "U (Utara)";
    if (deg >= 22.5 && deg < 67.5) return "TL (Timur Laut)";
    if (deg >= 67.5 && deg < 112.5) return "T (Timur)";
    if (deg >= 112.5 && deg < 157.5) return "TG (Tenggara)";
    if (deg >= 157.5 && deg < 202.5) return "S (Selatan)";
    if (deg >= 202.5 && deg < 247.5) return "BD (Barat Daya)";
    if (deg >= 247.5 && deg < 292.5) return "B (Barat)";
    return "BL (Barat Laut)";
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-2 border-soft/60 dark:border-secondary/40 select-none bg-dark group cursor-grab active:cursor-grabbing"
    >
      {/* 360 CANVAS */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* LOADING SPINNER */}
      {isLoading && (
        <div className="absolute inset-0 bg-dark/80 flex flex-col items-center justify-center text-white z-20">
          <div className="w-12 h-12 border-4 border-highlight border-t-transparent rounded-full animate-spin mb-3"></div>
          <p className="text-xs font-semibold uppercase tracking-wider text-soft">
            Memuat Citra Panorama 360°...
          </p>
        </div>
      )}

      {/* TOP OVERLAY: COMPASS & BADGE */}
      <div className="absolute top-5 left-5 right-5 flex justify-between items-center pointer-events-none z-10">
        <div className="bg-dark/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-white text-xs font-semibold shadow-lg">
          <CompassIcon />
          <span>Arah: {getCompassDirection()}</span>
        </div>

        <div className="bg-primary/90 text-highlight backdrop-blur-md px-3.5 py-1.5 rounded-full border border-highlight/30 text-xs font-bold uppercase tracking-wider shadow-lg">
          360° • {title}
        </div>
      </div>

      {/* DRAG INSTRUCTION WATERMARK */}
      <div className="absolute bottom-5 left-5 pointer-events-none z-10 hidden sm:block">
        <div className="bg-dark/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-white/90 text-xs flex items-center gap-2">
          <span>🖱️</span>
          <span>Klik & geser mouse untuk melihat panorama 360°</span>
        </div>
      </div>

      {/* FLOATING CONTROL BUTTONS */}
      <div className="absolute bottom-5 right-5 flex items-center gap-2 z-10 pointer-events-auto">
        {/* Zoom Out */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setZoomLevel((prev) => Math.max(0.8, prev - 0.2));
          }}
          className="w-9 h-9 rounded-full bg-dark/80 hover:bg-primary text-white border border-white/20 flex items-center justify-center font-bold text-base transition-colors shadow-lg cursor-pointer"
          title="Zoom Out"
        >
          -
        </button>

        {/* Zoom In */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setZoomLevel((prev) => Math.min(2.0, prev + 0.2));
          }}
          className="w-9 h-9 rounded-full bg-dark/80 hover:bg-primary text-white border border-white/20 flex items-center justify-center font-bold text-base transition-colors shadow-lg cursor-pointer"
          title="Zoom In"
        >
          +
        </button>

        {/* Toggle Auto-Rotate */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsAutoRotate(!isAutoRotate);
          }}
          className={`w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-sm transition-colors shadow-lg cursor-pointer ${
            isAutoRotate
              ? "bg-secondary text-highlight"
              : "bg-dark/80 text-white hover:bg-primary"
          }`}
          title="Putar Otomatis"
        >
          <RotateIcon />
        </button>

        {/* Fullscreen */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFullscreen();
          }}
          className="w-9 h-9 rounded-full bg-dark/80 hover:bg-primary text-white border border-white/20 flex items-center justify-center text-sm transition-colors shadow-lg cursor-pointer"
          title="Layar Penuh"
        >
          <FullscreenIcon />
        </button>
      </div>
    </div>
  );
};

export default Panorama360;
