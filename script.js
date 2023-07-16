let task = document.querySelector(".task");
let title = document.querySelector(".title");
let date = document.querySelector(".date");
let tasks = [
  {
    taskOne: {
      title: "reade book",
      date: "20/4/0240",
    },
    taskTwo: {
      title: "reade book2",
      date: "20/4/0240",
    },
    taskThree: {
      title: "reade book3",
      date: "20/4/0240",
    },
  },
];

console.log(task);
console.log(tasks[0].taskOne.title);
console.log(title);
console.log(date);

tasks.map((el) => {
  title.innerHTML += `${tasks[0].el.title}`;
  date.innerHTML += `${tasks[0].el.date}`;

  console.log(el);
});
