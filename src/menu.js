export function menu(div) {
  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  const menuOneName = document.createElement("h2");
  menuOneName.textContent = "Pounded Yam and Afang Soup";

  const menuOneDesc = document.createElement("p");
  menuOneDesc.textContent =
    "Imagine smooth, elastic pounded yam, yielding softly to the rich embrace of afang soup. This vibrant green stew, brimming with finely chopped afang leaves, waterleaf, and succulent pieces of meat or seafood, bursts with savory, slightly bitter, and earthy notes. Each satisfying spoonful is a taste of Nigerian tradition.";

  div.appendChild(heading);
  div.appendChild(menuOneName);
  div.appendChild(menuOneDesc);
}
