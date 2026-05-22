import type { Screenshot } from '../types'
import ScreenshotCard from './ScreenshotCard'
import './Gallery.css'

interface GalleryProps {
  screenshots: Screenshot[]
  onSelect: (s: Screenshot) => void
}

export default function Gallery({ screenshots, onSelect }: GalleryProps) {
  if (screenshots.length === 0) {
    return (
      <div id="gallery-empty" className="gallery-empty">
        <span className="gallery-empty-icon">🔍</span>
        <p>조건에 맞는 스크린샷이 없습니다.</p>
        <p className="gallery-empty-sub">태그나 검색어를 바꿔보세요.</p>
      </div>
    )
  }

  return (
    <div id="gallery" className="gallery-grid">
      {screenshots.map(s => (
        <ScreenshotCard key={s.id} screenshot={s} onSelect={onSelect} />
      ))}
    </div>
  )
}
