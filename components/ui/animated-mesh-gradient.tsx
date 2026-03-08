"use client";

import { useEffect, useRef } from "react";

export function AnimatedMeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to parent section
    const parent = canvas.parentElement;
    const setCanvasSize = () => {
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    setCanvasSize();

    let animationFrameId: number;

    // Define gradient points that will animate
    const points = [
      { x: 0.2, y: 0.3, vx: 0.0002, vy: 0.00015 },
      { x: 0.8, y: 0.2, vx: -0.00015, vy: 0.0002 },
      { x: 0.5, y: 0.8, vx: 0.00018, vy: -0.00012 },
      { x: 0.3, y: 0.7, vx: -0.00012, vy: -0.00018 },
    ];

    const animate = () => {
      // Update point positions with smooth movement
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

      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Apply blur filter for smooth gradient effect
      ctx.filter = "blur(100px)";

      // Create multiple radial gradients for mesh effect
      // Using electric blue and complementary colors
      const colors = [
        { r: 102, g: 178, b: 255, a: 0.3 }, // Electric blue
        { r: 70, g: 140, b: 255, a: 0.25 },  // Deeper blue
        { r: 120, g: 180, b: 255, a: 0.25 }, // Lighter blue
        { r: 80, g: 160, b: 255, a: 0.2 },   // Mid blue
      ];

      points.forEach((point, index) => {
        const color = colors[index % colors.length];
        const radius = Math.max(canvas.width, canvas.height) * 0.5;
        
        const gradient = ctx.createRadialGradient(
          point.x * canvas.width,
          point.y * canvas.height,
          0,
          point.x * canvas.width,
          point.y * canvas.height,
          radius
        );

        // Create smooth color stops for better blending
        gradient.addColorStop(
          0,
          `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
        );
        gradient.addColorStop(
          0.4,
          `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * 0.6})`
        );
        gradient.addColorStop(
          0.8,
          `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * 0.2})`
        );
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle window and parent resize
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
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: "screen", opacity: 0.6 }}
    />
  );
}
