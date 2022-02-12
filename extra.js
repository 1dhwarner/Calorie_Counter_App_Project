// Using a nutrition API
// Pull calories (Need 2nd API) for each food item
// Store diets/days in local storage

// Declare variables - 
// Need list section - use query selectors
// Reference Jquery

// From a drop down list, type in food items. Suggestions appear from a drop down list
// Once a food item is selected, it's added to a list with its corresponding kCal info
// The total is calculated and displayed either above or below the food item list 

// var userFormEl = document.querySelecter('#user-form');
// var foodInputEl = document.querySelector('#foodItem');
// var foodContainerEl = document.querySelector('#food-container');
// var foodSearchTerm = document.querySelector('#food-search-term');

// var formSubmitHandler = function (event) {
//     event.preventDefault();

//     var foodItem = foodInputEl.value.trim();

//     if (foodItem) {
//         getFoodCalories(foodItem);

//         foodContainerEl.textContent = '';
//         foodInputEl.value = '';
//     } else {
//         alert('Please enter a food item');
//     }
// };

// // 'food' here is an analog to 'user' on 22_Stu_Review-Part-One. It may refer to something in the api in which case I'd have to find the correct reference there 
// var getSearchedFood = function (food) {


//         .then(function (response) {
//             if (response.ok) {
//                 console.log(response);
//                 response.json().then(function (data) {
//                     console.log(data);
//                     displayRepos(data, food);
//                 })
//             } else {
//                 alert('Error: ' + response.statusText);
//             }
//         })
//         .catch(function (error) {
//             alert("Unable to connect to Calorie API");
//         });
// };

// var displayFoodCalories = function (calories, searchTerm) {
//     if (calories.length === 0) {
//         foodContainerEl.textContent = "No food items found.";
//         return;
//     }


// } 

var search = document.querySelector('#search');
var inputValue = document.querySelector('.inputValue');
var button = document.querySelector('.button');
var nameInput = document.querySelector('.name');
var desc = document.querySelector('.desc');
var kCal = document.querySelector('.kCal');
var container = document.querySelector(".container");

function searchFood(foodName) {
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-host", "food-calorie-data-search.p.rapidapi.com");
    myHeaders.append("x-rapidapi-key", "a49585254fmsh071066c92506f03p15a617jsnf480dbe23591");
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=" + foodName, requestOptions)
        .then(response => response.json())
        .then(result => renderFood(result))
        .catch(error => console.log('error', error));
    // fetch('https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=' + foodName, {
    //     method: "GET",
    //     headers: {
    //         "x-rapidapi-host": "food-calorie-data-search.p.rapidapi.com",
    //         "x-rapidapi-key": "a49585254fmsh071066c92506f03p15a617jsnf480dbe23591",
    //         "Content-Type": "application/json"
    //     }
    // })
    //     .then(response => response.JSON())
    //     .then(data => {
    //         console.log("response: ", data);
    //         var nameValue = data["name"];
    //         var descValue = data["shrt_desc"]
    //         var kCalValue = data["energ_kcal"]

    //         nameInput.innerHTML = nameValue;
    //         desc.innerHTML = descValue;
    //         kCal.innerHTML = kCalValue;
    //     })
    //     .catch(err => alert("Please enter a valid food item"))
}

function renderFood(data) {
    // start each search with a cleared slate 
    container.innerHTML = "";
    console.log(data);
    for (var i = 0; i < data[5]; i++) {
        console.log("response: ", data);
        
        // create custom elements in javascript / DOM stuff / create the card blueprint using js DOM manipulation 
        // creating blueprint for assigning 
        // assign classes in js / assign values to those items 
        var cardName = data[i].

        

    }
}

search.addEventListener("submit", function (event) {
    event.preventDefault();

    var searchInput = inputValue.value;
    console.log(searchInput);

    searchFood(searchInput);


});