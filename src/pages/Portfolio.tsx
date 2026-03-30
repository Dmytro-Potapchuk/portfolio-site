import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { portfolioProjects } from '../i18n/siteContent';

const Portfolio = () => {
  const { language, t } = useLanguage();

  return (
    <motion.div
      className="page-animate"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <h1 className="page-title">{t.portfolio.title}</h1>
      <p className="page-subtitle">{t.portfolio.subtitle}</p>
      <div className="portfolio-grid">
        {portfolioProjects.map((project, index) => {
          const copy = project[language];
          const { links } = project;
          return (
            <article key={`${copy.title}-${index}`} className="portfolio-card">
              <h3>{copy.title}</h3>
              <p>{copy.description}</p>
              <div className="portfolio-card-actions">
                {links.githubBackend && (
                  <a href={links.githubBackend} target="_blank" rel="noreferrer">
                    {t.portfolio.viewRepoBackend}
                  </a>
                )}
                {links.githubMobile && (
                  <a href={links.githubMobile} target="_blank" rel="noreferrer">
                    {t.portfolio.viewRepoMobile}
                  </a>
                )}
                {links.github && (
                  <a href={links.github} target="_blank" rel="noreferrer">
                    {t.portfolio.viewRepo}
                  </a>
                )}
                {links.live && (
                  <a href={links.live} target="_blank" rel="noreferrer">
                    {t.portfolio.viewLive}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Portfolio;
