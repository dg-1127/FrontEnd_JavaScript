// 함수: 입력값을 받으면 가공을 통해서 결과값을 나타내는 것

// 옛날 함수 문법

function add(a, b) {
  return a + b;
}

function double(a) {
  return a ** 2;
}

const result = add(1, 2);
const result1 = double(3);

console.log(`${result} ${result1}`);

// 신 함수 문법(화살표 함수)

const minus = (x, y) => {
  return x - y;
};

const result2 = minus(10, 5);

const mark = (x) => {
  return x + "!!!";
};

const half = (x) => {
  return x / 2;
};
