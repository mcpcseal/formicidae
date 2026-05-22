import { useState, useMemo } from 'react'
import Navbar from './components/Navbar'
import TagFilter from './components/TagFilter'
import Gallery from './components/Gallery'
import Modal from './components/Modal'
import { SCREENSHOTS } from './data/screenshots'
import type { Screenshot } from './types'
import './App.css'

export default function App() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [activeScreenshot, setActiveScreenshot] = useState<Screenshot | null>(null)

  const filtered = useMemo(() => {
    return SCREENSHOTS.filter(s => {
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some(t => s.tags.includes(t))
      const q = searchQuery.toLowerCase()
      const matchesSearch =
        q === '' ||
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.player.toLowerCase().includes(q)
      return matchesTags && matchesSearch
    })
  }, [selectedTags, searchQuery])

  const handleTagToggle = (tagId: string) => {
    setSelectedTags(prev =>
      prev.includes(tagId) ? prev.filter(t => t !== tagId) : [...prev, tagId],
    )
  }

  return (
    <div id="app" className="app">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main id="main-content" className="app-main">
        <TagFilter selectedTags={selectedTags} onTagToggle={handleTagToggle} />
        <div id="results-bar" className="results-bar">
          <span id="results-count" className="results-count">
            {filtered.length}
            <span className="results-unit">개의 스크린샷</span>
          </span>
          {selectedTags.length > 0 && (
            <button
              id="clear-filters-btn"
              className="clear-filters"
              onClick={() => setSelectedTags([])}
            >
              필터 초기화
            </button>
          )}
        </div>
        <Gallery screenshots={filtered} onSelect={setActiveScreenshot} />
      </main>
      {activeScreenshot && (
        <Modal
          screenshot={activeScreenshot}
          screenshots={filtered}
          onClose={() => setActiveScreenshot(null)}
          onNavigate={setActiveScreenshot}
        />
      )}
    </div>
  )
}
