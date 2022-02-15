



// Using a nutrition API
// Pull calories (Need 2nd API) for each food item
// Store diets/days in local storage

// Declare variables - 
// Need list section - use query selectors
// Reference Jquery


// BMI CALCULATOR SEPARATE FROM FOOD ITEMS
// CALORIE SIDE WILL JUST BE FOOD ITEMS 



// INSTRUCTIONS!
// Instructions on how to use the APP - HTML





// 1st DECLARE VARIABLES - pull from HTML - use Jquery & query selectors
// Create requestURL var for API - can use code snippets
// Variables for BMI - height & weight
// Variables for TDEE - weight, height, activitylevel, age, gender




// 2nd CREATE FUNCTIONS

// Receive inputs from user
// Have a button that will submit user input and search within API



// Needs to call information from API using fetch
// response.JSON

// Create a list with the user inputs and info from API


// Needs to store data in local storage 
// Button to "save" data pulled into list



$(document).ready(function () {

  //BMI Variables
var bmiNum = [];
var tdeeNum = [];
var bmiArr = [];
var tdeeArr = [];


function dataCall () {

  var weightEl = ($("#weight").val())*0.453592;
  var heightEl = ($("#height").val())*2.54;
  var activityLevelEl = $("#actLevel").val();
  var ageEl = $("#age").val();
  var genderEl = $("#gender").val();


  const BMI = {
    "async": true,
    "crossDomain": true,
    "url": "https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=" + weightEl + "&height=" + heightEl,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "mega-fitness-calculator1.p.rapidapi.com",
      "x-rapidapi-key": "da77e7b7e2msh80ffe4a0c19504cp1a6977jsnc6fffb124d5c"
    }
  };
  
  $.ajax(BMI).done(function (response) {

    bmiNum = response.info.bmi;

    $("#bmiValue").text("Your BMI is: " + bmiNum.toFixed(1));
    
  });

  
  const TDEE = {
    "async": true,
    "crossDomain": true,
    "url": "https://mega-fitness-calculator1.p.rapidapi.com/tdee?weight=" + weightEl+ "&height=" + heightEl + "&activitylevel=" + activityLevelEl + "&age=" + ageEl + "&gender=" + genderEl,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "mega-fitness-calculator1.p.rapidapi.com",
      "x-rapidapi-key": "d57755a48dmsh0dcfb6b18d5c813p132121jsne4a86bad79c5"
    }
  };
  
  $.ajax(TDEE).done(function (response) {

    tdeeNum = response.info.tdee;

    $("#tdeeValue").text("Your Total Daily Energy Expenditure is: " + tdeeNum.toFixed(1));

  });

}


function saveToLocalStorage() {

  localStorage.setItem("tdee", tdeeNum);
  localStorage.setItem("bmi", bmiNum);
 

  bmiArr.push(bmiNum);
  tdeeArr.push(tdeeNum);
  

  localStorage.setItem("tdee", JSON.stringify(tdeeArr));
  localStorage.setItem("bmi", JSON.stringify(bmiArr));


}




function list() {


  $("#pastSearched").text("");


  for (let index = 0; index < tdeeArr.length; index++) {

    $("#pastSearched").append("<tr><td>" + "Your BMI is: " + bmiArr[index].toFixed(1) + " Your TDEE is: " + tdeeArr[index].toFixed(1) + "</td></tr>");
  
  }  


}



function getBMISearches() {
  var recentBMISearches = JSON.parse(localStorage.getItem("bmi"));
  

  if (recentBMISearches) {

    pastBMISearches = recentBMISearches;

  } else {

    pastBMISearches = [];

  }
 
}


function getTDEESearches(){

var recentTDEESearches = JSON.parse(localStorage.getItem("tdee"));

if (recentTDEESearches) {

  pastTDEESearches = recentTDEESearches;

} else {

  pastTDEESearches = [];

}

}



  $("#submit-btn").click((event) => {

    event.preventDefault();
  
    dataCall();
  
    });



    $("#list-btn").click((event) => {
  
      event.preventDefault();

      saveToLocalStorage();
      list();
    
    });



    $("#clr-btn").click(() => {

  
      localStorage.removeItem("tdee");
      localStorage.removeItem("bmi");

      getTDEESearches();
      getBMISearches();
      list();
  

    });

   
  });







  



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

// var search = document.querySelector('#search');
let inputValue = document.querySelector('.inputValue');
// var button = document.querySelector('.button');
// var nameInput = document.querySelector('.name');
// var desc = document.querySelector('.desc');
// var kCal = document.querySelector('.kCal');
// // let container = document.querySelector("#container");
// var descValue = [];



function searchFood(foodName) {
    // var myHeaders = new Headers();
    // myHeaders.append("x-rapidapi-host", "food-calorie-data-search.p.rapidapi.com");
    // myHeaders.append("x-rapidapi-key", "a49585254fmsh071066c92506f03p15a617jsnf480dbe23591");
    // myHeaders.append("Content-Type", "application/json");

    // var requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     redirect: 'follow'
    // };

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=" + foodName,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "food-calorie-data-search.p.rapidapi.com",
            "x-rapidapi-key": "d57755a48dmsh0dcfb6b18d5c813p132121jsne4a86bad79c5"
        }
    };
    
    $.ajax(settings).done(function (response) {
        // console.log(response);
        for (let index = 0; index < response.length; index++) {

            let $container = $('#container');
            let $descValue = response[index].shrt_desc;
            let $kCal = response[index].energ_kcal;

            let $containerDiv = $('<div>');
            $containerDiv.addClass('row');
            $containerDiv.addClass('col-md-9');

            let $col1 = $('<div>');
            $col1.addClass('col-md-1');
            $col1.addClass('hero-body');

            let $col2 = $('<div>');
            $col2.addClass('col-md-2');

            $containerDiv.append($col1);
            $col1.append($descValue);

            $containerDiv.append($col2);
            $col2.append($kCal);

        
            $container.append($containerDiv);
            
        }
      
    });

    // fetch("https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=" + foodName, requestOptions)
    //     // .then(response => response.json())
    //     .then(function(response){
    //         // descValue = response.energ_kcal;
    //         console.log(response);
    //     })
    //     .catch(error => console.log('error', error));
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

// function renderFood(data) {
//     // start each search with a cleared slate 
//     container.innerHTML = "";
//     console.log(data);
//     for (var i = 0; i < data[5]; i++) {
//         console.log("response: ", data);
        
//         // create custom elements in javascript / DOM stuff / create the card blueprint using js DOM manipulation 
//         // creating blueprint for assigning 
//         // assign classes in js / assign values to those items 
//         var cardName = data[i].

        

//     }
// }

search.addEventListener("submit", function (event) {
    event.preventDefault();

    var searchInput = inputValue.value;
    console.log(searchInput);

    searchFood(searchInput);


});