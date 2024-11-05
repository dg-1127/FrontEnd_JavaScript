const movie = ["보통의가족", "베놈", "베테랑"];
const snacks = ["팝콘", "나쵸", "오징어구이"];
const beverages = ["콜라", "스프라이트"];

const selectedMovie = Number(prompt(movie + " 번호입력"));
const selectedSnack = Number(prompt(snacks + " 번호입력"));
const selectedBeverages = Number(prompt(beverages + " 번호입력"));

const deterSnackPrice = (snack) => {
  return snack.includes("팝콘") ? 6000 : 4000;
};

const deterBeveragesPrice = (beverage) => {
  return beverage.includes("콜라") ? 3000 : 2000;
};

console.log(`구매하신 제품: 영화: ${movie[selectedMovie]}, 스낵류: ${snacks[selectedSnack]}, 음료류: ${beverages[selectedBeverages]}`);
console.log(`총 가격: ${12000 + deterSnackPrice(snacks[selectedSnack]) + deterBeveragesPrice(beverages[selectedBeverages])}`);