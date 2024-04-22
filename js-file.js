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

// const h3Element = document.createElement("h3");
// h3Element.textContent = "I’m a blue h3!";
// h3Element.style.color = "blue";

// const divElement = document.createElement("div");
// divElement.style.border = "1px solid black";
// divElement.style.backgroundColor = "pink";

// const h1InsideDiv = document.createElement("h1");
// h1InsideDiv.textContent = "I’m in a div";

// const pInsideDiv = document.createElement("p");
// pInsideDiv.textContent = "ME TOO!";

// // Append the elements to the container
//  const container = document.getElementById("container");
//  container.appendChild(pElement);
// container.appendChild(h3Element);
// container.appendChild(divElement);
// divElement.appendChild(h1InsideDiv);
// divElement.appendChild(pInsideDiv);

body.append(p, h3)

// // Print a success message
// console.log("Elements added successfully to the container using JavaScript and DOM methods.");
