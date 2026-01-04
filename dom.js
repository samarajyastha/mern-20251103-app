const title = document.querySelector("h1");
const para = document.querySelector("p");
const button = document.getElementById("btn");
const list = document.getElementById("list");

button.innerText = "Submit";

button.style.backgroundColor = "#ff0000";
button.style.color = "#ffffff";
button.style.border = "none";
button.style.padding = "0.5rem 2rem";
button.style.borderRadius = "10px";

button.addEventListener("dblclick", () => {
  console.log("button is clicked 2 times");
  button.style.backgroundColor = "#0000ff";
});

button.addEventListener("mouseenter", () => {
  console.log("hover");
  button.style.backgroundColor = "#c91717ff";
});

button.addEventListener("mouseleave", () => {
  console.log("hover");
  button.style.backgroundColor = "#ff0000";
});

const listItem = document.createElement("li"); // <li></li>

listItem.innerText = "Banana"; // <li>Banana</li>

list.appendChild(listItem); //<ul id="list"><li>Banana</li></ul>

const fruits = ["Apple", "Orange", "Mango", "Pineapple"];

button.addEventListener("click", () => {
  title.innerText = "Hello Ram";
  para.innerText = "This is the updated content.";
  button.style.backgroundColor = "#00ff00";

  fruits.map((fruit) => {
    const listItem = document.createElement("li");

    listItem.innerText = fruit;

    list.appendChild(listItem);
  });
});

console.log(window.location.href);

const nameInput = document.getElementById("name");

nameInput.addEventListener("change", (event) => {
  console.log(event.target.value);
});
