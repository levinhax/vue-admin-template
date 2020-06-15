/**
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

/**
 * @param {Object} json
 * @returns {Array}
 */
export function param(json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}

export const dateFormatString = (timestamp, type = 0) => {
  const date = new Date(timestamp)

  if (type === 0) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`.replace(
      /\b(\w)\b/g,
      '0$1'
    )
  }

  if (type === 1) {
    return `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`.replace(/\b(\w)\b/g, '0$1')
  }
}
