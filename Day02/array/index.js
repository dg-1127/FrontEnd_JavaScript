// 참조타입 : Object, Array

const soccer = ["손흥민", "김민재", "황희찬", "이강인"];

console.log(soccer[0]); // 0번째부터 시작

const lotto = [3, 5, 1, 7, 82, 1];

const score = [
  [1, 2, 3],
  [11, 12, 13],
  [51, 52, 53],
];

console.log(score[1], [2]);

const menu = [
  { name: "아메리카노", price: 1500 },
  { name: "라떼", price: 2000 },
  { name: "민트모카", price: 5000 },
];

console.log(menu[1]["name"], menu[1]["price"]);
