// const score = Number(prompt("프로그래밍 점수를 입력해주세요"));

// if (score >= 90) {
//   console.log("A");
// } else if (score >= 80) {
//   console.log("B");
// } else if (score >= 70) {
//   console.log("C");
// } else if (score >= 60) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// const angle = Number(prompt("각도 입력"));

// if (angle == 180) {
//   console.log("평각");
// } else if (angle == 90 && angle == 180) {
//   console.log("둔각");
// } else if (angle == 90) {
//   console.log("직각");
// } else if (angle == 0 && angle == 90) {
//   console.log("예각");
// }

const bus = Number(
  prompt("1.마을버스[1000] 2.시내버스[1500] 3.광역버스[2000] 4.고속버스[5000]")
);
const age = Number(prompt("나이를 입력하세요"));

if (bus == 1) {
  if (age < 8) {
    console.log(`마을버스의 최종금액은 ${1000 * 0.5}입니다.`);
  } else if (age >= 65) {
    console.log(`마을버스의 최종금액은 ${1000 * 0.8}입니다.`);
  } else if (8 <= age && age <= 19) {
    console.log(`마을버스의 최종금액은 ${1000 * 0.7}입니다.`);
  } else {
    console.log(`마을버스의 최종금액은 ${1000 * 1}입니다.`);
  }
}

if (bus == 2) {
  if (age < 8) {
    console.log(`시내버스의 최종금액은 ${1500 * 0.5}입니다.`);
  } else if (age >= 65) {
    console.log(`시내버스의 최종금액은 ${1500 * 0.8}입니다.`);
  } else if (8 <= age && age <= 19) {
    console.log(`시내버스의 최종금액은 ${1500 * 0.7}입니다.`);
  } else {
    console.log(`시내버스의 최종금액은 ${1500 * 1}입니다.`);
  }
}

if (bus == 3) {
  if (age < 8) {
    console.log(`광역버스의 최종금액은 ${2000 * 0.5}입니다.`);
  } else if (age >= 65) {
    console.log(`광역버스의 최종금액은 ${2000 * 0.8}입니다.`);
  } else if (8 <= age && age <= 19) {
    console.log(`광역버스의 최종금액은 ${2000 * 0.7}입니다.`);
  } else {
    console.log(`광역버스의 최종금액은 ${2000 * 1}입니다.`);
  }
}

if (bus == 4) {
  if (age < 8) {
    console.log(`고속버스의 최종금액은 ${5000 * 0.5}입니다.`);
  } else if (age >= 65) {
    console.log(`고속버스의 최종금액은 ${5000 * 0.8}입니다.`);
  } else if (8 <= age && age <= 19) {
    console.log(`고속버스의 최종금액은 ${5000 * 0.7}입니다.`);
  } else {
    console.log(`고속버스의 최종금액은 ${5000 * 1}입니다.`);
  }
}
