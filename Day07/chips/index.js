import { makeAvatarCard } from "./func.js";
import { data } from "./data.js";

const container = document.querySelector(".container");

data.forEach((v) =>
  container.insertAdjacentHTML(
    "beforeend",
    makeAvatarCard(v.avatar, v.fullName)
  )
);
