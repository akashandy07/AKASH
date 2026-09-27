import { useRef } from 'react';
import useReveal from '../hooks/useReveal';

const PROJECTS = [
  {
    title: 'Movie & TV Streaming Interface',
    stack: ['React.js', 'REST APIs', 'OAuth', 'TMDB API'],
    points: [
      'Popular movies, trending TV shows, detail pages, trailers, ratings & recommendations',
      'Search with OAuth-style authentication and TMDB API integration',
      'Custom React hooks and debounced search'
    ],
    highlights: [
      '6+ custom hooks managing 10+ asynchronous API sources',
      '60% reduction in API calls through debounced search'
    ],
    demo: 'https://movie-website-eight-azure.vercel.app/', github: 'https://github.com/akashandy07/movie-website'
  },
  {
    title: 'Instagram Clone',
    stack: ['React.js', 'Custom Hooks', 'Lazy Loading'],
    points: [
      'User profiles, feed, stories, reels, messaging, comments, follow/unfollow',
      'Infinite scrolling with lazy-loaded images'
    ],
    highlights: ['50% improvement in initial load time using infinite scroll and lazy loading'],
    demo: 'https://insta-application.vercel.app/', github: 'https://github.com/akashandy07/insta-application'
  },
  {
    title: 'Developer Portfolio',
    stack: ['React.js', 'Vercel', 'Performance'],
    points: [
      'This site — responsive design, component architecture, modern animations',
      'API integration, performance optimization, interactive UI',
      'Deployed on Vercel'
    ],
    highlights: [],
    demo: '#', github: 'https://github.com/akashandy07/'
  }
];

function ProjectCard({ p }) {
  const ref = useReveal();
  const cardRef = useRef(null);

  const onMouseMove = (e) => {
    const card = cardRef.current;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateZ(10px) scale(1.015)`;
  };
  const onMouseLeave = () => {
    cardRef.current.style.transform = '';
  };

  return (
    <div
      className="card tilt proj-card reveal stagger"
      ref={(el) => {
        ref.current = el;
        cardRef.current = el;
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="proj-head">
        <div>
          <h3>{p.title}</h3>
          <div className="stack">
            {p.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
      <ul>
        {p.points.map((pt) => (
          <li key={pt}>{pt}</li>
        ))}
      </ul>
      {p.highlights.map((h) => (
        <div className="proj-highlight" key={h}>{h}</div>
      ))}
      <div className="proj-btns">
        <a href={p.demo}>Live Demo</a>
        <a href={p.github}>GitHub</a>
      </div>
    </div>
  );
}

export default function Projects() {
  const titleRef = useReveal();
  return (
    <section id="projects">
      <span className="eyebrow">Projects</span>
      <h2 className="title reveal" ref={titleRef}>Selected work</h2>
      <div className="proj">
        {PROJECTS.map((p) => (
          <ProjectCard p={p} key={p.title} />
        ))}
      </div>
    </section>
  );
}
