// Random Group Maker Project By Aarush

//HTML VARIABLES
let addToListBtn = document.getElementById('btn-1');
let sortByRatingBtn = document.getElementById('btn-2');
let outputEl = document.getElementById('group-output');

//JS VARIABLES
let list = loadList();
displayList();

//BUTTON CLICKED EVENT
addToListBtn.addEventListener('click', addToList);
sortByRatingBtn.addEventListener('click', sortByRating);


//FUNCTIONS
//Add an element to the list.
function addToList() {
    let showName = prompt("Enter a show or movie to enter to your list!");
    let showRating = prompt("Enter the rating you give this show/movie (1-10)");
    let showGenre = prompt("Enter the genre of this show/movie!");
    list.push(newShow(showName, showRating, showGenre));
    alert("Show has been successfully added!");
    saveList();
}
//Print every item in the list to the output element.
function displayList() {
    let outputStr = ''
    for (let i = 0; i < list.length; i++) {
        outputStr += `${list[i].name}, ${list[i].rating}, ${list[i].genre}<br>`;
        outputEl.innerHTML = outputStr;
    }
}

//Sort the items in the list based on their rating.
function sortByRating() {
    //Array to order the elements from highest to lowest.
    let temp = [];
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            let listJNumValue = Number(list[j].rating);
            let listINumValue = Number(list[i].rating);
            if (listJNumValue > listINumValue) {
                temp.push(list[j]);
                list.splice(j, 1);
            }
        }
    }
    //Replace the list array with the temp array.
    list = temp;
    //Display the updated list.
    displayList();
}

//Save List To Local Storage.
function saveList() {
    localStorage.setItem("list", JSON.stringify(list));
}
//Helper function to load list from local storage.
function loadList() {
    let listStr = localStorage.getItem("list");
    return JSON.parse(listStr) ?? [];
}

//Array of object.
function newShow(name, rating, genre) {
    return {
        name: name,
        rating: rating,
        genre: genre,
    };
}