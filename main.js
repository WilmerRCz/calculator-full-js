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
input.setAttribute("disabled", "true")
grid.appendChild(input)

//Creación de buttons
const botones = [
  createButton("clear"),
  createButton("del"),
  createButton("+"),
  createButton("9"),
  createButton("8"),
  createButton("7"),
  createButton("-"),
  createButton("6"),
  createButton("5"),
  createButton("4"),
  createButton("*"),
  createButton("3"),
  createButton("2"),
  createButton("1"),
  createButton("/"),
  createButton("."),
  createButton("0"),
  createButton("="),
]

//Función que agrega texto (Depende de funcion de validar texto)
function addText(textButton) {
  const lastPosition = input.value.length - 1
  const lastChart = input.value.charAt(lastPosition)

  validationInputText(lastChart, textButton, lastPosition)

}
//Función que valida que no se coloquen signos juntos
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
  }  else if (lastChart === '.' && lastChart === textButton) {
    return input.value
  }
  else if (lastChart === '+' || lastChart === '-' || lastChart === '*' || lastChart === '/' || lastChart === '.') {
    if (textButton !== '+' && textButton !== '-' && textButton !== '*' && textButton !== '/' && textButton !== '.') {
      return input.value += textButton;
    }
    verifyLastCharAtIsSimbol(lastPosition)
    return input.value += textButton;
  }
  else {
    return input.value += textButton;
  }
}
//Función que me elimina el último caracter del input
function verifyLastCharAtIsSimbol(lastPosition) {
  const cutString = input.value.slice(0, lastPosition)
  input.value = cutString

}
function deleteLastChartInInput(){
  const cutString = input.value.slice(0, -1)
  input.value = cutString
  return input.value
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
  button.setAttribute("class", "text-white font-semibold  col-span-1 uppercase rounded-xl px-2 py-4 bg-gradient-to-r from-blue-500 to-pink-500 ")
  button.appendChild(textButton);
  if (textInButton === '=') {
    button.setAttribute("class", `text-white font-bold text-3xl col-span-2 uppercase rounded-xl bg-gradient-to-r from-amber-500 to-pink-500`);
    button.setAttribute("onClick", `resultOperation()`);
  } else if (textInButton === 'clear') {
    button.setAttribute("class", `text-white font-semibold  col-span-2 uppercase rounded-xl px-2 py-4 bg-gradient-to-r from-blue-500 to-pink-500`);
    button.setAttribute("onClick", `input.value = ''; result.innerText = ''`);
  } else if (textInButton === 'del') {
    button.setAttribute("onClick", `deleteLastChartInInput()`);
  }else {
    button.setAttribute("onClick", `addText('${textInButton}')`);
  }
  grid.appendChild(button);
}


