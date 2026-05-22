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
          <svg
            className="navbar-icon"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="crispEdges"
            aria-hidden="true"
          >
            <rect width="16" height="16" fill="#3a7d44" />
            <rect x="3" y="3" width="3" height="3" fill="#1a1a1a" />
            <rect x="10" y="3" width="3" height="3" fill="#1a1a1a" />
            <rect x="6" y="7" width="4" height="2" fill="#1a1a1a" />
            <rect x="5" y="9" width="2" height="3" fill="#1a1a1a" />
            <rect x="9" y="9" width="2" height="3" fill="#1a1a1a" />
            <rect x="6" y="12" width="4" height="1" fill="#1a1a1a" />
          </svg>
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
