export default {
  set (name, value, expire, path, domain, secure) {
    if (!name || /^(?:expires|max\-age|path|domain|secure)$/i.test(name)) {
      return false
    }

    var sExpires = ''

    if (expire) {
      switch (expire.constructor) {
        case Number:
          sExpires = expire === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + expire

          break
        case String:
          sExpires = '; expires=' + expire

          break
        case Date:
          sExpires = '; expires=' + expire.toUTCString()

          break
      }
    }

    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + sExpires
      + (domain ? '; domain=' + domain : '')
      + (path ? '; path=' + path : '')
      + (secure ? '; secure' : '')

    return true
  },
  get (name) {
    return decodeURIComponent(document.cookie.replace(new RegExp(`(?:(?:^|.*;)\s*${ encodeURIComponent(name).replace(/[\-\.\+\*]/g, `\$&`) }\s*\=\s*([^;]*).*$)|^.*$`), `$1`)) || null
  },
  remove (name, path, domain) {
    if (!name || !this.hasItem(name)) {
      return false
    }

    document.cookie = encodeURIComponent(name) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      + (domain ? '; domain=' + domain : '')
      + (path ? '; path=' + path : '')

    return true
  },
  has (name) {
    return (new RegExp(`(?:^|;\s*)${ encodeURIComponent(name).replace(/[\-\.\+\*]/g, `\$&`) }\s*\=`)).test(document.cookie)
  },
  keys () {
    const aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/)

    for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx])
    }

    return aKeys
  }
}
