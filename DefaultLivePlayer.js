//put this bad boy in at the end of the semester for the live player
// <script type="text/javascript"> 
function DJSchedule() {

    let text0 = "TR2";
    //change innerHTML of bio to text
    if(document.getElementById("bio").innerHTML !== text0)
        document.getElementById("bio").innerHTML = text0;
    //change the image to the DJ's image DJshowLogo
    let DJshowLogo0 = document.getElementById("DJshowLogo");
    let DJname0 = document.getElementById("DJname");
    let DJbio0 = document.getElementById("DJbio");
    let DJshowBio0 = document.getElementById("DJshowBio");
    if(DJname0.innerHTML !== "TR Staff")
        DJname0.innerHTML = "TR Staff";
    if(DJbio0.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
        DJbio0.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
    if(DJshowBio0.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
        DJshowBio0.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/09/TItan_Radio_Mobile_Logo_1024x1024.png')")
    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/09/TItan_Radio_Mobile_Logo_1024x1024.png')";

}
function callEveryMinute() {
    setInterval(DJSchedule, 30000);
}
DJSchedule();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("DJ_button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.addEventListener("click", popupWindow);
function popupWindow() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// </script>