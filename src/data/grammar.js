// Ngữ pháp trọng tâm theo cấp HSK. Mỗi ví dụ: [chữ Hán, pinyin, nghĩa]

export const grammar = {
  1: [
    {
      title: 'Câu chữ 是',
      pattern: 'A + 是 + B',
      note: 'Dùng để nói A là B. Phủ định thêm 不 trước 是.',
      ex: [
        ['我是学生。', 'Wǒ shì xué sheng.', 'Tôi là học sinh.'],
        ['他不是老师。', 'Tā bú shì lǎo shī.', 'Anh ấy không phải là giáo viên.'],
      ],
    },
    {
      title: 'Câu hỏi với 吗',
      pattern: 'Câu trần thuật + 吗？',
      note: 'Thêm 吗 vào cuối câu để tạo câu hỏi có/không. Trật tự từ giữ nguyên.',
      ex: [
        ['你是中国人吗？', 'Nǐ shì Zhōng guó rén ma?', 'Bạn là người Trung Quốc phải không?'],
        ['你喝茶吗？', 'Nǐ hē chá ma?', 'Bạn uống trà không?'],
      ],
    },
    {
      title: 'Tính từ làm vị ngữ',
      pattern: 'Chủ ngữ + 很 + tính từ',
      note: 'Không dùng 是 trước tính từ. 很 ở đây thường chỉ để câu trọn vẹn, nghĩa "rất" rất nhẹ.',
      ex: [
        ['她很漂亮。', 'Tā hěn piào liang.', 'Cô ấy đẹp.'],
        ['今天很冷。', 'Jīn tiān hěn lěng.', 'Hôm nay lạnh.'],
      ],
    },
    {
      title: 'Câu hỏi với đại từ nghi vấn',
      pattern: '什么 / 谁 / 哪儿 / 几 / 多少 đặt đúng vị trí cần hỏi',
      note: 'Từ để hỏi đứng ở đúng chỗ của thông tin cần hỏi, không đảo lên đầu câu như tiếng Anh.',
      ex: [
        ['你叫什么名字？', 'Nǐ jiào shén me míng zi?', 'Bạn tên là gì?'],
        ['你去哪儿？', 'Nǐ qù nǎr?', 'Bạn đi đâu?'],
      ],
    },
    {
      title: 'Số từ + lượng từ + danh từ',
      pattern: 'Số / 这 / 那 + lượng từ + danh từ',
      note: 'Tiếng Trung bắt buộc có lượng từ giữa số và danh từ. 个 là lượng từ phổ biến nhất.',
      ex: [
        ['三个人', 'sān gè rén', 'ba người'],
        ['这本书', 'zhè běn shū', 'quyển sách này'],
      ],
    },
    {
      title: 'Vị trí trạng ngữ',
      pattern: 'Chủ ngữ + thời gian + 在 + nơi chốn + động từ',
      note: 'Thời gian và nơi chốn đứng trước động từ, ngược với tiếng Việt.',
      ex: [
        ['我在学校学习。', 'Wǒ zài xué xiào xué xí.', 'Tôi học ở trường.'],
        ['我明天去北京。', 'Wǒ míng tiān qù Běi jīng.', 'Ngày mai tôi đi Bắc Kinh.'],
      ],
    },
    {
      title: 'Trợ từ 了 (hoàn thành)',
      pattern: 'Động từ + 了 + tân ngữ / câu + 了',
      note: 'Biểu thị hành động đã xảy ra hoặc tình huống đã thay đổi. Phủ định dùng 没, bỏ 了.',
      ex: [
        ['我买了一本书。', 'Wǒ mǎi le yì běn shū.', 'Tôi đã mua một quyển sách.'],
        ['他没去医院。', 'Tā méi qù yī yuàn.', 'Anh ấy không đi bệnh viện.'],
      ],
    },
  ],
  2: [
    {
      title: 'So sánh với 比',
      pattern: 'A + 比 + B + tính từ (+ mức độ)',
      note: 'Không dùng 很 trong câu 比. Muốn nói mức độ dùng 一点儿, 多了, 得多.',
      ex: [
        ['今天比昨天热。', 'Jīn tiān bǐ zuó tiān rè.', 'Hôm nay nóng hơn hôm qua.'],
        ['苹果比西瓜贵一点儿。', 'Píng guǒ bǐ xī guā guì yì diǎnr.', 'Táo đắt hơn dưa hấu một chút.'],
      ],
    },
    {
      title: 'Trợ từ 过 (kinh nghiệm)',
      pattern: 'Động từ + 过',
      note: 'Diễn tả đã từng làm gì. Phủ định: 没 + động từ + 过.',
      ex: [
        ['我去过中国。', 'Wǒ qù guo Zhōng guó.', 'Tôi đã từng đến Trung Quốc.'],
        ['我没吃过羊肉。', 'Wǒ méi chī guo yáng ròu.', 'Tôi chưa từng ăn thịt cừu.'],
      ],
    },
    {
      title: 'Hành động đang diễn ra',
      pattern: '(正)在 + động từ + (呢)',
      note: 'Diễn tả hành động đang tiến hành.',
      ex: [
        ['我正在看电视呢。', 'Wǒ zhèng zài kàn diàn shì ne.', 'Tôi đang xem tivi.'],
        ['妈妈在做饭。', 'Mā ma zài zuò fàn.', 'Mẹ đang nấu cơm.'],
      ],
    },
    {
      title: 'Bổ ngữ trình độ 得',
      pattern: 'Động từ + 得 + (很) + tính từ',
      note: 'Đánh giá hành động được làm như thế nào.',
      ex: [
        ['他说得很好。', 'Tā shuō de hěn hǎo.', 'Anh ấy nói rất giỏi.'],
        ['她跑得很快。', 'Tā pǎo de hěn kuài.', 'Cô ấy chạy rất nhanh.'],
      ],
    },
    {
      title: '因为……所以……',
      pattern: '因为 + nguyên nhân，所以 + kết quả',
      note: 'Bởi vì… cho nên… Có thể lược một trong hai vế.',
      ex: [
        ['因为下雨，所以我没去。', 'Yīn wèi xià yǔ, suǒ yǐ wǒ méi qù.', 'Vì trời mưa nên tôi không đi.'],
        ['因为很忙，他没吃饭。', 'Yīn wèi hěn máng, tā méi chī fàn.', 'Vì bận nên anh ấy chưa ăn cơm.'],
      ],
    },
    {
      title: 'Sắp xảy ra: 要……了',
      pattern: '(快 / 就)要 + động từ + 了',
      note: 'Diễn tả việc sắp xảy ra.',
      ex: [
        ['要下雨了。', 'Yào xià yǔ le.', 'Sắp mưa rồi.'],
        ['火车快要开了。', 'Huǒ chē kuài yào kāi le.', 'Tàu sắp chạy rồi.'],
      ],
    },
  ],
  3: [
    // HSK 2.0 / HSK Standard Course 3. Mỗi điểm có đủ câu khẳng định,
    // phủ định và nghi vấn khi cấu trúc đó cho phép biến đổi tự nhiên.
    {
      title: 'Bổ ngữ kết quả 完 / 好', pattern: 'S + V + 完 / 好 + O',
      note: '完 nhấn mạnh làm xong; 好 nhấn mạnh hoàn tất và sẵn sàng.',
      forms: { affirmative: '我做完作业了。', negative: '我还没做完作业。', question: '你做完作业了吗？' },
      ex: [['饭做好了。', 'Fàn zuò hǎo le.', 'Cơm nấu xong rồi.']],
    },
    {
      title: 'Bổ ngữ kết quả 见 / 到 / 懂', pattern: 'S + V + 见 / 到 / 懂 + O',
      note: 'Bổ ngữ đứng sau động từ, nêu kết quả đạt được: nhìn thấy, tìm được, nghe hiểu.',
      forms: { affirmative: '我听懂了。', negative: '我没听懂。', question: '你听懂了吗？' },
      ex: [['我找到钥匙了。', 'Wǒ zhǎodào yàoshi le.', 'Tôi tìm thấy chìa khóa rồi.']],
    },
    {
      title: 'Bổ ngữ xu hướng đơn 来 / 去', pattern: 'V + 来 / 去',
      note: '来 chỉ hướng về phía người nói; 去 chỉ hướng ra xa người nói.',
      forms: { affirmative: '他走进来了。', negative: '他没有走进来。', question: '他走进来了吗？' },
      ex: [['请把书拿过去。', 'Qǐng bǎ shū ná guòqu.', 'Hãy mang quyển sách qua đó.']],
    },
    {
      title: 'Bổ ngữ xu hướng kép', pattern: 'V + hướng 1 + 来 / 去',
      note: 'Kết hợp hai thành tố chỉ hướng, như 走出来、拿回来、跑过去.',
      forms: { affirmative: '他跑出来了。', negative: '他没跑出来。', question: '他跑出来了吗？' },
      ex: [['老师拿出一本书来。', 'Lǎoshī ná chū yì běn shū lái.', 'Thầy giáo lấy ra một quyển sách.']],
    },
    {
      title: 'Câu tồn tại với 着', pattern: 'Nơi chốn + V + 着 + người / vật',
      note: 'Miêu tả người hoặc vật đang ở trong một trạng thái/vị trí; không nhấn mạnh quá trình hành động.',
      forms: { affirmative: '桌子上放着一本书。', negative: '桌子上没有放书。', question: '桌子上放着书吗？' },
      ex: [['门上写着他的名字。', 'Mén shàng xiězhe tā de míngzi.', 'Trên cửa có ghi tên anh ấy.']],
    },
    {
      title: 'V + 着 + V: trạng thái đi kèm', pattern: 'S + V1 + 着 + V2',
      note: 'V1 mô tả trạng thái/cách thức đi kèm hành động chính V2.',
      forms: { affirmative: '她笑着说话。', negative: '她没有笑着说话。', question: '她笑着说话吗？' },
      ex: [['他拿着手机等车。', 'Tā názhe shǒujī děng chē.', 'Anh ấy cầm điện thoại chờ xe.']],
    },
    {
      title: 'Hai hành động đồng thời 一边……一边……', pattern: 'S + 一边 + V1，一边 + V2',
      note: 'Hai hành động diễn ra cùng lúc, thường do cùng một chủ thể thực hiện.',
      forms: { affirmative: '我一边听音乐，一边做作业。', negative: '我没有一边听音乐，一边做作业。', question: '你一边听音乐，一边做作业吗？' },
      ex: [['他们一边吃饭一边聊天。', 'Tāmen yìbiān chīfàn yìbiān liáotiān.', 'Họ vừa ăn vừa trò chuyện.']],
    },
    {
      title: 'Tính chất kép 又……又……', pattern: 'S + 又 + tính từ 1 + 又 + tính từ 2',
      note: 'Nêu đồng thời hai đặc điểm của cùng một người/vật.',
      forms: { affirmative: '这个西瓜又大又甜。', negative: '这个西瓜又不大又不甜。', question: '这个西瓜又大又甜吗？' },
      ex: [['她又聪明又热情。', 'Tā yòu cōngming yòu rèqíng.', 'Cô ấy vừa thông minh vừa nhiệt tình.']],
    },
    {
      title: 'Mức độ thay đổi 越来越', pattern: 'S + 越来越 + tính từ / động từ tâm lý',
      note: 'Diễn tả mức độ tăng dần theo thời gian; thường không thêm 很 trước tính từ.',
      forms: { affirmative: '天气越来越冷了。', negative: '天气没有越来越冷。', question: '天气是不是越来越冷了？' },
      ex: [['我越来越喜欢中文。', 'Wǒ yuèláiyuè xǐhuan Zhōngwén.', 'Tôi ngày càng thích tiếng Trung.']],
    },
    {
      title: 'Tương quan 越……越……', pattern: '越 + A，越 + B',
      note: 'Diễn tả A thay đổi đến đâu thì B cũng thay đổi tương ứng.',
      forms: { affirmative: '雨越下越大。', negative: '雨没有越下越大。', question: '雨是不是越下越大？' },
      ex: [['你越练习，汉语说得越好。', 'Nǐ yuè liànxí, Hànyǔ shuō de yuè hǎo.', 'Bạn càng luyện tập thì nói tiếng Trung càng tốt.']],
    },
    {
      title: 'Hành động nối tiếp V1了就V2', pattern: 'V1 + 了，就 + V2',
      note: 'Vừa hoàn thành V1 thì tiếp tục/thực hiện V2 ngay sau đó.',
      forms: { affirmative: '我下了课就回家。', negative: '我下了课不回家。', question: '你下了课就回家吗？' },
      ex: [['他吃了饭就去上班。', 'Tā chī le fàn jiù qù shàngbān.', 'Anh ấy ăn cơm xong thì đi làm ngay.']],
    },
    {
      title: 'Trình tự 先……再 / 然后……', pattern: '先 + V1，再 / 然后 + V2',
      note: 'Nêu thứ tự thực hiện các hành động.',
      forms: { affirmative: '我先洗手，再吃饭。', negative: '我没有先洗手，然后就吃饭了。', question: '你先洗手，再吃饭吗？' },
      ex: [['我们先坐地铁，然后走过去。', 'Wǒmen xiān zuò dìtiě, ránhòu zǒu guòqu.', 'Chúng tôi đi tàu điện ngầm trước, sau đó đi bộ qua.']],
    },
    {
      title: 'Câu chữ 把: xử lý/hoàn tất', pattern: 'S + 把 + O xác định + V + kết quả / 了',
      note: 'Đưa tân ngữ xác định lên trước động từ để nhấn mạnh việc xử lý và kết quả. Động từ thường cần thành phần đi sau.',
      forms: { affirmative: '我把作业做完了。', negative: '我没把作业做完。', question: '你把作业做完了吗？' },
      ex: [['请把门关上。', 'Qǐng bǎ mén guānshang.', 'Làm ơn đóng cửa lại.']],
    },
    {
      title: 'Câu chữ 把: vị trí/đích đến', pattern: 'S + 把 + O + V + 在 / 到 + nơi chốn',
      note: 'Dùng khi hành động làm cho tân ngữ được đặt/di chuyển đến một vị trí hoặc đích cụ thể.',
      forms: { affirmative: '他把书放在桌子上了。', negative: '他没把书放在桌子上。', question: '他把书放在桌子上了吗？' },
      ex: [['请把水果拿过来。', 'Qǐng bǎ shuǐguǒ ná guòlái.', 'Hãy mang hoa quả lại đây.']],
    },
    {
      title: 'Câu bị động 被', pattern: 'S chịu tác động + 被 + (người gây ra) + V + thành phần khác',
      note: 'Nêu đối tượng chịu tác động. Phủ định đặt 没(有) trước 被; câu hỏi có thể dùng 吗 hoặc từ để hỏi.',
      forms: { affirmative: '我的手机被弟弟拿走了。', negative: '我的手机没被弟弟拿走。', question: '手机被谁拿走了？' },
      ex: [['蛋糕被大家吃完了。', 'Dàngāo bèi dàjiā chīwán le.', 'Bánh đã bị mọi người ăn hết.']],
    },
    {
      title: 'Câu 是……的', pattern: 'S + 是 + thời gian / nơi chốn / cách thức + V + 的',
      note: 'Nhấn mạnh thông tin về một sự việc đã xảy ra; không dùng để kể mọi hành động quá khứ.',
      forms: { affirmative: '我是昨天到北京的。', negative: '我不是昨天到北京的。', question: '你是昨天到北京的吗？' },
      ex: [['你是怎么来的？', 'Nǐ shì zěnme lái de?', 'Bạn đã đến bằng cách nào?']],
    },
    {
      title: 'So sánh với 比', pattern: 'A + 比 + B + tính từ (+ mức độ)',
      note: 'So sánh hơn; không đặt 很 trước tính từ. Có thể thêm 一点儿、多了 để nêu mức chênh lệch.',
      forms: { affirmative: '今天比昨天冷。', negative: '今天不比昨天冷。', question: '今天比昨天冷吗？' },
      ex: [['姐姐比我大三岁。', 'Jiějie bǐ wǒ dà sān suì.', 'Chị gái hơn tôi ba tuổi.']],
    },
    {
      title: 'So sánh ngang bằng 跟……一样', pattern: 'A + 跟 + B + 一样 + tính từ',
      note: 'Diễn tả hai người/vật có mức độ hoặc đặc điểm giống nhau.',
      forms: { affirmative: '这本书跟那本一样有意思。', negative: '这本书跟那本不一样。', question: '这两本书一样有意思吗？' },
      ex: [['他跟我一样高。', 'Tā gēn wǒ yíyàng gāo.', 'Anh ấy cao bằng tôi.']],
    },
    {
      title: 'So sánh tăng cường 更 / 最', pattern: '更 + tính từ；最 + tính từ',
      note: '更 biểu thị mức độ cao hơn; 最 biểu thị mức cao nhất trong phạm vi so sánh.',
      forms: { affirmative: '今天更暖和。', negative: '今天没有昨天暖和。', question: '今天比昨天更暖和吗？' },
      ex: [['这是我最喜欢的电影。', 'Zhè shì wǒ zuì xǐhuan de diànyǐng.', 'Đây là bộ phim tôi thích nhất.']],
    },
    {
      title: 'Bổ ngữ mức độ 得', pattern: 'V + 得 + tính từ / cụm miêu tả',
      note: '得 đứng sau động từ để bổ sung cách thức/mức độ; phủ định thường đặt 不 vào phần miêu tả.',
      forms: { affirmative: '他说得很清楚。', negative: '他说得不清楚。', question: '他说得清楚吗？' },
      ex: [['她跑得很快。', 'Tā pǎo de hěn kuài.', 'Cô ấy chạy rất nhanh.']],
    },
    {
      title: 'Bổ ngữ trạng thái: tính từ + 得', pattern: 'Tính từ / động từ + 得 + kết quả',
      note: 'Nêu kết quả hoặc mức độ do trạng thái/hành động gây ra.',
      forms: { affirmative: '我累得想睡觉。', negative: '我没累得想睡觉。', question: '你累得想睡觉吗？' },
      ex: [['他高兴得跳了起来。', 'Tā gāoxìng de tiào le qǐlái.', 'Anh ấy vui đến mức nhảy cẫng lên.']],
    },
    {
      title: 'Bổ ngữ khả năng 得 / 不', pattern: 'V + 得 / 不 + bổ ngữ kết quả / xu hướng',
      note: '得 biểu thị có thể đạt kết quả; 不 biểu thị không thể đạt kết quả do điều kiện/khả năng.',
      forms: { affirmative: '我听得懂。', negative: '我听不懂。', question: '你听得懂吗？' },
      ex: [['这个箱子太大，放不进去。', 'Zhège xiāngzi tài dà, fàng bu jìnqu.', 'Vali này to quá, không đặt vào trong được.']],
    },
    {
      title: 'Giới hạn sức chứa 得 / 不下', pattern: 'V + 得 / 不 + 下',
      note: '下 biểu thị chỗ chứa/sức chứa có đủ hay không.',
      forms: { affirmative: '这个教室坐得下二十个人。', negative: '这个教室坐不下二十个人。', question: '这个教室坐得下二十个人吗？' },
      ex: [['我吃不下了。', 'Wǒ chī bu xià le.', 'Tôi ăn không nổi nữa.']],
    },
    {
      title: '一……也 / 都 + 不 / 没', pattern: '一 + lượng từ + danh từ + 也 / 都 + 不 / 没 + V',
      note: 'Nhấn mạnh phủ định hoàn toàn: không… một chút/nào/cái nào cả.',
      forms: { affirmative: '我一点儿也不累。', negative: '我一口水也没喝。', question: '你一点儿也不累吗？' },
      ex: [['他一个苹果都没买。', 'Tā yí ge píngguǒ dōu méi mǎi.', 'Anh ấy không mua quả táo nào cả.']],
    },
    {
      title: 'Đại từ nghi vấn + 都 / 也', pattern: '什么 / 谁 / 哪儿 + 都 / 也 + V',
      note: 'Đại từ nghi vấn kết hợp 都/也 mang nghĩa khái quát như ai cũng, đâu cũng, cái gì cũng; với phủ định có nghĩa không ai/không gì.',
      forms: { affirmative: '谁都知道这件事。', negative: '谁也不知道这件事。', question: '谁都能来吗？' },
      ex: [['我什么都想学。', 'Wǒ shénme dōu xiǎng xué.', 'Tôi muốn học mọi thứ.']],
    },
    {
      title: 'Điều kiện 如果……就……', pattern: '如果 + điều kiện，(S) + 就 + kết quả',
      note: 'Nêu điều kiện giả định và kết quả tương ứng. Có thể lược 如果 hoặc 就 khi ngữ cảnh rõ.',
      forms: { affirmative: '如果下雨，我们就不去。', negative: '如果不下雨，我们就去。', question: '如果下雨，你还去吗？' },
      ex: [['如果你有问题，就问老师。', 'Rúguǒ nǐ yǒu wèntí, jiù wèn lǎoshī.', 'Nếu có câu hỏi thì hãy hỏi giáo viên.']],
    },
    {
      title: 'Điều kiện đủ 只要……就……', pattern: '只要 + điều kiện đủ，就 + kết quả',
      note: 'Chỉ cần điều kiện được nêu thỏa mãn thì kết quả sẽ xảy ra.',
      forms: { affirmative: '只要努力，就会进步。', negative: '只要不放弃，就有机会。', question: '只要努力，就一定能学会吗？' },
      ex: [['只要有时间，我就去看你。', 'Zhǐyào yǒu shíjiān, wǒ jiù qù kàn nǐ.', 'Chỉ cần có thời gian thì tôi sẽ đến thăm bạn.']],
    },
    {
      title: 'Điều kiện cần 只有……才……', pattern: '只有 + điều kiện cần，才 + kết quả',
      note: 'Nhấn mạnh chỉ khi có điều kiện này thì kết quả mới đạt được.',
      forms: { affirmative: '只有多练习，才能说得好。', negative: '只有多练习，才能不怕说错。', question: '只有多练习，才能说得好吗？' },
      ex: [['只有先买票，才能上车。', 'Zhǐyǒu xiān mǎi piào, cái néng shàng chē.', 'Chỉ mua vé trước thì mới được lên xe.']],
    },
    {
      title: 'Ngoại trừ/ngoài ra 除了……以外……', pattern: '除了 + A + 以外，(还 / 也 / 都) + B',
      note: 'Có thể biểu thị loại trừ (ngoài A ra, tất cả…) hoặc bổ sung (ngoài A còn…). Cần dựa vào 都/还/也 để phân biệt.',
      forms: { affirmative: '除了中文以外，我还学英语。', negative: '除了他以外，别人都没来。', question: '除了中文以外，你还学什么？' },
      ex: [['除了周末以外，我每天都上班。', 'Chúle zhōumò yǐwài, wǒ měitiān dōu shàngbān.', 'Ngoài cuối tuần ra, ngày nào tôi cũng đi làm.']],
    },
    {
      title: 'Lựa chọn 或者 và 还是', pattern: 'Câu kể: A 或者 B；câu hỏi lựa chọn: A 还是 B',
      note: '或者 thường dùng trong câu kể; 还是 thường dùng trong câu hỏi lựa chọn.',
      forms: { affirmative: '我喝茶或者咖啡都可以。', negative: '我不喝茶，也不喝咖啡。', question: '你喝茶还是咖啡？' },
      ex: [['我们坐公共汽车或者地铁去。', 'Wǒmen zuò gōnggòng qìchē huòzhě dìtiě qù.', 'Chúng tôi đi bằng xe buýt hoặc tàu điện ngầm.']],
    },
    {
      title: 'Nguyên nhân và kết quả 因为……所以……', pattern: '因为 + nguyên nhân，所以 + kết quả',
      note: 'Liên kết nguyên nhân với kết quả; trong giao tiếp có thể chỉ dùng một trong hai từ nối.',
      forms: { affirmative: '因为下雨，所以我没去。', negative: '因为不舒服，所以他没有来。', question: '因为下雨，所以你没去吗？' },
      ex: [['因为今天很忙，所以我没给你打电话。', 'Yīnwèi jīntiān hěn máng, suǒyǐ wǒ méi gěi nǐ dǎ diànhuà.', 'Vì hôm nay rất bận nên tôi chưa gọi cho bạn.']],
    },
    {
      title: 'Nhượng bộ 虽然……但是……', pattern: '虽然 + tình huống，(但是 / 可是) + kết quả trái kỳ vọng',
      note: 'Nêu sự thật ở vế đầu và kết quả tương phản ở vế sau.',
      forms: { affirmative: '虽然很累，但是他还在工作。', negative: '虽然不远，但是我不想走过去。', question: '虽然很累，但是你还想去吗？' },
      ex: [['虽然下雪了，但是路上不冷。', 'Suīrán xià xuě le, dànshì lùshang bù lěng.', 'Tuyết rơi nhưng ngoài đường không lạnh.']],
    },
    {
      title: 'Mức độ cực điểm 极了', pattern: 'Tính từ + 极了',
      note: 'Đặt 极了 sau tính từ để nhấn mạnh mức độ rất cao.',
      forms: { affirmative: '今天热极了。', negative: '今天一点儿也不热。', question: '今天是不是热极了？' },
      ex: [['这件衣服漂亮极了。', 'Zhè jiàn yīfu piàoliang jí le.', 'Bộ quần áo này đẹp vô cùng.']],
    },
    {
      title: 'Hành động lặp lại 又 và 再', pattern: '又 + hành động đã xảy ra；再 + hành động sẽ xảy ra',
      note: '又 thường nói việc đã lặp lại; 再 thường nói việc lặp lại trong tương lai/yêu cầu.',
      forms: { affirmative: '他昨天来了，今天又来了。', negative: '他明天不再来了。', question: '你明天还会再来吗？' },
      ex: [['请再说一遍。', 'Qǐng zài shuō yí biàn.', 'Xin hãy nói lại một lần nữa.']],
    },
    {
      title: 'Bổ ngữ thời lượng', pattern: 'S + V + (O) + thời lượng',
      note: 'Thời lượng đặt sau động từ; khi có tân ngữ là đại từ, thường lặp lại động từ trước thời lượng.',
      forms: { affirmative: '我学了三年中文。', negative: '我没学三年中文。', question: '你学了几年中文？' },
      ex: [['他等了我半个小时。', 'Tā děng le wǒ bàn ge xiǎoshí.', 'Anh ấy đã đợi tôi nửa tiếng.']],
    },
    {
      title: 'Động từ lặp lại: làm thử/làm một chút', pattern: 'V + V / V一V；động từ hai âm tiết: ABAB',
      note: 'Làm nhẹ sắc thái câu, biểu thị thử hoặc thực hiện trong thời gian ngắn.',
      forms: { affirmative: '你看看这本书。', negative: '你别看看手机了。', question: '你想不想休息休息？' },
      ex: [['我想跟老师商量商量。', 'Wǒ xiǎng gēn lǎoshī shāngliang shāngliang.', 'Tôi muốn bàn thử với giáo viên.']],
    },
    {
      title: 'Sai khiến với 让 / 叫 / 请', pattern: 'S + 让 / 叫 / 请 + người + V',
      note: '让/叫 biểu thị yêu cầu hoặc khiến ai làm gì; 请 tạo lời đề nghị lịch sự.',
      forms: { affirmative: '老师让我回答问题。', negative: '老师没让我回答问题。', question: '老师让你回答问题了吗？' },
      ex: [['请你帮我开一下门。', 'Qǐng nǐ bāng wǒ kāi yíxià mén.', 'Phiền bạn mở cửa giúp tôi.']],
    },
    {
      title: 'Mục đích 为了', pattern: '为了 + mục đích，S + hành động',
      note: 'Đưa mục đích lên trước hành động; có thể nói 为了 + mục đích + 要/得 + V.',
      forms: { affirmative: '为了考试，我每天复习。', negative: '为了考试，我没有出去玩。', question: '你为了考试每天复习吗？' },
      ex: [['为了身体健康，他每天锻炼。', 'Wèile shēntǐ jiànkāng, tā měitiān duànliàn.', 'Vì sức khỏe, ngày nào anh ấy cũng tập thể dục.']],
    },
    {
      title: 'Giới từ 关于', pattern: '关于 + chủ đề，…',
      note: 'Nêu chủ đề đang bàn; thường đứng đầu câu hoặc trước cụm danh từ.',
      forms: { affirmative: '关于这件事，我有一个问题。', negative: '关于这件事，我没有别的问题。', question: '关于这件事，你还有问题吗？' },
      ex: [['关于旅行，我们以后再说。', 'Guānyú lǚxíng, wǒmen yǐhòu zài shuō.', 'Về chuyến đi, chúng ta sẽ nói sau.']],
    },
    {
      title: 'Điều kiện 即使……也……', pattern: '即使 + tình huống giả định，也 + kết quả',
      note: 'Nhượng bộ giả định: cho dù điều kiện xảy ra thì kết quả vẫn không đổi.',
      forms: { affirmative: '即使下雨，我也去。', negative: '即使下雨，我也不坐出租车。', question: '即使下雨，你也去吗？' },
      ex: [['即使很忙，他也每天学习中文。', 'Jíshǐ hěn máng, tā yě měitiān xuéxí Zhōngwén.', 'Dù rất bận, ngày nào anh ấy cũng học tiếng Trung.']],
    },
    {
      title: 'Nhấn mạnh 连……都 / 也……', pattern: '连 + thành phần nhấn mạnh + 都 / 也 + vị ngữ',
      note: 'Nhấn mạnh một trường hợp đặc biệt; thường hàm ý những trường hợp khác cũng vậy.',
      forms: { affirmative: '他连自己的名字都会写。', negative: '他连自己的名字都不会写。', question: '你连这个问题也不会吗？' },
      ex: [['我连一杯水都没喝。', 'Wǒ lián yì bēi shuǐ dōu méi hē.', 'Tôi đến một cốc nước cũng chưa uống.']],
    },
    {
      title: 'Câu hỏi tu từ 能……吗？', pattern: '能 + vị ngữ + 吗？',
      note: 'Tùy ngữ cảnh, câu này có thể hỏi khả năng thực sự hoặc phản vấn để nhấn mạnh.',
      forms: { affirmative: '这件事我能做。', negative: '这件事我不能做。', question: '这件事我能不做吗？' },
      ex: [['你每天都喝这么多，能不胖吗？', 'Nǐ měitiān dōu hē zhème duō, néng bú pàng ma?', 'Ngày nào bạn cũng uống nhiều thế, sao không béo được?']],
    },
    {
      title: 'Câu hỏi lựa chọn A不A', pattern: 'V / tính từ + 不 + V / tính từ？',
      note: 'Dạng câu hỏi chính phản hỏi người nghe có làm/có ở trạng thái đó hay không.',
      forms: { affirmative: '你想去。', negative: '你不想去。', question: '你想不想去？' },
      ex: [['这个办法好不好？', 'Zhège bànfǎ hǎo bu hǎo?', 'Cách này có tốt không?']],
    },
    {
      title: 'Phân biệt 的 / 得 / 地', pattern: 'Định ngữ + 的 + danh từ；V + 得 + bổ ngữ；trạng ngữ + 地 + V',
      note: '的 nối phần bổ nghĩa với danh từ; 得 dẫn bổ ngữ sau động từ; 地 nối trạng ngữ với động từ.',
      forms: { affirmative: '这是我买的书。', negative: '他说得不清楚。', question: '你认真地听了吗？' },
      ex: [['她高兴地笑了。', 'Tā gāoxìng de xiào le.', 'Cô ấy vui vẻ cười.']],
    },
    {
      title: 'Giới từ 对……来说', pattern: '对 + người + 来说，…',
      note: 'Đặt góc nhìn/đối tượng đánh giá ở đầu câu.',
      forms: { affirmative: '对我来说，中文不难。', negative: '对我来说，中文一点儿也不难。', question: '对你来说，中文难吗？' },
      ex: [['对孩子来说，睡眠很重要。', 'Duì háizi lái shuō, shuìmián hěn zhòngyào.', 'Đối với trẻ em, giấc ngủ rất quan trọng.']],
    },
    {
      title: 'Trạng từ 终于', pattern: 'S + 终于 + V / tính từ',
      note: 'Diễn tả sau một thời gian chờ đợi hoặc nỗ lực, sự việc cuối cùng đã xảy ra.',
      forms: { affirmative: '我们终于到了。', negative: '我们终于没有迟到。', question: '你们终于到了吗？' },
      ex: [['他终于找到工作了。', 'Tā zhōngyú zhǎodào gōngzuò le.', 'Cuối cùng anh ấy cũng tìm được việc.']],
    },
    {
      title: 'Câu có thể/khả năng 可以 / 能 / 会', pattern: 'S + 可以 / 能 / 会 + V',
      note: '可以 thường nói được phép/được lựa chọn; 能 nói điều kiện hoặc khả năng; 会 nói kỹ năng đã học.',
      forms: { affirmative: '我会开车。', negative: '我不会开车。', question: '你会开车吗？' },
      ex: [['今天我不能去。', 'Jīntiān wǒ bù néng qù.', 'Hôm nay tôi không thể đi.']],
    },
    {
      title: 'Trợ từ 了 biểu thị thay đổi', pattern: 'Câu miêu tả + 了',
      note: '了 cuối câu có thể báo hiệu tình trạng mới hoặc sự thay đổi; cần phân biệt với 了 sau động từ.',
      forms: { affirmative: '天冷了。', negative: '天还没冷。', question: '天冷了吗？' },
      ex: [['我现在不忙了。', 'Wǒ xiànzài bù máng le.', 'Bây giờ tôi không bận nữa.']],
    },
    {
      title: 'Kinh nghiệm 过', pattern: 'S + V + 过 + O',
      note: 'Diễn tả kinh nghiệm đã từng có; phủ định dùng 没(有) + V + 过.',
      forms: { affirmative: '我去过北京。', negative: '我没去过北京。', question: '你去过北京吗？' },
      ex: [['你吃过北京烤鸭吗？', 'Nǐ chī guo Běijīng kǎoyā ma?', 'Bạn từng ăn vịt quay Bắc Kinh chưa?']],
    },
    {
      title: 'Trạng thái đang diễn ra 在 / 正在……呢', pattern: 'S + (正)在 + V + (呢)',
      note: '在/正在 trước động từ nhấn mạnh hành động đang diễn ra; phủ định thường dùng 没(有)在.',
      forms: { affirmative: '我正在看书呢。', negative: '我没在看电视。', question: '你在做什么呢？' },
      ex: [['妈妈在厨房做饭。', 'Māma zài chúfáng zuò fàn.', 'Mẹ đang nấu cơm trong bếp.']],
    },
    {
      title: 'Từ chỉ khả năng/suy đoán 可能', pattern: 'S + 可能 + V / tính từ',
      note: '可能 biểu thị khả năng phỏng đoán; thường đứng trước động từ/tính từ.',
      forms: { affirmative: '他可能在家。', negative: '他可能不在家。', question: '他可能在家吗？' },
      ex: [['明天可能会下雨。', 'Míngtiān kěnéng huì xià yǔ.', 'Ngày mai có thể sẽ mưa.']],
    },
    {
      title: 'Cách nói “càng… càng…” và thay đổi', pattern: '越 + A + 越 + B / 越来越 + Adj',
      note: '越……越…… biểu thị hai yếu tố biến đổi tương ứng; 越来越 nhấn mạnh mức độ tăng dần theo thời gian.',
      forms: { affirmative: '他越说越高兴。', negative: '他没有越说越高兴。', question: '他是不是越说越高兴？' },
      ex: [['路越来越宽了。', 'Lù yuèláiyuè kuān le.', 'Đường ngày càng rộng.']],
    },
  ],
  4: [
    {
      title: '不仅……而且……',
      pattern: '不仅 + A，而且 + B',
      note: 'Không những… mà còn…',
      ex: [
        ['她不仅漂亮，而且很聪明。', 'Tā bù jǐn piào liang, ér qiě hěn cōng ming.', 'Cô ấy không những đẹp mà còn thông minh.'],
        ['这个方法不仅简单，而且有效。', 'Zhè ge fāng fǎ bù jǐn jiǎn dān, ér qiě yǒu xiào.', 'Cách này không chỉ đơn giản mà còn hiệu quả.'],
      ],
    },
    {
      title: '无论……都……',
      pattern: '无论 + từ để hỏi / A 还是 B，都 + kết quả',
      note: 'Bất kể thế nào kết quả cũng không đổi.',
      ex: [
        ['无论多忙，他都坚持跑步。', 'Wú lùn duō máng, tā dōu jiān chí pǎo bù.', 'Dù bận đến đâu anh ấy vẫn kiên trì chạy bộ.'],
        ['无论谁来，我都不见。', 'Wú lùn shéi lái, wǒ dōu bú jiàn.', 'Bất kể ai đến tôi cũng không gặp.'],
      ],
    },
    {
      title: '尽管……还是……',
      pattern: '尽管 + sự thật，(chủ ngữ) + 还是 / 仍然 + kết quả',
      note: 'Mặc dù… nhưng vẫn…',
      ex: [
        ['尽管很累，他还是完成了工作。', 'Jǐn guǎn hěn lèi, tā hái shi wán chéng le gōng zuò.', 'Dù rất mệt, anh ấy vẫn hoàn thành công việc.'],
        ['尽管失败了，我们还是很骄傲。', 'Jǐn guǎn shī bài le, wǒ men hái shi hěn jiāo ào.', 'Dù thất bại, chúng tôi vẫn rất tự hào.'],
      ],
    },
    {
      title: '连……都 / 也……',
      pattern: '连 + đối tượng nhấn mạnh + 都 / 也 + động từ',
      note: 'Đến cả… cũng…',
      ex: [
        ['他连一个汉字都不认识。', 'Tā lián yí gè Hàn zì dōu bú rèn shi.', 'Anh ấy đến một chữ Hán cũng không biết.'],
        ['这个问题连孩子也懂。', 'Zhè ge wèn tí lián hái zi yě dǒng.', 'Vấn đề này đến trẻ con cũng hiểu.'],
      ],
    },
    {
      title: '只要……就……',
      pattern: '只要 + điều kiện，就 + kết quả',
      note: 'Chỉ cần… thì…',
      ex: [
        ['只要你努力，就一定能成功。', 'Zhǐ yào nǐ nǔ lì, jiù yí dìng néng chéng gōng.', 'Chỉ cần bạn cố gắng thì nhất định sẽ thành công.'],
        ['只要有时间，我就去游泳。', 'Zhǐ yào yǒu shí jiān, wǒ jiù qù yóu yǒng.', 'Chỉ cần có thời gian là tôi đi bơi.'],
      ],
    },
    {
      title: '既然……就……',
      pattern: '既然 + sự thật đã biết，就 + đề nghị',
      note: 'Đã… thì…',
      ex: [
        ['既然你不舒服，就早点儿休息吧。', 'Jì rán nǐ bù shū fu, jiù zǎo diǎnr xiū xi ba.', 'Bạn đã thấy không khỏe thì nghỉ sớm đi.'],
        ['既然决定了，就别放弃。', 'Jì rán jué dìng le, jiù bié fàng qì.', 'Đã quyết định rồi thì đừng bỏ cuộc.'],
      ],
    },
  ],
  5: [
    {
      title: '与其……不如……',
      pattern: '与其 + A，不如 + B',
      note: 'Thà làm B còn hơn A. Người nói chọn B.',
      ex: [
        ['与其在家等，不如出去找。', 'Yǔ qí zài jiā děng, bù rú chū qu zhǎo.', 'Thay vì ở nhà chờ, chi bằng ra ngoài tìm.'],
        ['与其抱怨，不如想办法。', 'Yǔ qí bào yuàn, bù rú xiǎng bàn fǎ.', 'Than phiền chẳng bằng nghĩ cách.'],
      ],
    },
    {
      title: '即使……也……',
      pattern: '即使 + giả định，也 + kết quả không đổi',
      note: 'Cho dù… cũng…',
      ex: [
        ['即使下雨，比赛也不会取消。', 'Jí shǐ xià yǔ, bǐ sài yě bú huì qǔ xiāo.', 'Cho dù mưa, trận đấu cũng không bị hủy.'],
        ['即使很难，我也要试试。', 'Jí shǐ hěn nán, wǒ yě yào shì shi.', 'Dù khó, tôi cũng muốn thử.'],
      ],
    },
    {
      title: '宁可……也不……',
      pattern: '宁可 + A，也不 + B',
      note: 'Thà A chứ không B. Nhấn mạnh sự lựa chọn dứt khoát.',
      ex: [
        ['我宁可走路，也不坐他的车。', 'Wǒ nìng kě zǒu lù, yě bú zuò tā de chē.', 'Tôi thà đi bộ chứ không đi xe của anh ta.'],
        ['他宁可少赚钱，也不加班。', 'Tā nìng kě shǎo zhuàn qián, yě bù jiā bān.', 'Anh ấy thà kiếm ít tiền chứ không làm thêm giờ.'],
      ],
    },
    {
      title: 'Câu phản vấn 难道……吗',
      pattern: '难道 + câu + 吗？',
      note: 'Hỏi để khẳng định ý ngược lại: lẽ nào…?',
      ex: [
        ['难道你不知道吗？', 'Nán dào nǐ bù zhī dào ma?', 'Lẽ nào bạn không biết sao?'],
        ['难道这是我的错吗？', 'Nán dào zhè shì wǒ de cuò ma?', 'Chẳng lẽ đây là lỗi của tôi?'],
      ],
    },
    {
      title: '以……为……',
      pattern: '以 + A + 为 + B',
      note: 'Lấy A làm B. Dùng nhiều trong văn viết.',
      ex: [
        ['我们以学生为中心。', 'Wǒ men yǐ xué sheng wéi zhōng xīn.', 'Chúng tôi lấy học sinh làm trung tâm.'],
        ['他以帮助别人为快乐。', 'Tā yǐ bāng zhù bié rén wéi kuài lè.', 'Anh ấy lấy việc giúp người khác làm niềm vui.'],
      ],
    },
    {
      title: '何况',
      pattern: 'Mệnh đề 1，何况 + mệnh đề 2',
      note: 'Huống hồ, huống chi. Vế sau là trường hợp càng hiển nhiên hơn.',
      ex: [
        ['大人都搬不动，何况孩子呢？', 'Dà ren dōu bān bu dòng, hé kuàng hái zi ne?', 'Người lớn còn không khiêng nổi, huống hồ trẻ con?'],
        ['这么简单的题他都不会，何况难题。', 'Zhè me jiǎn dān de tí tā dōu bú huì, hé kuàng nán tí.', 'Câu dễ thế này anh ấy còn không làm được, huống chi câu khó.'],
      ],
    },
  ],
  6: [
    {
      title: '之所以……是因为……',
      pattern: 'Chủ ngữ + 之所以 + kết quả，是因为 + nguyên nhân',
      note: 'Sở dĩ… là vì… Nêu kết quả trước, nhấn mạnh nguyên nhân.',
      ex: [
        ['他之所以成功，是因为他一直坚持。', 'Tā zhī suǒ yǐ chéng gōng, shì yīn wèi tā yì zhí jiān chí.', 'Sở dĩ anh ấy thành công là vì luôn kiên trì.'],
        ['我之所以选择这里，是因为环境好。', 'Wǒ zhī suǒ yǐ xuǎn zé zhè lǐ, shì yīn wèi huán jìng hǎo.', 'Tôi chọn nơi này là vì môi trường tốt.'],
      ],
    },
    {
      title: '非……不可',
      pattern: '非 + động từ / người + 不可',
      note: 'Nhất định phải, không thể không.',
      ex: [
        ['这件事非你去不可。', 'Zhè jiàn shì fēi nǐ qù bù kě.', 'Việc này nhất định phải là bạn đi.'],
        ['这部电影我非看不可。', 'Zhè bù diàn yǐng wǒ fēi kàn bù kě.', 'Bộ phim này tôi nhất định phải xem.'],
      ],
    },
    {
      title: '不至于',
      pattern: '不至于 + mức độ / kết quả',
      note: 'Chưa đến mức, không đến nỗi.',
      ex: [
        ['他不至于连这个都不知道吧。', 'Tā bú zhì yú lián zhè ge dōu bù zhī dào ba.', 'Anh ấy chắc không đến nỗi cái này cũng không biết.'],
        ['问题不至于这么严重。', 'Wèn tí bú zhì yú zhè me yán zhòng.', 'Vấn đề chưa đến mức nghiêm trọng như vậy.'],
      ],
    },
    {
      title: '固然……但……',
      pattern: 'A 固然 + đánh giá，但 / 可是 + B',
      note: 'Thừa nhận A đúng, nhưng nhấn mạnh B.',
      ex: [
        ['钱固然重要，但健康更重要。', 'Qián gù rán zhòng yào, dàn jiàn kāng gèng zhòng yào.', 'Tiền tất nhiên quan trọng, nhưng sức khỏe còn quan trọng hơn.'],
        ['这个方法固然好，但成本太高。', 'Zhè ge fāng fǎ gù rán hǎo, dàn chéng běn tài gāo.', 'Cách này tuy tốt nhưng chi phí quá cao.'],
      ],
    },
    {
      title: '以免',
      pattern: 'Hành động，以免 + kết quả xấu',
      note: 'Để tránh, kẻo.',
      ex: [
        ['出门带伞，以免淋雨。', 'Chū mén dài sǎn, yǐ miǎn lín yǔ.', 'Ra ngoài mang ô để khỏi bị ướt mưa.'],
        ['请提前出发，以免迟到。', 'Qǐng tí qián chū fā, yǐ miǎn chí dào.', 'Hãy xuất phát sớm để tránh đến muộn.'],
      ],
    },
    {
      title: 'Thành ngữ bốn chữ (成语)',
      pattern: 'Thành ngữ làm vị ngữ, định ngữ hoặc trạng ngữ',
      note: 'Thành ngữ xuất hiện dày ở HSK 6. Học kèm câu chuyện gốc để nhớ lâu.',
      ex: [
        ['他做事一丝不苟。', 'Tā zuò shì yì sī bù gǒu.', 'Anh ấy làm việc tỉ mỉ, không qua loa.'],
        ['这句话是画蛇添足。', 'Zhè jù huà shì huà shé tiān zú.', 'Câu này là vẽ rắn thêm chân (thừa thãi).'],
      ],
    },
  ],
}
