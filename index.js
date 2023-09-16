const button = document.querySelector("button");
const name = document.getElementById("name");
const site = document.getElementById("site");
const bookmarks = document.getElementById("bookmarks");
const form = document.querySelector("form");

const jsonLocalStorage = localStorage.getItem("bookmarks");
const bookmarksArr = JSON.parse(jsonLocalStorage) || [];

const saveBookmarks = () => {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarksArr));
};

const addDiv = (nameValue, siteValue, id) => {
  const newDiv = document.createElement("div");
  const newP = document.createElement("p");
  const buttonDelete = document.createElement("button");
  const buttonVisit = document.createElement("button");
  buttonDelete.textContent = "delete";
  buttonVisit.textContent = "visit";

  //   const id = bookmarksArr?.length || 0;
  buttonDelete.addEventListener("click", (e) => {
    e.currentTarget.parentElement.remove();

    bookmarksArr.splice(id, 1);
    console.log(id, bookmarksArr);
    saveBookmarks();
  });

  buttonVisit.addEventListener("click", (e) => {
    window.location.href = siteValue;
  });

  newP.textContent = nameValue;
  bookmarks.appendChild(newDiv);
  newDiv.appendChild(newP);
  newDiv.appendChild(buttonDelete);
  newDiv.appendChild(buttonVisit);
};

bookmarksArr?.forEach((element) => {
  addDiv(element.name, element.url);
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  form.reportValidity();

  const nameValue = name.value;
  const siteValue = site.value;

  if (!nameValue || !siteValue) return;
  const id = bookmarksArr?.length || 0;

  addDiv(name.value, site.value, id);

  bookmarksArr.push({ id: id, name: name.value, url: site.value });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarksArr));

  site.value = "";
  name.value = "";

  console.log(bookmarksArr);
});
