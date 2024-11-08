//filter(거르기)
// const arr = [1, 2, 3, 4, 5];
// const test = arr.filter((x) => x == 1 || x == 3);
// const test1 = arr.filter((x) => x % 2 == 0);

// const arr1 = [10, 20, 30, 40, 50];
// arr1.filter((a) => a <= 30);

// const fruits = ["apple", "banana", "kiwi", "mango", "watermelon"];
// const alphabet = ["k", "j", "q", "r"];
// fruits.filter((a) => a.length <= 5);
// fruits.filter((a) => a.includes("i") || a.includes("e"));
// fruits.filter((a) => alphabet.some((b) => a.includes(b)));

//기본: string,number,boolean
//참조: array,object,student("이름",17,전공여부)
// const k = Number("100");
// const j = Number("100"); // k랑 j는 같음

// const a = new student("양동국", 18, 전공여부);
// const b = new student("양동국", 18, 전공여부);

// 메소드 체이닝
// const c = new Array(20).fill("김밥");
// const c1 = new Array(10).fill(1);
// const c2 = new Array(10).fill(0).map((x) => x + 1);

// 0~999 배열
// const arr1 = new Array(1000).fill(0).map((x, i) => i);

// const arr2 = new Array(1000)
//   .fill(0)
//   .map((x, i) => i)
//   .filter((x) => x % 2 == 1);
// new Array(1000)
//   .fill(0)
//   .map((x, y) => y)
//   .filter((x) => x % 3 == 0);
// new Array(1000)
//   .fill(0)
//   .map((x, i) => i)
//   .filter((x) => x % 5 == 0)
//   .filter((x) => x < 500 || 600 < x);

//map,filter,reduce(누적시켜줘)

//reduce((a,c)=>{})
// [1, 3, 5, 7, 9].reduce((a, c) => {
//   console.log({ a, c });
//   return a + c;
// });

// new Array(124)
//   .fill(0)
//   .map((x, i) => i)
//   .reduce((a, c) => a + c);
