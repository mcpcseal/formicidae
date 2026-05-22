import { useState } from 'react';
import './JoinSection.css';

const SERVER_IP = 'play.formicidae.net';

export default function JoinSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="join" className="join section">
      <div className="join__bg" />
      <div className="join__inner">
        <div className="join__header">
          <p className="join__eyebrow">Join the Colony</p>
          <h2 className="join__title">입장 안내</h2>
          <div className="join__ornament">✦ ⸻ ✦</div>
        </div>

        <div id="join-steps" className="join__cards">
          <div id="join-step-1" className="join__card">
            <div className="join__card-icon">📋</div>
            <h3 className="join__card-title">Step 1</h3>
            <p className="join__card-desc">
              Minecraft Java Edition을 실행하고
              <br />
              <strong>멀티플레이어</strong>를 선택하세요.
            </p>
          </div>

          <div className="join__card-arrow">→</div>

          <div id="join-step-2" className="join__card">
            <div className="join__card-icon">🖥</div>
            <h3 className="join__card-title">Step 2</h3>
            <p className="join__card-desc">
              <strong>서버 추가</strong>를 클릭하고
              <br />
              아래의 IP를 입력하세요.
            </p>
          </div>

          <div className="join__card-arrow">→</div>

          <div id="join-step-3" className="join__card">
            <div className="join__card-icon">⚔</div>
            <h3 className="join__card-title">Step 3</h3>
            <p className="join__card-desc">
              서버에 접속하여
              <br />
              새로운 모험을 시작하세요!
            </p>
          </div>
        </div>

        <div id="join-ip-showcase" className="join__ip-showcase">
          <div className="join__ip-label-row">
            <span className="join__ip-label">Server Address</span>
          </div>
          <div id="join-ip-main" className="join__ip-main">
            <code id="join-ip-address" className="join__ip-text">{SERVER_IP}</code>
            <button id="join-copy-btn" className="join__copy-btn" onClick={handleCopy}>
              {copied ? (
                <span className="join__copy-success">✓ Copied!</span>
              ) : (
                <span>Copy IP</span>
              )}
            </button>
          </div>
          <div className="join__ip-meta">
            <span>Java Edition</span>
            <span className="join__meta-sep">·</span>
            <span>Port: 25565</span>
            <span className="join__meta-sep">·</span>
            <span>Version: 26.1.2</span>
          </div>
        </div>

        <div id="join-discord" className="join__discord">
          <p className="join__discord-text">
            커뮤니티에 참여하여 서버 소식을 받고 다른 플레이어들과 교류하세요.
          </p>
          <a
            id="join-discord-btn"
            href="https://discord.gg/formicidae"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-antique join__discord-btn"
          >
            Discord 참여하기
          </a>
        </div>
      </div>
    </section>
  );
}
