// Create the required elements
const body = document.body;

// Create a <p> with red text that says "Hey I'm red"
const p = document.createElement("p");
p.textContent = "Hey I am red!";
p.style.color = "red";

//Create a <h3> with blue text that says "I'm a blue h3!"

const h3 = document .createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

// Create a <div> with a black border and pink background color with the following elements inside of it:

// Another <h1> that says "I'm in a div"


const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

const h1Child = document.createElement("h1");
h1Child.textContent = "I'm in a Div";

//Create a <p> element that says "ME TOO!"

const pChild = document.createElement("p");
pChild.textContent = "ME TOO!";



body.append(p, h3, div)
div.append(h1Child, pChild);

// // Print a success message
console.log("Elements added successfully to the container using JavaScript and DOM methods.");
