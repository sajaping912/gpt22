const canvas = document.getElementById('gameCanvas'); // Source 3
const ctx = canvas.getContext('2d'); // Source 3
const coffeeSteamVideo = document.getElementById('coffeeSteamVideo'); // 김 효과 비디오 요소 // Source 3

canvas.width = window.innerWidth; // Source 3
canvas.height = window.innerHeight; // Source 3

// --- START: New variable and function for top offset calculation ---
let topOffset = 0; // Source 3

function calculateTopOffset() { // Source 3
  const topControlsElement = document.getElementById('topControls'); // Source 3
  if (topControlsElement) { // Source 3
    topOffset = topControlsElement.offsetHeight; // Source 3
  } else { // Source 3
    topOffset = 0; // Default if element not found // Source 3
  }
}
// Initial calculation attempt. More reliable calculation in startGame and resize.
calculateTopOffset(); // Source 3
// --- END: New variable and function for top offset calculation ---


window.addEventListener('resize', () => { // Source 3
  canvas.width = window.innerWidth; // Source 3
  canvas.height = window.innerHeight; // Source 3
  calculateTopOffset(); // Recalculate offset on resize // Source 3
});

// --- START: 새로운 96개 영어 문장 ---
const sentences = [ // Source 3
  "What will we build with these big boxes?", // 1.txt // Source 3
  "We will make a spaceship for our trip.", // 2.txt // Source 3
  "When will they come to the backyard party?", // 3.txt // Source 3
  "I will wear it because we fight monsters.", // 4.txt // Source 3
  "When will they come to the backyard party?", // 5.txt // Source 3
  "They will come right after their nap time.", // 6.txt // Source 3
  "Where will you hide the birthday surprise gift?", // 7.txt // Source 3
  "I will hide it under the big green slide.", // 8.txt // Source 3
  "Who will bring the cake for the picnic today?", // 9.txt // Source 3
  "My mom will bring it in her blue basket.", // 10.txt // Source 3
  "How will we catch the tiny rainbow butterfly?", // 11.txt // Source 3
  "We will use a net and be very gentle.", // 12.txt // Source 3
  "What won’t you share from your lunchbox today?", // 13.txt // Source 3
  "I won’t share my jelly because it’s special.", // 14.txt // Source 3
  "Why won’t your sister play tag with us?", // 15.txt // Source 3
  "She won’t play because she feels too sleepy.", // 16.txt // Source 3
  "When won’t we have to clean our playroom?", // 17.txt // Source 3
  "We won’t clean it if it's already tidy.", // 18.txt // Source 3
  "Where won’t we be allowed to bring snacks?", // 19.txt // Source 3
  "We won’t bring them into the library room.", // 20.txt // Source 3
  "Who won’t join us at the zoo tomorrow?", // 21.txt // Source 3
  "Grandpa won’t join us because of his knee.", // 22.txt // Source 3
  "How won’t the toy car break again soon?", // 23.txt // Source 3
  "It won’t break if we don’t crash it hard.", // 24.txt // Source 3
  "What would you do with a flying carpet?", // 25.txt // Source 3
  "I would fly to grandma’s house for cookies.", // 26.txt // Source 3
  "Why would he cry after watching that movie?", // 27.txt // Source 3
  "He would cry because the puppy got lost.", // 28.txt // Source 3
  "When would we visit the underwater castle?", // 29.txt // Source 3
  "We would visit it during our summer dream.", // 30.txt // Source 3
  "Where would you go if you had fairy wings?", // 31.txt // Source 3
  "I would fly to the rainbow island in sky.", // 32.txt // Source 3
  "How would we talk to a tiny forest elf?", // 33.txt // Source 3
  "We would whisper and use our magic ring.", // 34.txt // Source 3
  "Who would help if our kite got stuck again?", // 35.txt // Source 3
  "Dad would help us with his long stick.", // 36.txt // Source 3
  "What wouldn’t you eat even if you were hungry?", // 37.txt // Source 3
  "I wouldn’t eat broccoli ice cream, it’s yucky!", // 38.txt // Source 3
  "Why wouldn’t your teddy bear come to tea time?", // 39.txt // Source 3
  "He wouldn’t come because he was too sleepy.", // 40.txt // Source 3
  "When wouldn’t we go outside to play together?", // 41.txt // Source 3
  "We wouldn’t go if it started thunderstorming.", // 42.txt // Source 3
  "Where wouldn’t you hide your secret treasure box?", // 43.txt // Source 3
  "I wouldn’t hide it in the bathroom, too wet.", // 44.txt // Source 3
  "How wouldn’t the snowman melt so quickly today?", // 45.txt // Source 3
  "He wouldn’t melt if we built him in shade.", // 46.txt // Source 3
  "Who wouldn’t laugh at your funny dance moves?", // 47.txt // Source 3
  "Even the teacher wouldn’t stop laughing today.", // 48.txt // Source 3
  "What can you do with this shiny rock?", // 49.txt // Source 3
  "I can make it my secret magic stone.", // 50.txt // Source 3
  "Why can we not play outside right now?", // 51.txt // Source 3
  "It is raining and Mommy said it’s muddy.", // 52.txt // Source 3
  "When can I see your new puppy again?", // 53.txt // Source 3
  "You can come over after lunch tomorrow.", // 54.txt // Source 3
  "Where can we hide from the space aliens?", // 55.txt // Source 3
  "We can hide behind the big backyard tree.", // 56.txt // Source 3
  "Who can help me fix my toy robot?", // 57.txt // Source 3
  "My dad can fix it after his dinner.", // 58.txt // Source 3
  "How can you jump so high like that?", // 59.txt // Source 3
  "I practiced every day on my trampoline.", // 60.txt // Source 3
  "What can’t you eat before dinner time?", // 61.txt // Source 3
  "I can’t eat cookies before dinner time.", // 62.txt // Source 3
  "Why can’t you open the cookie jar?", // 63.txt // Source 3
  "I can’t open it because it’s locked tight.", // 64.txt // Source 3
  "When can’t we go into the kitchen?", // 65.txt // Source 3
  "We can’t go there when Mom is cooking.", // 66.txt // Source 3
  "Where can’t he hide the cookie crumbs?", // 67.txt // Source 3
  "He can’t hide them under the couch again.", // 68.txt // Source 3
  "Who can’t keep the cookie secret long?", // 69.txt // Source 3
  "She can’t keep secrets longer than two hours.", // 70.txt // Source 3
  "How can’t they hear the cookie crunch?", // 71.txt // Source 3
  "They can’t hear it with cartoons playing loudly.", // 72.txt // Source 3
  "What could you find under the big bed?", // 73.txt // Source 3
  "I could find my teddy bear under there.", // 74.txt // Source 3
  "Why could he be hiding from us now?", // 75.txt // Source 3
  "He could be scared of the vacuum cleaner noise.", // 76.txt // Source 3
  "When could we start looking for him?", // 77.txt // Source 3
  "We could start right after our afternoon snack.", // 78.txt // Source 3
  "Where could it have gone last night?", // 79.txt // Source 3
  "It could have rolled behind the toy chest.", // 80.txt // Source 3
  "Who could have taken it to the garden?", // 81.txt // Source 3
  "You could have taken it while playing outside.", // 82.txt // Source 3
  "How could we bring him back safely?", // 83.txt // Source 3
  "We could carry him in your superhero backpack.", // 84.txt // Source 3
  "What couldn’t we play with in the rain?", // 85.txt // Source 3
  "We couldn’t play with the paper kite outside.", // 86.txt // Source 3
  "Why couldn’t you come to my puppet show?", // 87.txt // Source 3
  "I couldn’t come because my boots were missing.", // 88.txt // Source 3
  "When couldn’t they start the backyard race?", // 89.txt // Source 3
  "They couldn’t start when the thunder was loud.", // 90.txt // Source 3
  "Where couldn’t she set up her lemonade stand?", // 91.txt // Source 3
  "She couldn’t set it up under the dripping tree.", // 92.txt // Source 3
  "Who couldn’t join us for the snack picnic?", // 93.txt // Source 3
  "He couldn’t join us because he caught a cold.", // 94.txt // Source 3
  "How couldn’t we keep our socks from getting wet?", // 95.txt // Source 3
  "We couldn’t keep them dry without rain boots on." // 96.txt // Source 3
];
// --- END: 새로운 96개 영어 문장 ---

// --- START: 새로운 96개 한국어 번역 (자리 표시자) ---
const translations = [ // Source 3
  "이 큰 상자들로 무엇을 만들 건가요?", // 1.txt 번역 예시 // Source 3
  "우리는 여행을 위한 우주선을 만들 거예요.", // 2.txt 번역 예시 // Source 3
  "그들은 언제 뒷마당 파티에 올 건가요?", // 3.txt 번역 예시 // Source 3
  "우리가 괴물과 싸우니까 그걸 입을 거예요.", // 4.txt 번역 예시 // Source 3
  "그들은 언제 뒷마당 파티에 올 건가요?", // 5.txt 번역 예시 // Source 3
  "낮잠 시간 바로 후에 올 거예요.", // 6.txt 번역 예시 // Source 3
  "생일 깜짝 선물은 어디에 숨길 건가요?", // 7.txt 번역 예시 // Source 3
  "큰 초록색 미끄럼틀 아래에 숨길 거예요.", // 8.txt 번역 예시 // Source 3
  "오늘 소풍에 누가 케이크를 가져올 건가요?", // 9.txt 번역 예시 // Source 3
  "엄마가 파란 바구니에 담아 가져오실 거예요.", // 10.txt 번역 예시 // Source 3
  "작은 무지개 나비는 어떻게 잡을 건가요?", // 11.txt 번역 예시 // Source 3
  "그물을 사용하고 아주 부드럽게 다룰 거예요.", // 12.txt 번역 예시 // Source 3
  "오늘 점심 도시락에서 무엇을 나눠주지 않을 건가요?", // 13.txt 번역 예시 // Source 3
  "내 젤리는 특별해서 나눠주지 않을 거예요.", // 14.txt 번역 예시 // Source 3
  "언니는 왜 우리랑 술래잡기를 안 하나요?", // 15.txt 번역 예시 // Source 3
  "너무 졸려서 안 할 거예요.", // 16.txt 번역 예시 // Source 3
  "언제 놀이방 청소를 안 해도 되나요?", // 17.txt 번역 예시 // Source 3
  "이미 깨끗하면 청소 안 할 거예요.", // 18.txt 번역 예시 // Source 3
  "어디에 간식을 가져가면 안 되나요?", // 19.txt 번역 예시 // Source 3
  "도서관에는 가져가지 않을 거예요.", // 20.txt 번역 예시 // Source 3
  "내일 동물원에 누가 같이 안 가나요?", // 21.txt 번역 예시 // Source 3
  "할아버지는 무릎 때문에 같이 안 가실 거예요.", // 22.txt 번역 예시 // Source 3
  "장난감 자동차가 어떻게 하면 곧 다시 고장 나지 않을까요?", // 23.txt 번역 예시 // Source 3
  "세게 부딪치지 않으면 고장 나지 않을 거예요.", // 24.txt 번역 예시 // Source 3
  "하늘을 나는 양탄자가 있다면 무엇을 할 건가요?", // 25.txt 번역 예시 // Source 3
  "할머니 댁에 쿠키 먹으러 날아갈 거예요.", // 26.txt 번역 예시 // Source 3
  "그는 왜 그 영화를 보고 울었을까요?", // 27.txt 번역 예시 // Source 3
  "강아지를 잃어버려서 울었을 거예요.", // 28.txt 번역 예시 // Source 3
  "언제 수중 성을 방문할 건가요?", // 29.txt 번역 예시 // Source 3
  "여름 꿈속에서 방문할 거예요.", // 30.txt 번역 예시 // Source 3
  "요정 날개가 있다면 어디로 갈 건가요?", // 31.txt 번역 예시 // Source 3
  "하늘에 있는 무지개 섬으로 날아갈 거예요.", // 32.txt 번역 예시 // Source 3
  "작은 숲 속 요정과 어떻게 이야기할 건가요?", // 33.txt 번역 예시 // Source 3
  "속삭이고 마법 반지를 사용할 거예요.", // 34.txt 번역 예시 // Source 3
  "연이 다시 걸리면 누가 도와줄까요?", // 35.txt 번역 예시 // Source 3
  "아빠가 긴 막대기로 도와주실 거예요.", // 36.txt 번역 예시 // Source 3
  "배가 고파도 절대 먹지 않을 것은 무엇인가요?", // 37.txt 번역 예시 // Source 3
  "브로콜리 아이스크림은 안 먹을 거예요, 맛없어요!", // 38.txt 번역 예시 // Source 3
  "곰 인형은 왜 티타임에 오지 않았나요?", // 39.txt 번역 예시 // Source 3
  "너무 졸려서 오지 않았을 거예요.", // 40.txt 번역 예시 // Source 3
  "언제 밖에 나가서 같이 놀지 않을 건가요?", // 41.txt 번역 예시 // Source 3
  "천둥 번개가 치기 시작하면 안 나갈 거예요.", // 42.txt 번역 예시 // Source 3
  "비밀 보물 상자를 어디에 숨기지 않을 건가요?", // 43.txt 번역 예시 // Source 3
  "화장실에는 숨기지 않을 거예요, 너무 축축해요.", // 44.txt 번역 예시 // Source 3
  "눈사람이 오늘 어떻게 하면 빨리 녹지 않을까요?", // 45.txt 번역 예시 // Source 3
  "그늘에 만들면 녹지 않을 거예요.", // 46.txt 번역 예시 // Source 3
  "누가 당신의 웃긴 춤 동작을 보고 웃지 않을까요?", // 47.txt 번역 예시 // Source 3
  "선생님조차도 오늘 웃음을 멈추지 못했을 거예요.", // 48.txt 번역 예시 // Source 3
  "이 반짝이는 돌로 무엇을 할 수 있나요?", // 49.txt 번역 예시 // Source 3
  "나의 비밀 마법 돌로 만들 수 있어요.", // 50.txt 번역 예시 // Source 3
  "왜 지금 밖에 나가서 놀 수 없나요?", // 51.txt 번역 예시 // Source 3
  "비가 오고 엄마가 진흙탕이라고 하셨어요.", // 52.txt 번역 예시 // Source 3
  "언제 새 강아지를 다시 볼 수 있나요?", // 53.txt 번역 예시 // Source 3
  "내일 점심 먹고 놀러 와도 돼요.", // 54.txt 번역 예시 // Source 3
  "우주 외계인으로부터 어디에 숨을 수 있나요?", // 55.txt 번역 예시 // Source 3
  "뒷마당 큰 나무 뒤에 숨을 수 있어요.", // 56.txt 번역 예시 // Source 3
  "누가 내 장난감 로봇 고치는 것을 도와줄 수 있나요?", // 57.txt 번역 예시 // Source 3
  "아빠가 저녁 식사 후에 고쳐주실 수 있어요.", // 58.txt 번역 예시 // Source 3
  "어떻게 그렇게 높이 뛸 수 있나요?", // 59.txt 번역 예시 // Source 3
  "매일 트램펄린에서 연습했어요.", // 60.txt 번역 예시 // Source 3
  "저녁 식사 전에 무엇을 먹으면 안 되나요?", // 61.txt 번역 예시 // Source 3
  "저녁 식사 전에는 쿠키를 먹을 수 없어요.", // 62.txt 번역 예시 // Source 3
  "왜 쿠키 단지를 열 수 없나요?", // 63.txt 번역 예시 // Source 3
  "단단히 잠겨 있어서 열 수 없어요.", // 64.txt 번역 예시 // Source 3
  "언제 부엌에 들어가면 안 되나요?", // 65.txt 번역 예시 // Source 3
  "엄마가 요리하실 때는 거기에 가면 안 돼요.", // 66.txt 번역 예시 // Source 3
  "그는 쿠키 부스러기를 어디에 숨길 수 없나요?", // 67.txt 번역 예시 // Source 3
  "소파 밑에는 다시 숨길 수 없을 거예요.", // 68.txt 번역 예시 // Source 3
  "누가 쿠키 비밀을 오래 지키지 못하나요?", // 69.txt 번역 예시 // Source 3
  "그녀는 두 시간 이상 비밀을 지키지 못해요.", // 70.txt 번역 예시 // Source 3
  "그들은 어떻게 쿠키 바삭거리는 소리를 듣지 못할까요?", // 71.txt 번역 예시 // Source 3
  "만화가 시끄럽게 틀어져 있어서 듣지 못해요.", // 72.txt 번역 예시 // Source 3
  "큰 침대 밑에서 무엇을 찾을 수 있었나요?", // 73.txt 번역 예시 // Source 3
  "거기서 내 곰 인형을 찾을 수 있었어요.", // 74.txt 번역 예시 // Source 3
  "그는 왜 지금 우리에게서 숨어 있을까요?", // 75.txt 번역 예시 // Source 3
  "진공청소기 소리를 무서워할 수도 있어요.", // 76.txt 번역 예시 // Source 3
  "언제 그를 찾기 시작할 수 있을까요?", // 77.txt 번역 예시 // Source 3
  "오후 간식 먹고 바로 시작할 수 있어요.", // 78.txt 번역 예시 // Source 3
  "어젯밤에 그것은 어디로 갔을까요?", // 79.txt 번역 예시 // Source 3
  "장난감 상자 뒤로 굴러갔을 수도 있어요.", // 80.txt 번역 예시 // Source 3
  "누가 그것을 정원으로 가져갔을까요?", // 81.txt 번역 예시 // Source 3
  "밖에서 놀다가 네가 가져갔을 수도 있어.", // 82.txt 번역 예시 // Source 3
  "어떻게 그를 안전하게 데려올 수 있을까요?", // 83.txt 번역 예시 // Source 3
  "너의 슈퍼히어로 배낭에 넣어 데려올 수 있어.", // 84.txt 번역 예시 // Source 3
  "비 오는 날에는 무엇을 가지고 놀 수 없었나요?", // 85.txt 번역 예시 // Source 3
  "종이 연은 밖에서 가지고 놀 수 없었어요.", // 86.txt 번역 예시 // Source 3
  "왜 내 인형극에 오지 못했나요?", // 87.txt 번역 예시 // Source 3
  "장화가 없어져서 오지 못했어요.", // 88.txt 번역 예시 // Source 3
  "언제 그들은 뒷마당 경주를 시작할 수 없었나요?", // 89.txt 번역 예시 // Source 3
  "천둥소리가 클 때는 시작할 수 없었어요.", // 90.txt 번역 예시 // Source 3
  "그녀는 레모네이드 가판대를 어디에 설치할 수 없었나요?", // 91.txt 번역 예시 // Source 3
  "물이 뚝뚝 떨어지는 나무 아래에는 설치할 수 없었어요.", // 92.txt 번역 예시 // Source 3
  "누가 간식 소풍에 우리와 함께하지 못했나요?", // 93.txt 번역 예시 // Source 3
  "그는 감기에 걸려서 우리와 함께하지 못했어요.", // 94.txt 번역 예시 // Source 3
  "양말이 젖지 않게 하려면 어떻게 해야 했을까요?", // 95.txt 번역 예시 // Source 3
  "장화를 신지 않고는 마른 상태로 유지할 수 없었어요." // 96.txt // Source 3
];
// --- END: 새로운 96개 한국어 번역 ---


