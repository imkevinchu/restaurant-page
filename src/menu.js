import BurgerImg from "./img/burger.png";
import FriesImg from "./img/fries.png";
import CoffeeImg from "./img/coffee.png";
import IceCreamImg from "./img/icecream.png";

const createMenuPage = () => {
  const menuPage = document.createElement("div");
  menuPage.classList.add("menu");

  const Burger = new Image();
  const Fries = new Image();
  const Coffee = new Image();
  const IceCream = new Image();

  Burger.src = BurgerImg;
  Coffee.src = CoffeeImg;
  Fries.src = FriesImg;
  IceCream.src = IceCreamImg;

  menuPage.appendChild(createMenuItem(Burger, "Burger", "600"));
  menuPage.appendChild(createMenuItem(Fries, "Fries", "300"));
  menuPage.appendChild(createMenuItem(Coffee, "Coffee", "100"));
  menuPage.appendChild(createMenuItem(IceCream, "Ice Cream", "400"));

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
