// 일반함수, 화살표함수, 콜백함수
// 콜백함수: 마술상자 안에 마술상자를 넣기

const kimchiRice = () => {
  console.log("김치썰기");
  console.log("프라이팬 달구기");
  console.log("김치랑 밥 넣기");
  console.log("볶기");
  console.log("김볶완성");
};

const recipe = (food) => {
  console.log("요리시작");
  food();
  console.log("요리 마무리");
};

recipe(kimchiRice);