let sentenceIndex = Number(localStorage.getItem('sentenceIndex') || 0); // Source 3
sentenceIndex = sentenceIndex % sentences.length; // Ensure it's within bounds // Source 3

const playerImg = new Image(); // Source 3
playerImg.src = 'images/player.png'; // Source 3

const enemyImgs = [ // Source 3
  'images/enemy1.png', // 0 // Source 3
  'images/enemy2.png', // 1 (coffee cup) // Source 3
  'images/enemy3.png', // 2 (cosmos) // Source 3
  'images/enemy4.png', // 3 (maple leaf) // Source 3
  'images/enemy5.png'  // 4 // Source 3
].map(src => { // Source 3
  const img = new Image(); // Source 3
  img.src = src; // Source 3
  return img; // Source 3
});

const bulletImg = new Image(); // Source 3
bulletImg.src = 'images/bubble_bullet.png'; // Source 3

const bgmFiles = [ // Source 3
  'sounds/background.mp3' // Source 3
];
let bgmIndex = 0; // Source 3
let bgmAudio = new Audio(bgmFiles[bgmIndex]); // Source 3
bgmAudio.volume = 0.021; // Source 3
bgmAudio.loop = true; // Source 3

const volumeBtn = document.getElementById('volumeBtn'); // Source 3
let isMuted = false; // Source 3
function updateVolumeIcon() { // Source 3
  volumeBtn.textContent = isMuted ? "🔇" : "🔊"; // Source 3
}

let currentSentenceAudio = null; // Source 3

async function playSentenceAudio(index) { // Source 3
  return new Promise((resolve, reject) => { // Source 3
    if (currentSentenceAudio) { // Source 3
      currentSentenceAudio.pause(); // Source 3
      currentSentenceAudio.currentTime = 0; // Source 3
      currentSentenceAudio.onended = null; // Source 3
      currentSentenceAudio.onerror = null; // Source 3
    }

    const audioFilePath = `sounds/96_audio/${index + 1}.mp3`; // Source 3
    currentSentenceAudio = new Audio(audioFilePath); // Source 3
    currentSentenceAudio.volume = 0.8; // Source 3

    currentSentenceAudio.onended = () => { // Source 3
      currentSentenceAudio = null; // Source 3
      // 이 Promise는 재생 시작 시 resolve되므로, onended에서는 resolve하지 않습니다.
    };
    currentSentenceAudio.onerror = (e) => { // Source 3
      console.error(`Error playing sentence audio: ${audioFilePath}`, e); // Source 3
      currentSentenceAudio = null; // Source 3
      reject(e); // Source 3
    };

    currentSentenceAudio.play().then(() => { // Source 3
        resolve(); // 재생이 성공적으로 시작되면 Promise를 resolve합니다. // Source 3
    }).catch(e => { // Source 3
      console.error(`Failed to play ${audioFilePath}`, e); // Source 3
      currentSentenceAudio = null; // Source 3
      reject(e); // Source 3
    });
  });
}


volumeBtn.onclick = function () { // Source 3
  isMuted = !isMuted; // Source 3
  const targetVolume = isMuted ? 0 : 0.021; // Source 3
  if (bgmAudio) { // Source 3
    bgmAudio.volume = targetVolume; // Source 3
    if (!isMuted && bgmAudio.paused && isGameRunning && !isGamePaused) { // Source 3
      bgmAudio.play().catch(e => console.error("BGM play on unmute error:", e)); // Source 3
    }
  }
  updateVolumeIcon(); // Source 3
};
updateVolumeIcon(); // Source 3


const sounds = { // Source 3
  shoot: new Audio('sounds/shoot.mp3'), // Source 3
  explosion: new Audio('sounds/explosion.mp3') // Source 3
};
sounds.shoot.volume = 0.05; // Source 3
sounds.explosion.volume = 0.05; // Source 3

setInterval(() => { // Source 3
  if (bgmAudio) { // Source 3
    const targetVolume = isMuted ? 0 : 0.021; // Source 3
    if (bgmAudio.volume !== targetVolume) { // Source 3
      bgmAudio.volume = targetVolume; // Source 3
    }
  }
}, 1000);


let allAssetsReady = false; // Source 3
let assetsToLoad = 1 + enemyImgs.length + 1; // Source 3
let loadedAssetCount = 0; // Source 3
let coffeeVideoAssetReady = false; // Source 3

function assetLoaded() { // Source 3
  loadedAssetCount++; // Source 3
  checkAllAssetsReady(); // Source 3
}

function coffeeVideoReady() { // Source 3
  if (!coffeeVideoAssetReady) { // Source 3
    coffeeVideoAssetReady = true; // Source 3
    checkAllAssetsReady(); // Source 3
  }
}

function coffeeVideoError() { // Source 3
  if (!coffeeVideoAssetReady) { // Source 3
    console.error("Coffee steam video could not be loaded. Steam effect will be disabled."); // Source 3
    coffeeVideoAssetReady = true; // Source 3
    checkAllAssetsReady(); // Source 3
  }
}

function checkAllAssetsReady() { // Source 3
  if (loadedAssetCount >= assetsToLoad && coffeeVideoAssetReady) { // Source 3
    allAssetsReady = true; // Source 3
    console.log("All game assets (images and video) are ready."); // Source 3
  }
}

playerImg.onload = assetLoaded; // Source 3
playerImg.onerror = () => { console.error("Failed to load player image."); assetLoaded(); }; // Source 3

enemyImgs.forEach(img => { // Source 3
  img.onload = assetLoaded; // Source 3
  img.onerror = () => { console.error(`Failed to load enemy image: ${img.src}`); assetLoaded(); }; // Source 3
});

bulletImg.onload = assetLoaded; // Source 3
bulletImg.onerror = () => { console.error("Failed to load bullet image."); assetLoaded(); }; // Source 3


if (coffeeSteamVideo) { // Source 3
  coffeeSteamVideo.oncanplaythrough = coffeeVideoReady; // Source 3
  coffeeSteamVideo.onerror = coffeeVideoError; // Source 3
  if (coffeeSteamVideo.readyState >= HTMLVideoElement.HAVE_ENOUGH_DATA) coffeeVideoReady(); // Source 3
  else if (coffeeSteamVideo.error) coffeeVideoError(); // Source 3
} else { // Source 3
  console.warn("coffeeSteamVideo element not found in HTML. Assuming ready without steam effect."); // Source 3
  coffeeVideoAssetReady = true; // Source 3
  checkAllAssetsReady(); // Source 3
}


const PLAYER_SIZE = 50; // Source 3
const ENEMY_SIZE = 40; // Source 3
const ENEMY_MOVEMENT_SPEED_PPS = 60; // Source 3

const MIN_BUBBLE_SIZE = 15; // Source 3
const MAX_BUBBLE_SIZE = 35; // Source 3

const BUBBLE_BASE_SPEED_Y_PPS = -120; // Source 3
const BUBBLE_SPEED_Y_VARIATION_PPS = 40; // Source 3

const BUBBLE_SWAY_FREQUENCY_MIN = 1.5; // Source 3
const BUBBLE_SWAY_FREQUENCY_MAX = 3.5; // Source 3

const BUBBLE_SWAY_AMPLITUDE_FACTOR_MIN = 0.3; // Source 3
const BUBBLE_SWAY_AMPLITUDE_FACTOR_MAX = 0.8; // Source 3

const BUBBLE_HORIZONTAL_DRIFT_PPS_MAX = 25; // Source 3

const PETAL_SIZE = 20; // Source 3
const PETAL_FALL_SPEED_PPS = 25; // Source 3
const PETAL_ROTATION_SPEED_BASE = 1.5; // Source 3
const PETAL_SWAY_AMPLITUDE_BASE = 12; // Source 3
const PETAL_SWAY_SPEED_BASE = 1.8; // Source 3
const PETAL_DRIFT_X_PPS_BASE = 30; // Source 3
const PETAL_FLUTTER_AMPLITUDE_BASE = 3.5; // Source 3
const PETAL_FLUTTER_SPEED_BASE = 3.0; // Source 3

const SENTENCE_VERTICAL_ADJUSTMENT = -86; // Source 3
const ANSWER_OFFSET_Y = 82; // Source 3
const LINE_HEIGHT = 30; // Source 3
const PLAYER_TOUCH_Y_OFFSET = 15; // Source 3

let player = { x: 0, y: 0, w: PLAYER_SIZE, h: PLAYER_SIZE }; // Source 3
let bullets = []; // Source 3
let enemies = []; // Source 3
let enemyBullets = []; // Source 3
let detachedPetals = []; // Source 3

let isGameRunning = false; // Source 3
let isGamePaused = false; // Source 3
let lastTime = 0; // Source 3

const burstColors = [ // Source 3
  '#FF5252', '#FF9800', '#FFD600', '#4CAF50', '#2196F3', // Source 3
  '#9C27B0', '#E040FB', '#00BCD4', '#FFEB3B', '#FF69B4' // Source 3
];

let fireworks = null; // Source 3
let fireworksState = null; // Source 3

let currentQuestionSentence = null; // Source 3
let currentAnswerSentence = null; // Source 3
let currentQuestionSentenceIndex = null; // Source 3
let currentAnswerSentenceIndex = null; // Source 3

let centerAlpha = 1.0; // Source 3
let sentenceActive = false; // Source 3

let showPlayButton = false; // Source 3
let playButtonRect = null; // Source 3
let showPlayButtonQuestion = false; // Source 3
let playButtonRectQuestion = null; // Source 3

let showTranslationForQuestion = false; // Source 3
let showTranslationForAnswer = false; // Source 3
let isActionLocked = false; // Source 3

let centerSentenceWordRects = []; // Source 3
let activeWordTranslation = null; // Source 3
let wordTranslationTimeoutId = null; // Source 3
const WORD_TRANSLATION_DURATION = 3000; // Source 3

const MODAL_AUX = [ // Source 3
  "can", "cant", "cannot", "could", "couldnt", "will", "would", "shall", "should", // Source 3
  "may", "might", "must", "wont", "wouldnt", "shant", "shouldnt", "maynt", "mightnt", "mustnt" // Source 3
];
const DO_AUX = [ // Source 3
  "do", "does", "did", "dont", "doesnt", "didnt" // Source 3
];
const notVerbIng = [ // Source 3
  "morning", "evening", "everything", "anything", "nothing", "something", // Source 3
  "building", "ceiling", "meeting", "feeling", "wedding", "clothing" // Source 3
];

