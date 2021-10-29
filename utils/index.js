export function getHost(url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}

function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return `${time}${label}s`
}

export function timeAgo(time) {
  if (!time) {
    return '--'
  }
  const between = Date.now() / 1000 - Number(time)
  let timeAgoText = ''
  if (between < 3600) {
    timeAgoText = pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    timeAgoText = pluralize(~~(between / 3600), ' hour')
  } else {
    timeAgoText = pluralize(~~(between / 86400), ' day')
  }

  return timeAgoText
}
