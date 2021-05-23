import "./styles.css";

const onClickAdd = () => {
  alert("正しく実行されました");
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
