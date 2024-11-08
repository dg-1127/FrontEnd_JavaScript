const menu = [
  { name: "americano", price: 2500, shots: 2, ingredients: ["water", "bean"] },
  { name: "latte", price: 3500, shots: 3, ingredients: ["milk", "bean"] },
  {
    name: "mocha",
    price: 4000,
    shots: 2,
    ingredients: ["milk", "bean", "choco", "syrup"],
  },
];

// const newMenu = menu.map((x) => {
//   x.price = x.price * 0.9;
//   return x;
// });
// console.log(newMenu);

// const newMenu1 = menu.map((x) => {
//   x.name = x.name.toUpperCase();
//   return x;
// });

// const newMenu2 = menu.map((x) => {
//   x.price = x.ingredients.includes("milk") ? x.price + 1000 : x.price;
//   return x;
// });

const newMenu3 = menu
  .filter((x) => {
    x.shots <= 2;
  })
  .map((x) => {
    x.ingredients.push("strawberry");
    return x;
  });
