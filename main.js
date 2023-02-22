const app = document.getElementById("app");
document.body.setAttribute("class", "bg-slate-900 ")
const input = document.createElement("input");
const result = document.createElement("p")
const grid = document.createElement("div");
const container = document.createElement("div")
container.setAttribute("class", "absolute inset-0 flex justify-center items-center ")
app.appendChild(container);

grid.setAttribute("class", "grid grid-cols-4 gap-2 lg:w-1/4 mx-8");
container.appendChild(grid)

result.setAttribute("class", "col-span-4 text-6xl text-end break-words text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500")
grid.appendChild(result)
input.setAttribute("class", "col-span-4 rounded-lg border-2 text-pink-500 text-4xl bg-transparent border-transparent focus:border-pink-500 focus:outline-none ")
grid.appendChild(input)

const botones = [
  createButton("1"),
  createButton("2"),
  createButton("3"),
  createButton("+"),
  createButton("4"),
  createButton("5"),
  createButton("6"),
  createButton("-"),
  createButton("7"),
  createButton("8"),
  createButton("9"),
  createButton("*"),
  createButton("0"),
  createButton("clear"),
  createButton("="),
  createButton("/"),
]


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
    } else if (lastChart === '+' || lastChart === '-' || lastChart === '*' || lastChart === '/') {
      if (textButton !== '+' && textButton !== '-' && textButton !== '*' && textButton !== '/') {
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
  
  try {
    const operation = eval(input.value)
    result.innerText = operation
  } catch (error) {
    result.innerText = 'Syntax Error'
  }
  
}

function createButton(textInButton) {
  const button = document.createElement("button");
  const textButton = document.createTextNode(textInButton);
  button.setAttribute("class", "text-white font-bold col-span-1 uppercase rounded-lg px-2 py-4 bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-green-500")
  button.appendChild(textButton);
  if (textInButton === '=') {
    button.setAttribute("onClick", `resultOperation()`);
  } else if (textInButton === 'clear') {
    button.setAttribute("onClick", `input.value = ''; result.innerText = ''`);
  } else {
    button.setAttribute("onClick", `addText('${textInButton}')`);
  }
  grid.appendChild(button);
}


