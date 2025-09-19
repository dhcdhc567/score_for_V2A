// ====== 视频对列表 ======
const videoPairs = [
  ['kling/0_纪实摄影风格_一位年轻女性的头发正在从黑色逐渐变为金色_她的头发.mp4', 'ours/0_纪实摄影风格_一位年轻女性的头发正在从黑色逐渐变为金色_她的头发.mp4'],
  ['kling/10_纪实摄影风格_一匹棕色骏马正在一片绿油油的草地上悠闲地吃草_靠近.mp4', 'ours/10_纪实摄影风格_一匹棕色骏马正在一片绿油油的草地上悠闲地吃草_靠近.mp4'],
  ['kling/11_纪实摄影风格_镜头环绕拍摄巴塞罗那圣家堂_圣家堂高耸入云_尖塔林.mp4', 'ours/11_纪实摄影风格_镜头环绕拍摄巴塞罗那圣家堂_圣家堂高耸入云_尖塔林.mp4'],
  ['kling/12_延时摄影捕捉到热淋浴蒸汽与冷毛巾接触的瞬间变化_蒸汽缓缓升起_与.mp4', 'ours/12_延时摄影捕捉到热淋浴蒸汽与冷毛巾接触的瞬间变化_蒸汽缓缓升起_与.mp4'],
  ['kling/13_纪实摄影风格_一只手握着尖锐的铅笔_缓缓地刺向一只薄薄的橡胶手套.mp4', 'ours/13_纪实摄影风格_一只手握着尖锐的铅笔_缓缓地刺向一只薄薄的橡胶手套.mp4'],
  ['kling/14_纪实摄影风格_一只棕色的拉布拉多犬最初位于桌子左侧_它身体健壮_.mp4', 'ours/14_纪实摄影风格_一只棕色的拉布拉多犬最初位于桌子左侧_它身体健壮_.mp4'],
  ['kling/15_纪实摄影风格_两只洁白的绵羊在绿油油的草地上悠闲地行走_它们毛发.mp4', 'ours/15_纪实摄影风格_两只洁白的绵羊在绿油油的草地上悠闲地行走_它们毛发.mp4'],
  ['kling/16_纪实摄影风格_一位中年男子正在厨房里专注地切割食材_他穿着简单的.mp4', 'ours/16_纪实摄影风格_一位中年男子正在厨房里专注地切割食材_他穿着简单的.mp4'],
  ['kling/17_纪实摄影风格_一条白色布料在装满肥皂水的铁桶中轻轻摆动_水面上泛.mp4', 'ours/17_纪实摄影风格_一条白色布料在装满肥皂水的铁桶中轻轻摆动_水面上泛.mp4'],
  ['kling/18_纪实摄影风格的延时摄影_捕捉一锅蜂蜜随温度升高而变化的过程_金黄.mp4', 'ours/18_纪实摄影风格的延时摄影_捕捉一锅蜂蜜随温度升高而变化的过程_金黄.mp4'],
  ['kling/19_延时摄影记录了三氧化二砷在室温下逐渐升温时的形态变化过程_画面中.mp4', 'ours/19_延时摄影记录了三氧化二砷在室温下逐渐升温时的形态变化过程_画面中.mp4'],
  ['kling/1_纪实摄影风格_镜头环绕拍摄壮丽的优胜美地国家公园_阳光洒在巍峨的.mp4', 'ours/1_纪实摄影风格_镜头环绕拍摄壮丽的优胜美地国家公园_阳光洒在巍峨的.mp4'],
  ['kling/20_纪实摄影风格_镜头环绕拍摄一个摆满书籍的书架_书架上整齐排列着各.mp4', 'ours/20_纪实摄影风格_镜头环绕拍摄一个摆满书籍的书架_书架上整齐排列着各.mp4'],
  ['kling/21_纪实摄影风格_两位中年男女正在一起清扫地板_男子穿着蓝色工作服_.mp4', 'ours/21_纪实摄影风格_两位中年男女正在一起清扫地板_男子穿着蓝色工作服_.mp4'],
  ['kling/22_纪实摄影风格_一个小巧的橡胶沙滩球被用力抛向地面_球在触地瞬间产.mp4', 'ours/22_纪实摄影风格_一个小巧的橡胶沙滩球被用力抛向地面_球在触地瞬间产.mp4'],
  ['kling/23_纪实摄影风格_镜头缓缓从故宫的宏伟建筑群中拉远_展现其全貌_红墙.mp4', 'ours/23_纪实摄影风格_镜头缓缓从故宫的宏伟建筑群中拉远_展现其全貌_红墙.mp4'],
  ['kling/24_纪实摄影风格_黄色和红色颜料以相等比例迅速混合_画面中两只手正快.mp4', 'ours/24_纪实摄影风格_黄色和红色颜料以相等比例迅速混合_画面中两只手正快.mp4'],
  ['kling/25_第一人称视角斜拍镜头_空中移动拍摄一个精致的花瓶_花瓶由透明玻璃.mp4', 'ours/25_第一人称视角斜拍镜头_空中移动拍摄一个精致的花瓶_花瓶由透明玻璃.mp4'],
  ['kling/26_纪实摄影风格_一位穿着休闲装的行人正沿着城市街道行走_行人步伐稳.mp4', 'ours/26_纪实摄影风格_一位穿着休闲装的行人正沿着城市街道行走_行人步伐稳.mp4'],
  ['kling/27_纪实摄影风格_一位穿着家居服的中年女性正缓缓拉开厚重的窗帘_她的.mp4', 'ours/27_纪实摄影风格_一位穿着家居服的中年女性正缓缓拉开厚重的窗帘_她的.mp4'],
];

