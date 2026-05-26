import './Navbar.css'

interface NavbarProps {
  searchQuery: string
  onSearchChange: (q: string) => void
}

export default function Navbar({ searchQuery, onSearchChange }: NavbarProps) {
  return (
    <header id="site-header" className="navbar">
      <div className="navbar-inner">
        <div id="site-logo" className="navbar-logo">
          <img
            src="/ender_pearl.png"
            className="navbar-icon"
            alt="Formicidae SMP"
            aria-hidden="true"
          />
          <div className="navbar-title">
            <span className="navbar-title-main">Formicidae SMP</span>
            <span className="navbar-title-sub">스크린샷 아카이브</span>
          </div>
        </div>

        <div id="search-bar" className="navbar-search">
          <svg className="search-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            id="search-input"
            type="text"
            className="search-input"
            placeholder="제목, 설명, 플레이어 검색..."
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button
              id="search-clear-btn"
              className="search-clear"
              onClick={() => onSearchChange('')}
              aria-label="검색 지우기"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
