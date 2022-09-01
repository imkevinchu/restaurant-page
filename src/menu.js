// import Hamburger from "./img/hamburger.jpg";
// import Cheeseburger from "./img/cheeseburger.jpg";
// import Fries from "./img/fries.jpg";
// import Milkshake from "./img/milkshake.jpg";

const createMenuPage = () => {
  const menuPage = document.createElement("div");
  menuPage.classList.add("menu");

  menuPage.appendChild(createMenuItem("Hamburger", "600"));
  menuPage.appendChild(createMenuItem("Cheeseburger", "400"));
  menuPage.appendChild(createMenuItem("Fries", "200"));
  menuPage.appendChild(createMenuItem("Milkshake", "500"));

  return menuPage;
};

const createMenuItem = (name, cal) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const title = document.createElement("h3");
  const calories = document.createElement("p");
  title.textContent = name;
  calories.textContent = cal;

  //   const img = document.createElement("img");
  //   img.src = `${name.toUpperCase()}`;
  //   img.alt = `${name}`;

  menuItem.appendChild(title);
  menuItem.appendChild(calories);
  //   menuItem.appendChild(img);

  return menuItem;
};

const loadMenuPage = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenuPage());
};

export default loadMenuPage;
