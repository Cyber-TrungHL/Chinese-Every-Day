// Tách câu tiếng Trung thành từ theo từ điển HSK (khớp dài nhất), kèm pinyin theo ngữ cảnh
import { pinyin } from 'pinyin-pro'
import { allWords } from '../data/hsk'

let dict, maxLen
function ensureDict() {
  if (dict) return
  dict = new Map()
  maxLen = 1
  for (const w of allWords()) {
    if (!dict.has(w.hz) || dict.get(w.hz).level > w.level) dict.set(w.hz, w)
    maxLen = Math.max(maxLen, [...w.hz].length)
  }
}

const isHan = (c) => /\p{Script=Han}/u.test(c)

export function lookup(hz) {
  ensureDict()
  return dict.get(hz)
}

// Trả về mảng đoạn: { text, han: bool, py, word }
export function segment(text) {
  ensureDict()
  const chars = [...text]
  const out = []
  let i = 0
  while (i < chars.length) {
    if (!isHan(chars[i])) {
      let j = i
      while (j < chars.length && !isHan(chars[j])) j++
      out.push({ text: chars.slice(i, j).join(''), han: false })
      i = j
      continue
    }
    let len = Math.min(maxLen, chars.length - i)
    for (; len > 1; len--) {
      const cand = chars.slice(i, i + len)
      if (cand.every(isHan) && dict.has(cand.join(''))) break
    }
    const piece = chars.slice(i, i + len).join('')
    out.push({ text: piece, han: true, word: dict.get(piece) })
    i += len
  }
  // Âm nhi hóa: 儿 đứng sau một từ (không tạo thành từ có sẵn) được ghép vào từ đó, ví dụ 哪儿 → nǎr
  for (let n = out.length - 1; n > 0; n--) {
    const cur = out[n], prev = out[n - 1]
    if (cur.han && cur.text === '儿' && prev.han && prev.text !== '儿') {
      prev.text += '儿'
      prev.erhua = true
      out.splice(n, 1)
    }
  }
  // Pinyin theo ngữ cảnh cả câu, rồi chia lại theo từng đoạn
  const pys = pinyin(text, { type: 'all' }).map((x) => (x.isZh ? x.pinyin : null))
  let k = 0
  for (const seg of out) {
    const n = [...seg.text].length
    if (seg.han) {
      let syl = pys.slice(k, k + n).filter(Boolean)
      if (seg.erhua && syl.length > 1) syl = [...syl.slice(0, -2), syl.at(-2) + 'r']
      seg.py = syl.join(' ')
    }
    k += n
  }
  return out
}

// Pinyin cả câu theo quy tắc chính tả: âm tiết trong một từ viết liền, các từ cách nhau, giữ dấu câu
export function pinyinSentence(segs) {
  const PUNCT = { '，': ',', '。': '.', '！': '!', '？': '?', '、': ',', '；': ';', '：': ':', '“': '"', '”': '"' }
  let out = ''
  for (const s of segs) {
    if (s.han) out += (out && !/\s$/.test(out) ? ' ' : '') + s.py.replace(/ /g, '')
    else out += [...s.text].map((c) => PUNCT[c] ?? c).join('')
  }
  out = out.replace(/\s+([,.!?;:])/g, '$1').replace(/([,.!?;:])(?=\S)/g, '$1 ').trim()
  // Viết hoa chữ đầu câu
  return out.replace(/(^|[.!?]\s+)(\p{L})/gu, (_, pre, ch) => pre + ch.toUpperCase())
}
