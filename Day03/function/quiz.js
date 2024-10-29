function exchangeYen(money) {
  if (money >= 900) {
    return "팔아야함";
  } else {
    return "사야함";
  }
}

function largerNum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function coffee(num, count) {
  const menu = ["아메리카노", "라떼", "바닐라", "모카"];
  return `${menu[num]}커피와 ${count}개 맞으신가요?`;
}