function isAux(word) { // Source 3
  const lowerWord = word.toLowerCase().replace(/[^a-z0-9']/g, ''); // Source 3
  return MODAL_AUX.includes(lowerWord) || DO_AUX.includes(lowerWord); // Source 3
}
function isWh(word) { // Source 3
  const whs = ["what","when","where","who","whom","whose","which","why","how"]; // Source 3
  return whs.includes(word.toLowerCase().replace(/[^a-z0-9]/g, '')); // Source 3
}
function isVerb(word) { // Source 3
  const verbs = [ // Source 3
    "build", "make", "come", "wear", "fight", "hide", "bring", "catch", "use", "share", "play", "feel", "clean", // Source 3
    "allowed", "join", "break", "crash", "do", "fly", "cry", "got", "lost", "visit", "talk", "help", "stuck", "eat", // Source 3
    "go", "melt", "laugh", "can", "see", "fix", "jump", "practiced", "open", "hear", "find", "hiding", "start", // Source 3
    "taken", "rolled", "bring", "carry", "set", "keep" // Source 3
    , "be", "is", "am", "are", "was", "were" // Source 3
  ];
  const lowerWord = word.toLowerCase().replace(/[^a-z0-9]/g, ''); // Source 3
  if (lowerWord === "bringback") return true; // Source 3
  if (lowerWord === "setup") return true; // Source 3
  return verbs.some(v => lowerWord === v || lowerWord.startsWith(v)); // Source 3
}
function isVing(word) { // Source 3
  let lw = word.toLowerCase().replace(/[^a-z0-9]/g, ''); // Source 3
  if (notVerbIng.includes(lw)) return false; // Source 3
  if (lw.endsWith('ing') && lw.length > 3) { // Source 3
    let base = lw.slice(0, -3); // Source 3
    if (base.endsWith('e') && !base.endsWith('ee') && base !== 'be' && base.length > 1) { // Source 3
        if(isVerb(base)) return true; // Source 3
        if(isVerb(base + 'e')) return true; // Source 3
        if (base.endsWith('i')) { // Source 3
             base = base.slice(0, -1) + 'e'; // Source 3
        }
    } else if (base.length > 1 && base.charAt(base.length -1) === base.charAt(base.length-2) && !['ss','ll','ff','zz'].includes(base.slice(-2))) { // Source 3
        base = base.slice(0,-1); // Source 3
    }
    return isVerb(base) || (base.endsWith('y') && isVerb(base.slice(0, -1) + 'ie')); // Source 3
  }
  return false; // Source 3
}
function isBeen(word) { // Source 3
  return word.toLowerCase().replace(/[^a-z0-9]/g, '') === 'been'; // Source 3
}
function isQuestion(sentenceText) { // Source 3
  return sentenceText.trim().endsWith('?'); // Source 3
}

// --- START: New isPastParticiple function ---
function isPastParticiple(word) { // Source 3
    const lowerWord = word.toLowerCase().replace(/[^a-z]/g, ''); // Keep only letters // Source 3
    if (!lowerWord) return false; // Source 3

    const irregularPPs = [ // Source 3
        "been", "begun", "broken", "brought", "built", "bought", "caught", "chosen", "come", "cost", // Source 3
        "cut", "done", "drawn", "dreamt", "dreamed", "drunk", "driven", "eaten", "fallen", "felt", // Source 3
        "fought", "found", "flown", "forgotten", "forgiven", "frozen", "got", "gotten", "given", // Source 3
        "gone", "grown", "hung", "had", "heard", "hidden", "hit", "held", "hurt", "kept", // Source 3
        "known", "laid", "led", "left", "lent", "let", "lain", "lit", "lost", "made", // Source 3
        "meant", "met", "paid", "put", "quit", "read", "ridden", "rung", "risen", "run", // Source 3
        "said", "seen", "sold", "sent", "set", "shaken", "shone", "shot", "shown", "shut", // Source 3
        "sung", "sunk", "sat", "slept", "spoken", "spent", "spread", "stood", "stolen", // Source 3
        "stuck", "sworn", "swept", "swum", "taken", "taught", "torn", "told", "thought", // Source 3
        "thrown", "understood", "woken", "worn", "won", "written" // Source 3
    ];

    if (irregularPPs.includes(lowerWord)) { // Source 3
        return true; // Source 3
    }

    if (lowerWord.length > 2 && lowerWord.endsWith("ed")) { // Source 3
        const nonVerbEdEndings = ["bed", "red", "shed", "wed"]; // Source 3
        if (nonVerbEdEndings.includes(lowerWord)) return false; // Source 3
        return true; // Source 3
    }
    return false; // Source 3
}
// --- END: New isPastParticiple function ---

async function getWordTranslation(word, targetLang = 'ko') { // Source 3
  const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().trim(); // Source 3
  if (!cleanedWord) return "Error: Invalid word"; // Source 3

  await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 100)); // Source 3

  const mockTranslations = { // Source 3
    "what": "무엇", "will": "～할 것이다", "we": "우리", "build": "짓다", "with": "～으로", "these": "이것들", "big": "큰", "boxes": "상자들", "make": "만들다", "a": "하나의", "spaceship": "우주선", "for": "～을 위한", "our": "우리의", "trip": "여행", "when": "언제", "they": "그들", "come": "오다", "to": "～으로", "the": "그", "backyard": "뒷마당", "party": "파티", "i": "나", "wear": "입다", "it": "그것", "because": "왜냐하면", "fight": "싸우다", "monsters": "괴물들", "right": "바로", "after": "～후에", "their": "그들의", "nap": "낮잠", "time": "시간", "where": "어디에", "you": "너", "hide": "숨기다", "birthday": "생일", "surprise": "깜짝 선물", "gift": "선물", "under": "～아래에", "green": "초록색", "slide": "미끄럼틀", "who": "누가", "bring": "가져오다", "cake": "케이크", "picnic": "소풍", "today": "오늘", "my": "나의", "mom": "엄마", "in": "～안에", "her": "그녀의", "blue": "파란", "basket": "바구니", "how": "어떻게", "catch": "잡다", "tiny": "아주 작은", "rainbow": "무지개", "butterfly": "나비", "net": "그물", "and": "그리고", "be": "이다", "very": "매우", "gentle": "부드러운", "wont": "～하지 않을 것이다", "share": "공유하다", "from": "～로부터", "your": "너의", "lunchbox": "점심 도시락", "jelly": "젤리", "special": "특별한", "why": "왜", "sister": "자매/언니/누나", "play": "놀다", "tag": "술래잡기", "us": "우리", "she": "그녀", "feels": "느끼다", "too": "너무", "sleepy": "졸린", "have": "가지다", "clean": "청소하다", "playroom": "놀이방", "if": "만약", "already": "이미", "tidy": "단정한", "allowed": "허용된", "snacks": "간식", "library": "도서관", "room": "방", "tomorrow": "내일", "zoo": "동물원", "grandpa": "할아버지", "his": "그의", "knee": "무릎", "toy": "장난감", "car": "자동차", "break": "고장나다", "again": "다시", "soon": "곧", "dont": "～하지 않다", "crash": "충돌하다", "hard": "세게", "would": "～일 것이다 (가정)", "do": "하다", "flying": "나는", "carpet": "양탄자", "fly": "날다", "grandmas": "할머니의", "house": "집", "cookies": "쿠키", "he": "그", "cry": "울다", "watching": "보는 중", "movie": "영화", "puppy": "강아지", "got": "되었다", "lost": "잃어버린", "visit": "방문하다", "underwater": "물속의", "castle": "성", "during": "～동안", "summer": "여름", "dream": "꿈", "had": "가졌었다", "fairy": "요정", "wings": "날개", "island": "섬", "sky": "하늘", "talk": "말하다", "forest": "숲", "elf": "요정", "whisper": "속삭이다", "use": "사용하다", "magic": "마법", "ring": "반지", "kite": "연", "stuck": "걸린", "dad": "아빠", "help": "돕다", "long": "긴", "stick": "막대기", "wouldnt": "～하지 않을 것이다 (가정)", "eat": "먹다", "even": "심지어", "hungry": "배고픈", "broccoli": "브로콜리", "ice": "얼음", "cream": "크림", "yucky": "역겨운", "teddy": "테디베어", "bear": "곰", "tea": "차", "outside": "밖에", "together": "함께", "started": "시작했다", "thunderstorming": "뇌우가 치는", "secret": "비밀", "treasure": "보물", "box": "상자", "bathroom": "욕실", "wet": "젖은", "snowman": "눈사람", "melt": "녹다", "quickly": "빨리", "built": "지었다", "shade": "그늘", "laugh": "웃다", "funny": "웃기는", "dance": "춤", "moves": "동작", "teacher": "선생님", "stop": "멈추다", "laughing": "웃는 중", "can": "～할 수 있다", "shiny": "빛나는", "rock": "돌", "stone": "돌", "cannot": "～할 수 없다", "now": "지금", "raining": "비가 오는", "mommy": "엄마", "said": "말했다", "muddy": "진흙탕이라고 하셨어요.", "see": "보다", "new": "새로운", "over": "～너머로", "lunch": "점심", "space": "우주", "aliens": "외계인", "behind": "～뒤에", "tree": "나무", "fix": "고치다", "robot": "로봇", "dinner": "저녁", "jump": "뛰다", "so": "그렇게", "high": "높이", "like": "～처럼", "that": "저것", "practiced": "연습했다", "every": "매", "day": "날", "trampoline": "트램펄린", "cant": "～할 수 없다", "before": "～전에", "open": "열다", "jar": "단지", "locked": "잠긴", "tight": "단단히", "kitchen": "부엌", "cooking": "요리하는 중", "crumbs": "부스러기", "couch": "소파", "keep": "유지하다", "secrets": "비밀들", "longer": "더 오래", "than": "～보다", "hours": "시간들", "hear": "듣다", "crunch": "바삭거리는 소리", "cartoons": "만화", "playing": "재생 중", "loudly": "시끄럽게", "could": "～할 수 있었다", "find": "찾다", "there": "거기에", "hiding": "숨는 중", "scared": "무서워하는", "of": "～의", "vacuum": "진공청소기", "cleaner": "청소기", "noise": "소음", "looking": "찾는 중", "him": "그를", "snack": "간식", "gone": "사라진", "last": "지난", "night": "밤", "rolled": "굴러갔다", "chest": "상자", "taken": "가져간", "garden": "정원", "while": "～하는 동안", "safely": "안전하게", "carry": "나르다", "superhero": "슈퍼히어로", "backpack": "배낭", "couldnt": "～할 수 없었다", "paper": "종이", "show": "보여주다", "puppet": "인형", "missing": "사라진", "race": "경주", "thunder": "천둥", "loud": "시끄러운", "lemonade": "레모네이드", "stand": "가판대", "dripping": "물이 떨어지는", "caught": "걸렸다", "cold": "감기", "socks": "양말", "getting": "되는 중", "dry": "마른", "without": "～없이", "rain": "비", "boots": "장화" // Source 3
  };

  if (mockTranslations[cleanedWord]) { // Source 3
    return mockTranslations[cleanedWord]; // Source 3
  }
  console.warn(`Translation not found for: ${cleanedWord}. Returning placeholder.`); // Source 3
  return `[${cleanedWord} 뜻]`; // Source 3
}

let voicesPromise = null; // Source 3
let _voices = []; // Source 3

function getVoicesReliably() { // Source 3
    if (voicesPromise && _voices.length > 0) { // Source 3
        return Promise.resolve(_voices); // Source 3
    }
    if (!voicesPromise) { // Source 3
        voicesPromise = new Promise((resolve, reject) => { // Source 3
            const tryGetAndResolveVoices = () => { // Source 3
                const currentVoices = window.speechSynthesis.getVoices(); // Source 3
                if (currentVoices.length) { // Source 3
                    _voices = currentVoices; // Source 3
                    resolve(_voices); // Source 3
                    return true; // Source 3
                }
                return false; // Source 3
            };
            if (tryGetAndResolveVoices()) return; // Source 3
            if ('onvoiceschanged' in window.speechSynthesis) { // Source 3
                window.speechSynthesis.onvoiceschanged = () => { // Source 3
                    if (tryGetAndResolveVoices()) { // Source 3
                        window.speechSynthesis.onvoiceschanged = null; // Source 3
                    } else { // Source 3
                         setTimeout(() => { // Source 3
                            if(tryGetAndResolveVoices()){ // Source 3
                                window.speechSynthesis.onvoiceschanged = null; // Source 3
                            } else { // Source 3
                                console.warn("getVoicesReliably: Voices NOT loaded even after onvoiceschanged + delay."); // Source 3
                                resolve([]); // Source 3
                                window.speechSynthesis.onvoiceschanged = null; // Source 3
                            }
                        }, 200);
                    }
                };
                window.speechSynthesis.getVoices(); // Trigger 'onvoiceschanged' // Source 3
            } else { // Source 3
                let attempts = 0; // Source 3
                const maxAttempts = 20; // Source 3
                const intervalId = setInterval(() => { // Source 3
                    attempts++; // Source 3
                    if (tryGetAndResolveVoices()) { // Source 3
                        clearInterval(intervalId); // Source 3
                    } else if (attempts >= maxAttempts) { // Source 3
                        clearInterval(intervalId); // Source 3
                        console.warn("getVoicesReliably: Voices NOT loaded after multiple polling attempts."); // Source 3
                        resolve([]); // Source 3
                    }
                }, 200);
            }
        }).catch(error => { // Source 3
            console.error("Error within getVoicesReliably promise:", error); // Source 3
            voicesPromise = null; // Source 3
            _voices = []; // Source 3
            return []; // Source 3
        });
    }
    return voicesPromise; // Source 3
}

async function getVoice(lang = 'en-US', gender = 'female') { // Source 3
  let availableVoices; // Source 3
  try { // Source 3
    availableVoices = await getVoicesReliably(); // Source 3
  } catch (error) { // Source 3
    console.error("getVoice: Failed to load voices from getVoicesReliably:", error); // Source 3
    return null; // Source 3
  }

  if (!availableVoices || availableVoices.length === 0) { // Source 3
      console.warn("getVoice: No voices available after getVoicesReliably resolved."); // Source 3
      return null; // Source 3
  }

  const langNormalized = lang.toLowerCase(); // Source 3
  const langVoices = availableVoices.filter(v => v.lang.toLowerCase() === langNormalized); // Source 3

  if (langVoices.length === 0) { // Source 3
    const primaryLang = langNormalized.split('-')[0]; // Source 3
    const primaryLangVoices = availableVoices.filter(v => v.lang.toLowerCase().startsWith(primaryLang)); // Source 3
    if (primaryLangVoices.length > 0) { // Source 3
        return primaryLangVoices[0]; // Source 3
    }
  } else { // Source 3
    if (gender === 'female') { // Source 3
        const femaleVoices = langVoices.filter(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('zira') || v.name.toLowerCase().includes('samantha') || v.name.toLowerCase().includes('susan') || v.name.toLowerCase().includes('eva') || v.name.toLowerCase().includes('google us english') || v.name.toLowerCase().includes('여자') || v.name.toLowerCase().includes(' 여성')); // Source 3
        if (femaleVoices.length > 0) return femaleVoices[0]; // Source 3
    } else if (gender === 'male') { // Source 3
        const maleVoices = langVoices.filter(v => v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('daniel') || v.name.toLowerCase().includes('tom') || v.name.toLowerCase().includes('google us english') || v.name.toLowerCase().includes('남자') || v.name.toLowerCase().includes(' 남성')); // Source 3
        if (maleVoices.length > 0) return maleVoices[0]; // Source 3
    }
    return langVoices[0]; // Source 3
  }

  const defaultVoice = availableVoices.find(v => v.default); // Source 3
  if (defaultVoice) return defaultVoice; // Source 3
  if (availableVoices.length > 0) return availableVoices[0]; // Source 3

  console.warn("getVoice: Exhausted all fallbacks. No voice found."); // Source 3
  return null; // Source 3
}


async function speakWord(word) { // Source 3
  const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "").trim(); // Source 3
  if (!cleanWord) return; // Source 3

  try { // Source 3
    await getVoicesReliably(); // Source 3
  } catch (error) { // Source 3
    console.error(`speakWord: Critical error ensuring voices were loaded for word "${cleanWord}":`, error); // Source 3
    return; // Source 3
  }

  return new Promise(async (resolve, reject) => { // Source 3
    try { // Source 3
      const utter = new window.SpeechSynthesisUtterance(cleanWord); // Source 3
      utter.lang = 'en-US'; // Source 3
      utter.rate = 0.92; // Source 3
      utter.pitch = 1.0; // Source 3
      utter.volume = 1.0; // Source 3

      const voice = await getVoice('en-US', 'female'); // Source 3
      if (voice) { // Source 3
        utter.voice = voice; // Source 3
      } else { // Source 3
        console.warn(`speakWord: No specific voice found for 'en-US' female for word "${cleanWord}". Using system default for this lang if available.`); // Source 3
      }

      utter.onend = () => resolve(); // Source 3
      utter.onerror = (event) => { // Source 3
        console.error(`speakWord: Event 'onerror' for word "${cleanWord}". Error: ${event.error}`, event); // Source 3
        reject(event.error || new Error(`Unknown speech synthesis error for "${cleanWord}"`)); // Source 3
      };
      window.speechSynthesis.speak(utter); // Source 3
    } catch (error) { // Source 3
        console.error(`speakWord: Exception during speakWord execution for "${cleanWord}":`, error); // Source 3
        reject(error); // Source 3
    }
  });
}

const englishFont = "21.168px Arial"; // Source 3
const translationFont = "17.0px Arial"; // Source 3

