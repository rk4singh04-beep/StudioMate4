
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user && pass) {
    localStorage.setItem("user", user);
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter username and password");
  }
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}

function saveNote() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  let note = document.getElementById("noteInput").value;

  if (note) {
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
    document.getElementById("noteInput").value = "";
  }
}
function displayNotes() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  let list = document.getElementById("notesList");
  list.innerHTML = "";

  notes.forEach((n, index) => {
    let li = document.createElement("li");
    li.textContent = n + " ";

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => deleteNote(index);

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}
function addTask() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let task = document.getElementById("taskInput").value;

  if (task) {
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
    document.getElementById("taskInput").value = "";
  }
}
function displayTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((t, index) => {
    let li = document.createElement("li");
    li.textContent = t + " ";

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => deleteTask(index);

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}
if (window.location.pathname.includes("dashboard")) {
  displayNotes();
  displayTasks();
}
