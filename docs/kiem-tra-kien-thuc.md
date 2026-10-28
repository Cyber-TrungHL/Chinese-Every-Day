# Báo cáo rà soát kiến thức

Căn cứ: PDF "HSK 考试大纲" (中外语言交流合作中心, công bố 2025-11, thực thi 2026-07, gồm từ vựng, chữ Hán, ngữ pháp cấp 1–9).

## Đã sửa
| Tệp | Nội dung | Lý do |
| --- | --- | --- |
| `src/data/pinyin.js` | sh: bỏ câu "miền Bắc phát âm uốn lưỡi" | Sai: "s" miền Bắc là [s]; uốn lưỡi [ʂ] gần với giọng miền Nam |
| `src/data/pinyin.js` | x, j, zh, r, b, d, g, h, z, s, e | Bỏ cách nói "giống hẳn" âm Việt; thêm mô tả vị trí lưỡi/môi và IPA |
| `src/data/pinyin.js` | 4 thanh điệu | Ghi rõ so sánh với thanh điệu Việt chỉ gần đúng |
| `src/lib/speak.js` | Phát âm | Không đọc bằng giọng không phải tiếng Trung khi máy đã nạp giọng mà không có `zh` |
| `src/App.jsx` | Nhãn dữ liệu | Không gọi là "chuẩn"; ghi rõ là hệ HSK 2.0 cũ |

## Phát hiện cần xử lý tiếp
1. **Từ vựng trên web là HSK 2.0 (4993 dòng: 150/147/300/598/1298/2500), không phải đề cương mới.** Phân tích PDF cho khoảng 299/196/498/992/1594/1797 mục theo cấp (cần đối chiếu thủ công). Chỉ 3119 từ trùng giữa hai danh sách.
2. Chưa thay dữ liệu vì nghĩa tiếng Việt, loại từ và ví dụ của danh sách mới chưa có nguồn xác thực. Không tự tạo nghĩa.
3. 78 từ có pinyin khác PDF khi so sánh tự động, phần lớn do quy ước: PDF ghi biến điệu 不/一 (búdàn, yìbān) và viết liền âm tiết, web ghi thanh gốc và tách âm tiết. Cần giáo viên xác nhận quy ước nào dùng cho web.
4. **Chưa rà soát:** `grammar.js`, ví dụ câu, dữ liệu nét chữ và bộ thủ, đáp án bài tập, so với phần ngữ pháp và chữ Hán của PDF. Đánh dấu "cần xác minh".
5. Giọng đọc là giọng tổng hợp của trình duyệt, không có tệp âm thanh chuẩn nên không thể khẳng định là phát âm Putonghua chuẩn.
6. Mô tả âm bằng IPA chưa đối chiếu với giáo trình ngữ âm cụ thể. Nên nhờ giáo viên hoặc người bản ngữ kiểm tra.

Công cụ đối chiếu: `scripts/compare_syllabus.py`.
