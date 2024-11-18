const checkList = [
  { id: "policy", isChecked: false, isNecessary: true },
  { id: "service", isChecked: false, isNecessary: true },
  { id: "consent", isChecked: false, isNecessary: true },
  { id: "years", isChecked: false, isNecessary: true },
  { id: "private", isChecked: false, isNecessary: false },
];

const checkButton = document.getElementById("buttonCheck");

checkList.forEach((v) => {
  const ID = document.getElementById(v.id);
  // check표시 갱신 로직
  ID.addEventListener("input", (e) => {
    v.isChecked = e.target.checked;
    if (checkList.every((v) => (v.isNecessary == true ? v.isChecked : true))) {
      checkButton.classList.add("checked");
      checkButton.classList.remove("notCheck");
    } else {
      checkButton.classList.add("notCheck");
    }
  });

  const all = document.getElementById("all");
  all.addEventListener("input", (e) => {
    // 체크리스트 모두 수정 코드
    if (e.target.checked == true) {
      checkList.map((v) => {
        v.isChecked = true;
        return v;
      });
    } else {
      checkList.map((v) => {
        v.isChecked = false;
        return v;
      });
    }

    // 모든 아이디 가져와서 체크리스트와 동일하게 만들기
    checkList.forEach((v) => {
      const tag = document.getElementById(v.id);
      tag.checked = v.isChecked;
    });

    // 확인 버튼 색깔 들어오기 안오기
    if (checkList.every((v) => (v.isNecessary ? v.isChecked : true))) {
      checkButton.classList.add("checked");
      checkButton.classList.remove("notCheck");
    } else {
      checkButton.classList.add("notCheck");
    }
  });
});
