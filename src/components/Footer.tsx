import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        © {year} {t.brand} — {t.footer.rights}
      </p>
      <p className="site-footer-links">
        <a href="https://github.com/Dmytro-Potapchuk" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span aria-hidden="true"> · </span>
        <a href="https://www.linkedin.com/in/dmytro-potapchuk-43b410273/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
