import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router'
import { gsap } from 'gsap'
import { FiArchive, FiArrowRight, FiPhone, FiPlus, FiSend, FiSettings, FiUsers } from 'react-icons/fi'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import ChatList from './components/ChatList/ChatList.jsx'
import { conversations } from './components/ChatList/conversations.js'
import WelcomePanel from './components/WelcomePanel/WelcomePanel.jsx'
import chatrixLogo from './assets/pnd-logo.png'
import { formatLocalTime } from './utils/dateTime.js'

// Keep unfinished sections in one place so each route can share the same preview UI.
const sectionContent = {
  '/calls': {
    title: 'Calls',
    headline: 'Calls are on the way',
    description: 'Voice and video calls are being prepared for Chatrix. Your conversations will stay right here in the meantime.',
    Icon: FiPhone,
  },
  '/communities': {
    title: 'Communities',
    headline: 'Your communities are on the way',
    description: 'We’re working on a better way to bring your groups together. You can keep chatting with your groups here for now.',
    Icon: FiUsers,
  },
  '/archived': {
    title: 'Archived',
    headline: 'Archived chats are on the way',
    description: 'A dedicated place for tucked-away conversations is coming. Your chats remain available in the conversation list.',
    Icon: FiArchive,
  },
  '/settings': {
    title: 'Settings',
    headline: 'More settings are on the way',
    description: 'Profile editing is already available from your avatar. Additional preferences are being prepared.',
    Icon: FiSettings,
  },
}

function LoadingIntro({ onComplete }) {
  const introRef = useRef(null)

  useLayoutEffect(() => {
    // Avoid delaying the app for users who request reduced motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete()
      return undefined
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ onComplete })
      timeline
        .fromTo('.loading-logo', { autoAlpha: 0, scale: 0.72, rotate: -10 }, {
          autoAlpha: 1,
          scale: 1,
          rotate: 0,
          duration: 0.65,
          ease: 'back.out(1.7)',
        })
        .fromTo('.loading-title, .loading-caption', { y: 12, autoAlpha: 0 }, {
          y: 0,
          autoAlpha: 1,
          duration: 0.42,
          stagger: 0.1,
          ease: 'power2.out',
        }, '-=0.25')
        .to('.loading-orbit', { rotate: 360, duration: 1.3, ease: 'none' }, 0)
        .to(introRef.current, { autoAlpha: 0, duration: 0.35 }, '+=0.35')
    }, introRef)

    return () => context.revert()
  }, [onComplete])

  return (
    <div className="loading-intro" ref={introRef} role="status" aria-label="Loading Chatrix">
      <div className="loading-brand">
        <span className="loading-orbit" />
        <img className="loading-logo" src={chatrixLogo} alt="" />
      </div>
      <h1 className="loading-title">Chatrix</h1>
      <p className="loading-caption">A little more connected.</p>
    </div>
  )
}

function ComingSoonPage({ feature, onBack }) {
  const { Icon } = feature

  return (
    <section className="feature-page" aria-labelledby="feature-title">
      <div className="feature-art" aria-hidden="true">
        <span className="feature-art-orbit feature-art-orbit-one" />
        <span className="feature-art-orbit feature-art-orbit-two" />
        <span className="feature-art-glow" />
        <div className="feature-icon">
          <Icon />
        </div>
        <span className="feature-spark feature-spark-one">✦</span>
        <span className="feature-spark feature-spark-two">✦</span>
      </div>
      <div className="feature-copy">
        <span className="coming-soon-label">
          <span /> Coming soon to Chatrix
        </span>
        <h1 id="feature-title">{feature.headline}</h1>
        <p>{feature.description}</p>
        <div className="feature-note">
          <span className="feature-note-icon">
            <Icon />
          </span>
          <span>
            <strong>{feature.title}</strong>
            <small>We’re still building this experience.</small>
          </span>
        </div>
        <button className="section-action" type="button" onClick={onBack}>
          Back to chats <FiArrowRight />
        </button>
      </div>
    </section>
  )
}

