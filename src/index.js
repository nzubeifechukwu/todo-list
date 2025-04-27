import "./styles.css";
import { menu } from "./menu";
import { home } from "./home";
import { contact } from "./contact";

const divContent = document.querySelector("#content");
const menuButton = document.querySelector("#menu");
const homeButton = document.querySelector("#home");
const contactButton = document.querySelector("#contact");

// Initial render
home();

menuButton.addEventListener("click", () => {
  divContent.innerHTML = "";
  menu(divContent);
});

homeButton.addEventListener("click", () => {
  divContent.innerHTML = "";
  home();
});

contactButton.addEventListener("click", () => {
  divContent.innerHTML = "";
  contact(divContent);
});
