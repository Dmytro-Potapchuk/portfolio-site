import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      className="page-animate"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <h1 className="page-title">{t.services.title}</h1>
      <div className="services-grid">
        {t.services.items.map((service) => (
          <article key={service.title} className="service-card">
            <h2>
              <span aria-hidden="true">{service.icon}</span> {service.title}
            </h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