function NewConversationDialog({ onClose, onCreate }) {
  const [kind, setKind] = useState('contact')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [members, setMembers] = useState('')

  function submit(event) {
    event.preventDefault()
    if (name.trim() && (kind === 'group' || phone.trim())) {
      const parsedMembers = members
        .split(',')
        .map((member) => member.trim())
        .filter(Boolean)

      onCreate({
        name: name.trim(),
        kind,
        phone: phone.trim(),
        members: parsedMembers,
      })
    }
  }

  return (
    <div
      className="dialog-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <form className="new-chat-dialog" onSubmit={submit}>
        <button
          className="dialog-close"
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>
        <span className="dialog-icon">{kind === 'group' ? <FiUsers /> : <FiPlus />}</span>
        <h2>{kind === 'group' ? 'Create a group' : 'Start a conversation'}</h2>
        <p>Choose a chat type and add the details.</p>
        <div className="dialog-tabs">
          <button
            type="button"
            className={kind === 'contact' ? 'is-selected' : ''}
            onClick={() => setKind('contact')}
          >
            New contact
          </button>
          <button
            type="button"
            className={kind === 'group' ? 'is-selected' : ''}
            onClick={() => setKind('group')}
          >
            New group
          </button>
        </div>
        <label className="dialog-field">
          <span>{kind === 'group' ? 'Group name' : 'Contact name'}</span>
          <input
            autoFocus
            aria-label={kind === 'group' ? 'Group name' : 'Contact name'}
            onChange={(event) => setName(event.target.value)}
            placeholder={kind === 'group' ? 'e.g. Weekend plans' : 'e.g. Alex Morgan'}
            value={name}
            required
          />
        </label>
        {kind === 'group' ? (
          <label className="dialog-field">
            <span>Members <small>Separate names with commas</small></span>
            <input
              aria-label="Group members"
              onChange={(event) => setMembers(event.target.value)}
              placeholder="e.g. Alex, Sam"
              value={members}
            />
          </label>
        ) : (
          <label className="dialog-field">
            <span>Phone number</span>
            <span className="phone-input">
              <input
                aria-label="Phone number"
                type="tel"
                inputMode="tel"
                onChange={(event) => setPhone(event.target.value)}
                placeholder="+1 555 000 0000"
                value={phone}
                required
              />
              <button type="submit" aria-label="Send invitation">
                <FiSend />
              </button>
            </span>
          </label>
        )}
        <button className="dialog-submit" type="submit">
          {kind === 'group' ? 'Create group' : 'Create chat'} <FiArrowRight />
        </button>
      </form>
    </div>
  )
}

