const QUESTION_BANK = [
["Khi có một vấn đề bất ngờ, bạn thường bình tĩnh tìm cách giải quyết.","Luôn luôn","Thường xuyên","Đôi khi","Hiếm khi","Hầu như không"],
["Bạn dễ bắt chuyện với một người mới gặp.","Rất đúng","Khá đúng","Phân vân","Không đúng lắm","Hoàn toàn không"],
["Khi bị làm phiền, bạn có thể nóng giận rất nhanh.","Rất đúng","Khá đúng","Phân vân","Không đúng lắm","Hoàn toàn không"],
["Bạn thường suy nghĩ kỹ trước khi hành động.","Luôn luôn","Thường xuyên","Đôi khi","Hiếm khi","Hầu như không"],
["Bạn cảm thấy thoải mái khi ở một mình trong thời gian dài.","Rất đúng","Khá đúng","Phân vân","Không đúng lắm","Hoàn toàn không"],
["Khi kế hoạch thay đổi vào phút cuối, bạn dễ thích nghi.","Rất đúng","Khá đúng","Phân vân","Không đúng lắm","Hoàn toàn không"],
["Bạn thường nghĩ đến cảm xúc của người khác trước khi quyết định.","Luôn luôn","Thường xuyên","Đôi khi","Hiếm khi","Hầu như không"],
["Bạn có xu hướng hành động ngay rồi mới suy nghĩ về hậu quả.","Rất đúng","Khá đúng","Phân vân","Không đúng lắm","Hoàn toàn không"],
["Bạn dễ lấy lại tinh thần sau một thất bại.","Rất đúng","Khá đúng","Phân vân","Không đúng lắm","Hoàn toàn không"],
["Trong nhóm bạn thường là người tạo không khí vui vẻ.","Rất đúng","Khá đúng","Phân vân","Không đúng lắm","Hoàn toàn không"],
["Bạn thường giữ được bình tĩnh khi bị phê bình.","Luôn luôn","Thường xuyên","Đôi khi","Hiếm khi","Hầu như không"],
["Bạn thích thử những điều mới dù chưa chắc kết quả.","Rất đúng","Khá đúng","Phân vân","Không đúng lắm","Hoàn toàn không"],
["Bạn thường hoàn thành việc đã bắt đầu.","Luôn luôn","Thường xuyên","Đôi khi","Hiếm khi","Hầu như không"],
["Bạn dễ bị cảm xúc của người khác ảnh hưởng.","Rất đúng","Khá đúng","Phân vân","Không đúng lắm","Hoàn toàn không"],
["Khi tranh luận, bạn có thể chấp nhận mình sai.","Luôn luôn","Thường xuyên","Đôi khi","Hiếm khi","Hầu như không"],
["Bạn thường lo lắng về những chuyện chưa xảy ra.","Rất đúng","Khá đúng","Phân vân","Không đúng lắm","Hoàn toàn không"],
["Bạn thích có nhiều người xung quanh hơn là ở một mình.","Rất đúng","Khá đúng","Phân vân","Không đúng lắm","Hoàn toàn không"],
["Bạn kiểm soát được lời nói khi đang rất tức giận.","Rất tốt","Khá tốt","Ở mức vừa","Khó","Rất khó"],
["Bạn thường tìm được điểm tích cực trong hoàn cảnh khó khăn.","Luôn luôn","Thường xuyên","Đôi khi","Hiếm khi","Hầu như không"],
["Bạn có quyết định nhanh khi phải lựa chọn.","Rất đúng","Khá đúng","Phân vân","Không đúng lắm","Hoàn toàn không"],
["Bạn dễ cảm thấy hào hứng với một ý tưởng mới.","Rất đúng","Khá đúng","Phân vân","Không đúng lắm","Hoàn toàn không"],
["Bạn thường cần nhiều thời gian để tin tưởng một người.","Rất đúng","Khá đúng","Phân vân","Không đúng lắm","Hoàn toàn không"],
["Bạn giữ lời hứa ngay cả khi điều đó gây bất tiện.","Luôn luôn","Thường xuyên","Đôi khi","Hiếm khi","Hầu như không"],
["Bạn có thể tập trung lâu vào một việc quan trọng.","Rất dễ","Khá dễ","Bình thường","Khá khó","Rất khó"],
["Bạn thường chủ động giúp người khác khi họ cần.","Luôn luôn","Thường xuyên","Đôi khi","Hiếm khi","Hầu như không"],
["Bạn dễ thay đổi tâm trạng trong ngày.","Rất đúng","Khá đúng","Phân vân","Không đúng lắm","Hoàn toàn không"],
["Bạn thấy tự tin khi phải trình bày ý kiến trước nhiều người.","Rất tự tin","Khá tự tin","Bình thường","Hơi ngại","Rất ngại"],
["Bạn thường cân nhắc rủi ro trước khi thử một việc mạo hiểm.","Luôn luôn","Thường xuyên","Đôi khi","Hiếm khi","Hầu như không"],
["Bạn có thể tha thứ sau khi ai đó chân thành xin lỗi.","Rất dễ","Khá dễ","Tùy trường hợp","Khá khó","Rất khó"],
["Bạn thường tự đặt mục tiêu để phát triển bản thân.","Rất thường xuyên","Thường xuyên","Đôi khi","Hiếm khi","Hầu như không"]
];

