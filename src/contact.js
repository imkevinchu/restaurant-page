const createContactPage = () => {
  const contactPage = document.createElement("div");
  contactPage.classList.add("contact");

  return contactPage;
};

const loadContactPage = () => {
  const main = document.getElementById("main");
  content.textContent = "";
  content.appendChild(createContactPage());
};

export default loadContactPage;
