const input = document.querySelector("#input")
const button = document.querySelector("#button")
const todoList = document.querySelector("#todo-list")


//Event listeners-------------------------*/
// input.addEventListener("", aInput)
button.addEventListener("click", aClick)

//Function -------------------------*/

function aClick(evt) {
  const ThingsTodo = document.createElement("li")
    ThingsTodo.textContent = input.value
    todoList.appendChild(ThingsTodo)
    //console.log(ThingsTodo)
    input.value = ""
}

