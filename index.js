const button = document.querySelector("button");
const name = document.getElementById("name");
const site = document.getElementById("site");
const bookmarks = document.getElementById("bookmarks");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const nameValue = name.value;
  const siteValue = site.value;
  const newP = document.createElement("p");
  newP.textContent = nameValue + "  --> " + siteValue;
  bookmarks.appendChild(newP);
});