// =======================================================================
// START OF MODIFIED splitSentence FUNCTION
// =======================================================================
function splitSentence(sentenceText, isCurrentlyQuestion = null) { // Source 3
    if (!sentenceText) return ["", ""]; // Source 3
    const words = sentenceText.trim().split(" "); // Source 3
    const originalSentenceForShortCheck = sentenceText.trim(); // Source 3

    let line1Words = []; // Source 3
    let line2Words = []; // Source 3

    let modalHavePpFoundAndSplit = false; // Source 3

    for (let i = 0; i < words.length; i++) { // Source 3
        if (isAux(words[i])) { // Source 3
            let modalIdx = i; // Source 3
            let haveIdx = -1; // Source 3
            let ppIdx = -1; // Source 3

            if (modalIdx + 2 < words.length && // Source 3
                words[modalIdx + 1].toLowerCase().replace(/'/g, "") === "have" && // Source 3
                isPastParticiple(words[modalIdx + 2])) { // Source 3
                haveIdx = modalIdx + 1; // Source 3
                ppIdx = modalIdx + 2; // Source 3
            }
            else if (modalIdx + 3 < words.length && // Source 3
                     words[modalIdx + 2].toLowerCase().replace(/'/g, "") === "have" && // Source 3
                     isPastParticiple(words[modalIdx + 3])) { // Source 3
                haveIdx = modalIdx + 2; // Source 3
                ppIdx = modalIdx + 3; // Source 3
            }

            if (ppIdx !== -1) { // Source 3
                let endIndexForLine1 = ppIdx + 1; // Source 3
                line1Words = words.slice(0, endIndexForLine1); // Source 3
                line2Words = words.slice(endIndexForLine1); // Source 3
                modalHavePpFoundAndSplit = true; // Source 3
                break; // Source 3
            }
        }
    }

    if (!modalHavePpFoundAndSplit) { // Source 3
        const isEffectiveQuestionType = (isCurrentlyQuestion !== null) ? isCurrentlyQuestion : originalSentenceForShortCheck.endsWith('?'); // Source 3
        let wordsConsumed = 0; // Source 3
        let wordsConsumedForLine1 = 0; // Source 3

        if (isEffectiveQuestionType) { // Source 3
            if (words.length > 0) { // Source 3
                if (isWh(words[0])) { // Source 3
                    line1Words.push(words[0]); wordsConsumed = 1; // Source 3
                    if (wordsConsumed < words.length && isAux(words[wordsConsumed])) { // Source 3
                        line1Words.push(words[wordsConsumed++]); // Source 3
                        if (wordsConsumed < words.length) { // Source 3
                            line1Words.push(words[wordsConsumed++]); // Source 3
                            if (wordsConsumed < words.length && isVerb(words[wordsConsumed]) && !isAux(words[wordsConsumed])) { // Source 3
                                line1Words.push(words[wordsConsumed++]); // Source 3
                            }
                        }
                    } else if (wordsConsumed < words.length && (isVerb(words[wordsConsumed]) && !isAux(words[wordsConsumed]))) { // Source 3
                        line1Words.push(words[wordsConsumed++]); // Source 3
                    } else if (wordsConsumed < words.length) { // Source 3
                        line1Words.push(words[wordsConsumed++]); // Source 3
                        if (wordsConsumed < words.length && (isAux(words[wordsConsumed]) || (isVerb(words[wordsConsumed]) && !isAux(words[wordsConsumed])) ) ) { // Source 3
                            if (line1Words.length < 4) { line1Words.push(words[wordsConsumed++]); } // Source 3
                        }
                    }
                } else if (isAux(words[0])) { // Source 3
                    line1Words.push(words[0]); wordsConsumed = 1; // Source 3
                    if (wordsConsumed < words.length) { // Source 3
                        line1Words.push(words[wordsConsumed++]); // Source 3
                        if (wordsConsumed < words.length && isVerb(words[wordsConsumed]) && !isAux(words[wordsConsumed])) { // Source 3
                            line1Words.push(words[wordsConsumed++]); // Source 3
                        }
                    }
                }
            }
            if (line1Words.length === 0 && words.length > 0) { // Source 3
                let splitIdx = (words.length <= 3) ? words.length : Math.min(2, words.length); // Source 3
                if (words.length === 4) splitIdx = 2; // Source 3
                else if (words.length === 5) splitIdx = 3; // Source 3
                line1Words = words.slice(0, splitIdx); // Source 3
                wordsConsumed = line1Words.length; // Source 3
            }
            line2Words = words.slice(wordsConsumed); // Source 3
        } else { // Statement // Source 3
            let subjectEndIdx = -1; // Source 3
            for (let k = 0; k < words.length; k++) { // Source 3
                if (isAux(words[k]) || (isVerb(words[k]) && !isAux(words[k])) || isVing(words[k]) || isBeen(words[k])) { // Source 3
                    subjectEndIdx = k; break; // Source 3
                }
            }
            if (subjectEndIdx > 0) { // Subject found, and it's not the first word // Source 3
                for (let k = 0; k < subjectEndIdx; k++) line1Words.push(words[k]); // Source 3
                wordsConsumedForLine1 = subjectEndIdx; // Source 3

                // Add auxiliary if present
                if (wordsConsumedForLine1 < words.length && isAux(words[wordsConsumedForLine1])) { // Source 3
                    line1Words.push(words[wordsConsumedForLine1++]); // Source 3
                }
                // Add main verb (or -ing form, or 'been') if present
                let verbAddedToLine1 = false; // Source 3
                if (wordsConsumedForLine1 < words.length && (isVerb(words[wordsConsumedForLine1]) || isVing(words[wordsConsumedForLine1]) || isBeen(words[wordsConsumedForLine1]))) { // Source 3
                    let addVerb = true; // Source 3
                    // Avoid duplicating aux if it's also identified as a verb (e.g. "can")
                    if (line1Words.length > subjectEndIdx && line1Words.length > 0) { // Source 3
                        const lastWordInL1 = line1Words[line1Words.length - 1].toLowerCase().replace(/[^a-z0-9']/g, ''); // Source 3
                        const currentVerbCandidate = words[wordsConsumedForLine1].toLowerCase().replace(/[^a-z0-9']/g, ''); // Source 3
                        if (lastWordInL1 === currentVerbCandidate && isAux(words[wordsConsumedForLine1])) addVerb = false; // Source 3
                    }
                    if (addVerb) { line1Words.push(words[wordsConsumedForLine1]); verbAddedToLine1 = true; } // Source 3
                    wordsConsumedForLine1++; // Source 3
                }
                // If a verb was added and there's more, add one more word (likely an object or particle)
                if (verbAddedToLine1 && wordsConsumedForLine1 < words.length && line1Words.length < 4) { // Limit line 1 length // Source 3
                    line1Words.push(words[wordsConsumedForLine1++]); // Source 3
                }
                line2Words = words.slice(wordsConsumedForLine1); // Source 3

            } else if (subjectEndIdx === 0 && words.length > 0) { // First word is a verb/aux // Source 3
                line1Words.push(words[0]); wordsConsumedForLine1 = 1; // Source 3
                let verbAddedToLine1 = (isVerb(words[0]) && !isAux(words[0])) || isVing(words[0]) || isBeen(words[0]); // Source 3

                // If first word was Aux, and next is Verb/Ving/Been (not Aux), add it
                if (wordsConsumedForLine1 < words.length && isAux(words[0]) && // Source 3
                    (isVerb(words[wordsConsumedForLine1]) || isVing(words[wordsConsumedForLine1]) || isBeen(words[wordsConsumedForLine1])) && // Source 3
                    !isAux(words[wordsConsumedForLine1])) { // Source 3
                    line1Words.push(words[wordsConsumedForLine1++]); verbAddedToLine1 = true; // Source 3
                }
                // If a verb was part of line 1, and there's more, add one more word if line is short
                if (verbAddedToLine1 && wordsConsumedForLine1 < words.length && line1Words.length < 3) { // Source 3
                    line1Words.push(words[wordsConsumedForLine1++]); // Source 3
                }
                line2Words = words.slice(wordsConsumedForLine1); // Source 3
            } else { // No clear subject-verb split early, or very short sentence // Source 3
                const half = Math.max(1, Math.ceil(words.length / 2)); // Source 3
                line1Words = words.slice(0, half); // Source 3
                line2Words = words.slice(half); // Source 3
            }
        }
    }
    // If sentence is very short (<=4 words and <35 chars), put all on line 1,
    // unless it was a modal+have+pp split where line 2 was intentionally empty.
    if (words.length <= 4 && originalSentenceForShortCheck.length < 35) { // Source 3
        if (!(modalHavePpFoundAndSplit && line2Words.length === 0)) { // Source 3
            line1Words = words.slice(); // All words to line1 // Source 3
            line2Words = [];          // Line2 becomes empty // Source 3
        }
    }
    // Ensure line1 is not empty if original sentence had words
    if (line1Words.length === 0 && words.length > 0) { // Source 3
        line1Words = [words[0]]; // Source 3
        line2Words = words.slice(1); // Source 3
    }

    return [line1Words.join(" "), line2Words.join(" ").trim()]; // Source 3
}
// =======================================================================
// END OF MODIFIED splitSentence FUNCTION
// =======================================================================

// --- START: Word Animation Variables and Functions (Refactored for multiple animations) ---
let activeAnimations = []; // Holds all currently active word animations // Source 3

// Duration and height constants for word animations
const WORD_ANIM_DURATION_UP = 220; // Source 3
const WORD_ANIM_DURATION_DOWN = 550; // Source 3
const WORD_ANIM_MAX_HEIGHT = 18; // Source 3


function startWordWaveAnimation(wordRect, drawingContext) { // Source 3
  if (!wordRect || !wordRect.word || !drawingContext) return; // Source 3

  // Remove any existing animation for this *specific* wordRect to avoid duplicates if re-triggered quickly
  activeAnimations = activeAnimations.filter(anim => { // Source 3
      // Basic check: if word, x, y, lineIndex, and type (question/answer) are the same
      return !(anim.targetWordRect.word === wordRect.word && // Source 3
               Math.abs(anim.targetWordRect.x - wordRect.x) < 1 && // Source 3
               Math.abs(anim.targetWordRect.y - wordRect.y) < 1 && // Source 3
               anim.targetWordRect.lineIndex === wordRect.lineIndex && // Source 3
               anim.targetWordRect.isQuestionWord === wordRect.isQuestionWord); // Source 3
  });

  const newAnimation = { // Source 3
    targetWordRect: { ...wordRect }, // Store a copy of the wordRect // Source 3
    wordText: wordRect.word, // Source 3
    startTime: performance.now(), // Source 3
    durationUp: WORD_ANIM_DURATION_UP, // Source 3
    durationDown: WORD_ANIM_DURATION_DOWN, // Source 3
    maxHeight: WORD_ANIM_MAX_HEIGHT, // Source 3
    isActive: true, // Indicates this animation object is live // Source 3
    charPositions: [] // { char, x, originalY, currentY, width } // Source 3
  };

  const letters = newAnimation.wordText.split(''); // Source 3
  let currentDeferredX = 0; // Source 3
  drawingContext.font = englishFont; // Ensure context has the correct font for measurement // Source 3

  letters.forEach((char) => { // Source 3
    const charWidth = drawingContext.measureText(char).width; // Source 3
    newAnimation.charPositions.push({ // Source 3
      char: char, // Source 3
      x: wordRect.x + currentDeferredX, // Base X from the wordRect // Source 3
      originalY: wordRect.y,           // Base Y (center of text line) from the wordRect // Source 3
      currentY: wordRect.y, // Source 3
      width: charWidth // Source 3
    });
    currentDeferredX += charWidth; // Source 3
  });

  activeAnimations.push(newAnimation); // Source 3
}

function updateWordAnimations(currentTime) { // Plural, as it updates all active animations // Source 3
  for (let i = activeAnimations.length - 1; i >= 0; i--) { // Source 3
    const anim = activeAnimations[i]; // Source 3

    if (!anim.isActive || !anim.targetWordRect) { // Should ideally not happen if managed well // Source 3
      activeAnimations.splice(i, 1); // Source 3
      continue; // Source 3
    }

    const elapsedTime = currentTime - anim.startTime; // Source 3
    let yOffsetFactor; // Source 3

    if (elapsedTime < anim.durationUp) { // Source 3
      // Up phase
      const t = elapsedTime / anim.durationUp; // Source 3
      yOffsetFactor = t * (2 - t); // ease-out quad // Source 3
    } else if (elapsedTime < anim.durationUp + anim.durationDown) { // Source 3
      // Down phase
      const t = (elapsedTime - anim.durationUp) / anim.durationDown; // Source 3
      yOffsetFactor = Math.pow(1 - t, 2); // ease-in quad (but for offset, so it goes from 1 down to 0) // Source 3
    } else { // Source 3
      // Animation finished
      activeAnimations.splice(i, 1); // Remove from active list // Source 3
      continue; // Source 3
    }

    const yOffset = yOffsetFactor * anim.maxHeight; // Source 3

    anim.charPositions.forEach((cp) => { // Source 3
      cp.currentY = cp.originalY - yOffset; // Apply offset to each character // Source 3
    });
  }
}
// --- END: Word Animation Variables and Functions ---

// --- START: New/Modified triggerSentenceWordAnimation Function ---
function triggerSentenceWordAnimation(sentenceObject, isQuestion, allWordRects, drawingContext, animationStartDelay = 0) { // Source 3
  if (!isGameRunning || isGamePaused || !sentenceObject || !allWordRects || allWordRects.length === 0) { // Source 3
    return; // Source 3
  }

  setTimeout(() => { // 전체 애니메이션 로직 시작 전 지연 // Source 3
    if (!isGameRunning || isGamePaused) return; // 지연 후 게임 상태 재확인 // Source 3

    const relevantWordRects = allWordRects.filter(r => r.isQuestionWord === isQuestion) // Source 3
      .sort((a, b) => { // 라인과 x축 기준으로 정렬하여 올바른 순서 보장 // Source 3
        if (a.lineIndex !== b.lineIndex) return a.lineIndex - b.lineIndex; // Source 3
        return a.x - b.x; // Source 3
      });

    if (relevantWordRects.length === 0) return; // Source 3

    if (isQuestion) { // Source 3
      // 질문 문장 애니메이션 로직 (isPlayBtnQuestionTouched 로직과 유사)
      const firstWordRectToAnimate = relevantWordRects[0]; // Source 3
      startWordWaveAnimation(firstWordRectToAnimate, drawingContext); // Source 3

      const wordsToAnimateSubsequently = []; // Source 3
      const firstWordIndexInRects = 0; // Source 3

      if (firstWordIndexInRects + 1 < relevantWordRects.length) { // Source 3
        const secondWordRect = relevantWordRects[firstWordIndexInRects + 1]; // Source 3
        const secondWordTextClean = secondWordRect.word.toLowerCase().replace(/[^a-z0-9']/g, ""); // Source 3

        if (isAux(secondWordTextClean)) { // Source 3
          wordsToAnimateSubsequently.push(secondWordRect); // Source 3

          if (firstWordIndexInRects + 2 < relevantWordRects.length) { // Source 3
            const thirdWordRect = relevantWordRects[firstWordIndexInRects + 2]; // Source 3
            const thirdWordTextClean = thirdWordRect.word.toLowerCase().replace(/[^a-z0-9']/g, ""); // Source 3
            if (thirdWordTextClean === "have" || (!isVerb(thirdWordTextClean) && !isAux(thirdWordTextClean))) { // Source 3
               wordsToAnimateSubsequently.push(thirdWordRect); // Source 3
            }
          }
        }
      }

      if (wordsToAnimateSubsequently.length > 0) { // Source 3
        setTimeout(() => { // 첫 단어가 정점에 도달할 시간 후 다음 단어들 애니메이션 // Source 3
          if (!isGameRunning || isGamePaused) return; // Source 3
          wordsToAnimateSubsequently.forEach(rect => { // Source 3
            startWordWaveAnimation(rect, drawingContext); // Source 3
          });
        }, WORD_ANIM_DURATION_UP); // Source 3
      }
    } else { // 답변 문장 애니메이션 로직 (isPlayBtnAnswerTouched 로직과 유사) // Source 3
      const fullSentenceText = (sentenceObject.line1 + " " + sentenceObject.line2).trim(); // Source 3
      const wordsInSentence = fullSentenceText.split(" ").filter(w => w.length > 0); // Source 3

      if (wordsInSentence.length > 0) { // Source 3
        let subjectEndIndex = -1; // Source 3
        for (let i = 0; i < wordsInSentence.length; i++) { // Source 3
          if (isAux(wordsInSentence[i]) || // Source 3
              (isVerb(wordsInSentence[i]) && !isAux(wordsInSentence[i])) || // Source 3
              isVing(wordsInSentence[i]) || // Source 3
              isBeen(wordsInSentence[i])) { // Source 3
            subjectEndIndex = i - 1; // Source 3
            break; // Source 3
          }
          if (i === wordsInSentence.length - 1) { // 문장 끝까지 주어일 경우 // Source 3
            subjectEndIndex = i; // Source 3
          }
        }

        let auxWordForAnimation = null; // Source 3
        let auxWordGlobalIndexInSentence = -1; // Source 3

        if (subjectEndIndex >= 0 && (subjectEndIndex + 1) < wordsInSentence.length) { // Source 3
          const potentialAux = wordsInSentence[subjectEndIndex + 1]; // Source 3
          if (isAux(potentialAux)) { // Source 3
            auxWordForAnimation = potentialAux; // Source 3
            auxWordGlobalIndexInSentence = subjectEndIndex + 1; // Source 3
          }
        }

        if (auxWordForAnimation && auxWordGlobalIndexInSentence !== -1) { // Source 3
          if (relevantWordRects.length > auxWordGlobalIndexInSentence) { // Source 3
            const targetWordRectCandidate = relevantWordRects[auxWordGlobalIndexInSentence]; // Source 3
            // 안전하게 단어 텍스트도 비교 (이미 정렬되었으므로 인덱스가 맞아야 함)
            const candidateTextClean = targetWordRectCandidate.word.replace(/[^a-zA-Z0-9']/g, "").toLowerCase(); // Source 3
            const auxWordTextClean = auxWordForAnimation.replace(/[^a-zA-Z0-9']/g, "").toLowerCase(); // Source 3

            if (candidateTextClean === auxWordTextClean) { // Source 3
              startWordWaveAnimation(targetWordRectCandidate, drawingContext); // Source 3
            }
          }
        }
      }
    }
  }, animationStartDelay); // 인자로 받은 지연 시간 적용 // Source 3
}
// --- END: New/Modified triggerSentenceWordAnimation Function ---

function drawSingleSentenceBlock(sentenceObject, baseY, isQuestionBlock, blockContext) { // Source 3
    if (!sentenceObject) return { lastY: baseY, wordRects: [] }; // Source 3

    let localWordRects = []; // Source 3
    ctx.font = englishFont; // Source 3
    ctx.textAlign = "left"; // Source 3
    ctx.textBaseline = "middle"; // Source 3

    let lines = [sentenceObject.line1, sentenceObject.line2].filter(l => l && l.trim()); // Source 3
    if (lines.length === 0) return { lastY: baseY, wordRects: [] }; // Source 3

    let blockHeight = lines.length * LINE_HEIGHT; // Source 3
    let yFirstLineTextCenter; // Source 3

    if (isQuestionBlock) { // Source 3
        yFirstLineTextCenter = baseY - blockHeight / 2 + LINE_HEIGHT / 2; // Source 3
    } else { // Source 3
        yFirstLineTextCenter = baseY + LINE_HEIGHT / 2; // Source 3
    }

    let lastDrawnTextBottomY = baseY; // Source 3

    const sentenceFullText = (sentenceObject.line1 + " " + sentenceObject.line2).trim(); // Source 3
    const isCurrentBlockContentQuestionType = isQuestion(sentenceFullText); // Source 3


    for (let i = 0; i < lines.length; i++) { // Source 3
        const lineText = lines[i]; // Source 3
        let currentLineCenterY = yFirstLineTextCenter + i * LINE_HEIGHT; // Source 3

        if (isQuestionBlock) { // Source 3
            if (i === 0) currentLineCenterY -= 10; // Source 3
        } else { // Source 3
            if (i === 1) currentLineCenterY += 10; // Source 3
        }


        const words = lineText.split(" "); // Source 3
        let wordMetrics = words.map(w => ctx.measureText(w)); // Source 3
        const originalSpaceWidth = ctx.measureText(" ").width; // Source 3
        const adjustedSpaceWidth = originalSpaceWidth * 1.20; // Source 3
        let totalLineWidth = wordMetrics.reduce((sum, m) => sum + m.width, 0); // Source 3
        if (words.length > 1) { // Source 3
            totalLineWidth += adjustedSpaceWidth * (words.length - 1); // Source 3
        }

        let currentX = (canvas.width - totalLineWidth) / 2; // Source 3
        const wordHeight = parseFloat(englishFont.match(/(\d*\.?\d*)px/)[1]); // Source 3

        for (let j = 0; j < words.length; j++) { // Source 3
            let rawWord = words[j]; // Source 3
            const wordStartX = currentX; // Source 3
            const measuredWordWidth = wordMetrics[j].width; // Source 3

            let lowerCleanedWordForColor = rawWord.toLowerCase().replace(/[^a-z0-9']/g, ""); // Source 3

            let color = "#fff"; // Source 3
            if (isCurrentBlockContentQuestionType && i === 0 && isWh(lowerCleanedWordForColor)) { // Source 3
                color = '#5DBB63'; // Source 3
            } else if (isAux(lowerCleanedWordForColor) || isBeen(lowerCleanedWordForColor) || isVing(lowerCleanedWordForColor)) { // Source 3
                color = "#40b8ff"; // Source 3
            } else if (isVerb(lowerCleanedWordForColor) && !blockContext.verbColored && !isAux(lowerCleanedWordForColor)) { // Source 3
                color = "#FFD600"; // Source 3
                blockContext.verbColored = true; // Source 3
            }
            if (color === "#fff" && isCurrentBlockContentQuestionType && i === 0) { // Source 3
                if (j === 1 && words.length > 1 && isAux(words[0].toLowerCase().replace(/[^a-z0-9']/g, ''))) { // Source 3
                    color = "#40b8ff"; // Source 3
                } else if (j === 2 && words.length > 2 && // Source 3
                         isWh(words[0].toLowerCase().replace(/[^a-z0-9']/g, '')) && // Source 3
                         isAux(words[1].toLowerCase().replace(/[^a-z0-9']/g, ''))) { // Source 3
                    color = "#40b8ff"; // Source 3
                }
            }
            ctx.fillStyle = color; // Source 3

            const currentWordRectData = { // Source 3
                word: rawWord, x: wordStartX, y: currentLineCenterY, // Source 3
                w: measuredWordWidth, h: wordHeight, lineIndex: i, isQuestionWord: isQuestionBlock // Source 3
            };

            let matchingAnimation = null; // Source 3
            for (const anim of activeAnimations) { // Source 3
                if (anim.targetWordRect.word === currentWordRectData.word && // Source 3
                    Math.abs(anim.targetWordRect.x - currentWordRectData.x) < 1 && // Source 3
                    Math.abs(anim.targetWordRect.y - currentWordRectData.y) < 1 && // Source 3
                    // Math.abs(anim.targetWordRect.w - currentWordRectData.w) < 1 && // Width can vary slightly with canvas measureText
                    anim.targetWordRect.h === currentWordRectData.h && // Source 3
                    anim.targetWordRect.lineIndex === currentWordRectData.lineIndex && // Source 3
                    anim.targetWordRect.isQuestionWord === currentWordRectData.isQuestionWord) { // Source 3
                    matchingAnimation = anim; // Source 3
                    break; // Source 3
                }
            }

            if (matchingAnimation) { // Source 3
                matchingAnimation.charPositions.forEach((charPos) => { // Source 3
                    ctx.fillText(charPos.char, charPos.x, charPos.currentY); // Source 3
                });
            } else { // Source 3
                ctx.fillText(rawWord, wordStartX, currentLineCenterY); // Source 3
            }

            localWordRects.push(currentWordRectData); // Source 3

            if (j < words.length - 1) { // Source 3
                currentX += measuredWordWidth + adjustedSpaceWidth; // Source 3
            } else { // Source 3
                currentX += measuredWordWidth; // Source 3
            }
        }
        lastDrawnTextBottomY = currentLineCenterY + LINE_HEIGHT / 2; // Source 3
        if (isQuestionBlock && i === 0) { // Source 3
            lastDrawnTextBottomY -=10; // Source 3
        } else if (!isQuestionBlock && i === 1) { // Source 3
            lastDrawnTextBottomY +=10; // Source 3
        }
    }
    return { lastY: lastDrawnTextBottomY, wordRects: localWordRects }; // Source 3
}


function drawPlayButton(buttonRect, baseScaleForOriginalSize) { // Source 3
    if (!buttonRect) return; // Source 3
    const visualShrinkFactor = 0.72; // Source 3
    const visualWidth = buttonRect.w * visualShrinkFactor; // Source 3
    const visualHeight = buttonRect.h * visualShrinkFactor; // Source 3
    const visualX = buttonRect.x + (buttonRect.w - visualWidth) / 2; // Source 3
    const visualY = buttonRect.y + (buttonRect.h - visualHeight) / 2; // Source 3
    const internalElementScale = baseScaleForOriginalSize * visualShrinkFactor; // Source 3

    ctx.save(); // Source 3
    ctx.globalAlpha = Math.min(1.0, centerAlpha + 0.2) * 0.82; // Source 3
    ctx.fillStyle = "#222"; // Source 3
    ctx.beginPath(); // Source 3
    const cornerRadius = 20 * internalElementScale; // Source 3
    ctx.roundRect(visualX, visualY, visualWidth, visualHeight, cornerRadius); // Source 3
    ctx.fill(); // Source 3

    ctx.globalAlpha = centerAlpha; // Source 3
    ctx.strokeStyle = "#4CAF50"; // Source 3
    ctx.lineWidth = 3 * internalElementScale; // Source 3
    ctx.beginPath(); // Source 3
    ctx.roundRect(visualX, visualY, visualWidth, visualHeight, cornerRadius); // Source 3
    ctx.stroke(); // Source 3

    ctx.fillStyle = "#4CAF50"; // Source 3
    ctx.beginPath(); // Source 3
    const playSize = 36 * internalElementScale; // Source 3
    const btnPad = 18 * internalElementScale; // Source 3
    const triangleSymbolVerticalLineXOffset = 6 * internalElementScale; // Source 3
    ctx.moveTo(visualX + btnPad + triangleSymbolVerticalLineXOffset, visualY + btnPad); // Source 3
    ctx.lineTo(visualX + btnPad + triangleSymbolVerticalLineXOffset, visualY + visualHeight - btnPad); // Source 3
    ctx.lineTo(visualX + btnPad + playSize, visualY + visualHeight / 2); // Source 3
    ctx.closePath(); // Source 3
    ctx.fill(); // Source 3
    ctx.restore(); // Source 3
}


function drawCenterSentence() { // Source 3
    if (!currentQuestionSentence && !currentAnswerSentence && !fireworks) { // Source 3
        centerSentenceWordRects = []; // Source 3
        return; // Source 3
    }

    let newWordRects = []; // Source 3

    ctx.save(); // Source 3
    ctx.globalAlpha = centerAlpha; // Source 3

    const mainRenderAreaYCenter = topOffset + (canvas.height - topOffset) / 2; // Source 3
    const questionBlockCenterY = mainRenderAreaYCenter + SENTENCE_VERTICAL_ADJUSTMENT; // Source 3

    let questionBlockContext = { verbColored: false }; // Source 3
    let questionDrawOutput = { lastY: questionBlockCenterY - LINE_HEIGHT, wordRects: [] }; // Source 3

    const baseOverallScale = 0.49; // Source 3
    const visualReductionFactor = 0.8; // Source 3
    const currentVisualScaleForHitbox = baseOverallScale * visualReductionFactor; // Source 3

    const btnH_forHitbox = (36 * currentVisualScaleForHitbox) + (18 * currentVisualScaleForHitbox * 2); // Source 3
    const btnW_forHitbox = (36 * currentVisualScaleForHitbox) + (18 * currentVisualScaleForHitbox * 2); // Source 3
    const btnX = 10; // Source 3

    if (currentQuestionSentence) { // Source 3
        questionDrawOutput = drawSingleSentenceBlock(currentQuestionSentence, questionBlockCenterY, true, questionBlockContext); // Source 3
        newWordRects.push(...questionDrawOutput.wordRects); // Source 3

        let playButtonQuestionY = questionBlockCenterY - btnH_forHitbox / 2; // Source 3
        const questionLinesForHeight = [currentQuestionSentence.line1, currentQuestionSentence.line2].filter(l => l && l.trim()); // Source 3
        if (questionLinesForHeight.length > 0) { // Source 3
            let actualFirstLineCenterY = questionBlockCenterY - (questionLinesForHeight.length * LINE_HEIGHT) / 2 + LINE_HEIGHT / 2; // Source 3
            if (questionLinesForHeight.length > 0) actualFirstLineCenterY -=10; // Source 3
            playButtonQuestionY = actualFirstLineCenterY - btnH_forHitbox / 2; // Source 3
        }

        playButtonRectQuestion = { x: btnX, y: playButtonQuestionY, w: btnW_forHitbox, h: btnH_forHitbox }; // Source 3
        if (showPlayButtonQuestion) { // Source 3
            drawPlayButton(playButtonRectQuestion, currentVisualScaleForHitbox); // Source 3
        }

        if (showTranslationForQuestion && currentQuestionSentenceIndex !== null && translations[currentQuestionSentenceIndex]) { // Source 3
            ctx.save(); // Source 3
            ctx.globalAlpha = centerAlpha; // Source 3
            ctx.font = translationFont; // Source 3
            ctx.textAlign = "center"; // Source 3
            ctx.textBaseline = "middle"; // Source 3
            ctx.fillStyle = "#2E8B57"; // Source 3
            ctx.shadowColor = "#111"; ctx.shadowBlur = 4; // Source 3
            const translationTextHeight = parseFloat(translationFont.match(/(\d*\.?\d*)px/)[1]); // Source 3
            const translationBelowY = questionDrawOutput.lastY + 10 + translationTextHeight / 2; // Source 3
            ctx.fillText(translations[currentQuestionSentenceIndex], canvas.width / 2, translationBelowY); // Source 3
            ctx.restore(); // Source 3
        }
    }

    if (currentAnswerSentence) { // Source 3
        const answerLines = [currentAnswerSentence.line1, currentAnswerSentence.line2].filter(l => l && l.trim()); // Source 3
        const answerBlockHeight = answerLines.length * LINE_HEIGHT; // Source 3
        let topYForAnswerBlock; // Source 3

        if (currentQuestionSentence) { // Source 3
            topYForAnswerBlock = questionDrawOutput.lastY + ANSWER_OFFSET_Y; // Source 3
        } else { // Source 3
            let effectiveCenterY = mainRenderAreaYCenter; // Source 3
            if (answerLines.length === 2) effectiveCenterY -= 10 / 2; // Source 3
             topYForAnswerBlock = effectiveCenterY - (answerBlockHeight / 2); // Source 3
        }

        const answerFirstLineCenterY = topYForAnswerBlock + LINE_HEIGHT / 2; // Source 3
        playButtonRect = { x: btnX, y: answerFirstLineCenterY - btnH_forHitbox / 2, w: btnW_forHitbox, h: btnH_forHitbox }; // Source 3
        if (showPlayButton) { // Source 3
            drawPlayButton(playButtonRect, currentVisualScaleForHitbox); // Source 3
        }

        let answerBlockContext = { verbColored: false }; // Source 3
        const answerDrawOutput = drawSingleSentenceBlock(currentAnswerSentence, topYForAnswerBlock, false, answerBlockContext); // Source 3
        newWordRects.push(...answerDrawOutput.wordRects); // Source 3

        if (showTranslationForAnswer && currentAnswerSentenceIndex !== null && translations[currentAnswerSentenceIndex]) { // Source 3
            ctx.save(); // Source 3
            ctx.globalAlpha = centerAlpha; // Source 3
            ctx.font = translationFont; // Source 3
            ctx.textAlign = "center"; // Source 3
            ctx.textBaseline = "middle"; // Source 3
            ctx.fillStyle = "#2E8B57"; // Source 3
            ctx.shadowColor = "#111"; ctx.shadowBlur = 4; // Source 3
            const translationTextHeight = parseFloat(translationFont.match(/(\d*\.?\d*)px/)[1]); // Source 3
            const translationBelowY = answerDrawOutput.lastY + 3 + translationTextHeight / 2; // Source 3
            ctx.fillText(translations[currentAnswerSentenceIndex], canvas.width / 2, translationBelowY); // Source 3
            ctx.restore(); // Source 3
        }
    }
    centerSentenceWordRects = newWordRects; // Source 3


    // START OF MODIFIED WORD TRANSLATION DRAWING LOGIC
    if (activeWordTranslation && activeWordTranslation.show) { // Source 3
        ctx.save(); // Source 3
        ctx.globalAlpha = centerAlpha; // Source 3
        const wordTransFontFamily = "'Malgun Gothic', 'Nanum Gothic', Arial, sans-serif"; // Source 3
        const wordTransFontSize = 16; // Source 3
        ctx.font = `${wordTransFontSize}px ${wordTransFontFamily}`; // Source 3
        // ctx.textAlign = "center"; // textAlign은 아래에서 각 줄별로 설정 // Source 3
        ctx.fillStyle = "#2E8B57"; // Source 3
        ctx.shadowColor = "rgba(0,0,0,0.6)"; ctx.shadowBlur = 2; ctx.shadowOffsetX = 1; ctx.shadowOffsetY = 1; // Source 3

        const angleDegrees = 40; // Source 3
        // basePadding: 단어 경계로부터 번역 텍스트가 그려질 회전된 좌표계의 원점까지의 수직 거리
        const basePadding = 8; // Source 3
        // textOffset: 회전된 좌표계의 원점 (0,0)으로부터 실제 텍스트가 그려지기 시작하는 위치까지의 미세 조정 값
        const textOffset = 5; // Source 3

        const wordCenterX = activeWordTranslation.x + activeWordTranslation.w / 2; // Source 3
        const englishWordMiddleY = activeWordTranslation.y; // 단어 텍스트 라인의 수직 중앙 // Source 3
        const englishWordHalfHeight = activeWordTranslation.h / 2; // 단어 폰트 높이의 절반 // Source 3

        let translateX, translateY, angleRad, textAlign, textBaseline, drawX, drawY; // Source 3

        if (activeWordTranslation.lineIndex === 0) { // Source 3
            // 위쪽 줄 단어: 우상향 40도
            translateX = wordCenterX; // Source 3
            translateY = englishWordMiddleY - englishWordHalfHeight - basePadding + 13; // 최종적으로 원래 위치에서 13px 아래
            angleRad = -angleDegrees * Math.PI / 180; // Source 3

            textAlign = 'left';   // 회전 후 (0,0)을 기준으로 텍스트가 왼쪽에서 시작 // Source 3
            textBaseline = 'bottom';// 회전 후 (0,0)을 기준으로 텍스트의 아래쪽 라인 // Source 3
            drawX = textOffset;     // 회전된 로컬 좌표 (0,0)에서 x축으로 textOffset만큼 이동 // Source 3
            drawY = -textOffset;    // 회전된 로컬 좌표 (0,0)에서 y축으로 -textOffset만큼 이동 (위로) // Source 3
        } else { // Source 3
            // 아래쪽 줄 단어: 좌하향 40도
            translateX = wordCenterX; // Source 3
            translateY = englishWordMiddleY + englishWordHalfHeight + basePadding + 13; // 최종적으로 원래 위치에서 13px 아래

            angleRad = (180 - angleDegrees) * Math.PI / 180; // Source 3

            textAlign = 'right';  // 140도 회전 시, (0,0)을 기준으로 텍스트가 오른쪽에서 시작해야 왼쪽으로 뻗어나감. // Source 3
            textBaseline = 'top';   // 회전 후 (0,0)을 기준으로 텍스트의 위쪽 라인 // Source 3
            drawX = -textOffset;    // 회전된 로컬 좌표 (0,0)에서 x축으로 -textOffset만큼 이동 (왼쪽으로) // Source 3
            drawY = textOffset;     // 회전된 로컬 좌표 (0,0)에서 y축으로 textOffset만큼 이동 (아래로) // Source 3
        }

        ctx.translate(translateX, translateY); // 기준점으로 이동 // Source 3
        ctx.rotate(angleRad); // 회전 // Source 3
        ctx.textAlign = textAlign; // Source 3
        ctx.textBaseline = textBaseline; // Source 3
        ctx.fillText(activeWordTranslation.translation, drawX, drawY); // 계산된 오프셋으로 텍스트 그리기 // Source 3

        ctx.restore(); // Source 3
    }
    // END OF MODIFIED WORD TRANSLATION DRAWING LOGIC
    ctx.restore(); // Source 3
}


function drawFireworks() { // Source 3
  if (!fireworks) return; // Source 3
  ctx.save(); // Source 3
  ctx.font = englishFont; // Source 3
  ctx.textAlign = "center"; // Source 3
  ctx.textBaseline = "middle"; // Source 3
  fireworks.forEach(fw => { // Source 3
    ctx.globalAlpha = 1; // Source 3
    ctx.fillStyle = fw.color; // Source 3
    ctx.fillText(fw.text, fw.x, fw.y); // Source 3
  });
  ctx.restore(); // Source 3
}


function getClockwiseAngle(index, total) { // Source 3
  return -Math.PI / 2 + (index * 2 * Math.PI) / total; // Source 3
}


function startFireworks(sentenceTextForFireworks, globalSentenceIndex, explosionX, explosionY) { // Source 3
    let roleOfNewSentence; // Source 3
    let questionTextForLayout = ""; // Source 3
    const isNewSentenceQuestion = globalSentenceIndex % 2 === 0; // Source 3
    roleOfNewSentence = isNewSentenceQuestion ? 'question' : 'answer'; // Source 3

    if (roleOfNewSentence === 'question') { // Source 3
        currentQuestionSentence = null; currentAnswerSentence = null; // Source 3
        currentQuestionSentenceIndex = null; currentAnswerSentenceIndex = null; // Source 3
        showPlayButton = false; showPlayButtonQuestion = false; // Source 3
        showTranslationForQuestion = false; showTranslationForAnswer = false; // Source 3
    } else { // Answer // Source 3
        if (currentQuestionSentence && currentQuestionSentenceIndex === globalSentenceIndex - 1) { // Source 3
            questionTextForLayout = (currentQuestionSentence.line1 + " " + currentQuestionSentence.line2).trim(); // Source 3
        } else if (globalSentenceIndex > 0 && sentences[globalSentenceIndex - 1]) { // Source 3
            questionTextForLayout = sentences[globalSentenceIndex - 1]; // Source 3
        } else { // Source 3
            questionTextForLayout = " "; // Source 3
        }
        currentAnswerSentence = null; currentAnswerSentenceIndex = null; // Source 3
        showPlayButton = false; // Source 3
        showTranslationForAnswer = false; // Source 3
    }

    if (activeWordTranslation) // Source 3
    activeWordTranslation = null; // Source 3
    if (wordTranslationTimeoutId) // Source 3
    centerSentenceWordRects = []; // Source 3

    const [fireworkLine1, fireworkLine2] = splitSentence(sentenceTextForFireworks, isNewSentenceQuestion); // Source 3
    const wordsForFireworks = []; // Source 3
    if (fireworkLine1.trim()) wordsForFireworks.push(...fireworkLine1.split(" ").map(word => ({ word, row: 0 }))); // Source 3
    if (fireworkLine2.trim()) wordsForFireworks.push(...fireworkLine2.split(" ").map(word => ({ word, row: 1 }))); // Source 3

    if(wordsForFireworks.length === 0) { // Source 3
        sentenceActive = false; return; // Source 3
    }

    const baseRadius = 51.2 * 0.88; const maxRadius = 120.96 * 0.88 * 0.95; // Adjusted maxRadius // Source 3
    let centerX = explosionX; const margin = 8; // Source 3
    if (centerX - maxRadius < margin) centerX = margin + maxRadius; // Source 3
    if (centerX + maxRadius > canvas.width - margin) centerX = canvas.width - margin - maxRadius; // Source 3

    fireworks = []; // Source 3
    fireworksState = { // Source 3
        t: 0, phase: "explode", holdDuration: 60, explodeDuration: 180, gatherDuration: 45, // Source 3
        originX: centerX, originY: explosionY, // Source 3
        sentenceTextToDisplayAfter: sentenceTextForFireworks, // Source 3
        finalSentenceIndex: globalSentenceIndex, // Source 3
        roleOfNewSentence: roleOfNewSentence, // Source 3
    };

    const mainRenderAreaYCenter = topOffset + (canvas.height - topOffset) / 2; // Source 3
    const [sL1_fw, sL2_fw] = splitSentence(sentenceTextForFireworks, isNewSentenceQuestion); // Source 3
    const sLines_fw = [sL1_fw, sL2_fw].filter(l => l && l.trim()); // Source 3
    const sentenceBlockFinalHeight_fw = sLines_fw.length * LINE_HEIGHT + (sLines_fw.length === 2 && isNewSentenceQuestion ? -10 : (sLines_fw.length === 2 && !isNewSentenceQuestion ? 10 : 0)); // Source 3


    for (let j = 0; j < wordsForFireworks.length; j++) { // Source 3
        const angle = getClockwiseAngle(j, wordsForFireworks.length); // Source 3
        const color = burstColors[j % burstColors.length]; // Source 3
        let wordTargetY; // Source 3

        if (roleOfNewSentence === 'question') { // Source 3
            const qBlockFinalCenterY = mainRenderAreaYCenter + SENTENCE_VERTICAL_ADJUSTMENT; // Source 3
            wordTargetY = qBlockFinalCenterY - sentenceBlockFinalHeight_fw / 2 + (wordsForFireworks[j].row * LINE_HEIGHT) + (LINE_HEIGHT / 2); // Source 3
            if (wordsForFireworks[j].row === 0) wordTargetY -= 10; // Source 3
        } else { // Answer // Source 3
            const [qTextL1_layout, qTextL2_layout] = splitSentence(questionTextForLayout, true); // Source 3
            const qTextLines_layout = [qTextL1_layout, qTextL2_layout].filter(l => l && l.trim()); // Source 3
            let questionBlockActualHeight_layout = qTextLines_layout.length * LINE_HEIGHT; // Source 3
            if(qTextLines_layout.length === 1) questionBlockActualHeight_layout -=10; // Source 3

            const questionBlockActualCenterY_layout = mainRenderAreaYCenter + SENTENCE_VERTICAL_ADJUSTMENT; // Source 3
            let questionBlockActualBottomY_layout = questionBlockActualCenterY_layout + questionBlockActualHeight_layout / 2; // Source 3
             if (qTextLines_layout.length === 1) { // Source 3
                 questionBlockActualBottomY_layout = questionBlockActualCenterY_layout - 10; // Source 3
             } else if (qTextLines_layout.length === 2){ // Source 3
                 questionBlockActualBottomY_layout = questionBlockActualCenterY_layout + LINE_HEIGHT - 10; // Source 3
             } else if (qTextLines_layout.length === 0) { // Source 3
                 questionBlockActualBottomY_layout = questionBlockActualCenterY_layout; // Source 3
             }


            let answerBlockFinalTopY_fw; // Source 3
            if (qTextLines_layout.length > 0) { // Source 3
                answerBlockFinalTopY_fw = questionBlockActualBottomY_layout + ANSWER_OFFSET_Y; // Source 3
            } else { // Source 3
                answerBlockFinalTopY_fw = questionBlockActualCenterY_layout - sentenceBlockFinalHeight_fw / 2; // Source 3
            }
            wordTargetY = answerBlockFinalTopY_fw + (wordsForFireworks[j].row * LINE_HEIGHT) + (LINE_HEIGHT / 2); // Source 3
            if (wordsForFireworks[j].row === 1) wordTargetY += 10; // Source 3
        }


        fireworks.push({ // Source 3
            text: wordsForFireworks[j].word, angle: angle, rowInSentence: wordsForFireworks[j].row, // Source 3
            x: centerX, y: explosionY, // Source 3
            radius: baseRadius, maxRadius: maxRadius, // Source 3
            color: color, // Source 3
            targetX: 0, // Source 3
            targetY: wordTargetY, // Source 3
        });
    }
    sentenceActive = true; centerAlpha = 1.0; // Source 3
}


function updateFireworks() { // Source 3
  if (!fireworks || !fireworksState) return false; // Source 3
  fireworksState.t++; // Source 3

  if (fireworksState.phase === "explode") { // Source 3
    const progress = Math.min(fireworksState.t / fireworksState.explodeDuration, 1); // Source 3
    const ease = 1 - Math.pow(1 - progress, 2); // Source 3
    const currentRadius = 51.2 * 0.88 + (120.96 * 0.88 - 51.2 * 0.88) * ease; // Source 3
    fireworks.forEach((fw) => { // Source 3
      fw.radius = currentRadius; // Source 3
      fw.x = fireworksState.originX + Math.cos(fw.angle) * fw.radius; // Source 3
      fw.y = fireworksState.originY + Math.sin(fw.angle) * fw.radius; // Source 3
    });
    if (progress >= 1) { fireworksState.phase = "hold"; fireworksState.t = 0; } // Source 3
  } else if (fireworksState.phase === "hold") { // Source 3
    if (fireworksState.t >= fireworksState.holdDuration) { // Source 3
      fireworksState.phase = "gather"; fireworksState.t = 0; // Source 3
      centerAlpha = 0; // Source 3
    }
  } else if (fireworksState.phase === "gather") { // Source 3
    const progress = Math.min(fireworksState.t / fireworksState.gatherDuration, 1); // Source 3
    const ease = Math.pow(progress, 2); // Source 3
    const tempCtx = canvas.getContext('2d'); // Source 3
    tempCtx.font = englishFont; // Source 3
    const isGatherSentenceQuestion = fireworksState.roleOfNewSentence === 'question'; // Source 3
    const [sentenceLine1Gather, sentenceLine2Gather] = splitSentence(fireworksState.sentenceTextToDisplayAfter, isGatherSentenceQuestion); // Source 3
    let sentenceLineWordArrays = []; // Source 3
    if(sentenceLine1Gather.trim()) sentenceLineWordArrays.push(sentenceLine1Gather.split(" ")); // Source 3
    if(sentenceLine2Gather.trim()) sentenceLineWordArrays.push(sentenceLine2Gather.split(" ")); // Source 3

    const originalSpaceWidthFireworks = tempCtx.measureText(" ").width; // Source 3
    const adjustedSpaceWidthFireworks = originalSpaceWidthFireworks * 1.20; // Source 3

    let wordIndexInFireworks = 0; // Source 3
    for (let i = 0; i < sentenceLineWordArrays.length; i++) { // Source 3
        const wordsInLine = sentenceLineWordArrays[i]; // Source 3
        let wordMetrics = wordsInLine.map(w => tempCtx.measureText(w)); // Source 3
        let currentLineTotalWidth = 0; // Source 3
        for(let k=0; k < wordMetrics.length; k++) { // Source 3
            currentLineTotalWidth += wordMetrics[k].width; // Source 3
            if (k < wordMetrics.length - 1) { // Source 3
                currentLineTotalWidth += adjustedSpaceWidthFireworks; // Source 3
            }
        }
        let currentXTargetForWord = (canvas.width - currentLineTotalWidth) / 2; // Source 3
        for (let j = 0; j < wordsInLine.length; j++) { // Source 3
            if (fireworks[wordIndexInFireworks]) { // Source 3
                fireworks[wordIndexInFireworks].targetX = currentXTargetForWord; // Source 3
                currentXTargetForWord += wordMetrics[j].width; // Source 3
                if (j < wordsInLine.length - 1) { // Source 3
                    currentXTargetForWord += adjustedSpaceWidthFireworks; // Source 3
                }
            }
            wordIndexInFireworks++; // Source 3
        }
    }

    fireworks.forEach((fw) => { // Source 3
      fw.x += (fw.targetX - fw.x) * ease * 0.2; // Source 3
      fw.y += (fw.targetY - fw.y) * ease * 0.2; // Source 3
    });
    centerAlpha += (1.0 - centerAlpha) * ease * 0.15; // Source 3

    if (progress >= 1) { // Source 3
        fireworksState.phase = "done"; // Source 3
        const newSentenceText = fireworksState.sentenceTextToDisplayAfter; // Source 3
        const newSentenceIndex = fireworksState.finalSentenceIndex; // Source 3
        const roleOfNewSentence = fireworksState.roleOfNewSentence; // Source 3
        const isFinalSentenceQuestion = roleOfNewSentence === 'question'; // Source 3
        const [newLine1, newLine2] = splitSentence(newSentenceText, isFinalSentenceQuestion); // Source 3
        const newSentenceObject = { line1: newLine1, line2: newLine2 }; // Source 3
        let playAudioForThisSentence = false; // Source 3

        if (roleOfNewSentence === 'question') { // Source 3
            currentQuestionSentence = newSentenceObject; currentQuestionSentenceIndex = newSentenceIndex; // Source 3
            currentAnswerSentence = null; currentAnswerSentenceIndex = null; // Source 3
            showPlayButton = false; showPlayButtonQuestion = true; // Source 3
            playAudioForThisSentence = true; // Source 3
        } else { // Answer // Source 3
            const questionIndexOfThisAnswer = newSentenceIndex - 1; // Source 3
            if (questionIndexOfThisAnswer >= 0 && sentences[questionIndexOfThisAnswer]) { // Source 3
                if (!currentQuestionSentence || currentQuestionSentenceIndex !== questionIndexOfThisAnswer) { // Source 3
                    const [qL1, qL2] = splitSentence(sentences[questionIndexOfThisAnswer], true); // Source 3
                    currentQuestionSentence = {line1: qL1, line2: qL2}; // Source 3
                    currentQuestionSentenceIndex = questionIndexOfThisAnswer; // Source 3
                }
                 showPlayButtonQuestion = true; // Source 3
            } else { // Source 3
                currentQuestionSentence = null; currentQuestionSentenceIndex = null; // Source 3
                showPlayButtonQuestion = false; // Source 3
            }
            currentAnswerSentence = newSentenceObject; currentAnswerSentenceIndex = newSentenceIndex; // Source 3
            showPlayButton = true; // Source 3
            playAudioForThisSentence = true; // Source 3
        }
        centerAlpha = 1.0; // Source 3
        fireworks = null; fireworksState = null; sentenceActive = false; // Source 3
        if (activeWordTranslation) activeWordTranslation.show = false; // Source 3
        activeWordTranslation = null; if (wordTranslationTimeoutId) clearTimeout(wordTranslationTimeoutId); // Source 3

        if (playAudioForThisSentence) { // Source 3
            let audioIndexToPlay = null; // Source 3
            let sentenceObjectForAnimation = null; // Source 3
            let isQuestionForAnimation = false; // Source 3

            if (roleOfNewSentence === 'question' && currentQuestionSentenceIndex !== null) { // Source 3
                audioIndexToPlay = currentQuestionSentenceIndex; // Source 3
                sentenceObjectForAnimation = currentQuestionSentence; // Source 3
                isQuestionForAnimation = true; // Source 3
            } else if (roleOfNewSentence === 'answer' && currentAnswerSentenceIndex !== null) { // Source 3
                audioIndexToPlay = currentAnswerSentenceIndex; // Source 3
                sentenceObjectForAnimation = currentAnswerSentence; // Source 3
                isQuestionForAnimation = false; // Source 3
            }

            if (audioIndexToPlay !== null && sentenceObjectForAnimation) { // Source 3
                // 문장 안정화 및 오디오 준비를 위한 기존 지연 시간
                setTimeout(() => { // Source 3
                    window.speechSynthesis.cancel(); // Source 3
                    playSentenceAudio(audioIndexToPlay) // Source 3
                        .then(() => { // Source 3
                            // 오디오 재생이 시작된 후 애니메이션 트리거
                            // 플레이 버튼 터치 시의 애니메이션 지연(AUX_ANIMATION_DELAY 등)과 유사한 값을 사용
                            // 여기서는 300ms를 사용하여 음성 시작과 애니메이션 시작 사이에 약간의 간격을 둠
                            triggerSentenceWordAnimation( // Source 3
                                sentenceObjectForAnimation, // Source 3
                                isQuestionForAnimation, // Source 3
                                centerSentenceWordRects, // 이 시점에는 drawCenterSentence를 통해 채워져 있을 것으로 기대 // Source 3
                                ctx, // Source 3
                                300 // 음성 시작 후 애니메이션 시작까지의 지연 시간 // Source 3
                            );
                        })
                        .catch(err => console.error(`Error playing sentence audio for index ${audioIndexToPlay} from fireworks:`, err)); // Source 3
                }, 300); // 불꽃놀이 종료 후 문장 표시 및 오디오 재생까지의 지연 // Source 3
            }
        }
    }
  }
}


function spawnEnemy() { // Source 3
  const idx = Math.floor(Math.random() * enemyImgs.length); // Source 3
  const img = enemyImgs[idx]; // Source 3
  const x = Math.random() * (canvas.width - ENEMY_SIZE); // Source 3
  const spawnYMax = canvas.height * 0.2; // Source 3
  const y = topOffset + Math.random() * spawnYMax + 20; // Source 3
  let enemy = { // Source 3
    x, y, w: ENEMY_SIZE, h: ENEMY_SIZE, img, shot: false, imgIndex: idx, // Source 3
    baseY: y, initialX: x, rotation: 0 // Source 3
  };
  if (idx === 3) { // Maple Leaf // Source 3
    enemy.swayAngle = Math.random() * Math.PI * 2; // Source 3
    enemy.swaySpeed = (Math.random() * 2 + 1.5) * (Math.random() > 0.5 ? 1 : -1); // 1.5 to 3.5, random direction // Source 3
    enemy.swayAmplitude = Math.random() * 20 + 20; // 20 to 40 // Source 3
    enemy.driftXPerSecond = (Math.random() - 0.5) * 60; // -30 to 30 pps // Source 3
    enemy.flutterAngle = Math.random() * Math.PI * 2; // Source 3
    enemy.flutterSpeed = Math.random() * 5 + 3; // 3 to 8 rad/s // Source 3
    enemy.flutterAmplitude = Math.random() * 3 + 3; // 3 to 6 pixels // Source 3
  } else if (idx === 2) { // Cosmos // Source 3
    enemy.rotationSpeed = (Math.random() * 0.8 + 0.4) * (Math.random() > 0.5 ? 1 : -1); // 0.4 to 1.2 rad/s // Source 3
    enemy.driftXPerSecond = (Math.random() - 0.5) * 20; // -10 to 10 pps // Source 3
    enemy.swayAngle = Math.random() * Math.PI * 2; // Source 3
    enemy.swaySpeed = (Math.random() * 0.8 + 0.4); // 0.4 to 1.2 rad/s // Source 3
    enemy.swayAmplitude = Math.random() * 10 + 5; // 5 to 15 pixels // Source 3
    // Spawn a detached petal when a cosmos enemy is created
    const petal = { // Source 3
        x: enemy.x + enemy.w / 2 - PETAL_SIZE / 2, y: enemy.y + enemy.h / 2, // Source 3
        w: PETAL_SIZE, h: PETAL_SIZE, img: enemyImgs[2], // Use cosmos image for petal // Source 3
        baseY: enemy.y + enemy.h / 2, // Start from enemy center // Source 3
        initialX: enemy.x + enemy.w / 2 - PETAL_SIZE / 2, // Source 3
        rotation: Math.random() * Math.PI * 2, // Source 3
        rotationSpeed: (Math.random() - 0.5) * PETAL_ROTATION_SPEED_BASE * 2 + (Math.random() > 0.5 ? 0.3 : -0.3), // Wider range, base +- small random // Source 3
        swayAngle: Math.random() * Math.PI * 2, // Source 3
        swaySpeed: (Math.random() * 0.5 + 0.75) * PETAL_SWAY_SPEED_BASE * (Math.random() > 0.5 ? 1 : -1), // 0.75 to 1.25 of base speed // Source 3
        swayAmplitude: Math.random() * (PETAL_SWAY_AMPLITUDE_BASE * 0.6) + (PETAL_SWAY_AMPLITUDE_BASE * 0.7), // 70% to 130% of base amplitude // Source 3
        driftXPerSecond: (Math.random() - 0.5) * PETAL_DRIFT_X_PPS_BASE * 1.5, // Wider drift // Source 3
        flutterAngle: Math.random() * Math.PI * 2, // Source 3
        flutterSpeed: (Math.random() * 0.8 + 0.6) * PETAL_FLUTTER_SPEED_BASE, // 60% to 140% of base speed // Source 3
        flutterAmplitude: Math.random() * (PETAL_FLUTTER_AMPLITUDE_BASE * 0.5) + (PETAL_FLUTTER_AMPLITUDE_BASE * 0.5), // 50% to 100% of base amplitude // Source 3
        fallSpeedPPS: PETAL_FALL_SPEED_PPS * (Math.random() * 0.4 + 0.8) // 80% to 120% of base fall speed // Source 3
    };
    detachedPetals.push(petal); // Source 3
  }
  enemies.push(enemy); // Source 3
}

function update(delta) { // Source 3
  enemies = enemies.filter(e => e.y <= canvas.height + e.h); // Source 3
  while (enemies.length < 2) { spawnEnemy(); } // Source 3
  enemies.forEach(e => { // Source 3
    const deltaTimeSeconds = delta / 1000.0; // Source 3
    e.baseY += ENEMY_MOVEMENT_SPEED_PPS * deltaTimeSeconds; // Source 3
    let newX = e.x; let newY = e.baseY; // Source 3
    if (e.imgIndex === 3) { // Source 3
      e.initialX += e.driftXPerSecond * deltaTimeSeconds; // Source 3
      e.swayAngle += e.swaySpeed * deltaTimeSeconds; // Source 3
      newX = e.initialX + Math.sin(e.swayAngle) * e.swayAmplitude; // Source 3
      e.rotation = Math.sin(e.swayAngle * 0.7) * 0.7; // Source 3
      e.flutterAngle += e.flutterSpeed * deltaTimeSeconds; // Source 3
      newY = e.baseY + Math.sin(e.flutterAngle) * e.flutterAmplitude; // Source 3
    } else if (e.imgIndex === 2) { // Source 3
      e.initialX += e.driftXPerSecond * deltaTimeSeconds; // Source 3
      e.rotation += e.rotationSpeed * deltaTimeSeconds; // Source 3
      e.swayAngle += e.swaySpeed * deltaTimeSeconds; // Source 3
      newX = e.initialX + Math.sin(e.swayAngle) * e.swayAmplitude; // Source 3
    }
    e.x = newX; e.y = newY; // Source 3
  });

  bullets = bullets.filter(b => b.y + b.h > 0); // Source 3
  bullets.forEach(b => { // Source 3
    b.timeAlive += delta; // Source 3
    const deltaTimeSeconds = delta / 1000.0; // Source 3
    b.y += b.velocityY * deltaTimeSeconds; // Source 3
    b.baseX += b.driftXPerSecond * deltaTimeSeconds; // Source 3
    const swayOffset = Math.sin( (b.timeAlive / 1000.0) * b.swayFrequency + b.swayPhaseOffset ) * b.swayAmplitude; // Source 3
    b.x = b.baseX + swayOffset; // Source 3
  });

  detachedPetals.forEach((p, index) => { // Source 3
      const deltaTimeSeconds = delta / 1000.0; // Source 3
      p.baseY += p.fallSpeedPPS * deltaTimeSeconds; // Source 3
      p.initialX += p.driftXPerSecond * deltaTimeSeconds; // Source 3
      p.swayAngle += p.swaySpeed * deltaTimeSeconds; // Source 3
      let currentX = p.initialX + Math.sin(p.swayAngle) * p.swayAmplitude; // Source 3
      p.flutterAngle += p.flutterSpeed * deltaTimeSeconds; // Source 3
      let currentY = p.baseY + Math.sin(p.flutterAngle) * p.flutterAmplitude; // Source 3
      p.rotation += p.rotationSpeed * deltaTimeSeconds; // Source 3
      p.x = currentX; p.y = currentY; // Source 3
  });
  detachedPetals = detachedPetals.filter(p => p.y <= canvas.height + p.h); // Source 3


  enemyBullets = enemyBullets.filter(b => b.y < canvas.height).map(b => { b.y += b.speed; return b; }); // Source 3
  bullets.forEach((b, bi) => { // Source 3
    enemies.forEach((e, ei) => { // Source 3
      const collisionPaddingFactor = 0.25; // Source 3
      const coreBulletOffsetX = b.w * collisionPaddingFactor; // Source 3
      const coreBulletOffsetY = b.h * collisionPaddingFactor; // Source 3
      const coreBulletX = b.x + coreBulletOffsetX; // Source 3
      const coreBulletY = b.y + coreBulletOffsetY; // Source 3
      const coreBulletWidth = b.w * (1 - 2 * collisionPaddingFactor); // Source 3
      const coreBulletHeight = b.h * (1 - 2 * collisionPaddingFactor); // Source 3

      if (coreBulletX < e.x + e.w && coreBulletX + coreBulletWidth > e.x && // Source 3
          coreBulletY < e.y + e.h && coreBulletY + coreBulletHeight > e.y) { // Source 3
        if (!sentenceActive) { // Source 3
            const sentenceToFirework = sentences[sentenceIndex]; // Source 3
            const globalIndexOfSentence = sentenceIndex; // Source 3
            startFireworks(sentenceToFirework, globalIndexOfSentence, e.x + e.w / 2, e.y + e.h / 2); // Source 3
            sentenceIndex = (sentenceIndex + 1) % sentences.length; // Source 3
            localStorage.setItem('sentenceIndex', sentenceIndex.toString()); // Source 3
            sounds.explosion.play(); // Source 3
        }
        enemies.splice(ei, 1); bullets.splice(bi, 1); // Source 3
      }
    });
  });
  if (sentenceActive) { updateFireworks(); } // Source 3

  if (!currentQuestionSentence && !currentAnswerSentence && !sentenceActive) { // Source 3
    showPlayButton = false; showPlayButtonQuestion = false; // Source 3
    showTranslationForQuestion = false; showTranslationForAnswer = false; // Source 3
    if (activeWordTranslation) activeWordTranslation.show = false; // Source 3
  } else if (!sentenceActive) { // Source 3
      showPlayButtonQuestion = !!currentQuestionSentence; // Source 3
      showPlayButton = !!currentAnswerSentence; // Source 3
  }

  // Update word animations (plural)
  if (activeAnimations.length > 0) { // Check if there are any active animations // Source 3
    updateWordAnimations(performance.now()); // Source 3
  }
}

function draw() { // Source 3
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Source 3
  ctx.fillStyle = 'black'; // Source 3
  ctx.fillRect(0, 0, canvas.width, canvas.height); // Source 3
  ctx.drawImage(playerImg, player.x, player.y, player.w, player.h); // Source 3
  enemies.forEach(e => { // Source 3
    if (e.imgIndex === 2 || e.imgIndex === 3) { // Source 3
      ctx.save(); // Source 3
      ctx.translate(e.x + e.w / 2, e.y + e.h / 2); // Source 3
      ctx.rotate(e.rotation); // Source 3
      ctx.drawImage(e.img, -e.w / 2, -e.h / 2, e.w, e.h); // Source 3
      ctx.restore(); // Source 3
    } else { ctx.drawImage(e.img, e.x, e.y, e.w, e.h); } // Source 3
    if (e.imgIndex === 1 && coffeeSteamVideo && coffeeSteamVideo.readyState >= HTMLVideoElement.HAVE_ENOUGH_DATA && !coffeeSteamVideo.paused) { // Source 3
      const steamScale = 0.5; const steamWidth = e.w * steamScale * 1.5; // Source 3
      const steamHeight = e.h * steamScale * 1.6; const steamOffsetX = (e.w - steamWidth) / 2; // Source 3
      const steamOffsetY = -steamHeight * 0.85; // Source 3
      const prevCompositeOperation = ctx.globalCompositeOperation; // Source 3
      ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.65; // Source 3
      ctx.drawImage(coffeeSteamVideo, e.x + steamOffsetX, e.y + steamOffsetY, steamWidth, steamHeight); // Source 3
      ctx.globalAlpha = 1.0; ctx.globalCompositeOperation = prevCompositeOperation; // Source 3
    }
  });
  bullets.forEach(b => { // Source 3
    if (b.img && b.img.complete && b.img.naturalWidth > 0) { // Source 3
      ctx.drawImage(b.img, b.x, b.y, b.w, b.h); // Source 3
    }
  });
  detachedPetals.forEach(p => { // Source 3
      ctx.save(); // Source 3
      ctx.translate(p.x + p.w / 2, p.y + p.h / 2); // Source 3
      ctx.rotate(p.rotation); // Source 3
      ctx.drawImage(p.img, -p.w / 2, -p.h / 2, p.w, p.h); // Source 3
      ctx.restore(); // Source 3
  });

  const previousGlobalCenterAlpha = centerAlpha; // Source 3
  if (sentenceActive && fireworks && fireworksState) { // Source 3
    if (fireworksState.roleOfNewSentence === 'answer' && currentQuestionSentence) { // Source 3
      centerAlpha = 1.0; // Source 3
      const tempAnswerSentence = currentAnswerSentence; // Source 3
      const tempAnswerIndex = currentAnswerSentenceIndex; // Source 3
      currentAnswerSentence = null; currentAnswerSentenceIndex = null; // Source 3
      drawCenterSentence(); // Source 3
      currentAnswerSentence = tempAnswerSentence; currentAnswerSentenceIndex = tempAnswerIndex; // Source 3
    }
    centerAlpha = previousGlobalCenterAlpha; // Source 3
    drawFireworks(); // Source 3
  } else { // Source 3
    if (currentQuestionSentence || currentAnswerSentence) { // Source 3
      centerAlpha = 1.0; // Source 3
      drawCenterSentence(); // Source 3
    }
  }
  if (!sentenceActive) centerAlpha = 1.0; // Source 3
  else if (fireworksState && fireworksState.phase === "gather") { /* Alpha managed by gather */ } // Source 3
  else centerAlpha = previousGlobalCenterAlpha; // Source 3
}

function gameLoop(time) { // Source 3
  if (!isGameRunning || isGamePaused) { if (isGamePaused) draw(); return; } // Source 3
  const delta = time - lastTime; lastTime = time; // Source 3
  update(delta); draw(); // Source 3
  requestAnimationFrame(gameLoop); // Source 3
}

document.getElementById('startBtn').onclick = startGame; // Source 3
document.getElementById('pauseBtn').onclick = togglePause; // Source 3
document.getElementById('stopBtn').onclick = stopGame; // Source 3

function resetGameStateForStartStop() { // Source 3
    bullets = []; enemies = []; enemyBullets = []; detachedPetals = []; // Source 3
    fireworks = null; fireworksState = null; // Source 3
    currentQuestionSentence = null; currentAnswerSentence = null; // Source 3
    currentQuestionSentenceIndex = null; currentAnswerSentenceIndex = null; // Source 3
    sentenceActive = false; centerAlpha = 1.0; // Source 3
    showPlayButton = false; playButtonRect = null; // Source 3
    showPlayButtonQuestion = false; playButtonRectQuestion = null; // Source 3
    showTranslationForQuestion = false; showTranslationForAnswer = false; // Source 3
    if (activeWordTranslation) activeWordTranslation.show = false; // Source 3
    activeWordTranslation = null; // Source 3
    if (wordTranslationTimeoutId) { clearTimeout(wordTranslationTimeoutId); wordTranslationTimeoutId = null; } // Source 3
    centerSentenceWordRects = []; isActionLocked = false; // Source 3

    // Reset word animations
    activeAnimations = []; // Clear the array of active animations // Source 3
}

function startGame() { // Source 3
  calculateTopOffset(); // Source 3
  if (!allAssetsReady) { // Source 3
    console.warn("Assets not ready. Please wait and try starting again."); // Source 3
    ctx.fillStyle = "white"; ctx.font = "16px Arial"; ctx.textAlign = "center"; // Source 3
    ctx.fillText("이미지 및 비디오 로딩 중... 잠시 후 다시 시도하세요.", canvas.width / 2, canvas.height / 2); // Source 3
    return; // Source 3
  }
  isGameRunning = true; isGamePaused = false; // Source 3
  document.getElementById('pauseBtn').textContent = 'PAUSE'; // Source 3
  if (bgmAudio) { bgmAudio.pause(); } // Source 3
  bgmAudio = new Audio(bgmFiles[bgmIndex]); // Source 3
  bgmAudio.volume = isMuted ? 0 : 0.021; bgmAudio.loop = true; // Source 3
  const playPromise = bgmAudio.play(); // Source 3
  if (playPromise !== undefined) { // Source 3
    playPromise.catch(error => { console.error('BGM play error on start:', error); }); // Source 3
  }
  if (coffeeSteamVideo && coffeeVideoAssetReady) { // Source 3
    coffeeSteamVideo.currentTime = 0; // Source 3
    const coffeePlayPromise = coffeeSteamVideo.play(); // Source 3
    if (coffeePlayPromise !== undefined) { // Source 3
      coffeePlayPromise.catch(error => console.error("Error playing coffee steam video:", error)); // Source 3
    }
  }
  resetGameStateForStartStop(); // Source 3
  let storedIndex = Number(localStorage.getItem('sentenceIndex') || 0); // Source 3
  sentenceIndex = storedIndex % sentences.length; // Source 3
  localStorage.setItem('sentenceIndex', sentenceIndex.toString()); // Source 3
  spawnEnemy(); spawnEnemy(); // Source 3
  player.x = canvas.width / 2 - PLAYER_SIZE / 2; // Source 3
  player.y = topOffset + (canvas.height - topOffset) - PLAYER_SIZE - 10; // Source 3
  player.y = Math.max(topOffset, player.y); // Source 3
  lastTime = performance.now(); // Source 3
  getVoicesReliably().catch(err => console.error("startGame: Error during voice pre-warming:", err)); // Source 3
  requestAnimationFrame(gameLoop); // Source 3
}

function togglePause() { // Source 3
  if (!isGameRunning) return; // Source 3
  isGamePaused = !isGamePaused; // Source 3
  const pauseButton = document.getElementById('pauseBtn'); // Source 3
  if (isGamePaused) { // Source 3
    pauseButton.textContent = 'RESUME'; // Source 3
    if (bgmAudio && !bgmAudio.paused) bgmAudio.pause(); // Source 3
    if (coffeeSteamVideo && !coffeeSteamVideo.paused) coffeeSteamVideo.pause(); // Source 3
    window.speechSynthesis.cancel(); // Source 3
    if (currentSentenceAudio) currentSentenceAudio.pause(); // Source 3
  } else { // Source 3
    pauseButton.textContent = 'PAUSE'; // Source 3
    if (bgmAudio && bgmAudio.paused && !isMuted) { // Source 3
        bgmAudio.play().catch(e => console.error("BGM resume error:", e)); // Source 3
    }
    if (coffeeSteamVideo && coffeeSteamVideo.paused && coffeeVideoAssetReady) { // Source 3
        coffeeSteamVideo.play().catch(error => console.error("Error resuming coffee steam video:", error)); // Source 3
    }
    if (currentSentenceAudio && currentSentenceAudio.paused) { // Source 3
        currentSentenceAudio.volume = 0.8; // Source 3
        currentSentenceAudio.play().catch(e => console.error("Sentence audio resume error:", e)); // Source 3
    }
    lastTime = performance.now(); // Source 3
    requestAnimationFrame(gameLoop); // Source 3
  }
}

function stopGame() { // Source 3
  isGameRunning = false; isGamePaused = false; // Source 3
  document.getElementById('pauseBtn').textContent = 'PAUSE'; // Source 3
  if (bgmAudio) bgmAudio.pause(); // Source 3
  if (coffeeSteamVideo && !coffeeSteamVideo.paused) coffeeSteamVideo.pause(); // Source 3
  window.speechSynthesis.cancel(); // Source 3
  if (currentSentenceAudio) { // Source 3
      currentSentenceAudio.pause(); currentSentenceAudio.currentTime = 0; currentSentenceAudio = null; // Source 3
  }
  resetGameStateForStartStop(); // Source 3
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Source 3
}

const expandedMargin = 10; // Source 3

function handleCanvasInteraction(clientX, clientY, event) { // Source 3
  if (!isGameRunning || isGamePaused) return; // Source 3
  if (!isActionLocked) { // Source 3
    const isPlayBtnQuestionTouched = showPlayButtonQuestion && playButtonRectQuestion && // Source 3
      clientX >= (playButtonRectQuestion.x - expandedMargin) && clientX <= (playButtonRectQuestion.x + playButtonRectQuestion.w + expandedMargin) && // Source 3
      clientY >= (playButtonRectQuestion.y - expandedMargin) && clientY <= (playButtonRectQuestion.y + playButtonRectQuestion.h + expandedMargin); // Source 3

    const isPlayBtnAnswerTouched = showPlayButton && playButtonRect && // Source 3
      clientX >= (playButtonRect.x - expandedMargin) && clientX <= (playButtonRect.x + playButtonRect.w + expandedMargin) && // Source 3
      clientY >= (playButtonRect.y - expandedMargin) && clientY <= (playButtonRect.y + playButtonRect.h + expandedMargin); // Source 3

    if (isPlayBtnQuestionTouched) { // Source 3
      showTranslationForQuestion = true; showTranslationForAnswer = false; // Source 3
      if (activeWordTranslation) activeWordTranslation.show = false; // Source 3
      if (wordTranslationTimeoutId) clearTimeout(wordTranslationTimeoutId); // Source 3
      activeWordTranslation = null; isActionLocked = true; // Source 3

      if (currentQuestionSentenceIndex !== null) { // Source 3
          window.speechSynthesis.cancel(); // Source 3
          playSentenceAudio(currentQuestionSentenceIndex) // Source 3
              .then(() => { // Source 3
                  // 오디오 시작 후 애니메이션 트리거
                  triggerSentenceWordAnimation( // Source 3
                      currentQuestionSentence, // Source 3
                      true, // isQuestion // Source 3
                      centerSentenceWordRects, // Source 3
                      ctx, // Source 3
                      300 // AUX_ANIMATION_DELAY_QUESTION 과 동일한 지연 // Source 3
                  );
              })
              .catch(err => console.error("Error playing question sentence audio from play button:", err)); // Source 3
      }
      event.preventDefault(); setTimeout(() => { isActionLocked = false; }, 200); return; // Source 3
    }

    if (isPlayBtnAnswerTouched) { // Source 3
      showTranslationForAnswer = true; showTranslationForQuestion = false; // Source 3
      if (activeWordTranslation) activeWordTranslation.show = false; // Source 3
      if (wordTranslationTimeoutId) clearTimeout(wordTranslationTimeoutId); // Source 3
      activeWordTranslation = null; // Source 3
      isActionLocked = true; // Source 3

      if (currentAnswerSentenceIndex !== null) { // Source 3
          window.speechSynthesis.cancel(); // Source 3
          playSentenceAudio(currentAnswerSentenceIndex) // Source 3
              .then(() => { // Source 3
                  // 오디오 시작 후 애니메이션 트리거
                  triggerSentenceWordAnimation( // Source 3
                      currentAnswerSentence, // Source 3
                      false, // isQuestion // Source 3
                      centerSentenceWordRects, // Source 3
                      ctx, // Source 3
                      300 // AUX_ANIMATION_DELAY 와 동일한 지연 // Source 3
                  );
              })
              .catch(err => console.error("Error playing answer sentence audio from play button:", err)); // Source 3
      }
      event.preventDefault(); // Source 3
      setTimeout(() => { isActionLocked = false; }, 200); // Source 3
      return; // Source 3
    }

    if ((currentQuestionSentence || currentAnswerSentence) && centerSentenceWordRects.length > 0) { // Source 3
        for (const wordRect of centerSentenceWordRects) { // Source 3
          if (clientX >= (wordRect.x - expandedMargin/2) && clientX <= (wordRect.x + wordRect.w + expandedMargin/2) && // Source 3
              clientY >= (wordRect.y - wordRect.h / 2 - expandedMargin/2) && clientY <= (wordRect.y + wordRect.h / 2 + expandedMargin/2) ) { // Source 3
            window.speechSynthesis.cancel(); // Source 3
            speakWord(wordRect.word).catch(err => console.error(`Error speaking word "${wordRect.word}":`, err)); // Source 3
            if (wordTranslationTimeoutId) clearTimeout(wordTranslationTimeoutId); // Source 3
            if (activeWordTranslation) activeWordTranslation.show = false; // Source 3
            activeWordTranslation = null; isActionLocked = true; // Source 3
            getWordTranslation(wordRect.word).then(translation => { // Source 3
                activeWordTranslation = { // Source 3
                    word: wordRect.word, translation: translation, x: wordRect.x, y: wordRect.y, // Source 3
                    w: wordRect.w, h: wordRect.h, lineIndex: wordRect.lineIndex, // Source 3
                    isQuestionWord: wordRect.isQuestionWord, show: true // Source 3
                };
                wordTranslationTimeoutId = setTimeout(() => { // Source 3
                    if (activeWordTranslation && activeWordTranslation.word === wordRect.word) activeWordTranslation.show = false; // Source 3
                }, WORD_TRANSLATION_DURATION); // Source 3
            }).catch(err => console.error("Error getting word translation:", err)); // Source 3
            showTranslationForQuestion = false; showTranslationForAnswer = false; // Source 3
            event.preventDefault(); setTimeout(() => { isActionLocked = false; }, 300); return; // Source 3
          }
        }
    }
  }

  player.x = clientX - player.w / 2; // Source 3
  if (event.type === 'touchstart' || event.type === 'touchmove') player.y = clientY - player.h / 2 - PLAYER_TOUCH_Y_OFFSET; // Source 3
  else player.y = clientY - player.h / 2; // Source 3
  player.x = Math.max(0, Math.min(canvas.width - player.w, player.x)); // Source 3
  player.y = Math.max(topOffset, Math.min(canvas.height - player.h, player.y)); // Source 3
  if (activeWordTranslation && activeWordTranslation.show) { // Source 3
    activeWordTranslation.show = false; // Source 3
    if (wordTranslationTimeoutId) { clearTimeout(wordTranslationTimeoutId); wordTranslationTimeoutId = null; } // Source 3
  }
  showTranslationForQuestion = false; showTranslationForAnswer = false; // Source 3

  const size = MIN_BUBBLE_SIZE + Math.random() * (MAX_BUBBLE_SIZE - MIN_BUBBLE_SIZE); // Source 3
  const spawnX = player.x + player.w / 2 - size / 2; // Source 3
  bullets.push({ // Source 3
    x: spawnX, y: player.y, w: size, h: size, img: bulletImg, timeAlive: 0, // Source 3
    velocityY: BUBBLE_BASE_SPEED_Y_PPS + (Math.random() - 0.5) * 2 * BUBBLE_SPEED_Y_VARIATION_PPS, // Source 3
    baseX: spawnX, // Source 3
    swayFrequency: BUBBLE_SWAY_FREQUENCY_MIN + Math.random() * (BUBBLE_SWAY_FREQUENCY_MAX - BUBBLE_SWAY_FREQUENCY_MIN), // Source 3
    swayAmplitude: size * (BUBBLE_SWAY_AMPLITUDE_FACTOR_MIN + Math.random() * (BUBBLE_SWAY_AMPLITUDE_FACTOR_MAX - BUBBLE_SWAY_AMPLITUDE_FACTOR_MIN)), // Source 3
    swayPhaseOffset: Math.random() * Math.PI * 2, // Source 3
    driftXPerSecond: (Math.random() - 0.5) * 2 * BUBBLE_HORIZONTAL_DRIFT_PPS_MAX, // Source 3
  });
  sounds.shoot.play(); // Source 3
  event.preventDefault(); // Source 3
}

canvas.addEventListener('touchstart', e => { // Source 3
  const touch = e.touches[0]; // Source 3
  handleCanvasInteraction(touch.clientX, touch.clientY, e); // Source 3
}, { passive: false }); // Source 3

canvas.addEventListener('mousedown', e => { // Source 3
  handleCanvasInteraction(e.clientX, e.clientY, e); // Source 3
});

canvas.addEventListener('touchmove', e => { // Source 3
  if (!isGameRunning || isGamePaused) return; // Source 3
  const touch = e.touches[0]; // Source 3
  const isOverPlayBtnQ = showPlayButtonQuestion && playButtonRectQuestion && // Source 3
    touch.clientX >= (playButtonRectQuestion.x - expandedMargin) && touch.clientX <= (playButtonRectQuestion.x + playButtonRectQuestion.w + expandedMargin) && // Source 3
    touch.clientY >= (playButtonRectQuestion.y - expandedMargin) && touch.clientY <= (playButtonRectQuestion.y + playButtonRectQuestion.h + expandedMargin); // Source 3
  const isOverPlayBtnA = showPlayButton && playButtonRect && // Source 3
    touch.clientX >= (playButtonRect.x - expandedMargin) && touch.clientX <= (playButtonRect.x + playButtonRect.w + expandedMargin) && // Source 3
    touch.clientY >= (playButtonRect.y - expandedMargin) && touch.clientY <= (playButtonRect.y + playButtonRect.h + expandedMargin); // Source 3
  let isOverWord = false; // Source 3
  if ((currentQuestionSentence || currentAnswerSentence) && centerSentenceWordRects.length > 0) { // Source 3
    for (const wordRect of centerSentenceWordRects) { // Source 3
      if ( touch.clientX >= wordRect.x && touch.clientX <= wordRect.x + wordRect.w && // Source 3
           touch.clientY >= wordRect.y - wordRect.h/2 && touch.clientY <= wordRect.y + wordRect.h/2 ) { // Source 3
        isOverWord = true; break; // Source 3
      }
    }
  }
  if (isOverPlayBtnQ || isOverPlayBtnA || isOverWord) { e.preventDefault(); return; } // Source 3

  player.x = touch.clientX - player.w / 2; // Source 3
  player.y = touch.clientY - player.h / 2 - PLAYER_TOUCH_Y_OFFSET; // Source 3
  player.x = Math.max(0, Math.min(canvas.width - player.w, player.x)); // Source 3
  player.y = Math.max(topOffset, Math.min(canvas.height - player.h, player.y)); // Source 3
  e.preventDefault(); // Source 3
}, { passive: false }); // Source 3

canvas.addEventListener('mousemove', e => { // Source 3
  if (!isGameRunning || isGamePaused || e.buttons !== 1) return; // Source 3
  const isOverPlayBtnQ = showPlayButtonQuestion && playButtonRectQuestion && // Source 3
      e.clientX >= (playButtonRectQuestion.x - expandedMargin) && e.clientX <= (playButtonRectQuestion.x + playButtonRectQuestion.w + expandedMargin) && // Source 3
      e.clientY >= (playButtonRectQuestion.y - expandedMargin) && e.clientY <= (playButtonRectQuestion.y + playButtonRectQuestion.h + expandedMargin); // Source 3
  const isOverPlayBtnA = showPlayButton && playButtonRect && // Source 3
      e.clientX >= (playButtonRect.x - expandedMargin) && e.clientX <= (playButtonRect.x + playButtonRect.w + expandedMargin) && // Source 3
      e.clientY >= (playButtonRect.y - expandedMargin) && e.clientY <= (playButtonRect.y + playButtonRect.h + expandedMargin); // Source 3
  let isOverWord = false; // Source 3
  if ((currentQuestionSentence || currentAnswerSentence) && centerSentenceWordRects.length > 0) { // Source 3
    for (const wordRect of centerSentenceWordRects) { // Source 3
      if ( e.clientX >= wordRect.x && e.clientX <= wordRect.x + wordRect.w && // Source 3
           e.clientY >= wordRect.y - wordRect.h/2 && e.clientY <= wordRect.y + wordRect.h/2 ) { // Source 3
        isOverWord = true; break; // Source 3
      }
    }
  }
  if (isOverPlayBtnQ || isOverPlayBtnA || isOverWord) return; // Source 3

  player.x = e.clientX - player.w / 2; // Source 3
  player.y = e.clientY - player.h / 2; // Source 3
  player.x = Math.max(0, Math.min(canvas.width - player.w, player.x)); // Source 3
  player.y = Math.max(topOffset, Math.min(canvas.height - player.h, player.y)); // Source 3
});

window.addEventListener('load', () => { // Source 3
    calculateTopOffset(); // Source 3
    let storedIndex = Number(localStorage.getItem('sentenceIndex') || 0); // Source 3
    sentenceIndex = storedIndex % sentences.length; // Source 3
    localStorage.setItem('sentenceIndex', sentenceIndex.toString()); // Source 3
    if (bgmFiles.length > 0) { // Source 3
        console.log("BGM object initialized on load. Path: " + bgmAudio.src); // Source 3
    }
    getVoicesReliably().then(voices => { // Source 3
        if(voices.length > 0) console.log("Voices pre-warmed successfully."); // Source 3
        else console.warn("Voices pre-warming done, but no voices found."); // Source 3
    }).catch(err => console.error("Error pre-warming voices on load:", err)); // Source 3
});