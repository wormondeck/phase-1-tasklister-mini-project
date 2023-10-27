document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    //console.log('submitted');
    const newTaskDescription = event.target.querySelector("#new-task-description").value;
    console.log(newTaskDescription);
  });
})


