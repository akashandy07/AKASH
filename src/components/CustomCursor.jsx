import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const isCoarse = typeof window !== 'undefined' && matchMedia('(hover:none)').matches;

  useEffect(() => {
    if (isCoarse) return;
    const cur = cursorRef.current;

    const move = (e) => {
      cur.style.left = e.clientX + 'px';
      cur.style.top = e.clientY + 'px';
    };
    const onOver = (e) => {
      if (e.target.closest('a,button,.chip,.card')) cur.classList.add('grow');
    };
    const onOut = (e) => {
      if (e.target.closest('a,button,.chip,.card')) cur.classList.remove('grow');
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [isCoarse]);

  if (isCoarse) return null;
  return <div id="cursor" ref={cursorRef}></div>;
}
