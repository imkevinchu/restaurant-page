const createContactPage = () => {
  const contactPage = document.createElement("div");
  contactPage.classList.add("contact");

  return contactPage;
};

const loadContactPage = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContactPage());
};

export default loadContactPage;