function ProfileDialog({ profile, contact, onClose, onSave }) {
  const isSelf = !contact
  const [name, setName] = useState(isSelf ? profile.name : contact.name)
  const [phone, setPhone] = useState(isSelf ? profile.phone : contact.phone ?? '')
  const [image, setImage] = useState(isSelf ? profile.image : '')

  function chooseImage(event) {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => setImage(String(reader.result))
    reader.onerror = () => console.error('Unable to read the selected profile image.')
    reader.readAsDataURL(file)
  }

  function submit(event) {
    event.preventDefault()

    if (isSelf && name.trim()) onSave({ name: name.trim(), phone: phone.trim(), image })
  }

  return (
    <div
      className="dialog-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <form className="new-chat-dialog profile-dialog" onSubmit={submit}>
        <button
          className="dialog-close"
          type="button"
          onClick={onClose}
          aria-label="Close profile"
        >
          ×
        </button>
        <div className={`profile-preview${image ? ' has-image' : ''}`}>
          {image ? (
            <img src={image} alt="Profile" />
          ) : (
            <span>{(isSelf ? name : contact.name).slice(0, 1).toUpperCase()}</span>
          )}
        </div>
        <h2>{isSelf ? 'Your profile' : contact.name}</h2>
        <p>
          {isSelf
            ? 'Update your name and profile photo.'
            : contact.members
              ? 'Group information and members.'
              : contact.kind === 'bot'
                ? 'Chatrix AI assistant'
                : 'Contact information'}
        </p>
        {isSelf ? (
          <>
            <label className="dialog-field">
              <span>Display name</span>
              <input
                aria-label="Your display name"
                onChange={(event) => setName(event.target.value)}
                value={name}
                required
              />
            </label>
            <label className="dialog-field">
              <span>Phone number</span>
              <span className="phone-input">
                <input
                  aria-label="Your phone number"
                  type="tel"
                  inputMode="tel"
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Add a number"
                  value={phone}
                />
                <button type="submit" aria-label="Save phone number">
                  <FiSend />
                </button>
              </span>
            </label>
            <label className="upload-profile">
              Choose profile photo
              <input
                aria-label="Choose profile photo"
                type="file"
                accept="image/*"
                onChange={chooseImage}
              />
            </label>
            <button className="dialog-submit" type="submit">
              Save profile <FiArrowRight />
            </button>
          </>
        ) : (
          <>
            {!contact.members && (
              <div className="profile-info-row">
                <span>Phone</span>
                <strong>{contact.phone || 'Not added'}</strong>
              </div>
            )}
            {contact.members && (
              <div className="group-member-list">
                <span>Members</span>
                {(contact.members.length ? contact.members : ['No members added']).map((member) => (
                  <div className="group-member" key={member}>
                    <span>{member.slice(0, 1).toUpperCase()}</span>
                    {member}
                  </div>
                ))}
              </div>
            )}
            <button className="dialog-submit" type="button" onClick={onClose}>
              Done
            </button>
          </>
        )}
      </form>
    </div>
  )
}

