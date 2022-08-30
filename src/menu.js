const createMenuPage = () => {
  const menuPage = document.createElement("div");
  menuPage.classList.add("menu");

  return menuPage;
};

const loadMenuPage = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenuPage());
};

export default loadMenuPage;
