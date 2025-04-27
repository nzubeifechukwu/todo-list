export function contact(div) {
  const heading = document.createElement("h1");
  heading.textContent = "The Homesick Restaurant";

  const contactAddress = document.createElement("h2");
  contactAddress.textContent = "8 ZA Avenue, European Quarters, Ichi";

  const email = document.createElement("h3");
  email.textContent = "contact@thehomesicrestaurant.food";

  div.appendChild(heading);
  div.appendChild(contactAddress);
  div.appendChild(email);
}
