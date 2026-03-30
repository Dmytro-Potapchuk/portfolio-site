import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      className="page-animate"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <h1 className="page-title">{t.about.title}</h1>
      <div className="section-card" style={{ marginTop: 0 }}>
        {t.about.paragraphs.map((p, i) => (
          <p key={i} style={{ marginBottom: 16 }}>
            {p}
          </p>
        ))}
        <p style={{ marginBottom: 0 }}>
          <a href="https://github.com/Dmytro-Potapchuk" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
            {t.about.githubCta} →
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default About;
