var minutes=0;
var seconds=0;
var width = 0;
var timeLeft = 0;

tm=window.setInterval('disp()',1000);

// this function adjusts the text timer underneath the playbar
function disp(){
  updateTimer(); // Call updateTimer function to sync with system time

  // Format the output by adding 0 if it is single digit 
  if(seconds<10){var s1='0' + seconds;}
  else{var s1=seconds;}
  if(minutes<10){var m1='0' + minutes;}
  else{var m1=minutes;}

  // Display the output 
  str= m1 +':' + s1 ;
  document.getElementById('songTimer').innerHTML=str;
}

function updateTimer() {
  var currentDate = new Date();
  minutes = currentDate.getMinutes();
  seconds = currentDate.getSeconds();
}

function calculateMinutes(){
  var todaysDate = new Date();
  var pst = todaysDate.toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
    });     
  todaysDate = new Date(pst); 
  width = todaysDate.getMinutes() / .6000      // the width will be based on the current time
  timeLeft = 3600000 - (width * 36000);        // initialize this variable so that update() runs every hour correctly
  minutes = todaysDate.getMinutes();
  seconds = todaysDate.getSeconds();
}

function updatePlaybar() {
  // The progress bar is based from 0 to 100. 100 means the bar is at 1 hour, its full green.
  // 0 means the bar is at 0 minutes 0 seconds, its full grey.
  // This function increments the variable "width" until it hits 100.
  var element = document.getElementById("playbar_inner");
  var identity = setInterval(scene, 1000); // will increase the progress bar width every second
  function scene() {
    var currentDate = new Date();
    var currentMinutes = currentDate.getMinutes();
    var currentSeconds = currentDate.getSeconds();

    // Calculate the width based on the current minutes and seconds
    width = (currentMinutes * 60 + currentSeconds) / 3600 * 100;

    element.style.width = width + "%";
  }
}

updatePlaybar();
calculateMinutes();
setInterval(updatePlaybar, timeLeft); // this will reset the progress bar back to 0/100 every hour
setInterval(calculateMinutes, timeLeft);


updatePlaybar();    
calculateMinutes();
setInterval(updatePlaybar, timeLeft);          // this will reset the progress bar back to 0/100 every hour
setInterval(calculateMinutes, timeLeft);       


/* Possible fix to the timer/progress bar*/

/*

var minutes=0;
var seconds=0;
var width = 0;
var timeLeft = 0;

// Replace setInterval with requestAnimationFrame
function startTimer() {
  disp();
  requestAnimationFrame(startTimer);
}

requestAnimationFrame(startTimer);

function disp() {
  // Format the output by adding 0 if it is single digit 
  if(seconds<10){var s1='0' + seconds;}
  else{var s1=seconds;}
  if(minutes<10){var m1='0' + minutes;}
  else{var m1=minutes;}

  // Display the output 
  str= m1 +':' + s1 ;
  document.getElementById('songTimer').innerHTML=str;
  // Calculate the stop watch 
  if(seconds<59){ 
    seconds=seconds+1;
  }else{
    seconds=0;
    minutes=minutes+1;
  if(minutes==60){
    minutes=0;
    seconds=0;
  } // end if  minutes == 60
  }// end if else seconds < 59
  // end of calculation for next display
}

function calculateMinutes() {
  var todaysDate = new Date();
  var pst = todaysDate.toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
    });     
  todaysDate = new Date(pst); 
  width = todaysDate.getMinutes() / .6000      // the width will be based on the current time
  timeLeft = 3600000 - (width * 360000);        // initialize this variable so that update() runs every hour correctly
  minutes = todaysDate.getMinutes();
  seconds = todaysDate.getSeconds();
}

function updatePlaybar() {
  // The progress bar is based from 0 to 100. 100 means the bar is at 1 hour, its full green.
  // 0 means the bar is at 0 minutes 0 seconds, its full grey.
  // This function increments the variable "width" until it hits 100.
  var element = document.getElementById('playbar_inner');
  var identity = setInterval(scene, 1000); // Update every 10 seconds instead of every second
  function scene() {
    if (width >= 100) {
      width = 0;
    } else {
      width = width + 0.00277777778; // Adjust the increment amount for the 10-second interval
      element.style.width = width + '%';
    }
  }
}
// Replace setInterval with requestAnimationFrame
function startPlaybar() {
  updatePlaybar();
  requestAnimationFrame(startPlaybar);
}

requestAnimationFrame(startPlaybar);

function resetAndUpdate() {
  calculateMinutes();
  updatePlaybar();
}

// Add visibilitychange event listener to update the timer when the user switches back to the tab
document.addEventListener('visibilitychange', function() {
  if (!document.hidden) {
    resetAndUpdate();
  }
});

// Replace setInterval with setTimeout and requestAnimationFrame
function startResetAndUpdate() {
  resetAndUpdate();
  setTimeout(function() {
    requestAnimationFrame(startResetAndUpdate);
  }, timeLeft);
}

requestAnimationFrame(startResetAndUpdate);

*/