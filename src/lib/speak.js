// Phát âm bằng Web Speech API của trình duyệt (giọng zh-CN nếu máy có).
// Đây là giọng tổng hợp của thiết bị, chưa phải bản ghi âm chuẩn đã kiểm định.
let cachedVoice = null

function pickVoice() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null
  if (cachedVoice) return cachedVoice
  const voices = window.speechSynthesis.getVoices()
  cachedVoice =
    voices.find((v) => /zh[-_]CN/i.test(v.lang)) ||
    voices.find((v) => /^zh/i.test(v.lang)) ||
    null
  return cachedVoice
}

if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoice = null
    pickVoice()
  }
}

export function canSpeak() {
  return typeof window !== 'undefined' && !!window.speechSynthesis
}

export function hasChineseVoice() {
  return !!pickVoice()
}

export function speak(text, rate = 0.8) {
  if (!canSpeak()) return false
  try {
    window.speechSynthesis.cancel()
    // Không đọc bằng giọng không phải tiếng Trung (tránh phát âm sai):
    // nếu máy đã nạp danh sách giọng mà không có giọng zh thì không phát.
    const all = window.speechSynthesis.getVoices()
    if (all.length > 0 && !pickVoice()) return false
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'zh-CN'
    u.rate = rate
    const v = pickVoice()
    if (v) u.voice = v
    window.speechSynthesis.speak(u)
    return true
  } catch {
    return false
  }
}
