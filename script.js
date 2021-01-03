let myButton = document.querySelector("#addToDo");
let myList = document.getElementById("toDoContainer"); //an example of another way to do it
let myInput = document.querySelector("#inputField");

// this triggers a button press when enter is pressed in the input field
myInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      document.getElementById("addToDo").click();
    }
  }); 

myButton.addEventListener("click", function() {
    // create a new li element
    let item = document.createElement("li");

    // apply the value to li
    item.innerText = myInput.value;

    // append the list item to the ul
    myList.appendChild(item);

    // reset the value of input field
    myInput.value = "";

    // remove li on click
    item.addEventListener("click", function() {
        //item.strike();
        //setTimeout(myList.removeChild(item), 1000);
        myList.removeChild(item);
    });
});





