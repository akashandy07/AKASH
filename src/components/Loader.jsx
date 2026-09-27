import { useEffect, useState } from 'react';

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHide(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="loader" className={hide ? 'hide' : ''}>
      <div className="ld-shape"></div>
      <h1>AKASH A</h1>
      <p>Frontend Developer</p>
    </div>
  );
}
