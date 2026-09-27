import useReveal from '../hooks/useReveal';
import SkillsNetwork from './SkillsNetwork';

const GROUPS = [
  { name: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'Bootstrap'] },
  { name: 'React & Performance', items: ['React Query', 'Custom Hooks', 'React Router', 'Zustand', 'Context API', 'useReducer', 'useMemo', 'useCallback', 'Code Splitting', 'Lazy Loading', 'react-intersection-observer'] },
  { name: 'APIs & Authentication', items: ['REST APIs', 'Axios', 'OAuth Authentication', 'JWT', 'LocalStorage', 'API Integration', 'Error Handling', 'Interceptors'] },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'MySQL'] },
  { name: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Vite', 'npm', 'Chrome DevTools', 'Vercel', 'CI/CD'] }
];

export default function Skills() {
  const titleRef = useReveal();
  const bodyRef = useReveal();

  return (
    <section id="skills" style={{ position: 'relative' }}>
      <SkillsNetwork />
      <span className="eyebrow" style={{ position: 'relative' }}>Technical Skills</span>
      <h2 className="title reveal" style={{ position: 'relative' }} ref={titleRef}>What I build with</h2>
      <div className="reveal" style={{ position: 'relative' }} ref={bodyRef}>
        {GROUPS.map((g) => (
          <div className="skill-group" key={g.name}>
            <h3>{g.name}</h3>
            <div className="chipgrid">
              {g.items.map((item) => (
                <span className="chip" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
