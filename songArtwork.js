// set the image background to the radioco image every 5 seconds
function songArtwork(){
    var songArtwork = document.getElementById("songArtwork");
    let children = songArtwork.children;
    songLogo = children[1].src;
    var DJshowLogo = document.getElementById("DJshowLogo");
    DJshowLogo.style.backgroundImage = url(songLogo);
}
songArtwork();
setInterval(songArtwork, 5000);