function Workspace() {
  const location = useLocation()
  const navigate = useNavigate()
  const appRef = useRef(null)
  const [conversationList, setConversationList] = useState(conversations)
  const [selectedId, setSelectedId] = useState(null)
  const [threads, setThreads] = useState(() => (
    Object.fromEntries(conversations.map(({ id, messages }) => [id, messages]))
  ))
  const [draft, setDraft] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [profileDialog, setProfileDialog] = useState(null)
  const [profile, setProfile] = useState({ name: 'Bilal', phone: '', image: '' })
  const section = sectionContent[location.pathname]
  const selectedChat = conversationList.find((chat) => chat.id === selectedId)

  // Keep the entry animation scoped to this workspace and animate only elements
  // that exist on the active route.
  useLayoutEffect(() => {
    const appWindow = appRef.current?.querySelector('.app-window')
    const conversationRows = appRef.current?.querySelectorAll('.conversation-row')
    const heroOrb = appRef.current?.querySelector('.hero-orb')

    const context = gsap.context(() => {
      if (appWindow) {
        gsap.fromTo(
          appWindow,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
          },
        )
      }

      if (conversationRows?.length) {
        gsap.fromTo(
          conversationRows,
          { x: -12, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.38,
            stagger: 0.055,
            delay: 0.22,
            ease: 'power2.out',
          },
        )
      }

      if (heroOrb) {
        gsap.to(heroOrb, {
          y: -7,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    }, appRef)
    return () => context.revert()
  }, [])

  const sendMessage = useCallback((event) => {
    event.preventDefault()
    const text = draft.trim()
    if (!text || !selectedId) return

    // Store timestamps in ISO format; the UI formats them in the user's locale.
    const timestamp = new Date().toISOString()
    setThreads((current) => ({
      ...current,
      [selectedId]: [...current[selectedId], { from: 'me', text, timestamp }],
    }))
    setConversationList((current) => current.map((chat) => {
      if (chat.id !== selectedId) return chat
      return { ...chat, message: text, time: formatLocalTime(timestamp), unread: 0 }
    }))
    setDraft('')
  }, [draft, selectedId])

  function attachFile(file) {
    if (!selectedId) return
    const timestamp = new Date().toISOString()
    setThreads((current) => ({
      ...current,
      [selectedId]: [...(current[selectedId] ?? []), { from: 'me', text: `📎 ${file.name}`, timestamp }],
    }))
    setConversationList((current) => current.map((chat) => {
      if (chat.id !== selectedId) return chat
      return {
        ...chat,
        message: `📎 ${file.name}`,
        time: formatLocalTime(timestamp),
        unread: 0,
      }
    }))
  }

  function createConversation({ name, kind, phone, members }) {
    const isGroup = kind === 'group'
    // Include the current user once, even if they were typed into the member list.
    const groupMembers = isGroup
      ? [profile.name, ...members.filter((member) => member.toLowerCase() !== profile.name.toLowerCase())]
      : undefined
    const newChat = {
      id: `new-${Date.now()}`,
      name,
      message: isGroup ? `${groupMembers.length} members` : phone,
      time: formatLocalTime(new Date()),
      category: isGroup ? 'Groups' : 'Personal',
      kind: isGroup ? 'group' : 'photo',
      phone: isGroup ? '' : phone,
      members: groupMembers,
      messages: [],
    }
    setConversationList((current) => [newChat, ...current])
    setThreads((current) => ({ ...current, [newChat.id]: [] }))
    setSelectedId(newChat.id)
    setDialogOpen(false)
  }

  return (
    <main className="scene" ref={appRef}>
      <div className="scene-glow scene-glow-one" />
      <div className="scene-glow scene-glow-two" />
      <div className="workspace-layout">
        <section
          className={`app-window${selectedChat && location.pathname === '/chats' ? ' has-open-chat' : ''}`}
          aria-label="Chatrix app"
        >
          <Sidebar
            displayName={profile.name}
            profileImage={profile.image}
            onProfile={() => setProfileDialog({ type: 'self' })}
          />
          {location.pathname === '/chats' ? (
            <ChatList
              conversationList={conversationList}
              selectedId={selectedId}
              profile={profile}
              onOpenProfile={() => setProfileDialog({ type: 'self' })}
              onSelect={(id) => {
                setSelectedId(id)
                setConversationList((current) => current.map((chat) => (
                  chat.id === id ? { ...chat, unread: 0 } : chat
                )))
              }}
              onCompose={() => setDialogOpen(true)}
            />
          ) : (
            <ComingSoonPage
              feature={section ?? sectionContent['/calls']}
              onBack={() => navigate('/chats')}
            />
          )}
          {location.pathname === '/chats' && (
            <WelcomePanel
              conversation={selectedChat}
              messages={selectedId ? threads[selectedId] ?? [] : []}
              draft={draft}
              onDraftChange={setDraft}
              onSend={sendMessage}
              onBack={() => setSelectedId(null)}
              onProfile={(contact) => setProfileDialog({ type: 'contact', contact })}
              onAttach={attachFile}
            />
          )}
        </section>
      </div>
      {dialogOpen && (
        <NewConversationDialog
          onClose={() => setDialogOpen(false)}
          onCreate={createConversation}
        />
      )}
      {profileDialog && (
        <ProfileDialog
          contact={profileDialog.type === 'contact' ? profileDialog.contact : null}
          profile={profile}
          onClose={() => setProfileDialog(null)}
          onSave={(updatedProfile) => {
            setProfile(updatedProfile)
            setProfileDialog(null)
          }}
        />
      )}
    </main>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const finishLoading = useCallback(() => setIsLoading(false), [])

  return (
    <BrowserRouter>
      <>
        {/* Routes render beneath the intro so the workspace is ready when it fades. */}
        <Routes>
          <Route path="/" element={<Navigate to="/chats" replace />} />
          <Route path="*" element={<Workspace />} />
        </Routes>
        {isLoading && <LoadingIntro onComplete={finishLoading} />}
      </>
    </BrowserRouter>
  )
}

export default App
