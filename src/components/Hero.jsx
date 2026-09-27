import { useEffect, useRef } from 'react';
import avatar from '../assets/avatar.jpg';

export default function Hero() {
  const chipsRef = useRef([]);

  useEffect(() => {
    const isCoarse = matchMedia('(hover:none)').matches;
    if (isCoarse) return;
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      chipsRef.current.forEach((el, i) => {
        if (!el) return;
        const f = (i % 2 ? 1 : -1) * 14;
        el.style.marginLeft = x * f + 'px';
        el.style.marginTop = y * f + 'px';
      });
    };
    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  const chips = [
    { cls: 'fc1', label: '⚛ React.js' },
    { cls: 'fc2', label: '{ } JavaScript' },
    { cls: 'fc3', label: '⚡ Vite' },
    { cls: 'fc4', label: '🔗 REST APIs' }
  ];

  return (
    <section id="home" className="hero">
      {chips.map((c, i) => (
        <div
          key={c.cls}
          ref={(el) => (chipsRef.current[i] = el)}
          className={`float-chip ${c.cls}`}
        >
          {c.label}
        </div>
      ))}

      <div className="avatar-wrap">
        <img id="avatar-img" alt="Akash A" src={avatar} />
      </div>

      <span className="badge">
        <span className="dot"></span> Available for Frontend / React roles
      </span>
      <h1>
        AKASH <span>A</span>
      </h1>
      <div className="role">Frontend Developer , React Developer</div>
      <p className="tag">Building responsive, scalable and high-performance web experiences with React.js.</p>
      <div className="btnrow">
        <a href="#projects" className="btn primary">View Projects</a>
        <a href="https://drive.google.com/file/d/1EvQ1UhAcnjTSi0LcSCdvrD3B1nRzGchW/view?usp=drivesdk" className="btn">Download Resume</a>
        <a href="#contact" className="btn">Contact Me</a>
      </div>
      <div className="social">

        <a href="https://www.linkedin.com/in/akash-a-a62756244/" aria-label="LinkedIn">in</a>
        <a href="https://github.com/akashandy07/" aria-label="GitHub">GH</a>

      </div>
    </section>
  );
}
