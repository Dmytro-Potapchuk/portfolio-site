import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = saved ? saved === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggleTheme = () => {
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
  };

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/o-mnie', label: t.nav.about },
    { to: '/technologie', label: t.nav.technologies },
    { to: '/portfolio', label: t.nav.portfolio },
    { to: '/uslugi', label: t.nav.services },
    { to: '/kontakt', label: t.nav.contact },
  ];

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link to="/" className="site-brand">
          {t.brand}
        </Link>

        <nav className="site-nav-links" aria-label="Primary">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className={location.pathname === to ? 'active' : undefined}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="site-nav-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={language === 'pl' ? 'active' : ''}
              onClick={() => setLanguage('pl')}
              aria-pressed={language === 'pl'}
            >
              🇵🇱
            </button>
            <button
              type="button"
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
            >
              🇬🇧
            </button>
          </div>
          <button type="button" className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            🌓
          </button>
          <button
            type="button"
            className="burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="site-nav-mobile">
          {links.map(({ to, label }) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
