import loadHomePage from "./home";
import loadMenuPage from "./menu";
import loadContactPage from "./contact";

const createMain = () => {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
};

const loadWebsite = () => {
  const content = document.getElementById("content");

  content.appendChild(createMain());

  loadHomePage();
};

export default loadWebsite;
