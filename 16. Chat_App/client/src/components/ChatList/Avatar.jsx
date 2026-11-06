import { FiUsers } from 'react-icons/fi'
import { RiGraduationCapLine, RiRobot2Line } from 'react-icons/ri'

// Choose a visual marker from the conversation type instead of storing avatar markup in the data.
function Avatar({ conversation, small = false }) {
  const { kind, name } = conversation
  const className = `chat-avatar avatar-${kind}${small ? ' avatar-small' : ''}`

  if (kind === 'bot') {
    return (
      <span className={className}>
        <RiRobot2Line aria-hidden="true" />
      </span>
    )
  }
  if (kind === 'group') {
    return (
      <span className={className}>
        <FiUsers aria-hidden="true" />
      </span>
    )
  }
  if (kind === 'study') {
    return (
      <span className={className}>
        <RiGraduationCapLine aria-hidden="true" />
      </span>
    )
  }
  if (kind === 'work') {
    return (
      <span className={className}>
        <span className="briefcase-mark">▰</span>
      </span>
    )
  }
  if (kind === 'family') {
    return (
      <span className={className}>
        <span className="family-faces">B</span>
        <span className="family-faces">M</span>
      </span>
    )
  }
  return (
    <span className={className}>
      <span className="person-silhouette" aria-label={name} />
    </span>
  )
}

export default Avatar
