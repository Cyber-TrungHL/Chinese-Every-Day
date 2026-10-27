// ====== CẤU HÌNH NÚT LIÊN HỆ ======
// Dán đường link của bạn vào CONTACT_URL (Facebook, Zalo, Messenger, Google Form, email…).
//   Ví dụ: 'https://zalo.me/0352111727'
//          'https://m.me/tenfanpage'
//          'https://www.facebook.com/tenban'
//          'mailto:ban@example.com'
// Có thể đặt bằng biến môi trường khi build: VITE_CONTACT_URL=https://... npm run build
// Để trống ('') thì nút liên hệ sẽ bị ẩn.

export const CONTACT_URL = import.meta.env.VITE_CONTACT_URL || 'https://www.facebook.com/ho.le.trung.01'

// Chữ hiển thị trên nút
export const CONTACT_LABEL = import.meta.env.VITE_CONTACT_LABEL || 'Liên hệ'

// ====== CẤU HÌNH DỊCH ======
// Thứ tự dịch vụ dịch được thử. Nếu dịch vụ đầu lỗi sẽ chuyển sang dịch vụ sau.
//   'google'   : Google Dịch (endpoint công khai translate.googleapis.com, không cần khóa)
//   'mymemory' : MyMemory (api.mymemory.translated.net, miễn phí ~5000 ký tự/ngày/IP)
export const TRANSLATE_ENGINES = ['google', 'mymemory']
// Email (không bắt buộc) để MyMemory nâng hạn mức lên ~50.000 ký tự/ngày
export const MYMEMORY_EMAIL = import.meta.env.VITE_MYMEMORY_EMAIL || ''
