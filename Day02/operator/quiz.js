// 두 정수를 유저에게 입력 받고, 더 큰 숫자를 알럿으로 나타내기
// const num1 = prompt("첫번째");
// const num2 = prompt("두번째");

// alert(`두 숫자중 더 큰 숫자는 : ${num1 > num2 ? "num1" : "num2"}`)

const doughnut_count = Number(prompt("도나쓰 갯수 입력"));
const doughnut_price = Number(prompt("도나쓰 가격 입력"));
const total_price = doughnut_count * doughnut_price;

const isUnder10 = doughnut_count < 10;
const isOver10Under20 = 10 <= doughnut_count && doughnut_count < 20;
const isOver20 = 20 <= doughnut_count;

isUnder10 && alert(total_price);
isOver10Under20 && alert(total_price * 0.9);
isOver20 && alert(total_price * 0.8)



const num = Number(prompt("정수입력"));
const result = !!(num % 2) ? "홀수" : "짝수";
console.log(result);