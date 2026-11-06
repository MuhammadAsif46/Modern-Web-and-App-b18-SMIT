import { NavLink } from 'react-router'
import {
  FiArchive,
  FiChevronDown,
  FiMessageCircle,
  FiPhone,
  FiSettings,
  FiUsers,
} from 'react-icons/fi'
import chatrixLogo from '../../assets/pnd-logo.png'

const navigation = [
  { label: 'Chats', to: '/chats', Icon: FiMessageCircle },
  { label: 'Calls', to: '/calls', Icon: FiPhone },
  { label: 'Communities', to: '/communities', Icon: FiUsers },
  { label: 'Archived', to: '/archived', Icon: FiArchive },
  { label: 'Settings', to: '/settings', Icon: FiSettings },
]

function Sidebar({ displayName, profileImage, onProfile }) {
  return (
    <aside className="sidebar" aria-label="Main navigation">
      <NavLink className="brand-mark" to="/chats" aria-label="Chatrix home">
        <img className="brand-logo" src={chatrixLogo} alt="" />
      </NavLink>
      <nav className="sidebar-nav">
        {navigation.map(({ label, to, Icon }) => (
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
            key={to}
            to={to}
            aria-label={label}
            title={label}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <button className="profile-button" type="button" aria-label="Open profile" onClick={onProfile}>
        <span className="profile-avatar">
          {profileImage ? <img src={profileImage} alt="" /> : displayName.slice(0, 1).toUpperCase()}
          <span className="online-dot" />
        </span>
        <span className="profile-chevron"><FiChevronDown /></span>
      </button>
    </aside>
  )
}

export default Sidebar
