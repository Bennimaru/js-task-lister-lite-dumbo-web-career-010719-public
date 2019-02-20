// console.log("hello world")
const taskform = document.getElementById("create-task-form")
taskform.addEventListener("submit", function(e){
  e.preventDefault()
  const newTask = document.createElement("li")
  const newDescription = document.getElementById("new-task-description").value
  newTask.innerText = newDescription
  const deleteButton = document.createElement("button")
  deleteButton.innerText = "Delete"
  deleteButton.addEventListener("click", deleteTask)
  newTask.append(deleteButton)

  const listName = document.getElementById("list-name").value
  const selectedList = document.getElementById(listName)
  // console.dir(lists)
  // lists.forEach(function(list){
    // console.dir(selectedList.children[1])
  //   console.log(list.childNodes[2].id)
  //   if (list.childNodes[1].innerText === listName){
  //     list.childNodes[2].append(newTask)
  //   }
  // })
  // const taskList = document.getElementById("tasks")
  selectedList.children[1].append(newTask)

})

function deleteTask(element){
  element.target.parentElement.remove()
}

const listForm = document.getElementById("create-list-form")
listForm.addEventListener("submit", function(e){
  e.preventDefault()
  const newList = document.createElement("div")
  newList.className = "list"

  const listName = document.createElement("h2")
  const listNameInput = document.getElementById("new-list-description").value

  newList.id = listNameInput
  const listDropDown = document.getElementById("list-name")
  const newListOption = document.createElement('option')
  newListOption.value = listNameInput
  newListOption.innerText = listNameInput
  listDropDown.append(newListOption)

  listName.innerText = listNameInput

  const tasks = document.createElement("ul")


  newList.append(listName, tasks)
  document.getElementById("main-content").append(newList)
})
