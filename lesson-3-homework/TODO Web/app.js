function appendInput(input){
  if (input.value == "") return
  else {
    var newLi = document.createElement("li")
    newLi.innerHTML = `<button class="delete">x</button><input type="checkbox">${input.value}`
    newLi.querySelector("button").addEventListener("click", event => {
        document.querySelector("ul").removeChild(event.target.parentNode)
      })
    newLi.querySelector("input").addEventListener("click", event => {
        if(event.target.checked) {
          newLi.style.color="red"
          newLi.style.textDecoration="line-through" 
        }
        else {
          newLi.style.color="#2f4f4f"
          newLi.style.textDecoration="" 
        }
      })
    document.querySelector("ul").appendChild(newLi)
  }
}

document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault()
  document.querySelector(".tasksBoard").style.display = "block"
  appendInput(document.querySelector("input"))
  document.querySelector("input").value = ""
})

document.querySelector("a").addEventListener("click", event => {
  document.querySelector("ul").innerHTML = ""
  document.querySelector(".tasksBoard").style.display = "none"
})

document.querySelector("a").addEventListener("click", event => {
  document.querySelector("ul").innerHTML = ""
})
