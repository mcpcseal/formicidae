import { useState } from 'react';
import './Hero.css';

const SERVER_IP = 'play.formicidae.net';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__overlay" />

      <div id="hero-content" className="hero__content">
        <p className="hero__pre-title">— Est. MMXXIV —</p>

        <h1 id="hero-title" className="hero__title">
          <span className="hero__title-deco">✦</span>
          Formicidae
          <span className="hero__title-deco">✦</span>
        </h1>

        <p id="hero-subtitle" className="hero__subtitle">
          <em>Where the Colony Thrives</em>
        </p>

        <div className="hero__divider">
          <span>⸻</span>
          <span className="hero__divider-icon">⚜</span>
          <span>⸻</span>
        </div>

        <p id="hero-description" className="hero__description">
          오래된 숲 깊은 곳, 고대 개미 문명의 유산 위에 세워진 세계.
          <br />
          당신의 이야기가 이곳에서 새로운 역사가 됩니다.
        </p>

        <div id="hero-actions" className="hero__actions">
          <div id="hero-ip-box" className="hero__ip-box">
            <span className="hero__ip-label">Server IP</span>
            <span id="hero-ip-address" className="hero__ip-address">{SERVER_IP}</span>
            <button id="hero-copy-btn" className="hero__ip-copy" onClick={handleCopy}>
              {copied ? '✓ Copied!' : 'Copy'}
            </button>
          </div>

          <a id="hero-cta" href="#about" className="btn-antique hero__cta">
            Discover More
          </a>
        </div>

        <div id="hero-version-badge" className="hero__version-badge">
          <span>Minecraft Java Edition</span>
          <span className="hero__version-sep">|</span>
          <span>26.1.2z</span>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span className="hero__scroll-label">Scroll</span>
        <span className="hero__scroll-arrow">↓</span>
      </div>
    </section>
  );
}
