import { Link } from 'react-router-dom'
import { levelInfo, newWordCount } from '../data/hsk'
import { useStored } from '../lib/storage'

const LEVELS = [1, 2, 3, 4, 5, 6]
const fmt = (t) => new Date(t).toLocaleString('vi-VN', { dateStyle: 'short', timeStyle: 'short' })

export default function Progress() {
  const [srs] = useStored('srs', {})
  const [best] = useStored('quiz', {})
  const [history, setHistory] = useStored('history', [])
  const now = Date.now()

  const rows = LEVELS.map((l) => {
    const cards = Object.entries(srs).filter(([id]) => id.startsWith(`${l}-`)).map(([, r]) => r)
    const total = newWordCount(l)
    const runs = history.filter((h) => h.level === l)
    const right = runs.reduce((n, h) => n + h.score, 0)
    const all = runs.reduce((n, h) => n + h.total, 0)
    return {
      l,
      total,
      known: cards.filter((r) => r.box >= 3).length,
      seen: cards.length,
      due: cards.filter((r) => r.due <= now).length,
      rate: all ? Math.round((right / all) * 100) : null,
    }
  })

  const seenAll = rows.reduce((n, r) => n + r.seen, 0)
  const knownAll = rows.reduce((n, r) => n + r.known, 0)
  const dueAll = rows.reduce((n, r) => n + r.due, 0)
  const asked = history.reduce((n, h) => n + h.total, 0)
  const rightAll = history.reduce((n, h) => n + h.score, 0)
  const rateAll = asked ? Math.round((rightAll / asked) * 100) : null

  // Gợi ý: ưu tiên cấp có thẻ đến hạn, sau đó cấp có tỉ lệ đúng thấp nhất
  const dueRow = rows.find((r) => r.due > 0)
  const weak = rows.filter((r) => r.rate != null && r.rate < 70).sort((a, b) => a.rate - b.rate)[0]

  if (seenAll === 0 && history.length === 0) {
    return (
      <div className="page">
        <header className="page-head">
          <p className="eyebrow">Hồ sơ học tập</p>
          <h1>Tiến độ</h1>
        </header>
        <div className="panel center">
          <p>Bạn chưa có dữ liệu luyện tập. Hãy ôn một lượt flashcard hoặc làm một bài kiểm tra, tiến độ sẽ hiện ở đây.</p>
          <Link className="btn primary" to="/flashcard">Bắt đầu với flashcard</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Hồ sơ học tập</p>
        <h1>Tiến độ</h1>
        <p className="lede">Dữ liệu được lưu ngay trên thiết bị này, không cần đăng nhập. Đổi trình duyệt hoặc xóa dữ liệu trình duyệt sẽ mất tiến độ.</p>
      </header>

      <div className="prog-summary">
        <div className="panel"><p className="prog-num">{knownAll}</p><p className="muted small">từ đã thuộc</p></div>
        <div className="panel"><p className="prog-num">{seenAll}</p><p className="muted small">từ đã học</p></div>
        <div className="panel"><p className="prog-num">{rateAll == null ? '–' : `${rateAll}%`}</p><p className="muted small">tỉ lệ đúng khi kiểm tra</p></div>
        <div className="panel"><p className="prog-num">{dueAll}</p><p className="muted small">thẻ cần ôn hôm nay</p></div>
      </div>

      {(dueRow || weak) && (
        <div className="panel">
          <h3>Gợi ý ôn tập</h3>
          {dueRow && <p>Có <b>{dueAll}</b> thẻ đến hạn ôn, nhiều nhất ở {levelInfo[dueRow.l].label}. <Link to="/flashcard">Ôn flashcard</Link></p>}
          {weak && <p>Tỉ lệ đúng ở {levelInfo[weak.l].label} mới đạt {weak.rate}%. <Link to={`/kiem-tra?level=${weak.l}`}>Làm lại bài kiểm tra</Link></p>}
        </div>
      )}

      <div className="panel">
        <h3>Theo cấp độ</h3>
        <ul className="prog-list">
          {rows.map((r) => (
            <li key={r.l}>
              <div className="prog-head">
                <b>{levelInfo[r.l].label}</b>
                <span className="muted small">
                  {r.known}/{r.total} thuộc · {r.seen} đã học · Kiểm tra cao nhất {best[r.l] != null ? `${best[r.l]}/10` : '–'}
                  {r.rate != null && ` · đúng ${r.rate}%`}
                </span>
              </div>
              <div className="progress" role="progressbar" aria-label={`Đã thuộc ${levelInfo[r.l].label}`} aria-valuemin={0} aria-valuemax={r.total} aria-valuenow={r.known}>
                <span style={{ width: `${(r.known / r.total) * 100}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <h3>Lịch sử kiểm tra</h3>
        {history.length === 0 ? (
          <p className="muted">Chưa có bài kiểm tra nào.</p>
        ) : (
          <>
            <ul className="prog-hist">
              {history.slice(0, 15).map((h, i) => (
                <li key={i}>
                  <span>{fmt(h.t)}</span>
                  <span>{levelInfo[h.level].label}</span>
                  <b>{h.score}/{h.total}</b>
                </li>
              ))}
            </ul>
            <button type="button" className="btn" onClick={() => window.confirm('Xóa toàn bộ lịch sử kiểm tra?') && setHistory([])}>
              Xóa lịch sử
            </button>
          </>
        )}
      </div>
    </div>
  )
}
