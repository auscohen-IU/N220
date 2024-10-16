// array to track the todo items
let todoItems = [];

// Function to add an item to the list
function addItem() {
    const itemInput = document.getElementById("item");
    const item = itemInput.value();

    if (item) {
        // Add the item to the list
        todoItems.push(item);
        
        // Update the displayed list
        updateList();
        
        // Clear the input field
        itemInput.value = '';
    }
}

// Function to update the UL with the current todo items
function updateList() {
    const listElement = document.getElementById("list");
    listElement.innerHTML = ''; // Clear current list

    todoItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listElement.appendChild(li);
    });
}

// Function to summarize the todo list
function summarizeList() {
    const summaryElement = document.getElementById("summary");
    let summaryText = "Total Items: <br />" + todoItems.length + "<br />";

    if (todoItems.length > 0) {
        summaryText += "First Item: <br />" + todoItems[0] + "<br />";
        summaryText += "Last Item: <br />" + todoItems[todoItems.length - 1];
    } else {
        summaryText += "First Item: <br />N/A<br />";
        summaryText += "Last Item: <br />N/A";
    }

    summaryElement.innerHTML = summaryText;
}
