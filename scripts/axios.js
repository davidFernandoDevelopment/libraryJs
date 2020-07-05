const API_URL =
  "https://my-json-server.typicode.com/davidFernandoDevelopment/libraryJs/tasks";

const tasks = [];
axios
  .get(API_URL)
  .then((res) => fillTasks(res.data))
  .catch((e) => console.log(e));

const fillTasks = (data) => {
  data.map((d) => {
    let newTask = document.createElement("article");
    newTask.innerHTML = `
        <article class="task">
            <h3>${d.titulo}</h3>
            <p>Responsable: <span>${d.colaborador}</span></p>
            <p>Fecha de entrega: <span>${fecha}/span></p>
        </article>
    `;

    let state;
    if (d.state === "to-do") state = "todoTasks";
    if (d.state === "in-progress") state = "inprogressTasks";
    if (d.state === "done") state = "doneTasks";

    let column = document.getElementById(state);
    column.appendChild(newTask);
  });
};
