/*
//5. declare three variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list =  document.querySelector('#list');
//6. Create a li element.
const listItem = document.createElement('li');
//7. Create a delete button
const deleteButton = document.createElement('button');
//8. Populate the li element with the input value
listItem.textContent = input.value;
//9. Populate the delete button with a x
deleteButton.textContent = '❌';
//10. Append the li element variable with the delete button
listItem.append(deleteButton);
//11. Append the li element variable to the unordered list in my HTML
list.append(listItem);
*/
//2. Create a click event listener for the Add Chapter button using and addEventListener
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list =  document.querySelector('#list');


button.addEventListener('click', function(){ 
    if (input.value.trim() != '') {
        //Creating elements
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        //Populating elements
        listItem.textContent = input.value;
        deleteButton.textContent = '❌';
        listItem.append(deleteButton);
        list.append(listItem);

        deleteButton.addEventListener('click', function() {
            list.removeChild(listItem);
            input.focus();
        });

        input.value = '';
        input.focus();
    }
});

