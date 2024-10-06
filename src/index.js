document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskDesc = document.getElementById("new-task-description");
  const tasks = document.getElementById("tasks");
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(event) {

      event.preventDefault();

      let li = document.createElement("li");
      li.innerHTML = newTaskDesc.value;
      tasks.appendChild(li);
      let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      newTaskDesc.value = "";
  });
  tasks.addEventListener("click", function(e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

});