// uncomment this script at the top and bottom of the page if you're copying and pasting
// in a javascript module on WordPress

// <script type="text/javascript"> 

// Get the modal
var TR2modal = document.getElementById("myTR2Modal");

// Get the button that opens the modal
var TR2_btn = document.getElementById("TR2_DJ_button");

// Get the <span> element that closes the modal
var TR2_span = document.getElementsByClassName("TR2close")[0];

// When the user clicks the button, open the modal
TR2_btn.addEventListener("click", TR2_popupWindow);
function TR2_popupWindow() {
    TR2modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
TR2_span.onclick = function() {
  TR2modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == TR2modal) {
    TR2modal.style.display = "none";
  }
}

// </script>