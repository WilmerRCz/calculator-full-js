const app = document.getElementById("app");
const input = document.createElement("input");

document.body.appendChild(input);

function addText(textButton) {
  const lastPosition = input.value.length - 1
  const lastChart = input.value.charAt(lastPosition)
  if (lastChart === '+' && lastChart === textButton) {
    return input.value
  }
  else if (lastChart === '-' && lastChart === textButton) {
    return input.value
  }
  else if (lastChart === '*' && lastChart === textButton) {
    return input.value
  }
  else if (lastChart === '/' && lastChart === textButton) {
    return input.value
  }else if (lastChart === '+' || lastChart === '-' || lastChart === '*' || lastChart === '/') {
    if(textButton !== '+' && textButton !== '-' && textButton !== '*' && textButton !== '/'){
      return input.value += textButton;
    }
    const cutString = input.value.slice(0, lastPosition)
    input.value = cutString
    return input.value += textButton;
  } 
  else {
    return input.value += textButton;
  }
}


function resultOperation() {
  const operation = eval(input.value)
  console.log(operation);
}

function createButton(textInButton) {
  const button = document.createElement("button");
  const textButton = document.createTextNode(textInButton);
  button.appendChild(textButton);
  if (textInButton === '=') {
    button.setAttribute("onClick", `resultOperation()`);
  }else if (textInButton === 'clear'){
    button.setAttribute("onClick", `input.value = ''`);
  } else {
    button.setAttribute("onClick", `addText('${textInButton}')`);
  }
  document.body.appendChild(button);
}

createButton("=");
createButton("clear");
createButton("1");
createButton("2");
createButton("3");
createButton("4");
createButton("5");
createButton("6");
createButton("7");
createButton("8");
createButton("9");
createButton("0");
createButton("+");
createButton("-");
createButton("*");
createButton("/");
