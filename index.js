const button = document.querySelector("button");
const name = document.getElementById("name");
const site = document.getElementById("site");
const bookmarks = document.getElementById("bookmarks");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const nameValue = name.value;
  const siteValue = site.value;
  const newDiv = document.createElement("div");
  const button = document.createElement("button");
  button.textContent = "delete";

  button.addEventListener("click", (e) => {
    e.currentTarget.parentElement.remove();
  });

  newDiv.textContent = nameValue + "  --> " + siteValue;
  bookmarks.appendChild(newDiv);
  newDiv.appendChild(button);
});
