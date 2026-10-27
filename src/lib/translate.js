// Dịch câu Trung ↔ Việt qua dịch vụ trực tuyến (cần mạng)
import { TRANSLATE_ENGINES, MYMEMORY_EMAIL } from '../config'

const CODES = { zh: 'zh-CN', vi: 'vi' }
export const MAX_CHARS = 500

async function google(text, from, to, signal) {
  const url =
    'https://translate.googleapis.com/translate_a/single?client=gtx&dt=t' +
    `&sl=${CODES[from]}&tl=${CODES[to]}&q=${encodeURIComponent(text)}`
  const res = await fetch(url, { signal })
  if (!res.ok) throw new Error(`google ${res.status}`)
  const data = await res.json()
  const out = (data?.[0] || []).map((seg) => seg?.[0] || '').join('')
  if (!out) throw new Error('google empty')
  return { text: out, engine: 'Google Dịch' }
}

async function mymemory(text, from, to, signal) {
  const url =
    'https://api.mymemory.translated.net/get' +
    `?q=${encodeURIComponent(text)}&langpair=${CODES[from]}|${CODES[to]}` +
    (MYMEMORY_EMAIL ? `&de=${encodeURIComponent(MYMEMORY_EMAIL)}` : '')
  const res = await fetch(url, { signal })
  if (!res.ok) throw new Error(`mymemory ${res.status}`)
  const data = await res.json()
  const out = data?.responseData?.translatedText
  if (!out || Number(data?.responseStatus) !== 200) throw new Error(`mymemory ${data?.responseStatus}`)
  return { text: out, engine: 'MyMemory' }
}

const ENGINES = { google, mymemory }

export async function translate(text, from, to, signal) {
  let lastError
  for (const name of TRANSLATE_ENGINES) {
    const fn = ENGINES[name]
    if (!fn) continue
    try {
      return await fn(text.slice(0, MAX_CHARS), from, to, signal)
    } catch (e) {
      if (e.name === 'AbortError') throw e
      lastError = e
    }
  }
  throw lastError || new Error('no engine')
}

export const hasHan = (s) => /\p{Script=Han}/u.test(s)
export const detectLang = (s) => (hasHan(s) ? 'zh' : 'vi')
