let tasks = [
  {
    title: "reade book",
    date: "20/4/0240",
    isDone: true,
  },
  {
    title: "reade book2",
    date: "20/4/0240",
    isDone: false,
  },
  {
    title: "reade book3",
    date: "20/4/0240",
    isDone: true,
  },
];

function getTaskStorage() {
  tasks = JSON.parse(localStorage.getItem('tasks'))
}
getTaskStorage()
// CRUD = {{ R }}

function fetchData() {
  let index = 0;

  document.querySelector(".tasks").innerHTML = "";
  for (task of tasks) {
    document.querySelector(".tasks").innerHTML += `
    <div class="task ${
      task.isDone ? "done" : ""
    }" style="display:flex; align-items:center;justify-content:space-between;margin:6px ">
      <div class="text">
        <h3 class="title">${task.title}</h3>
        <p class="date">${task.date}</p>
      </div>
      <div style="margin-left:250px">
        <i onClick="deleteTask(${index})" style="margin-left:15px" class="ri-delete-bin-5-fill delete"></i>
        ${
          !task.isDone
            ? `<i onClick='toggle(${index})' style="margin-left:15px" class="ri-check-double-line check"></i>`
            : `<i onClick='toggle(${index})' style="margin-left:15px" class="ri-close-circle-fill cancel"></i>`
        }
        <i onClick="updateTask(${index})"style="margin-left:15px" class="ri-pencil-fill put"></i>
      </div>
    </div>
    `;
    index++;
  }
}
fetchData();

// CRUD = {{ C }}
document.querySelector(".button").addEventListener("click", function () {
  let newTitle = prompt("ادخل مهمة جديدة");
  let now = new Date();
  let date = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();
  let newObject = {
    title: newTitle,
    date: date,
    isDone: false,
  };
  tasks.push(newObject);
  taskStorage()
  fetchData();
  console.log(newTitle);
  console.log(newObject);
});
function toggle(index) {
  task = tasks[index];
  task.isDone = !task.isDone;
  taskStorage() ;
  fetchData();
}

// CRUD = {{ D }}

function deleteTask(index) {
  let conf = confirm("Are you sure you want to delete");
  if (conf) {
    tasks.splice(index, 1);
    taskStorage() 
  }

  fetchData();
}

// CRUD = {{ U }}
function updateTask(index) {
  let NewTask = prompt("مهمة جديدة");
  let task = tasks[index];
  console.log(task);
  task.title = NewTask;
  taskStorage() ;
  fetchData();
}


// function Storage 
function taskStorage() {
  let taslString = JSON.stringify(tasks)
  localStorage.setItem("tasks",taslString )
  console.log(tasks) 
}


