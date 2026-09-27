import { useEffect, useRef } from 'react';

export default function SkillsNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const sec = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    const lowPower = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    let w, h, nodes = [], raf;

    function size() {
      w = canvas.width = sec.offsetWidth;
      h = canvas.height = sec.offsetHeight;
    }
    function init() {
      size();
      const count = window.innerWidth < 700 || lowPower ? 10 : 20;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15
      }));
    }
    init();
    window.addEventListener('resize', init);

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const col = getComputedStyle(document.documentElement).getPropertyValue('--particle').trim() || '79,240,217';
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 160) {
            ctx.strokeStyle = `rgba(${col},${0.16 * (1 - d / 160)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = `rgba(${col},0.5)`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, 2, 0, 6.28);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      id="netcanvas"
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.5, pointerEvents: 'none' }}
    ></canvas>
  );
}
