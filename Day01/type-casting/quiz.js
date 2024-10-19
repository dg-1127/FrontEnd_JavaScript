//1. 유저에게 첫 번째 숫자, 두 번째 숫자를 입력 받고
// 두 수의 합을 콘솔로그로 나타내기

// const first = Number(prompt("첫 번째 숫자"));
// const second = Number(prompt("두 번째 숫자"));
// console.log(first + second);

//2. 유저에게 나이를 물어보고, 태어난 년도
//콘솔로그로 나타내기

// const userAge = prompt("나이");
// console.log(`나이: ${Number(userAge)}세, 출생년도: ${2025 - Number(userAge)}년`)

//3. 유저에게 한 변의 길이를 입력 받고, 정사각형의 넓이 나타내기

const side = prompt("한 변의 길이");
console.log(`정사각형 넓이: ${Number(side * side)}`)

//4. 유저에게 밑변과 높이를 입력 받고, 정삼각형의 넓이 나타내기

const bottomSide = prompt("밑변");
const height = prompt("높이");
console.log(`정삼각형 넓이: ${Number(bottomSide * height / 2)}`)

//5. 유저에게 반지름을 입력받고, 원의 둘레와 넓이 나타내기

const radius = prompt("반지름");
console.log(`둘레: ${2 * 3.14 * Number(radius)}, 넓이: ${3.14 * (Number(radius*radius))}`)

//6. 유저에게 일본 여행 갈 여비를 엔화로 바꾸기
//  ex) 1000000 -> 109170엔 환전

const rate = 109 / 1000;
const koreaMoney = prompt("여행비");
console.log(`바뀐엔화: ${Number(rate * koreaMoney)}`)
