import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="footer__top-border" />
      <div id="footer-inner" className="footer__inner">
        <div id="footer-brand" className="footer__brand">
          <span className="footer__brand-ornament">⚜</span>
          <span className="footer__brand-name">Formicidae</span>
          <span className="footer__brand-ornament">⚜</span>
        </div>
        <p className="footer__tagline">
          <em>Where the Colony Thrives</em>
        </p>

        <div className="footer__divider">✦ ⸻ ✦</div>

        <nav id="footer-nav" className="footer__nav">
          <a id="footer-link-about" href="#about">About</a>
          <span className="footer__nav-sep">·</span>
          <a id="footer-link-features" href="#features">Features</a>
          <span className="footer__nav-sep">·</span>
          <a id="footer-link-rules" href="#rules">Rules</a>
          <span className="footer__nav-sep">·</span>
          <a id="footer-link-join" href="#join">Join Us</a>
        </nav>

        <p id="footer-copy" className="footer__copy">
          © {currentYear} Formicidae Server. All rights reserved.
          <br />
          <span className="footer__mc-note">
            Minecraft is a trademark of Mojang Studios.
            This website is not affiliated with Mojang.
          </span>
        </p>
      </div>
    </footer>
  );
}
