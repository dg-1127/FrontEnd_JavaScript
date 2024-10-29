const num = Number(prompt("정수입력"));

if (num > 0) {
  console.log("양수");
} else if (num == 0) {
  console.log("0");
} else {
  console.log("음수");
}

const height = Number(prompt("키 입력"));
const weight = Number(prompt("몸무게 입력"));
const bmi = weight / height ** 2;

if (bmi >= 25) {
  console.log("비만");
} else if (23 <= bmi < 25) {
  console.log("과체중");
} else if (18.5 <= bmi < 23) {
  console.log("정상제충");
} else {
  console.log("저체중");
}

const year = Number(prompt("출생년도"));
const zodiac = year % 12;
const zodiacAnimal = [
  "원숭이",
  "닭",
  "개",
  "돼지",
  "쥐",
  "소",
  "호랑이",
  "토끼",
  "용",
  "뱀",
  "말",
  "양",
];

console.log(zodiacAnimal[zodiac]);
