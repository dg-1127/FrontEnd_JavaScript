// map
const arr = [1, 2, 3, 4, 5];
arr.map((a) => a + 3); // 각각 3더하기
arr.map((a) => 10); // 모두 10으로 바꾸기
arr.map((a) => a * 2);
arr.map((a) => a ** a);
arr.map((a) => (a % 2 ? a + 10 : a - 10));
arr.map((a) => (a >= 3 ? a + 3 : a - 3));
const fruits = ["apple", "orange", "kiwi", "mango", "watermelon", "melon"];
fruits.map((a) => (a.length <= 5 ? a.toUpperCase() : "🍌"));

// some & every
fruits.every((a) => a.includes("a") || a.includes("e"));
fruits.every((a) => a.length <= 10);

const word = prompt("영단어 입력");
const wordList = word.split("");
const vowels = "aeiou".split("");
wordList.some((a) => vowels.some((y) => y == a));
