import { useLayoutEffect, useRef } from 'react'
import {
  FiSmile,
  FiPlus,
  FiArrowLeft,
  FiCheck,
  FiMoreHorizontal,
  FiPhone,
  FiSend,
  FiVideo,
} from 'react-icons/fi'
import { RiFlashlightFill, RiShieldCheckFill, RiTeamFill } from 'react-icons/ri'
import Avatar from '../ChatList/Avatar.jsx'
import { formatLocalTime } from '../../utils/dateTime.js'

function HeroOrb() {
  return (
    <svg
      className="hero-orb"
      viewBox="0 0 360 260"
      role="img"
      aria-label="Chatrix chat bubble orbiting a glass planet"
    >
      <defs>
        <radialGradient id="orbGlass" cx="34%" cy="24%" r="80%">
          <stop offset="0" stopColor="#fff" stopOpacity=".96" />
          <stop offset=".42" stopColor="#d7e8ff" stopOpacity=".7" />
          <stop offset=".78" stopColor="#83b9ff" stopOpacity=".48" />
          <stop offset="1" stopColor="#4d7cff" stopOpacity=".75" />
        </radialGradient>
        <linearGradient id="bubbleFill" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#8ce5ff" />
          <stop offset=".5" stopColor="#588cff" />
          <stop offset="1" stopColor="#2460e7" />
        </linearGradient>
        <linearGradient id="ringStroke" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#a9d8ff" />
          <stop offset=".48" stopColor="#6489f6" />
          <stop offset="1" stopColor="#d9edff" />
        </linearGradient>
        <filter id="orbShadow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <filter id="bubbleShadow" x="-40%" y="-40%" width="180%" height="190%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#4575dc" floodOpacity=".33" />
        </filter>
      </defs>
      <ellipse cx="176" cy="205" rx="112" ry="15" fill="#6c98ee" opacity=".23" filter="url(#orbShadow)" />
      <ellipse cx="180" cy="145" rx="132" ry="36" fill="none" stroke="url(#ringStroke)" strokeWidth="5" transform="rotate(-16 180 145)" />
      <circle cx="180" cy="126" r="77" fill="url(#orbGlass)" stroke="#fff" strokeOpacity=".78" strokeWidth="2" />
      <ellipse cx="180" cy="126" rx="77" ry="77" fill="none" stroke="#90b8ff" strokeOpacity=".48" strokeWidth="2" />
      <g filter="url(#bubbleShadow)">
        <path d="M132 100c0-12 10-22 22-22h53c13 0 23 10 23 22v31c0 12-10 22-23 22h-16l-18 17 2-17h-21c-12 0-22-10-22-22z" fill="url(#bubbleFill)" />
        <circle cx="162" cy="116" r="6" fill="#fff" />
        <circle cx="180" cy="116" r="6" fill="#fff" />
        <circle cx="198" cy="116" r="6" fill="#fff" />
      </g>
      <path d="M67 52l3 9 9 3-9 3-3 9-3-9-9-3 9-3zM284 166l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#4a8dff" />
    </svg>
  )
}

function FeatureCards() {
  const features = [
    { title: 'Fast Messaging', caption: 'Ready to use', Icon: RiFlashlightFill, ready: true },
    { title: 'Secure & Private', caption: 'Coming soon', Icon: RiShieldCheckFill },
    { title: 'Stay Connected', caption: 'Coming soon', Icon: RiTeamFill },
  ]

  return (
    <div className="feature-cards">
      {features.map(({ title, caption, Icon, ready }) => (
        <div className="feature-card" key={title}>
          <Icon aria-hidden="true" />
          <span><strong>{title}</strong><small>{caption}</small></span>
          {!ready && <span className="coming-soon-tag">Soon</span>}
        </div>
      ))}
    </div>
  )
}

