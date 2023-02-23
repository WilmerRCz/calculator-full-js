document.body.setAttribute("class", "bg-slate-900 ")
const app = document.getElementById("app");
//Creación de elementos HTML
const input = document.createElement("input");
const result = document.createElement("p")
const grid = document.createElement("div");
const container = document.createElement("div")

//Asignación de atributos (Clases a los elementos antes creados)
container.setAttribute("class", "absolute inset-0 flex justify-center items-center ")
app.appendChild(container);

grid.setAttribute("class", "grid grid-cols-4 gap-2 lg:w-1/4 mx-8");
container.appendChild(grid)

result.setAttribute("class", "col-span-4 text-6xl text-end break-words text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500")
grid.appendChild(result)
input.setAttribute("class", "col-span-4 rounded-lg border-2 text-pink-500 text-4xl bg-transparent border-transparent focus:border-pink-500 focus:outline-none ")
grid.appendChild(input)

//Creación de buttons
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

//Función que agrega texto (Depende de funcion de validar texto)
function addText(textButton) {
  const lastPosition = input.value.length - 1
  const lastChart = input.value.charAt(lastPosition)

  validationInputText(lastChart, textButton, lastPosition)

}
//Funcioón que valida que no se coloquen signos juntos
function validationInputText(lastChart, textButton, lastPosition) {
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
    deleteLastCharAtInInput(lastPosition)
    return input.value += textButton;
  }
  else {
    return input.value += textButton;
  }
}
//Función que me elimina el último caracter del input
function deleteLastCharAtInInput(lastPosition) {
  const cutString = input.value.slice(0, lastPosition)
  input.value = cutString

}
//Función que ejecuta lo que esta ingresado en el input como operación matemática
function resultOperation() {

  try {
    const operation = eval(input.value)
    result.innerText = operation
  } catch (error) {
    result.innerText = 'Syntax Error'
  }

}
//Función que me crea un boton con el texto que reciba de parametro
function createButton(textInButton) {
  const button = document.createElement("button");
  const textButton = document.createTextNode(textInButton);
  button.setAttribute("class", "text-white font-semibold  col-span-1 uppercase rounded-lg px-2 py-4 bg-gradient-to-r from-blue-500 to-pink-500 md:hover:from-pink-500 md:hover:to-amber-500")
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


