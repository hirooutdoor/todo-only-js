import "./styles.css";

const onClickAdd = () => {
  //get the value of input text and clear up the input area
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //create div
  const div = document.createElement("div");
  div.className = "list-row";

  //Create li
  const li = document.createElement("li");
  li.innerText = inputText;

  //Add complete button
  const completeButton = document.createElement("button");
  completeButton.innerText = "Done";

  //Add delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  //Add child elements into div
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //Add div into inProgress-list(ul)
  document.getElementById("inProgress-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
