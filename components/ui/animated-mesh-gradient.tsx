"use client";

import { useEffect, useRef } from "react";

export function AnimatedMeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    let animationFrameId: number;
    let time = 0;

    // Define gradient points that will animate
    const points = [
      { x: 0.2, y: 0.3, vx: 0.0003, vy: 0.0004 },
      { x: 0.8, y: 0.2, vx: -0.0002, vy: 0.0005 },
      { x: 0.5, y: 0.8, vx: 0.0004, vy: -0.0003 },
      { x: 0.3, y: 0.7, vx: -0.0003, vy: -0.0002 },
    ];

    const animate = () => {
      time += 1;

      // Update point positions
      points.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > 1) point.vx *= -1;
        if (point.y < 0 || point.y > 1) point.vy *= -1;

        // Clamp to bounds
        point.x = Math.max(0, Math.min(1, point.x));
        point.y = Math.max(0, Math.min(1, point.y));
      });

      // Clear canvas
      ctx.fillStyle = "rgb(18, 18, 18)"; // --background color
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create multiple radial gradients for mesh effect
      const colors = [
        { r: 165, g: 102, b: 255, a: 0.15 }, // Electric blue base
        { r: 100, g: 150, b: 255, a: 0.1 },
        { r: 80, g: 180, b: 255, a: 0.12 },
        { r: 120, g: 100, b: 255, a: 0.08 },
      ];

      points.forEach((point, index) => {
        const color = colors[index % colors.length];
        const gradient = ctx.createRadialGradient(
          point.x * canvas.width,
          point.y * canvas.height,
          0,
          point.x * canvas.width,
          point.y * canvas.height,
          Math.max(canvas.width, canvas.height) * 0.4
        );

        // Create smooth color stops
        gradient.addColorStop(
          0,
          `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
        );
        gradient.addColorStop(
          0.5,
          `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * 0.5})`
        );
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Add blur effect for smoothness
    ctx.filter = "blur(80px)";
    animate();

    // Handle window resize
    const handleResize = () => setCanvasSize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}
