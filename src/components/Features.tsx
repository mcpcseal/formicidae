import './Features.css';

const features = [
  {
    id: 'feature-custom-dungeons',
    icon: '⚔️',
    title: 'Custom Dungeons',
    subtitle: '고대 유적 탐험',
    desc: '핸드크래프트로 설계된 비밀 던전과 고대 유적지. 희귀 아이템과 숨겨진 이야기가 기다립니다.',
  },
  {
    id: 'feature-player-cities',
    icon: '🏛',
    title: 'Player Cities',
    subtitle: '플레이어 도시 건설',
    desc: '플레이어들이 직접 세운 도시와 국가. 동맹, 외교, 전쟁으로 정치적 드라마를 만들어가세요.',
  },
  {
    id: 'feature-custom-economy',
    icon: '📜',
    title: 'Custom Economy',
    subtitle: '커스텀 경제 시스템',
    desc: '고유한 화폐 시스템과 시장. 상인, 장인, 탐험가로 자신만의 경제적 제국을 쌓으세요.',
  },
  {
    id: 'feature-vast-world',
    icon: '🗺',
    title: 'Vast World',
    subtitle: '광대한 탐험 세계',
    desc: '끝없이 펼쳐지는 야생 대지. 미지의 영역을 개척하고 지도를 완성하세요.',
  },
  {
    id: 'feature-magic-system',
    icon: '⚗️',
    title: 'Magic System',
    subtitle: '마법 & 연금술',
    desc: '독자적인 마법 체계와 연금술 시스템. 강력한 포션과 주문으로 전장을 지배하세요.',
  },
  {
    id: 'feature-seasonal-events',
    icon: '🏆',
    title: 'Seasonal Events',
    subtitle: '시즌별 이벤트',
    desc: '정기적으로 열리는 대규모 이벤트와 토너먼트. 명예와 희귀 보상이 기다립니다.',
  },
];

export default function Features() {
  return (
    <section id="features" className="features section">
      <div className="features__bg-texture" />

      <div className="features__inner">
        <div id="features-header" className="features__header">
          <p className="features__eyebrow">What We Offer</p>
          <h2 id="features-title" className="features__title">Server Features</h2>
          <div className="features__title-ornament">
            <span>⸻</span>
            <span className="features__crown">♛</span>
            <span>⸻</span>
          </div>
          <p className="features__subtitle">
            Formicidae만의 독자적인 콘텐츠와 경험을 만나보세요
          </p>
        </div>

        <div id="features-grid" className="features__grid">
          {features.map((feat) => (
            <div id={feat.id} key={feat.title} className="feature-card">
              <div className="feature-card__icon">{feat.icon}</div>
              <div className="feature-card__top-border" />
              <h3 className="feature-card__title">{feat.title}</h3>
              <p className="feature-card__subtitle">{feat.subtitle}</p>
              <p className="feature-card__desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
