import { palleteStyle } from "./style.js";

const paint = (color) => `width:100%; height:100%; background-color:${color}`;

export const makeColor = (color) => {
  const box = document.createElement("div");
  box.style.cssText = paint(color);
  return box;
};

export const makePallete = () => {
  const pallete = document.createElement("section");
  pallete.style.cssText = palleteStyle;
  return pallete;
};
