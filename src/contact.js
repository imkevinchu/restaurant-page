const createContactPage = () => {
  const contactPage = document.createElement("div");
  contactPage.classList.add("contact");

  const phone = document.createElement("p");
  phone.textContent = "(310) 867-5309";

  const address = document.createElement("p");
  address.textContent = "585 Venice Blvd, Venice, CA 90291";

  contactPage.appendChild(phone);
  contactPage.appendChild(address);

  return contactPage;
};

const loadContactPage = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContactPage());
};

export default loadContactPage;
