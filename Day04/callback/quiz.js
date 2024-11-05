// const triggerSkill = (skill) => {
//   console.log("스킬발동");
//   skill();
//   console.log("스킬 마무리");
// };

// const elementSkill = (element) => {
//   console.log(`${element} 모으기`);
//   console.log(`${element} 발사`);
// };

// const skills = ["불", "얼음", "번개"];
// const num = Number(prompt("어떤 스킬을 발동시킬까요?"));
// triggerSkill(() => elementSkill(skills[num]));

const tacoMenu = ["🦐", "🥩", "🍗", "🧀"];
const cook = (taco) => {
  console.log("타코 음식 만들기");
  taco();
  console.log(`준비된 ${taco}타코가 나왔습니다.`);
};

const taco = (tacoMenu) => {
  console.log("타코준비");
  console.log(`${tacoMenu}넣기`);
  console.log("굽기");
  console.log(`${tacoMenu}타코완성`);
};

const tacoMenuNumber = Number(prompt("타코 메뉴 (🦐, 🥩, 🍗, 🧀) 고르세요"));
cook(() => taco(tacoMenu[tacoMenuNumber]));
