/* Assignment 03: Starting a Todo List App
 *
 * You are going to build the brains of a simple Todo List application
 * in JavaScript. You don't have to worry about the look of the app for now.
 * We will make it look awesome in Assignment 04.
 *
 * For now, we'll focus on giving the application the following features:
 * 1. Add a new todo item
 * 2. Delete a todo item
 * 3. Mark a todo item as completed
 * 4. Delete a todo item
 * 5. Clear all completed todos
 *
 * The following code is the starting point for this assignment.
 *
 * You will have to write the code to initialise the todoItems array and
 * for the functions below.
 *
 * 1. addToDoItem(text)
 * 2. removeToDoItem(todoId)
 * 3. markToDoItemAsCompleted(todoId)
 * 4. deleteToDoItem(todoId)
 * 5. clearCompletedTasks()
 *
 * YOU MUST NOT CHANGE ANY OF THE FUNCTION NAMES OR THE AUTOMATED TESTS WILL FAIL
 *
 * As you write each function, press on the "Run Tests" button in the browser
 * to run the automated tests and check your work.
 *
 * You can also add your own tests and debug statements at the bottom of this file.
 *
 */


// Data storage - Initialize the array of To Do items
//
// NOTE:
//
// - You must use the following object literal structure when creating new todo items
// - The ID (id) of each todo item must be unique (you can use the length of the array as the ID or generate a random number)
//
// {
//   id: 0,
//   text: "This is a todo item",
//   completed: false,
// }

// Initialise an empty array with the variable name todoItems

let todoItems = []; //empty array todoItems



// Function to add a todo to the list
// It should accept a string as a parameter (text of the todo item)
// and it should add a new todo item to the todoItems array
// The todo item should have the structure shown above
// It's really important that you have a unique ID for each todo item that you push onto the array
// the function does not need to return anything

counter = 0;

function addToDoItem(text) {
  counter = counter + 1
  let todoItem = {
    id: counter,
    text: text,
    completed: false,
  };
  
  todoItems.push(todoItem);
  console.log("TodoItem added", todoItem);
}


// Function to remove a todo to the list
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything
function removeToDoItem(todoId) {

  for (let i=0; i < todoItems.length; i++) {
    if(todoItems[i].id === todoId) {
      todoItems.splice(i, 1);
      break;
    }
  }

  console.log("TodoItem Removed", todoId);
}



// Function to mark a task as completed
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, set its completed property to true
// the function does not need to return anything
function markToDoItemAsCompleted(todoId) {

  for (let i=0; i < todoItems.length; i++) {
    if(todoItems[i].id === todoId){
        todoItems[i].completed = true; 
        break;
    }
  }

  console.log("TodoItem Marked As Completed", todoId);
}


// Function to delete a task from the array
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything, though you can return
// true or false depending on whether the item was successfully deleted

function deleteToDoItem(todoId) {
  for (let i=0; i < todoItems.length; i++) {
    if(todoItems[i].id === todoId) {
      todoItems.splice(i, 1);
      break;
    }
  }
  console.log("TodoItem Removed", todoId);
  // Implement the logic to remove a task here


}

// Function to clear all completed tasks
// Loop through the array of todos, and when you find a todo item that is marked
// as completed, remove it completely from the array
function clearCompletedTasks() {
  for (let i=0; i < todoItems.length; i++) {
    if(todoItems[i].completed === true) {
      todoItems.splice(i,1);
    }
  }
  // Implement the logic to clear completed tasks here

  console.log("Completed Tasks Removed");
}

// You can write your own tests here if you would like to test
// your code before using the automated tests
// For example, you could run:
//  addToDoItem("Test ToDo"); // This should add a new todo item to the array
//  console.log(todoItems); // This should show the todo item you added
//  removeToDoItem(0); // This should remove the todo item with ID 0 from the array
//  markToDoItemAsCompleted(0); // This should mark the todo item with ID 0 as completed


//THESE ARE THE TESTS I CHOSE TO RUN. I tested them but then had to put them into comments so that I wouldn't have errors with the "Run Tests" button.

//addToDoItem("This is a Todo Item Test");
//addToDoItem("This is another Todo Item Test");
//addToDoItem("This is a third Todo Item");
//addToDoItem("This is a fourth Todo Item");
//removeToDoItem(1);
//deleteToDoItem(2);
//markToDoItemAsCompleted(3);
//clearCompletedTasks();
//console.log(todoItems);



