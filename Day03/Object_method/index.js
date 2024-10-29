// 데이터타입.함수(): 데이터타입에 따른 함수

// String 함수

const a = "ice";

console.log(a.toUpperCase()); // 대문자화
console.log(a.includes("k")); // k가 포함되었는가 false
console.log(a.includes("i")); // i가 포함되었는가 true
console.log(a.repeat(2)); // 반복 iceice

const b = ["돼지고기", "소고기", "닭고기", "양고기"];
b.push("오리고기");
b.includes("오리고기"); // true
b.reverse(); // 배열 순서 바뀜
