// const user = !!prompt("유저의 이름 입력") || "Guest";
// alert(`닉네입 ${user}님 환영합니다.`);

const password = prompt("비밀번호 입력");
const result = password == "1234";
result && alert("로그인 축하");