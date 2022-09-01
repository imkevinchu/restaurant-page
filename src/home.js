const createHomePage = () => {
  const homePage = document.createElement("div");
  homePage.classList.add("home");

  const heading = document.createElement("h2");
  const subtitle = document.createElement("p");
  heading.textContent = "Quality that doesn't go to waste";
  subtitle.textContent = "Since 1989";
  homePage.appendChild(heading);
  homePage.appendChild(subtitle);

  return homePage;
};

const loadHomePage = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHomePage());
};

export default loadHomePage;
