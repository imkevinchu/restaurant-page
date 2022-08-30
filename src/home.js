const createHomePage = () => {
  const homePage = document.createElement("div");
  homePage.classList.add("home");

  const homePageTest = document.createElement("p");
  homePageTest.textContent = "loaded home page";
  homePage.appendChild(homePageTest);

  return homePage;
};

const loadHomePage = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHomePage());
};

export default loadHomePage;
