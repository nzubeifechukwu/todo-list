import homeImage from "./asset/food.jpg";

export function home() {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "The HomeSick Restaurant";

  const image = document.createElement("img");
  image.src = homeImage;

  const description = document.createElement("p");
  description.textContent =
    "Step into the HomeSick Restaurant, a haven of comforting aromas and warm smiles. Mismatched charm fills the air, while each dish is a heartfelt embrace of familiar flavors. It's more than a meal; it's a cozy memory, a taste of home, wherever you may roam.";

  content.appendChild(heading);
  content.appendChild(image);
  content.appendChild(description);
}
