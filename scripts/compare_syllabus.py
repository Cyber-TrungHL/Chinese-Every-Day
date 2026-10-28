"""Đối chiếu từ vựng của web với đề cương HSK mới (PDF của bạn).
Dùng:  pdftotext -layout de-cuong.pdf hsk.txt  &&  python3 scripts/compare_syllabus.py hsk.txt
Chỉ in báo cáo, không sửa dữ liệu và không sao chép đề cương vào repo."""
import json, re, sys, collections
rows = collections.defaultdict(list)
for l in open(sys.argv[1], encoding='utf-8', errors='ignore'):
    m = re.match(r'^\s*(\d+)\s+(\d)(（\d）)?\s+(\S+)\s+(\S+)', l)
    if m: rows[m.group(4)].append(int(m.group(2)))
site = json.load(open('src/data/hsk-words.json', encoding='utf-8'))
hz = {s[1] for s in site}
print('Đề cương (cấp 1-6):', len(rows), '| Web:', len(hz), '| Trùng:', len(hz & set(rows)))
print('Chỉ có ở web (mẫu):', sorted(hz - set(rows))[:20])
print('Chỉ có ở đề cương (mẫu):', sorted(set(rows) - hz)[:20])
