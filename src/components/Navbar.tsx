import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#rules', label: 'Rules' },
  { href: '#join', label: 'Join Us' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="navbar" className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div id="navbar-inner" className="navbar__inner">
        <a id="navbar-brand" href="#hero" className="navbar__brand">
          <span className="navbar__brand-ornament">⚜</span>
          <span className="navbar__brand-name">Formicidae</span>
          <span className="navbar__brand-ornament">⚜</span>
        </a>

        <button
          id="navbar-toggle"
          className={`navbar__toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 토글"
        >
          <span /><span /><span />
        </button>

        <ul id="navbar-links" className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                id={`navbar-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                className="navbar__link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
