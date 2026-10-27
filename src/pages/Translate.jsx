import { useEffect, useMemo, useRef, useState } from 'react'
import { translate, detectLang, hasHan, MAX_CHARS } from '../lib/translate'
import { segment, pinyinSentence } from '../lib/segment'
import { useStored } from '../lib/storage'
import { speak } from '../lib/speak'
import { Py, SpeakBtn, VoiceNotice } from '../components/ui'

const LANG = { zh: 'Tiếng Trung', vi: 'Tiếng Việt' }
const EXAMPLES = ['你好，很高兴认识你。', '今天天气怎么样？', 'Tôi muốn học tiếng Trung.', 'Nhà vệ sinh ở đâu?', '我们一起去银行吧。']

function CopyBtn({ text, label = 'Chép' }) {
  const [done, setDone] = useState(false)
  return (
    <button
      type="button"
      className="btn ghost btn-sm"
      onClick={() => {
        navigator.clipboard?.writeText(text).then(
          () => {
            setDone(true)
            setTimeout(() => setDone(false), 1400)
          },
          () => {},
        )
      }}
    >
      {done ? 'Đã chép' : label}
    </button>
  )
}

// Phân tích câu tiếng Trung: pinyin + nghĩa từng từ (chạy offline từ dữ liệu HSK)
function Analysis({ text }) {
  const segs = useMemo(() => segment(text), [text])
  const py = useMemo(() => pinyinSentence(segs), [segs])
  const words = segs.filter((s) => s.han)
  const known = words.filter((s) => s.word).length
  if (!words.length) return null
  return (
    <section className="analysis">
      <div className="analysis-head">
        <h3>Phân tích câu tiếng Trung</h3>
        <span className="muted small">{words.length} từ · {known} từ có trong HSK</span>
      </div>
      <div className="py-line">
        <p className="py-words">
          {segs.map((s, i) =>
            s.han ? (
              <span key={i} className="py-word"><Py text={s.py || ''} className="lg" /></span>
            ) : s.text.trim() ? (
              <span key={i} className="py-punct">{s.text.trim()}</span>
            ) : null,
          )}
        </p>
        <div className="row">
          <SpeakBtn text={text} label="Nghe cả câu" />
          <CopyBtn text={py} label="Chép pinyin" />
        </div>
      </div>
      <ol className="seg-list">
        {segs.map((s, i) =>
          s.han ? (
            <li key={i}>
              <button type="button" className={s.word ? 'seg' : 'seg unknown'} onClick={() => speak(s.text)} title="Bấm để nghe">
                {s.word && <span className="seg-level">HSK {s.word.level}</span>}
                <Py text={s.py || ''} />
                <span className="hz seg-hz">{s.text}</span>
                <span className="seg-vi">{s.word ? s.word.vi : 'Ngoài danh sách HSK'}</span>
                {s.word && <span className="word-hv">{s.word.hv}</span>}
              </button>
            </li>
          ) : s.text.trim() ? (
            <li key={i} className="seg-punct" aria-hidden="true">{s.text}</li>
          ) : null,
        )}
      </ol>
    </section>
  )
}

