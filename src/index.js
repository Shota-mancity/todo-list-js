import "./styles.css";

const onClickAdd = () => {
  // taskの新規追加
  // 入力されたタスクの文字列を格納
  const newTask = document.getElementById("add-task").value;
  // inputを初期化
  document.getElementById("add-task").value = "";
  console.log(newTask);
  alert(newTask);
  // 追加タスクの雛形（list）を作成
  // const li = document.createElement("li");
};

const onClick = () => {
  alert();
  console.log("a");
};

document
  .getElementById("add-task")
  .addEventListener("input", () => onClickAdd());

document.getElementById("buttonadd").addEventListener("click", () => onClick());
