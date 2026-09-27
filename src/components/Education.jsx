import useReveal from '../hooks/useReveal';

const EDUCATION = [
  { title: 'M.Sc. Computer Science', meta: 'Sri Krishna Arts and Science College · Jul 2024 – May 2026' },
  { title: 'B.Sc. Computer Science', meta: 'Sri Krishna Arts and Science College · Jun 2021 – May 2024' }
];

const CERTS = [
  { title: 'HTML, CSS, and JavaScript for Web Developers', meta: 'Johns Hopkins University — Coursera' },
  { title: 'IBM Frontend Development', meta: 'IBM · Oct 2024 – Apr 2025' }
];

function Card({ title, meta }) {
  const ref = useReveal();
  return (
    <div className="card reveal stagger" ref={ref}>
      <h3 style={{ fontSize: '1rem' }}>{title}</h3>
      <div className="meta" style={{ color: 'var(--sub)', marginTop: '6px' }}>{meta}</div>
    </div>
  );
}

function CertCard({ title, meta }) {
  const ref = useReveal();
  return (
    <div className="card cert-card reveal stagger" ref={ref}>
      <h3 style={{ fontSize: '1rem' }}>{title}</h3>
      <div style={{ color: 'var(--sub)', fontSize: '0.85rem', marginTop: '8px' }}>{meta}</div>
    </div>
  );
}

export default function Education() {
  const t1 = useReveal();
  const t2 = useReveal();

  return (
    <section id="education">
      <span className="eyebrow">Education</span>
      <h2 className="title reveal" ref={t1}>Academic background</h2>
      <div className="dual">
        {EDUCATION.map((e) => (
          <Card {...e} key={e.title} />
        ))}
      </div>

      <span className="eyebrow" style={{ marginTop: '56px', display: 'block' }}>Certifications</span>
      <h2 className="title reveal" ref={t2}>Credentials</h2>
      <div className="dual">
        {CERTS.map((c) => (
          <CertCard {...c} key={c.title} />
        ))}
      </div>
    </section>
  );
}
