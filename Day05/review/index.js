const arr = [5, 13, 25, 31, 49];
arr.map((a) => a + 10);
arr.map((a) => (a % 2 ? a * 2 : a - 10));

const fruits = ["kiwi", "apple", "orange", "pineapple"];
fruits.map((a) => (a.includes("apple") ? a.toUpperCase() : a.length));
