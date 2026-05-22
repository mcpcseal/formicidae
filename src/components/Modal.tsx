import { useEffect, useCallback } from 'react'
import type { Screenshot } from '../types'
import { TAGS } from '../data/tags'
import './Modal.css'

interface ModalProps {
  screenshot: Screenshot
  screenshots: Screenshot[]
  onClose: () => void
  onNavigate: (s: Screenshot) => void
}

const FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%231a1a1a'/%3E%3Ctext x='400' y='225' text-anchor='middle' dominant-baseline='middle' font-family='monospace' font-size='64' fill='%23333'%3E⛏%3C/text%3E%3C/svg%3E"

export default function Modal({ screenshot, screenshots, onClose, onNavigate }: ModalProps) {
  const idx = screenshots.findIndex(s => s.id === screenshot.id)
  const hasPrev = idx > 0
  const hasNext = idx < screenshots.length - 1

  const goPrev = useCallback(() => {
    if (hasPrev) onNavigate(screenshots[idx - 1])
  }, [hasPrev, idx, screenshots, onNavigate])

  const goNext = useCallback(() => {
    if (hasNext) onNavigate(screenshots[idx + 1])
  }, [hasNext, idx, screenshots, onNavigate])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, goPrev, goNext])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div id="modal-overlay" className="modal-overlay" onClick={onClose}>
      <div id="modal-box" className="modal-box" onClick={e => e.stopPropagation()}>
        <button id="modal-close-btn" className="modal-close-btn" onClick={onClose} aria-label="닫기">
          ✕
        </button>

        <div id="modal-image-wrap" className="modal-image-wrap">
          <img
            id="modal-image"
            className="modal-image"
            src={screenshot.imageUrl}
            alt={screenshot.title}
            onError={e => {
              ;(e.currentTarget as HTMLImageElement).src = FALLBACK
            }}
          />
        </div>

        <div id="modal-info" className="modal-info">
          <h2 id="modal-title" className="modal-title">{screenshot.title}</h2>
          <p id="modal-description" className="modal-description">{screenshot.description}</p>

          <div id="modal-meta" className="modal-meta">
            <span id="modal-player" className="modal-player">
              <svg className="modal-player-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-6 8a6 6 0 1 1 12 0H4z" />
              </svg>
              {screenshot.player}
            </span>
            <span id="modal-date" className="modal-date">{screenshot.date}</span>
          </div>

          <div id="modal-tags" className="modal-tags">
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

        <div id="modal-nav" className="modal-nav">
          <button
            id="modal-prev-btn"
            className="modal-nav-btn"
            onClick={goPrev}
            disabled={!hasPrev}
          >
            ← 이전
          </button>
          <span id="modal-nav-count" className="modal-nav-count">
            {idx + 1} / {screenshots.length}
          </span>
          <button
            id="modal-next-btn"
            className="modal-nav-btn"
            onClick={goNext}
            disabled={!hasNext}
          >
            다음 →
          </button>
        </div>
      </div>
    </div>
  )
}
