import { createAPI } from './create-api'

const logRequests = !!process.env.DEBUG_API
const api = createAPI({
  version: '/v0',
  config: {
    databaseURL: 'https://hacker-news.firebaseio.com'
  }
})

function warmCache() {
  setTimeout(warmCache, 1000 * 60 * 15)
}

if (api.onServer) {
  warmCache()
}

function fetch(child) {
  logRequests && console.log(`fetching ${child}...`)
  const cache = api.cachedItems
  if (cache && cache.has(child)) {
    logRequests && console.log(`cache hit for ${child}.`)
    return Promise.resolve(cache.get(child))
  }
  return new Promise((resolve, reject) => {
    api.child(child).once(
      'value',
      snapshot => {
        const val = snapshot.val()
        // mark the timestamp when this item is cached
        if (val) val.__lastUpdated = Date.now()
        cache && cache.set(child, val)
        logRequests && console.log(`fetched ${child}.`)
        resolve(val)
      },
      reject
    )
  })
}

export function fetchIdsByType(type) {
  return api.cachedIds && api.cachedIds[type] ? Promise.resolve(api.cachedIds[type]) : fetch(`${type}stories`)
}

export function fetchItem(id) {
  return fetch(`item/${id}`)
}

export function fetchItems(ids) {
  return Promise.all(ids.map(id => fetchItem(id)))
}

export function fetchUser(id) {
  return fetch(`user/${id}`)
}
