



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
// 




// Needs to call information from API using fetch
// response.JSON

// Create a list with the user inputs and info from API


// Needs to store data in local storage 
// Button to "save" data pulled into list


//BMI Variables
var bmiBtnEl = $("#bmi-btn");


bmiBtnEl.on('click', function () {

  var weightEl = $("#weight").val();
  var heightEl = $("#height").val();
  
  console.log(weightEl);
  console.log(heightEl);

  });
  
  fetch("https://cors-anywhere.herokuapp.com/https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=65&height=167", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "mega-fitness-calculator1.p.rapidapi.com",
      "x-rapidapi-key": "SIGN-UP-FOR-KEY"
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });