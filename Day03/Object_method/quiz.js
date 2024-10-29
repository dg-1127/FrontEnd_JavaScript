const pw = prompt("비밀번호 입력");

const shortForeLength = pw.length < 4;
const Overtwelve = pw.length > 12;
const specialIcludes = !pw.includes("!") || !pw.includes("@") || !pw.includes("#");
const EndZ = !pw.endsWith("z");

if (shortForeLength) {
  alert(`비밀번호가 짧습니다.`);
} else if (Overtwelve) {
  alert(`비밀번호가 깁니다.`);
} else if (specialIcludes) {
  alert(`특수문자가 반드시 들어가야 합니다.`);
} else if (EndZ) {
  alert(`마지막 글자는 z로 끝나야 합니다.`);
} else {
  alert(`올바르게 비밀번호를 설정하였습니다.`);
}
