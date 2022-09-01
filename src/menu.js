import HamburgerImg from "./img/hamburger.jpg";
import CheeseburgerImg from "./img/cheeseburger.jpg";
import FriesImg from "./img/fries.jpg";
import MilkshakeImg from "./img/milkshake.jpg";

const createMenuPage = () => {
  const menuPage = document.createElement("div");
  menuPage.classList.add("menu");

  const Hamburger = new Image();
  const Cheeseburger = new Image();
  const Fries = new Image();
  const Milkshake = new Image();

  Hamburger.src = HamburgerImg;
  Cheeseburger.src = CheeseburgerImg;
  Fries.src = FriesImg;
  Milkshake.src = MilkshakeImg;

  menuPage.appendChild(createMenuItem(Hamburger, "Hamburger", "600"));
  menuPage.appendChild(createMenuItem(Cheeseburger, "Cheeseburger", "400"));
  menuPage.appendChild(createMenuItem(Fries, "Fries", "200"));
  menuPage.appendChild(createMenuItem(Milkshake, "Milkshake", "500"));

  return menuPage;
};

const createMenuItem = (img, name, cal) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const title = document.createElement("h3");
  const calories = document.createElement("p");
  title.textContent = name;
  calories.textContent = `${cal} calories`;

  img.alt = name;

  menuItem.appendChild(title);
  menuItem.appendChild(calories);
  menuItem.appendChild(img);

  return menuItem;
};

const loadMenuPage = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenuPage());
};

export default loadMenuPage;
