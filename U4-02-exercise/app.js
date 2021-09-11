// Select the section with an id of container without using querySelector.
document.getElementById("container");
// Select the section with an id of container using querySelector.
document.querySelector("section");
// Select all of the list items with a class of “second”.
document.getElementsByClassName("second");
// Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol .third");
// Give the section with an id of container the text “Hello!”.
const section = document.getElementById("container");
section.innerText = "Hello";
// Add the class main to the div with a class of footer.
const footer = document.querySelector(".footer");
footer.classList.add("main");
// Remove the class main on the div with a class of footer.
footer.classList.remove("main");
// Create a new li element.
const newli = document.createElement("li");
// Give the li the text “four”.
newli.innerText = "four";
// Append the li to the ul element.
let list = document.querySelector("ul");
list.appendChild(newLi);
// Loop over all of the lis inside the ol tag and give them a background color of “green”.
const lisInside = document.querySelectAll("ol li");
for (let i = 0; i < lisInside.length; i++) {
	lisInside[i].style.backgroundColor = green;
}
// Remove the div with a class of footer
const removeMe = document.querySelector(".footer");
removeMe.remove()

