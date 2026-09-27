import useReveal from '../hooks/useReveal';

const PILLS = [
  'React.js', 'Component Architecture', 'State Management', 'REST API Integration',
  'Authentication', 'Performance Optimization', 'Custom React Hooks'
];

const STATS = [
  { count: 15, suffix: '+', label: 'REST API endpoints integrated' },
  { count: 6, suffix: '+', label: 'Custom React Hooks built' },
  { count: 40, suffix: '%', label: 'Fewer unnecessary re-renders' }
];

function StatCard({ count, suffix, label }) {
  const ref = useReveal();
  return (
    <div className="card stat reveal stagger" ref={ref}>
      <div className="num" data-count={count} data-suffix={suffix}>0</div>
      <div className="lbl">{label}</div>
    </div>
  );
}

export default function About() {
  const titleRef = useReveal();
  const textRef = useReveal();

  return (
    <section id="about">
      <span className="eyebrow">About</span>
      <h2 className="title reveal" ref={titleRef}>Frontend developer, systems-minded</h2>
      <div className="about-grid">
        <div className="reveal" ref={textRef}>
          <p>
            Frontend Developer focused on building responsive and scalable web applications with React.js and
            modern frontend technologies. Comfortable across component architecture, state management, REST API
            integration, authentication flows and performance optimization — with growing backend exposure in
            Node.js, Express.js and MySQL.
          </p>
          <div className="pill-row">
            {PILLS.map((p) => (
              <span className="pill" key={p}>{p}</span>
            ))}
          </div>
        </div>
        <div className="stats">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
