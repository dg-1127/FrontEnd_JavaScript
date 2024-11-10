const container = document.createElement("section");
container.style.cssText = "display:flex; flex-direction:column; gap:22px;";
document.body.appendChild(container);

const makeButton = (color, text) => {
  const btn = document.createElement("button");
  btn.innerText = "Button";
  btn.style.cssText = `width:fit-content; background-color:${color}; border:1px solid ${color}; border-radius:50px; padding: 10px 12px; color:${text};`;
  container.appendChild(btn);
};

const colorList = ["#2563eb", "#1d4ed8", "white", "d8eafe"];
colorList.forEach((v) => makeButton(v));
