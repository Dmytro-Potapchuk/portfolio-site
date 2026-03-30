import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      className="page-animate"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <section className="page-hero">
        <p className="page-badge">{t.home.badge}</p>
        <h1>{t.home.title}</h1>
        <p className="page-lead">{t.home.subtitle}</p>
        <div className="page-actions">
          <Link className="btn-primary" to="/kontakt">
            {t.home.ctaContact}
          </Link>
          <Link className="btn-ghost" to="/portfolio">
            {t.home.ctaPortfolio}
          </Link>
        </div>
        <div className="stats-grid">
          {t.home.stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <p>{stat.value}</p>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h2>{t.home.aboutTitle}</h2>
        <p>{t.home.aboutLead}</p>
        <ul>
          {t.home.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section-card">
        <h2>{t.home.experienceTitle}</h2>
        <p style={{ color: 'var(--muted)', marginTop: 0 }}>{t.home.experienceCta}</p>
        <div className="timeline">
          {t.home.experienceItems.map((item) => (
            <article key={item.company + item.period} className="timeline-item">
              <h3>{item.role}</h3>
              <p className="timeline-meta">
                {item.company} · {item.period}
              </p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
