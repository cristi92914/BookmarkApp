const button = document.querySelector("button");
const name = document.getElementById("name");
const site = document.getElementById("site");
const bookmarks = document.getElementById("bookmarks");
const form = document.querySelector("form");

button.addEventListener("click", (e) => {
  e.preventDefault();
  form.reportValidity();

  const nameValue = name.value;
  const siteValue = site.value;

  if (!nameValue || !siteValue) return;

  const newDiv = document.createElement("div");
  const newP = document.createElement("p");
  const buttonDelete = document.createElement("button");
  const buttonVisit = document.createElement("button");
  buttonDelete.textContent = "delete";
  buttonVisit.textContent = "visit";

  buttonDelete.addEventListener("click", (e) => {
    e.currentTarget.parentElement.remove();
  });

  buttonVisit.addEventListener("click", (e) => {
    window.location.href = siteValue;
  });

  newP.textContent = nameValue;
  site.value = "";
  name.value = "";
  bookmarks.appendChild(newDiv);
  newDiv.appendChild(newP);
  newDiv.appendChild(buttonDelete);
  newDiv.appendChild(buttonVisit);
});
