import { useMemo, useRef, useState } from 'react'
import { FiCheck, FiCheckCircle, FiEdit2, FiSearch, FiSliders } from 'react-icons/fi'
import Avatar from './Avatar.jsx'
import { conversations } from './conversations.js'

function ChatList({ selectedId, onSelect, onCompose, onOpenProfile, profile, conversationList = conversations }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const searchRef = useRef(null)

  // Filter the current list in one pass so search and category stay in sync.
  const visibleConversations = useMemo(() => conversationList.filter((chat) => {
    const matchesFilter = filter === 'All' || chat.category === filter
    const matchesQuery = `${chat.name} ${chat.message}`.toLowerCase().includes(query.toLowerCase())
    return matchesFilter && matchesQuery
  }), [conversationList, filter, query])

  return (
    <section className="chat-list-panel" aria-label="Conversations">
      <header className="list-heading">
        <h1>Chats</h1>
        <div className="heading-actions">
          <button
            type="button"
            className="icon-button mobile-search"
            onClick={() => searchRef.current?.focus()}
            aria-label="Focus search"
          >
            <FiSearch />
          </button>
          <button
            type="button"
            className="profile-shortcut"
            onClick={onOpenProfile}
            aria-label="Edit your profile"
          >
            {profile.image ? <img src={profile.image} alt="" /> : profile.name.slice(0, 1).toUpperCase()}
          </button>
          <button
            type="button"
            className="icon-button compose-button"
            onClick={onCompose}
            aria-label="New conversation"
          >
            <FiEdit2 />
          </button>
        </div>
      </header>
      <label className="search-field">
        <FiSearch aria-hidden="true" />
        <input
          ref={searchRef}
          aria-label="Search conversations"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search conversations..."
          value={query}
        />
      </label>
      <div className="filter-row">
        <div className="filter-pills" role="group" aria-label="Filter conversations">
          {['All', 'Personal', 'Groups'].map((option) => (
            <button
              className={`filter-pill${filter === option ? ' is-selected' : ''}`}
              key={option}
              onClick={() => setFilter(option)}
              type="button"
            >
              {option}{option === 'All' && <FiCheckCircle aria-hidden="true" />}
            </button>
          ))}
        </div>
        <button
          className={`icon-button filter-button${filtersOpen ? ' is-active' : ''}`}
          onClick={() => setFiltersOpen(!filtersOpen)}
          type="button"
          aria-label="More conversation filters"
          aria-expanded={filtersOpen}
        >
          <FiSliders />
        </button>
      </div>
      {filtersOpen && (
        <div className="filter-hint"><FiCheck aria-hidden="true" /> Showing {filter.toLowerCase()} conversations</div>
      )}
      <div className="conversation-list">
        {visibleConversations.map((chat) => (
          <button
            className={`conversation-row${selectedId === chat.id ? ' is-selected' : ''}`}
            key={chat.id}
            onClick={() => onSelect(chat.id)}
            type="button"
          >
            <Avatar conversation={chat} />
            <span className="conversation-copy">
              <span className="conversation-title">
                <span>{chat.name}</span>
                {chat.verified && <FiCheckCircle className="verified-mark" aria-label="Verified" />}
              </span>
              <span className="conversation-message">{chat.message}</span>
            </span>
            <span className="conversation-meta">
              <time>{chat.time}</time>
              {/* Only the AI conversation has an unread badge in the demo data. */}
              {chat.id === 'chatrix' && chat.unread ? <span className="unread-count">{chat.unread}</span> : null}
            </span>
          </button>
        ))}
        {!visibleConversations.length && <p className="empty-search">No conversations found.</p>}
      </div>
    </section>
  )
}

export default ChatList
