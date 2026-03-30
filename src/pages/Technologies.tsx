import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const techData = {
  frontend: [
    { name: 'React', link: 'https://react.dev/' },
    { name: 'React Native', link: 'https://reactnative.dev/docs/getting-started' },
    { name: 'Expo', link: 'https://docs.expo.dev/' },
    { name: 'TypeScript', link: 'https://www.typescriptlang.org/docs/' },
    { name: 'Redux Toolkit', link: 'https://redux-toolkit.js.org/' },
    { name: 'HTML5', link: 'https://developer.mozilla.org/docs/Web/HTML' },
    { name: 'CSS3', link: 'https://developer.mozilla.org/docs/Web/CSS' },
    { name: 'Bootstrap', link: 'https://getbootstrap.com/docs/' },
  ],
  backend: [
    { name: 'Node.js', link: 'https://nodejs.org/docs/' },
    { name: 'NestJS', link: 'https://docs.nestjs.com/' },
    { name: 'OpenAPI / Swagger', link: 'https://swagger.io/specification/' },
    { name: '.NET Core', link: 'https://learn.microsoft.com/dotnet/core/' },
    { name: 'Express', link: 'https://expressjs.com/' },
    { name: 'MongoDB', link: 'https://www.mongodb.com/docs/' },
    { name: 'MySQL', link: 'https://dev.mysql.com/doc/' },
    { name: 'PostgreSQL', link: 'https://www.postgresql.org/docs/' },
  ],
  tools: [
    { name: 'Docker', link: 'https://docs.docker.com/' },
    { name: 'Prometheus', link: 'https://prometheus.io/docs/' },
    { name: 'AWS', link: 'https://docs.aws.amazon.com/' },
    { name: 'Azure', link: 'https://learn.microsoft.com/azure/' },
    { name: 'Git', link: 'https://git-scm.com/doc' },
    { name: 'GitHub Actions', link: 'https://docs.github.com/actions' },
  ],
} as const;

const icons: Record<keyof typeof techData, string> = {
  frontend: '🖥️',
  backend: '🧠',
  tools: '🧰',
};

const Technologies = () => {
  const { t } = useLanguage();

  const titles: Record<keyof typeof techData, string> = {
    frontend: t.technologies.frontend,
    backend: t.technologies.backend,
    tools: t.technologies.tools,
  };

  return (
    <motion.div
      className="page-animate"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <h1 className="page-title">{t.technologies.title}</h1>
      <div className="tech-grid">
        {(Object.keys(techData) as Array<keyof typeof techData>).map((key) => (
          <div key={key} className="tech-card">
            <h2>
              <span aria-hidden="true">{icons[key]}</span> {titles[key]}
            </h2>
            <ul>
              {techData[key].map(({ name, link }) => (
                <li key={name}>
                  <a href={link} target="_blank" rel="noreferrer">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