const TRAITS = [
  {name:"Ổn định cảm xúc", keys:[0,8,10,18,25], invert:false},
  {name:"Hòa đồng", keys:[1,9,16,26], invert:false},
  {name:"Kiểm soát nóng giận", keys:[2,7,10,17], invert:true},
  {name:"Thận trọng", keys:[3,12,22,23,27], invert:false},
  {name:"Cởi mở & khám phá", keys:[5,11,20,29], invert:false},
  {name:"Đồng cảm", keys:[6,13,24,28], invert:false},
  {name:"Tâm lý vững", keys:[8,10,18,19,21], invert:false}
];

const screens = {
  home:document.querySelector("#home"),
  quiz:document.querySelector("#quiz"),
  result:document.querySelector("#result")
};
let questions=[], index=0, selected=-1, answers=[], currentScores=[];

function shuffle(a){return [...a].sort(()=>Math.random()-0.5)}

function newTest(){
  questions=shuffle(QUESTION_BANK).slice(0,20);
  index=0; selected=-1; answers=[];
  show("quiz"); renderQuestion();
}

function show(name){
  Object.values(screens).forEach(x=>x.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

function renderQuestion(){
  const q=questions[index];
  selected=-1;
  document.querySelector("#questionCount").textContent=`Câu ${index+1} / ${questions.length}`;
  document.querySelector("#questionNumber").textContent=String(index+1).padStart(2,"0");
  document.querySelector("#percent").textContent=Math.round(((index+1)/questions.length)*100)+"%";
  document.querySelector("#progressBar").style.width=((index+1)/questions.length*100)+"%";
  document.querySelector("#questionText").textContent=q[0];
  const box=document.querySelector("#answers"); box.innerHTML="";
  q.slice(1).forEach((text,i)=>{
    const b=document.createElement("button");
    b.className="answer"; b.type="button"; b.textContent=text;
    b.onclick=()=>selectAnswer(i,b);
    box.appendChild(b);
  });
  const next=document.querySelector("#nextBtn");
  next.disabled=true;
  next.textContent=index===questions.length-1?"Xem kết quả  →":"Tiếp tục  →";
}

function selectAnswer(i,btn){
  selected=i;
  document.querySelectorAll(".answer").forEach(x=>x.classList.remove("selected"));
  btn.classList.add("selected");
  document.querySelector("#nextBtn").disabled=false;
}

function finish(){
  const raw=new Array(7).fill(0);
  const count=new Array(7).fill(0);
  questions.forEach((q,qi)=>{
    const answer=answers[qi] ?? 2;
    const value=(4-answer)/4;
    TRAITS.forEach((t,ti)=>{
      if(t.keys.includes(QUESTION_BANK.indexOf(q))){
        raw[ti]+=t.invert?1-value:value; count[ti]++;
      }
    });
  });
  currentScores=raw.map((v,i)=>Math.round((v/(count[i]||1))*100));
  renderResult();
}

function renderResult(){
  show("result");
  const bars=document.querySelector("#resultBars"); bars.innerHTML="";
  const ranked=TRAITS.map((t,i)=>({name:t.name,score:currentScores[i]})).sort((a,b)=>b.score-a.score);
  ranked.forEach(item=>{
    const row=document.createElement("div"); row.className="bar-row";
    row.innerHTML=`<div class="bar-label"><span>${item.name}</span><span>${item.score}%</span></div><div class="bar-bg"><div class="bar-fill" style="width:${item.score}%"></div></div>`;
    bars.appendChild(row);
  });
  const top=ranked[0];
  document.querySelector("#resultTitle").textContent=top.name;
  document.querySelector("#resultText").textContent=getSummary(top.name,top.score);
}

function getSummary(name,score){
  if(name==="Ổn định cảm xúc") return score>=75?"Bạn có xu hướng giữ cân bằng tốt trước những thay đổi và áp lực. Bạn thường có khả năng nhìn sự việc tương đối rõ ràng thay vì để cảm xúc dẫn dắt hoàn toàn.":"Bạn có khả năng ổn định cảm xúc khá tốt, nhưng trong một số tình huống áp lực bạn vẫn có thể cần thời gian để cân bằng lại.";
  if(name==="Hòa đồng") return score>=75?"Bạn có xu hướng cởi mở, dễ kết nối và tạo năng lượng tích cực trong các mối quan hệ.":"Bạn có khả năng giao tiếp tốt nhưng cũng coi trọng khoảng thời gian riêng và những mối quan hệ có chiều sâu.";
  if(name==="Kiểm soát nóng giận") return score>=75?"Bạn thường biết cách dừng lại trước khi phản ứng và có khả năng kiểm soát hành vi khi cảm xúc tăng cao.":"Khi cảm xúc mạnh xuất hiện, bạn có thể phản ứng khá nhanh. Việc tạm dừng vài giây trước khi hành động có thể giúp bạn xử lý tình huống tốt hơn.";
  if(name==="Thận trọng") return score>=75?"Bạn thường cân nhắc hậu quả và thích có cơ sở trước khi quyết định. Đây là lợi thế trong những lựa chọn cần sự chắc chắn.":"Bạn có xu hướng cân bằng giữa suy nghĩ và hành động, tùy vào mức độ quan trọng của tình huống.";
  if(name==="Cởi mở & khám phá") return score>=75?"Bạn khá thích trải nghiệm mới, ý tưởng mới và thường tò mò với những điều khác biệt.":"Bạn có xu hướng chọn lọc trải nghiệm mới, thường thích những điều đã có đủ cơ sở hoặc phù hợp với mình.";
  if(name==="Đồng cảm") return score>=75?"Bạn nhạy với cảm xúc của người khác và thường quan tâm đến tác động của lời nói, hành động lên mọi người.":"Bạn biết quan tâm đến người khác nhưng vẫn có xu hướng giữ ranh giới cảm xúc của riêng mình.";
  return score>=75?"Bạn có nhiều dấu hiệu của sự vững vàng tâm lý: biết phục hồi, giữ bình tĩnh và tìm hướng đi khi gặp khó khăn.":"Bạn có nền tảng tâm lý tương đối ổn và có thể tiếp tục củng cố khả năng phục hồi qua trải nghiệm.";
}

document.querySelector("#startBtn").onclick=newTest;
document.querySelector("#againBtn").onclick=newTest;
document.querySelector("#resetBtn").onclick=()=>show("home");
document.querySelector("#nextBtn").onclick=()=>{
  answers.push(selected);
  if(index<questions.length-1){index++;renderQuestion()}else finish();
};
document.querySelector("#shareBtn").onclick=async()=>{
  const text=`HMG — Phân tích tâm lý\nĐiểm nổi bật: ${document.querySelector("#resultTitle").textContent}`;
  try{await navigator.clipboard.writeText(text);document.querySelector("#shareBtn").textContent="Đã sao chép ✓";setTimeout(()=>document.querySelector("#shareBtn").textContent="Chia sẻ kết quả",1500)}
  catch{alert(text)}
};