export default function Translate() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null) // { src, from, to, text, engine }
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [error, setError] = useState('')
  const [history, setHistory] = useStored('translateHistory', [])
  const ctrl = useRef(null)

  const text = input.trim()
  const from = detectLang(text)
  const to = from === 'zh' ? 'vi' : 'zh'

  const run = async (value = text) => {
    const v = value.trim()
    if (!v) return
    ctrl.current?.abort()
    const c = new AbortController()
    ctrl.current = c
    const f = detectLang(v)
    const t = f === 'zh' ? 'vi' : 'zh'
    setStatus('loading')
    setError('')
    try {
      const r = await translate(v, f, t, c.signal)
      if (c.signal.aborted) return
      setResult({ src: v, from: f, to: t, text: r.text, engine: r.engine })
      setStatus('done')
      setHistory((h) => [{ src: v, out: r.text, from: f }, ...h.filter((x) => x.src !== v)].slice(0, 8))
    } catch (e) {
      if (e.name === 'AbortError') return
      setResult(null)
      setStatus('error')
      setError(
        navigator.onLine === false
          ? 'Máy đang không có mạng. Phần phân tích pinyin và nghĩa từng từ bên dưới vẫn dùng được.'
          : 'Chưa kết nối được dịch vụ dịch. Hãy thử lại sau ít phút. Phần phân tích pinyin và nghĩa từng từ bên dưới vẫn dùng được.',
      )
    }
  }

  // Tự dịch khi ngừng gõ 0,9 giây
  useEffect(() => {
    if (!text) {
      ctrl.current?.abort()
      return undefined
    }
    if (result && result.src === text) return undefined
    const t = setTimeout(() => run(text), 900)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  const swap = () => {
    if (result?.text) setInput(result.text)
  }
  const fresh = result && result.src === text
  const chineseText = from === 'zh' ? text : fresh ? result.text : ''

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Công cụ</p>
        <h1>Dịch Trung ↔ Việt</h1>
        <p className="lede">
          Gõ câu tiếng Trung hoặc tiếng Việt, web tự nhận ra ngôn ngữ và dịch. Câu tiếng Trung được tách thành từng từ
          kèm pinyin, nghĩa, âm Hán Việt và cấp HSK để bạn học luôn.
        </p>
        <VoiceNotice />
      </header>

      <div className="tr-dir" aria-live="polite">
        <span className={text ? 'tr-lang active' : 'tr-lang'}>{LANG[from]}</span>
        <button type="button" className="tr-swap" onClick={swap} disabled={!fresh} aria-label="Đảo chiều: dùng bản dịch làm câu gốc" title="Đảo chiều">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 7h12l-3-3M17 17H5l3 3" />
          </svg>
        </button>
        <span className="tr-lang">{LANG[to]}</span>
        <span className="muted small tr-hint">Tự nhận diện ngôn ngữ</span>
      </div>

      <div className="tr-grid">
        <div className="tr-card">
          <label htmlFor="tr-input" className="sr-only">Câu cần dịch</label>
          <textarea
            id="tr-input"
            className={hasHan(input) ? 'tr-input hz-mix' : 'tr-input'}
            value={input}
            maxLength={MAX_CHARS}
            placeholder="Nhập tiếng Trung hoặc tiếng Việt…"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) run()
            }}
          />
          <div className="tr-bar">
            <span className="muted small tabular">{[...input].length}/{MAX_CHARS}</span>
            <div className="row">
              {input && <button type="button" className="btn ghost btn-sm" onClick={() => { setInput(''); setResult(null); setStatus('idle') }}>Xóa</button>}
              {from === 'zh' && text && <SpeakBtn text={text} small />}
              <button type="button" className="btn primary btn-sm" onClick={() => run()} disabled={!text || status === 'loading'}>Dịch</button>
            </div>
          </div>
        </div>

        <div className={`tr-card tr-out ${status}`} aria-live="polite" aria-busy={status === 'loading'}>
          {status === 'error' ? (
            <p className="tr-error">{error}</p>
          ) : result ? (
            <>
              <p className={`tr-result ${result.to === 'zh' ? 'hz' : ''} ${fresh ? '' : 'stale'}`}>{result.text}</p>
              <div className="tr-bar">
                <span className="muted small">{status === 'loading' ? 'Đang dịch…' : `Bản dịch máy · ${result.engine}`}</span>
                <div className="row">
                  {result.to === 'zh' && <SpeakBtn text={result.text} small />}
                  <CopyBtn text={result.text} />
                </div>
              </div>
            </>
          ) : (
            <p className="tr-placeholder">{status === 'loading' ? 'Đang dịch…' : 'Bản dịch sẽ hiện ở đây.'}</p>
          )}
        </div>
      </div>

      {!text && (
        <div className="tr-examples">
          <p className="field-lbl">Thử câu mẫu</p>
          <div className="chips">
            {EXAMPLES.map((e) => (
              <button key={e} type="button" className={hasHan(e) ? 'chip hz-mix' : 'chip'} onClick={() => setInput(e)}>{e}</button>
            ))}
          </div>
        </div>
      )}

      {chineseText && <Analysis text={chineseText} />}

      {history.length > 0 && (
        <section className="tr-history">
          <div className="analysis-head">
            <h3>Dịch gần đây</h3>
            <button type="button" className="linkish small" onClick={() => setHistory([])}>Xóa lịch sử</button>
          </div>
          <ul>
            {history.map((h) => (
              <li key={h.src}>
                <button type="button" onClick={() => setInput(h.src)}>
                  <span className={h.from === 'zh' ? 'hz' : ''}>{h.src}</span>
                  <span className={h.from === 'zh' ? 'muted' : 'muted hz'}>{h.out}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