let current = 0;
let results = [];
const ratingLabels = ["差","较差","一般","好","很好"];
let randomizedPairs = []; // 存每组原始顺序 + swap 标记

// 创建评分下拉选项
function createDropdown(selectId) {
  const select = document.getElementById(selectId);
  select.innerHTML = '<option value="">Select</option>';
  for (let i = 1; i <= 5; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `${i} (${ratingLabels[i-1]})`;
    select.appendChild(opt);
  }
}

// 初始化每组随机左右顺序
function initRandomizedPairs() {
  randomizedPairs = videoPairs.map(pair => ({
    original: pair,
    swap: Math.random() < 0.5 // true 表示交换左右
  }));
}

// 加载题目
function loadQuestion(index) {
  const pairObj = randomizedPairs[index];

  // 根据 swap 决定左右显示
  const leftVideo  = pairObj.swap ? pairObj.original[1] : pairObj.original[0];
  const rightVideo = pairObj.swap ? pairObj.original[0] : pairObj.original[1];

  document.getElementById("question-counter").textContent = `Question ${index+1} / ${videoPairs.length}`;
  document.getElementById("videoA").src = leftVideo;
  document.getElementById("videoB").src = rightVideo;

  // 清空选择
  document.querySelectorAll('input[name="preferredAudio"]').forEach(el => el.checked = false);
  ["qualityA","semanticA","temporalA","qualityB","semanticB","temporalB"].forEach(id => {
    document.getElementById(id).value = "";
  });

  // 恢复答案
  if (results[index]) {
    const prev = results[index];
    document.querySelector(`input[name="preferredAudio"][value="${prev.preferredAudio}"]`).checked = true;
    document.getElementById("qualityA").value = prev.qualityLeft;
    document.getElementById("semanticA").value = prev.semanticLeft;
    document.getElementById("temporalA").value = prev.temporalLeft;
    document.getElementById("qualityB").value = prev.qualityRight;
    document.getElementById("semanticB").value = prev.semanticRight;
    document.getElementById("temporalB").value = prev.temporalRight;
  }
}

window.onload = () => {
  ["qualityA","semanticA","temporalA","qualityB","semanticB","temporalB"].forEach(createDropdown);

  document.getElementById("startTask").addEventListener("click", () => {
    document.getElementById("cover-page").style.display = 'none';
    document.getElementById("rating-task").style.display = 'block';
    current = 0;
    results = [];
    initRandomizedPairs();
    loadQuestion(current);
  });

  document.getElementById("submitBtn").addEventListener("click", () => {
    const preferred = document.querySelector('input[name="preferredAudio"]:checked')?.value;
    if (!preferred) { alert("Select which video's audio is more suitable."); return; }

    // 获取左右评分
    const qualityLeft = document.getElementById("qualityA").value;
    const semanticLeft = document.getElementById("semanticA").value;
    const temporalLeft = document.getElementById("temporalA").value;
    const qualityRight = document.getElementById("qualityB").value;
    const semanticRight = document.getElementById("semanticB").value;
    const temporalRight = document.getElementById("temporalB").value;

    if (!qualityLeft || !semanticLeft || !temporalLeft || !qualityRight || !semanticRight || !temporalRight) {
      alert("Please rate all dimensions for both videos."); return;
    }

    const pairObj = randomizedPairs[current];
    const leftVideo  = pairObj.swap ? pairObj.original[1] : pairObj.original[0];
    const rightVideo = pairObj.swap ? pairObj.original[0] : pairObj.original[1];

    results[current] = {
      question: current + 1,
      leftVideo,
      rightVideo,
      originalVideoA: pairObj.original[0],
      originalVideoB: pairObj.original[1],
      preferredAudio: preferred,
      qualityLeft, semanticLeft, temporalLeft,
      qualityRight, semanticRight, temporalRight,
      timestamp: new Date().toISOString()
    };

    current++;
    if (current < videoPairs.length) loadQuestion(current);
    else {
      document.getElementById("rating-task").style.display = 'none';
      document.getElementById("complete").style.display = 'block';
    }
  });

  document.getElementById("backBtn").addEventListener("click", () => {
    if (current > 0) { current--; loadQuestion(current); }
  });
};

// 下载 CSV
function downloadCSV() {
  if (!results.length) { alert("No results."); return; }

  const fields = [
    "question", "leftVideo", "rightVideo", "originalVideoA", "originalVideoB",
    "preferredAudio",
    "qualityLeft","semanticLeft","temporalLeft",
    "qualityRight","semanticRight","temporalRight",
    "timestamp"
  ];

  const header = fields.join(",");
  const lines = results.map(r => fields.map(f => `"${r[f]}"`).join(","));
  const csv = [header, ...lines].join("\n");

  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "video_audio_evaluation.csv";
  a.click();
}
