import './Rules.css';

const rules = [
  {
    id: 'rule-respect',
    number: 'I',
    title: '존중과 예의',
    desc: '모든 플레이어는 상대방을 존중해야 합니다. 혐오 발언, 괴롭힘, 욕설은 엄격히 금지됩니다.',
  },
  {
    id: 'rule-no-cheating',
    number: 'II',
    title: '치팅 & 핵 금지',
    desc: '어떠한 형태의 치트, 핵, 불법 수정 클라이언트도 허용되지 않습니다. 발각 시 영구 차단됩니다.',
  },
  {
    id: 'rule-no-griefing',
    number: 'III',
    title: '그리핑 제한',
    desc: '타인의 건축물을 허가 없이 파괴하거나 훔치는 행위는 금지됩니다. 전쟁 선포 후에는 별도 규칙이 적용됩니다.',
  },
  {
    id: 'rule-fair-trade',
    number: 'IV',
    title: '공정한 거래',
    desc: '경제 시스템을 악용한 사기 행위는 금지됩니다. 모든 거래는 상호 합의 하에 이루어져야 합니다.',
  },
  {
    id: 'rule-follow-staff',
    number: 'V',
    title: '운영자 지시 준수',
    desc: '서버 운영진의 지시를 따르십시오. 분쟁이 있을 경우 공식 채널을 통해 이의를 제기하십시오.',
  },
  {
    id: 'rule-performance',
    number: 'VI',
    title: '라그 & 성능',
    desc: '과도한 레드스톤 장치, 몹 농장, 또는 서버에 부하를 주는 시설물 설치는 사전 승인이 필요합니다.',
  },
];

export default function Rules() {
  return (
    <section id="rules" className="rules parchment-bg section">
      <div className="rules__inner">
        <div className="rules__header">
          <p className="rules__eyebrow">Lex Formicae</p>
          <h2 className="rules__title">Server Rules</h2>
          <p className="rules__latin">
            <em>Lex est quod iubemus — Law is what we command</em>
          </p>
          <div className="rules__ornament-line">
            <span>✦ ⸻ ✦ ⸻ ✦</span>
          </div>
        </div>

        <div id="rules-scroll" className="rules__scroll">
          <div className="rules__scroll-top" />
          <div id="rules-scroll-body" className="rules__scroll-body">
            <p className="rules__preamble">
              Formicidae에 입장하는 모든 자는 아래의 규율에 따를 것을 서약합니다.
              이 규율은 모든 식민지(Colony)와 군주국(Kingdom)에 동등하게 적용됩니다.
            </p>

            <ol id="rules-list" className="rules__list">
              {rules.map((rule) => (
                <li id={rule.id} key={rule.number} className="rule-item">
                  <span className="rule-item__number">{rule.number}</span>
                  <div className="rule-item__content">
                    <h3 className="rule-item__title">{rule.title}</h3>
                    <p className="rule-item__desc">{rule.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="rules__footer-note">
              * 규칙 위반 시 운영진의 판단에 따라 경고, 일시 차단, 또는 영구 차단의
              처벌이 내려질 수 있습니다. 최종 해석권은 운영진에게 있습니다.
            </p>
          </div>
          <div className="rules__scroll-bottom" />
        </div>
      </div>
    </section>
  );
}
