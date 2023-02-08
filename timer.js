var minutes=0;
var seconds=0;

tm=window.setInterval('disp()',1000);

// this function adjusts the text timer underneath the playbar
function disp(){
// Format the output by adding 0 if it is single digit //
  if(seconds<10){var s1='0' + seconds;}
  else{var s1=seconds;}
  if(minutes<10){var m1='0' + minutes;}
  else{var m1=minutes;}

  // Display the output //
  str= m1 +':' + s1 ;
  document.getElementById('songTimer').innerHTML=str;
  // Calculate the stop watch // 
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

var width;
calculateMinutes();
console.log(width);
function update(){
    // the progress bar is based from 0 to 100. 100 means the bar is at 1 hour, its full green
    // 0 means the bar is at 0 minutes 0 seconds, its full grey
    // this function increments the variable width until it hits 100 and resets back to 0
    var element = document.getElementById('playbar_inner');   
    var identity = setInterval(scene, 1000)                 // will increase the progress bar width every second
    function scene(){
      console.log(width);
      if (width >= 100) {
        clearInterval(identity);
      } else {
        width = width + 0.60000; 
        element.style.width = width + '%'; 
      }
    }
}

update();                                        // this will start the function 
setInterval(update, 3600000);                    // this will reset the progress back to 0 every hour
setInterval(calculateMinutes, 360000);           // not sure if this is necessary, still trying to finagle it

function calculateMinutes(){
    const todaysDate = new Date();
    var pst = nextDate.toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
      });     
    todaysDate = new Date(pst);
    width = todaysDate.getMinutes() / .60000;    // the width will be based on the current time
}