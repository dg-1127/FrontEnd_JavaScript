// const test = document.getElementById("test");
// const span = document.getElementById("span");
// const isValidLength = (length) => (length < 10 ? "black" : "red");

// test.addEventListener("input", (e) => {
//   //   if (e.target.value.length < 10) {
//   //     span.style.color = "black";
//   //   } else {
//   //     span.style.color = "red";
//   //   }
//   const value = e.target.value;
//   const length = e.target.value.length;
//   if (length < 4 || 12 < length) {
//     span.innerText = "글자 길이를 수정해주세요";
//   } else if (!["!", "@", "#"].some((v) => value.includes(v))) {
//     span.innerText = "특수문자를 넣어야 합니다";
//   } else if (!value.includes("it")) {
//     span.innerText = "it가 꼭 들어가야 합니다";
//   } else {
//     span.innerText = "통과";
//   }
// });

// const test = document.getElementById("test");
// test.addEventListener("input", (e) => {
//   e.target.value = e.target.value.slice(0, 10);
// });

const check = document.getElementById("check");

check.addEventListener("input", (e) => {
  console.log(e.target.checked);
});
