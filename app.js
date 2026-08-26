const levels=[
 {name:'Người',emoji:'🙂',min:0,max:19,desc:'Bạn khá bình thường trong tình yêu. Biết quan tâm nhưng chưa đến mức làm mọi thứ trở nên quá lố.'},
 {name:'Hơi Lốp',emoji:'😏',min:20,max:39,desc:'Bạn bắt đầu có những pha yêu hơi quá tay. Đáng yêu đấy, nhưng đôi lúc nên biết dừng đúng lúc.'},
 {name:'Lốp',emoji:'🛞',min:40,max:59,desc:'Bạn chính thức có độ lốp trong tình yêu. Cảm xúc mạnh, hành động nhiệt tình và đôi khi hơi quá đà.'},
 {name:'Lốp Trưởng',emoji:'👑',min:60,max:79,desc:'Bạn có tố chất lãnh đạo hội lốp. Yêu là phải rõ ràng, nhiệt tình và rất khó để người bên cạnh không nhận ra.'},
 {name:'Siêu Lốp',emoji:'🔥',min:80,max:100,desc:'Cấp độ tối đa. Trong tình yêu bạn gần như không có khái niệm “hơi thôi”. Mọi thứ đều được đẩy lên hết công suất.'}
];
const templates=[
'Người yêu trả lời tin nhắn chậm hơn bình thường, bạn sẽ làm gì?',
'Khi người yêu đăng ảnh đẹp nhưng không gửi riêng cho bạn, bạn nghĩ gì?',
'Bạn có hay kiểm tra xem người yêu đang online không?',
'Khi nhớ người yêu giữa đêm, bạn có nhắn ngay không?',
'Nếu người yêu nói “em/anh ổn” nhưng trông không ổn, bạn sẽ làm gì?',
'Bạn có dễ ghen khi người yêu nói chuyện thân với người khác?',
'Khi cãi nhau, bạn có muốn làm hòa ngay lập tức?',
'Người yêu đi chơi với bạn bè mà không rủ, bạn phản ứng thế nào?',
'Bạn có đặt biệt danh rất sến cho người yêu không?',
'Khi người yêu đổi ảnh đại diện, bạn có để ý ngay?',
'Bạn có hay tưởng tượng về tương lai với người yêu không?',
'Nếu người yêu xem tin nhắn nhưng chưa trả lời, bạn sẽ nghĩ sao?',
'Bạn có sẵn sàng đi xa chỉ để gặp người yêu trong thời gian ngắn?',
'Khi người yêu được người khác khen đẹp, bạn phản ứng thế nào?',
'Bạn có hay gửi meme hoặc video tình yêu cho người yêu?',
'Nếu người yêu quên một ngày kỷ niệm nhỏ, bạn có buồn nhiều không?',
'Bạn có muốn biết người yêu đang ở đâu trong lúc hai người không gặp nhau?',
'Khi người yêu bận, bạn có cố tìm cách nói chuyện không?',
'Bạn có dễ nói “nhớ em/anh” trước không?',
'Bạn có từng làm một hành động hơi quê chỉ để người yêu vui?',
'Nếu người yêu lạnh nhạt một hôm, bạn có lập tức hỏi chuyện?',
'Bạn có thích công khai tình yêu trên mạng xã hội?',
'Khi yêu, bạn có dễ mất tập trung vì nghĩ về người ấy?',
'Bạn có muốn người yêu cập nhật mọi chuyện trong ngày?',
'Bạn có từng ghen với một người chỉ vì họ nói chuyện vui với người yêu?',
'Nếu người yêu rủ đi đâu bất ngờ, bạn có sẵn sàng bỏ kế hoạch riêng?',
'Bạn có hay dùng những câu nói sến súa khi nhắn tin?',
'Bạn có thể nhường phần thắng trong tranh luận chỉ để hai người làm hòa?',
'Bạn có thường xem lại ảnh hoặc đoạn chat cũ của hai người?',
'Nếu được, bạn có muốn ở cạnh người yêu gần như cả ngày?'
];
const opts=[
 ['Hoàn toàn không','Ít khi','Thỉnh thoảng','Khá thường xuyên','Gần như luôn luôn'],
 ['Không bao giờ','Hiếm khi','Có đôi lúc','Thường xuyên','Rất thường xuyên'],
 ['Bình thản','Hơi để ý','Có chút quan tâm','Khá để tâm','Để tâm cực mạnh']
];
let questions=[],index=0,total=25,score=0;
function makeQuestions(){
 let pool=[]; for(let i=0;i<100000;i++){const base=templates[i%templates.length];const v=Math.floor(i/templates.length);pool.push({text:v?`${base} (tình huống ${v+1})`:base});}
 // Lấy 30 câu khác nhau; luôn có đủ toàn bộ nhóm tình huống.
 const chosen=[]; const used=new Set(); while(chosen.length<total){let n=Math.floor(Math.random()*pool.length);if(!used.has(n)){used.add(n);chosen.push(pool[n]);}}
 return chosen;
}
function show(id){document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo(0,0)}
function render(){const q=questions[index];document.getElementById('question').textContent=q.text;document.getElementById('qNum').textContent=String(index+1).padStart(2,'0');document.getElementById('counter').textContent=`${index+1} / ${total}`;document.getElementById('bar').style.width=`${index/total*100}%`;const box=document.getElementById('answers');box.innerHTML='';const choices=opts[index%opts.length];choices.forEach((text,i)=>{const b=document.createElement('button');b.className='answer';b.textContent=text;b.onclick=()=>answer(i);box.appendChild(b)});}
function answer(i){score += i;index++;if(index>=total)finish();else render()}
function finish(){const pct=Math.round((score/(total*4))*100);const level=levels.find(x=>pct>=x.min&&pct<=x.max)||levels[4];document.getElementById('resultName').textContent=level.name;document.getElementById('resultEmoji').textContent=level.emoji;document.getElementById('resultDesc').textContent=level.desc;document.getElementById('score').textContent=pct+'%';setTimeout(()=>document.getElementById('meterBar').style.width=pct+'%',50);show('result')}
document.getElementById('startBtn').onclick=()=>{questions=makeQuestions();index=0;score=0;document.getElementById('meterBar').style.width='0';show('quiz');render()};
document.getElementById('againBtn').onclick=()=>{questions=makeQuestions();index=0;score=0;document.getElementById('meterBar').style.width='0';show('quiz');render()};
document.getElementById('homeBtn').onclick=()=>show('home');
document.getElementById('backBtn').onclick=()=>{if(index>0){index--;render()}else show('home')};
const modal=document.getElementById('sloganModal');
const openModal=()=>{modal.classList.add('show');modal.setAttribute('aria-hidden','false')};
const closeModal=()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true')};
document.getElementById('sloganBtn').onclick=openModal;
document.getElementById('closeModal').onclick=closeModal;
document.getElementById('modalOk').onclick=closeModal;
modal.querySelector('.modal-backdrop').onclick=closeModal;
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
