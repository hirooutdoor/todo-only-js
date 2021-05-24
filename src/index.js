import "./styles.css";

const onClickAdd = () => {
  //get the value of input text and clear up the input area
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //create div
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;
  console.log(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
