// Select the form and the list elements
const form = document.querySelector("#create-task-form");
const list = document.querySelector("#tasks");

// Add an event listener to the form to handle form submission
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Select the input element and get its value
  const input = document.querySelector("#new-task-description");
  const inputValue = input.value;

  // Create a new list item element and set its text content to the input value
  const listItem = document.createElement("li");
  listItem.textContent = inputValue;

  // Append the new list item element to the list element
  list.appendChild(listItem);

  // Reset the form input field
  input.value = "";
});
