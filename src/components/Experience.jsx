import useReveal from '../hooks/useReveal';

const ACHIEVEMENTS = [
  'Designed responsive UI layouts using React Router',
  'Integrated 15+ REST API endpoints using GET, POST, PUT and DELETE operations',
  'Implemented Axios error handling and data validation',
  'Built 6+ custom React hooks using useReducer, useMemo and useCallback',
  'Reduced unnecessary re-renders by 40%',
  'Created scalable, component-based architecture with reusable UI components'
];

export default function Experience() {
  const titleRef = useReveal();
  const timelineRef = useReveal();

  return (
    <section id="experience">
      <span className="eyebrow">Experience</span>
      <h2 className="title reveal" ref={titleRef}>Where I've worked</h2>
      <div className="timeline reveal" ref={timelineRef}>
        <div className="tl-item">
          <h3>Frontend Developer Intern</h3>
          <div className="meta">Next Skills, Coimbatore · Nov 2025 – Apr 2026</div>
          <ul>
            {ACHIEVEMENTS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
