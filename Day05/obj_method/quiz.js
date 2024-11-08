const cafe = {
  menu: [
    { name: "아메리카노", price: 2500 },
    { name: "라떼", price: 3000 },
  ],
  cost: function (name, price, amount) {
    return price * amount;
  },
  info: function () {
    console.log(this.menu);
  },
  addMenu: function () {
    const name1 = prompt("메뉴이름입력");
    const price1 = Number(prompt("가격입력"));
    this.menu.push({ name: name1, price: price1 });
  },
  deleteMenu: function () {
    const name2 = prompt("삭제할 메뉴이름 입력");
    // this.menu.pop({ name: name2 });
    this.menu.filter((x) => x.name != name2);
  },
};

cafe.addMenu();
cafe.addMenu();
cafe.info();
cafe.stractMenu();
