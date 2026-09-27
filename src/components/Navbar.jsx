import { useEffect, useRef, useState } from 'react';

const LINKS = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

export default function Navbar({ theme, toggleTheme }) {
  const [shrink, setShrink] = useState(false);
  const [active, setActive] = useState('home');
  const toggleRef = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setShrink(window.scrollY > 40);
      const pos = window.scrollY + 120;
      for (const id of LINKS) {
        const s = document.getElementById(id);
        if (s && pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) setActive(id);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleToggle = () => {
    const btn = toggleRef.current;
    const wave = waveRef.current;
    const goingLight = theme !== 'light';
    const r = btn.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const maxR = Math.hypot(Math.max(cx, window.innerWidth - cx), Math.max(cy, window.innerHeight - cy));

    wave.style.background = goingLight ? '#f4f5f9' : '#05060a';
    wave.style.left = cx + 'px';
    wave.style.top = cy + 'px';
    wave.style.transition = 'none';
    wave.style.width = '1px';
    wave.style.height = '1px';
    wave.style.opacity = '1';

    requestAnimationFrame(() => {
      wave.style.transition = 'width .7s cubic-bezier(.4,0,.2,1), height .7s cubic-bezier(.4,0,.2,1), opacity .7s ease .3s';
      wave.style.width = maxR * 2.2 + 'px';
      wave.style.height = maxR * 2.2 + 'px';
    });

    setTimeout(() => toggleTheme(), 260);
    setTimeout(() => { wave.style.opacity = '0'; }, 700);
  };

  return (
    <>
      <nav className={shrink ? 'shrink' : ''}>
        <span className="brand">AKASh</span>
        <div className="links">
          {LINKS.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
        <button id="theme-toggle" ref={toggleRef} aria-label="Toggle theme" onClick={handleToggle}>
          <span className="moon">🌙</span>
          <span className="sun">☀️</span>
        </button>
      </nav>
      <div id="theme-wave" ref={waveRef}></div>
    </>
  );
}
