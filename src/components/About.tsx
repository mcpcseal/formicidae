import './About.css';

export default function About() {
  return (
    <section id="about" className="about parchment-bg section">
      <div className="about__corner about__corner--tl">✦</div>
      <div className="about__corner about__corner--tr">✦</div>
      <div className="about__corner about__corner--bl">✦</div>
      <div className="about__corner about__corner--br">✦</div>

      <div id="about-inner" className="about__inner">
        <div id="about-header" className="about__header">
          <p className="about__eyebrow">Our Story</p>
          <h2 id="about-title" className="about__title">The Legend of Formicidae</h2>
          <div className="section-divider">
            <span>⸻ ✦ ⸻</span>
          </div>
        </div>

        <div id="about-body" className="about__body">
          <div id="about-text" className="about__text-col">
            <p className="about__drop-cap">
              오래 전, 대지의 균열 사이로 처음 그들이 모습을 드러냈습니다. 수많은 개미들이
              땅 위로 올라와 세운 문명 — 이것이 <em>Formicidae</em>의 시작입니다.
            </p>
            <p>
              이 서버는 단순한 생존과 건축을 넘어, 플레이어 각자가 하나의 역사를 써내려가는
              공간입니다. 고대 유물이 잠든 던전, 광대한 야생 대지, 그리고 플레이어들이
              함께 일궈낸 도시들이 이 세계를 채우고 있습니다.
            </p>
            <p>
              당신은 탐험가가 될 수도, 상인이 될 수도, 또는 위대한 군주가 될 수도 있습니다.
              Formicidae에서 당신의 이야기를 시작하십시오.
            </p>
          </div>

          <div id="about-stats" className="about__stats-col">
            <div id="stat-possibilities" className="about__stat-card">
              <span className="about__stat-number">∞</span>
              <span className="about__stat-label">Possibilities</span>
            </div>
            <div id="stat-uptime" className="about__stat-card">
              <span className="about__stat-number">24/7</span>
              <span className="about__stat-label">Uptime</span>
            </div>
            <div id="stat-server-type" className="about__stat-card">
              <span className="about__stat-number">SMP</span>
              <span className="about__stat-label">Server Type</span>
            </div>
            <div id="stat-version" className="about__stat-card">
              <span className="about__stat-number">26.1.2</span>
              <span className="about__stat-label">Java Edition</span>
            </div>
          </div>
        </div>

        <div id="about-quote-wrap" className="about__quote-wrap">
          <blockquote id="about-quote" className="about__quote">
            <span className="about__quote-mark">"</span>
            혼자서는 한 마리의 개미일지라도,
            함께라면 우리는 왕국을 세운다.
            <span className="about__quote-mark">"</span>
          </blockquote>
          <cite className="about__quote-source">— Formicidae 서버 창설 헌장</cite>
        </div>
      </div>
    </section>
  );
}
