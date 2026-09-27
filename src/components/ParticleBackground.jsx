import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext('2d');
    const lowPower = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    let w, h, pts = [];
    let raf;

    function size() {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
    }
    function init() {
      size();
      const n = window.innerWidth < 700 || lowPower ? 35 : 90;
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3,
        s: Math.random() * 0.3 + 0.05
      }));
    }
    init();
    window.addEventListener('resize', init);

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const col = getComputedStyle(document.documentElement).getPropertyValue('--particle').trim() || '79,240,217';
      const light = document.documentElement.getAttribute('data-theme') === 'light';
      ctx.fillStyle = `rgba(${col},1)`;
      for (const p of pts) {
        p.y -= p.s;
        if (p.y < 0) p.y = h;
        ctx.globalAlpha = light ? 0.22 : 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 6.28);
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

  return <canvas id="bgcanvas" ref={canvasRef}></canvas>;
}
