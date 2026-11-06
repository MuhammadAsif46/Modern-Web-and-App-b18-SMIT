export function formatLocalTime(value) {
  // An undefined locale lets the browser use the user's regional time format.
  return new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(value))
}