function WelcomePanel({
  conversation,
  messages,
  onSend,
  draft,
  onDraftChange,
  onBack,
  onProfile,
  onAttach,
}) {
  const messagesRef = useRef(null)

  useLayoutEffect(() => {
    const messageList = messagesRef.current

    // Keep the newest message visible when a thread receives an update.
    if (messageList) {
      messageList.scrollTo({ top: messageList.scrollHeight, behavior: 'smooth' })
    }
  }, [messages])

  if (!conversation) {
    return (
      <section className="welcome-panel">
        <div className="welcome-content">
          <HeroOrb />
          <h2>Welcome to Chatrix <span aria-hidden="true">✨</span></h2>
          <p>Select a chat from the left or start a new conversation</p>
          <FeatureCards />
        </div>
      </section>
    )
  }

  return (
    <section className="welcome-panel chat-thread">
      <header className="thread-header">
        <button
          type="button"
          className="thread-back"
          onClick={onBack}
          aria-label="Back to conversations"
        >
          <FiArrowLeft />
        </button>
        <button
          type="button"
          className="thread-profile"
          onClick={() => onProfile(conversation)}
          aria-label={`View ${conversation.name} profile`}
        >
          <Avatar conversation={conversation} small />
          <span className="thread-contact">
            <strong>{conversation.name}</strong>
            <span>
              {conversation.members
                ? `${conversation.members.length} members`
                : conversation.kind === 'bot'
                  ? 'Chatrix assistant'
                  : 'Contact information'}
            </span>
          </span>
        </button>
        <div className="thread-actions">
          <button
            type="button"
            className="icon-button"
            aria-label="Start voice call — coming soon"
            title="Voice calls are coming soon"
          >
            <FiPhone />
          </button>
          <button
            type="button"
            className="icon-button"
            aria-label="Start video call — coming soon"
            title="Video calls are coming soon"
          >
            <FiVideo />
          </button>
          <button
            type="button"
            className="icon-button"
            aria-label="More options — coming soon"
            title="More chat options are coming soon"
          >
            <FiMoreHorizontal />
          </button>
        </div>
      </header>
      <div className="thread-messages" ref={messagesRef}>
        <div className="thread-date">Today</div>
        {messages.map((message, index) => (
          <div
            className={`message-line${message.from === 'me' ? ' from-me' : ''}`}
            key={`${message.timestamp ?? index}-${message.text}`}
          >
            {message.from !== 'me' && <Avatar conversation={conversation} small />}
            <div className="message-bubble">
              {message.name && <span className="message-author">{message.name}</span>}
              <span>{message.text}</span>
              {message.timestamp && (
                <time className="message-time" dateTime={message.timestamp}>
                  {formatLocalTime(message.timestamp)}
                  {message.from === 'me' && <FiCheck aria-label="Sent" />}
                </time>
              )}
            </div>
          </div>
        ))}
      </div>
      <form className="message-composer" onSubmit={onSend}>
        <label className="composer-icon-button" aria-label="Attach a file">
          <FiPlus />
          <input type="file" onChange={(event) => {
            if (event.target.files?.[0]) onAttach(event.target.files[0])
            // Clear the value so choosing the same file again triggers a change event.
            event.target.value = ''
          }} />
        </label>
        <div className="emoji-control">
          <button
            className="composer-icon-button"
            type="button"
            aria-label="Choose emoji"
            onClick={(event) => {
              event.currentTarget.parentElement.classList.toggle('is-open')
            }}
          >
            <FiSmile />
          </button>
          <div className="emoji-picker" role="group" aria-label="Choose an emoji">
            {['😀', '😂', '🥰', '👍', '❤️', '🎉', '🙏', '🚀', '😊', '🔥'].map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={(event) => {
                  onDraftChange(`${draft}${emoji}`)
                  event.currentTarget.closest('.emoji-control')?.classList.remove('is-open')
                }}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
        <input
          aria-label="Write a message"
          onChange={(event) => onDraftChange(event.target.value)}
          placeholder="Type a message..."
          value={draft}
        />
        <button className="send-button" type="submit" aria-label="Send message">
          <FiSend />
        </button>
      </form>
    </section>
  )
}

export default WelcomePanel
