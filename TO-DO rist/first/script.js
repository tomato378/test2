document.getElementById("submit").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("タスクを入力してください！");
        return;
    }

    // タスクを表に追加する
    const tableBody = document.getElementById("taskTable").querySelector("tbody");
    const newRow = document.createElement("tr");

    const taskCell = document.createElement("td");
    taskCell.textContent = taskText;

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", function() {
        tableBody.removeChild(newRow);
    });

    actionCell.appendChild(deleteButton);

    newRow.appendChild(taskCell);
    newRow.appendChild(actionCell);
    tableBody.appendChild(newRow);

    // 入力欄をクリア
    taskInput.value = "";
});
