import type { Screenshot } from '../types'
import { TAGS } from '../data/tags'
import './ScreenshotCard.css'

interface ScreenshotCardProps {
  screenshot: Screenshot
  onSelect: (s: Screenshot) => void
}

const FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%231a1a1a'/%3E%3Ctext x='400' y='225' text-anchor='middle' dominant-baseline='middle' font-family='monospace' font-size='48' fill='%23333'%3E⛏%3C/text%3E%3C/svg%3E"

export default function ScreenshotCard({ screenshot, onSelect }: ScreenshotCardProps) {
  return (
    <article
      id={`card-${screenshot.id}`}
      className="screenshot-card"
      onClick={() => onSelect(screenshot)}
    >
      <div className="card-image-wrap">
        <img
          id={`card-img-${screenshot.id}`}
          className="card-image"
          src={screenshot.imageUrl}
          alt={screenshot.title}
          loading="lazy"
          onError={e => {
            ;(e.currentTarget as HTMLImageElement).src = FALLBACK
          }}
        />
      </div>
      <div className="card-body">
        <h3 id={`card-title-${screenshot.id}`} className="card-title">
          {screenshot.title}
        </h3>
        <div className="card-meta">
          <span id={`card-player-${screenshot.id}`} className="card-player">
            {screenshot.player}
          </span>
          <span id={`card-date-${screenshot.id}`} className="card-date">
            {screenshot.date}
          </span>
        </div>
        <div id={`card-tags-${screenshot.id}`} className="card-tags">
          {screenshot.tags.map(tagId => {
            const tag = TAGS[tagId]
            if (!tag) return null
            return (
              <span
                key={tagId}
                className="tag-chip"
                style={{ color: tag.color, backgroundColor: tag.bgColor }}
              >
                {tag.label}
              </span>
            )
          })}
        </div>
      </div>
    </article>
  )
}
