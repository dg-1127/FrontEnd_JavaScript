const container = document.querySelector(".container");

const makeBtn = (className) =>
  `<button class="button ${className}>Button</button>`;

container.insertAdjacentElement("beforeend", makeBtn("red"));
