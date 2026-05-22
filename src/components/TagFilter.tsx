import { TAG_LIST } from '../data/tags'
import './TagFilter.css'

interface TagFilterProps {
  selectedTags: string[]
  onTagToggle: (tagId: string) => void
}

export default function TagFilter({ selectedTags, onTagToggle }: TagFilterProps) {
  return (
    <div id="tag-filter" className="tag-filter">
      <div id="tag-filter-list" className="tag-filter-scroll">
        <button
          id="tag-btn-all"
          className={`tag-btn tag-btn-all ${selectedTags.length === 0 ? 'active' : ''}`}
          onClick={() => {
            if (selectedTags.length > 0) {
              selectedTags.forEach(t => onTagToggle(t))
            }
          }}
        >
          전체
        </button>
        {TAG_LIST.map(tag => {
          const active = selectedTags.includes(tag.id)
          return (
            <button
              key={tag.id}
              id={`tag-btn-${tag.id}`}
              className={`tag-btn ${active ? 'active' : ''}`}
              style={
                active
                  ? { color: tag.color, backgroundColor: tag.bgColor, borderColor: tag.color }
                  : {}
              }
              onClick={() => onTagToggle(tag.id)}
            >
              {tag.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
