import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      className="page-animate"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <h1 className="page-title">{t.contact.title}</h1>
      <div className="contact-layout">
        <aside className="contact-aside" aria-label="Contact details">
          <p>{t.contact.lead}</p>
          <p>
            <strong>{t.contact.emailLabel}:</strong>{' '}
            <a href="mailto:dmytro.potapchuk.it@gmail.com">dmytro.potapchuk.it@gmail.com</a>
          </p>
          <p>
            <strong>{t.contact.phoneLabel}:</strong> +48 507 340 438
          </p>
          <p>
            <strong>{t.contact.locationLabel}:</strong> Warsaw, Poland
          </p>
          <p>
            <strong>{t.contact.linksLabel}:</strong>{' '}
            <a href="https://github.com/Dmytro-Potapchuk" target="_blank" rel="noreferrer">
              GitHub
            </a>
            {' · '}
            <a href="https://www.linkedin.com/in/dmytro-potapchuk-43b410273/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </aside>
        <div className="contact-form-wrap">
          <ContactForm />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
