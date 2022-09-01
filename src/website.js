import loadHomePage from "./home";
import loadMenuPage from "./menu";
import loadContactPage from "./contact";

const createHeader = () => {
  const header = document.createElement("header");
  header.classList.add("header");
  header.setAttribute("id", "header");

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Out-N-In Burger";

  header.appendChild(title);
  header.appendChild(createNav());

  return header;
};

const createNav = () => {
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  nav.setAttribute("id", "nav");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("nav-btn");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setBtn(homeBtn);
    loadHomePage();
  });

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("nav-btn");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setBtn(menuBtn);
    loadMenuPage();
  });

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("nav-btn");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setBtn(contactBtn);
    loadContactPage();
  });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
};

const createMain = () => {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
};

const setBtn = (btn) => {
  const btnList = document.querySelectorAll(".nav-btn");

  btnList.forEach((btn) => {
    if (btn !== this) {
      btn.classList.remove("active");
    }
  });
  btn.classList.add("active");
};

const loadWebsite = () => {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());

  loadHomePage();
};

export default loadWebsite;
