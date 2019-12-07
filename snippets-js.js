// **********************************************
// event listeners
// **********************************************

todoForm.addEventListener("click", function (event) {
   var element = event.target;
   parentElement = element.parentElement;
   if (element.matches("img")) {...}
});

todoForm.addEventListener("submit", function (event) {
});
todoForm.addEventListener("keyup", function (event) {
});
todoForm.addEventListener("keydown", function (event) {
});

// **********************************************
// timer in one function
// **********************************************

function setTime() {
   var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

      if(secondsLeft === 0) {
         clearInterval(timerInterval);
         sendMessage();
      }

   }, 1000);
}

// **********************************************
// timer with separate functions
// **********************************************

function startTimer() {
   setTime();

   interval = setInterval(function() {
      secondsElapsed++;
      renderTime();
   }, 1000);
}

function pauseTimer() {
   clearInterval(interval);
   renderTime();
}

function stopTimer() {
   secondsElapsed = 0;
   setTime();
   renderTime();
}

// **********************************************
// **********************************************
// **********************************************

<h4>How many ways do you want to split the total</h4>
<input id="splitCt" type ="number" min="1" max="20" step="1" value ="1" size = "6">

// **********************************************
// **********************************************
// **********************************************

parseFloat();
parseInt();
toFixed();

// **********************************************
// forEach
// **********************************************

    function addDrink (item, index) {
      childDiv = document.createElement("div");
      childDiv.textContent = item;
      console.log (childDiv);
      div.appendChild (childDiv);
    }
    drinkList.forEach (addDrink);

// **********************************************
// jQuery CDN
// **********************************************

<script src="https://code.jquery.com/jquery.js"></script>


<script
   src="https://code.jquery.com/jquery-3.4.1.min.js"
   integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
   crossorigin="anonymous"></script>

// **********************************************
// random #
// **********************************************

function getRandomNumInRange (myLowerBound, myUpperBound) {

    return Math.floor (Math.random () * (myUpperBound - myLowerBound + 1)) + myLowerBound;

} // getRandomNumInRange

or
Math.random();

// **********************************************
// random number from among a group of numbers
// **********************************************
  var numberOptions = [10, 11];
  var increment = numberOptions[Math.round(Math.random())];


// **********************************************
// convert an ASCII number to its character
// *********************************************/

function getChar (myNum) {

    return String.fromCharCode (myNum);

} // getChar

// **********************************************
// link to bootstrap
// **********************************************

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

// **********************************************
// reverse a string. You have to turn it into an array, which you can flip with reverse()
// don't forget the empty strings in split() and join ()!!
// the IF checks for a palindrome!
// **********************************************

    var str = 'mom';
    var strArray = str.split("");
    var revStrArray = strArray.reverse();
    var revStr = revStrArray.join("");
    if (str === revStr) {


