//1. 유저에게 운동 3개를 물어보고, 콘솔로 1번운동 -> 2번운동 -> 3번운동
const first = prompt("1번운동");
const second = prompt("2번운동");
const third = prompt("3번운동");

console.log(`${first}운동 -> ${second}운동 ${third}운동`);

//2. 두 정수를 m, n 입력 받고, m의 n제곱의 결과를 나타내는 결과를 콘솔로 나타내기

const addM = Number(prompt("m의 값을 입력하라"));
const addN = Number(prompt("n의 값을 입력하라"));

console.log(`m의 n제곱의 결과: ${addM ** addN}`);

//3. 달러를 입력하면 원화로 콘솔로 나타내기

const rate = 1369;
const dollar = Number(prompt("월하는 달러값을 입력"));
console.log(`입력한 달러: ${dollar}, 원화로 변환된 달러 ${rate * dollar}`);

//4. 1000 이하의 정수를 입력 받고, 분초로 나타내기
// 65 -> 1분 5초, 192 -> 3분 12초

const number = Number(prompt("1000이하의 정수를 입력해주세요"));
const min = parseInt(number / 60);
const sec = number % 60;
console.log(`${minute}분 ${sec}초`);
