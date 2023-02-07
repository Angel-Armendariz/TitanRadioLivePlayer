var minutes=0;
var seconds=0;

tm=window.setInterval('disp()',1000);

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