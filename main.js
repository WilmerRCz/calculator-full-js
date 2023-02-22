const app = document.getElementById("app");
const input = document.createElement("input");

document.body.appendChild(input);

function addText(textButton) {
  input.value += textButton;
}

function resultOperation() {
  console.log(input.value);
}

function createButton(textInButton) {
  const button = document.createElement("button");
  const textButton = document.createTextNode(textInButton);
  button.appendChild(textButton);
  button.setAttribute("onClick", `addText('${textInButton}')`);
  document.body.appendChild(button);
}
function buttonResult() {
  const button = document.createElement("button");
  const textButton = document.createTextNode("=");
  button.appendChild(textButton);
  button.setAttribute("onClick", `resultOperation()`);
  document.body.appendChild(button);
}

buttonResult();
createButton("1");
createButton("2");
createButton("3");
createButton("4");
createButton("5");
createButton("6");
createButton("7");
createButton("8");
createButton("9");
createButton("+");
createButton("-");
createButton("*");
createButton("/");
