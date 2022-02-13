



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

var bmiNum = [];
var tdeeNum = [];
var bmiArr = [];
var tdeeArr = [];
let inputValue = document.querySelector('.inputValue');


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


function searchFood(foodName) {

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

      for (let index = 0; index < response.length; index++) {

          let $container = $('#container');
          let $descValue = response[index].shrt_desc;
          let $kCal = response[index].energ_kcal;

          container = '';

          let $containerDiv = $('<div>');
          $containerDiv.addClass('row');


          let $col1 = $('<div>');
          $col1.addClass('hero-body');

          let $col2 = $('<div>');
   
          $containerDiv.append($col1);
          $col1.append($descValue);

          $containerDiv.append($col2);
          $col2.append($kCal);

      
          $container.append($containerDiv);
          
      }
    
  })

};


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

   


search.addEventListener("submit", function (event) {
    event.preventDefault();

    var searchInput = inputValue.value;
    console.log(searchInput);

    searchFood(searchInput);


});

  });

