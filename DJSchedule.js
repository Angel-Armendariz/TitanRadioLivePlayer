function DJSchedule() {
    var nextDate = new Date();
    var pst = nextDate.toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
      });     
    nextDate = new Date(pst);
    switch(nextDate.getDay()) {
        case 0:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image logo
                    let logo0 = document.getElementById("logo"); 
                    if (logo0.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 1:
                    let text1 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image logo
                    let logo1 = document.getElementById("logo"); 
                    if (logo1.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 2:
                    let text2 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image logo
                    let logo2 = document.getElementById("logo"); 
                    if (logo2.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 3:
                    let text3 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image logo
                    let logo3 = document.getElementById("logo");
                    if (logo3.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 4:
                    let text4 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image logo
                    let logo4 = document.getElementById("logo");
                    if (logo4.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 5:
                    let text5 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image logo
                    let logo5 = document.getElementById("logo");
                    if (logo5.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 6:
                    let text6 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image logo
                    let logo6 = document.getElementById("logo");
                    if (logo6.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 7:
                    let text7 = "this works at 7am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                        document.getElementById("bio").innerHTML = text7;
                    let logo7 = document.getElementById("logo");
                    if (logo7.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 8:
                    let text8 = "this works at 8am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let logo8 = document.getElementById("logo");
                    if (logo8.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 9:
                    let text9 = "this works at 9am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let logo9 = document.getElementById("logo");
                    if (logo9.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 10:
                    let text10 = "this works at 10am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let logo10 = document.getElementById("logo");
                    if (logo10.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 11:
                    let text11 = "this works at 11am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let logo11 = document.getElementById("logo");
                    if (logo11.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 12:
                    let text12 = "this works at 12pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let logo12 = document.getElementById("logo");
                    if (logo12.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 13:
                    let text13 = "this works at 1pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let logo13 = document.getElementById("logo");
                    if (logo13.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 14:
                    let text14 = "this works at 2pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let logo14 = document.getElementById("logo");
                    if (logo14.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 15:
                    let text15 = "this works at 3pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let logo15 = document.getElementById("logo");
                    if (logo15.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 16:
                    let text16 = "this works at 4pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let logo16 = document.getElementById("logo");
                    if (logo16.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 17:
                    let text17 = "this works at 5pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let logo17 = document.getElementById("logo");
                    if (logo17.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 18:
                    let text18 = "this works at 6pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let logo18 = document.getElementById("logo");
                    if (logo18.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 19:
                    let text19 = "this works at 7pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let logo19 = document.getElementById("logo");
                    if (logo19.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 20:
                    let text20 = "this works at 8pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let logo20 = document.getElementById("logo");
                    if (logo20.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 21:
                    let text21 = "this works at 9pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let logo21 = document.getElementById("logo");
                    if (logo21.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 22:
                    let text22 = "this works at 10pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let logo22 = document.getElementById("logo");
                    if (logo22.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 23:
                    let text23 = "this works at 11pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let logo23 = document.getElementById("logo");
                    if (logo23.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
            }
        case 1:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image logo
                    let logo0 = document.getElementById("logo"); 
                    if (logo0.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 1:
                    let text1 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image logo
                    let logo1 = document.getElementById("logo"); 
                    if (logo1.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 2:
                    let text2 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image logo
                    let logo2 = document.getElementById("logo"); 
                    if (logo2.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 3:
                    let text3 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image logo
                    let logo3 = document.getElementById("logo");
                    if (logo3.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 4:
                    let text4 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image logo
                    let logo4 = document.getElementById("logo");
                    if (logo4.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 5:
                    let text5 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image logo
                    let logo5 = document.getElementById("logo");
                    if (logo5.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 6:
                    let text6 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image logo
                    let logo6 = document.getElementById("logo");
                    if (logo6.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 7:
                    let text7 = "this works at 7am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                        document.getElementById("bio").innerHTML = text7;
                    let logo7 = document.getElementById("logo");
                    if (logo7.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 8:
                    let text8 = "this works at 8am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let logo8 = document.getElementById("logo");
                    if (logo8.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 9:
                    let text9 = "this works at 9am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let logo9 = document.getElementById("logo");
                    if (logo9.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 10:
                    let text10 = "this works at 10am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let logo10 = document.getElementById("logo");
                    logo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    if (logo10.src !== "https://titanradio.org/wp-content/uploads/2021/11/yvette-de-wit-NYrVisodQ2M-unsplash-1024x683.jpg")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/11/yvette-de-wit-NYrVisodQ2M-unsplash-1024x683.jpg";
                    break
                case 11:
                    let text11 = "this works at 11am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let logo11 = document.getElementById("logo");
                    logo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    let logo111 = document.getElementById("bars");
                    logo111.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 12:
                    let text12 = "this works at 12pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let logo12 = document.getElementById("logo");
                    if (logo12.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 13:
                    let text13 = "this works at 1pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let logo13 = document.getElementById("logo");
                    if (logo13.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 14:
                    let text14 = "this works at 2pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let logo14 = document.getElementById("logo");
                    if (logo14.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 15:
                    let text15 = "this works at 3pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let logo15 = document.getElementById("logo");
                    if (logo15.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 16:
                    let text16 = "this works at 4pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let logo16 = document.getElementById("logo");
                    if (logo16.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 17:
                    let text17 = "this works at 5pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let logo17 = document.getElementById("logo");
                    if (logo17.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 18:
                    let text18 = "this works at 6pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let logo18 = document.getElementById("logo");
                    if (logo18.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 19:
                    let text19 = "this works at 7pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let logo19 = document.getElementById("logo");
                    if (logo19.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 20:
                    let text20 = "this works at 8pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let logo20 = document.getElementById("logo");
                    if (logo20.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 21:
                    let text21 = "this works at 9pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let logo21 = document.getElementById("logo");
                    if (logo21.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 22:
                    let text22 = "this works at 10pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let logo22 = document.getElementById("logo");
                    if (logo22.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 23:
                    let text23 = "this works at 11pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let logo23 = document.getElementById("logo");
                    if (logo23.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
            }
        case 2:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image logo
                    let logo0 = document.getElementById("logo"); 
                    if (logo0.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 1:
                    let text1 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image logo
                    let logo1 = document.getElementById("logo"); 
                    if (logo1.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 2:
                    let text2 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image logo
                    let logo2 = document.getElementById("logo"); 
                    if (logo2.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 3:
                    let text3 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image logo
                    let logo3 = document.getElementById("logo");
                    if (logo3.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 4:
                    let text4 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image logo
                    let logo4 = document.getElementById("logo");
                    if (logo4.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 5:
                    let text5 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image logo
                    let logo5 = document.getElementById("logo");
                    if (logo5.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 6:
                    let text6 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image logo
                    let logo6 = document.getElementById("logo");
                    if (logo6.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 7:
                    let text7 = "this works at 7am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                        document.getElementById("bio").innerHTML = text7;
                    let logo7 = document.getElementById("logo");
                    if (logo7.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 8:
                    let text8 = "this works at 8am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let logo8 = document.getElementById("logo");
                    if (logo8.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 9:
                    let text9 = "this works at 9am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let logo9 = document.getElementById("logo");
                    if (logo9.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 10:
                    let text10 = "this works at 10am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let logo10 = document.getElementById("logo");
                    if (logo10.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 11:
                    let text11 = "this works at 11am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let logo11 = document.getElementById("logo");
                    if (logo11.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 12:
                    let text12 = "this works at 12pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let logo12 = document.getElementById("logo");
                    if (logo12.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 13:
                    let text13 = "this works at 1pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let logo13 = document.getElementById("logo");
                    if (logo13.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 14:
                    let text14 = "this works at 2pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let logo14 = document.getElementById("logo");
                    if (logo14.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 15:
                    let text15 = "this works at 3pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let logo15 = document.getElementById("logo");
                    if (logo15.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 16:
                    let text16 = "this works at 4pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let logo16 = document.getElementById("logo");
                    if (logo16.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 17:
                    let text17 = "this works at 5pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let logo17 = document.getElementById("logo");
                    if (logo17.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 18:
                    let text18 = "this works at 6pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let logo18 = document.getElementById("logo");
                    if (logo18.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 19:
                    let text19 = "this works at 7pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let logo19 = document.getElementById("logo");
                    if (logo19.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 20:
                    let text20 = "this works at 8pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let logo20 = document.getElementById("logo");
                    if (logo20.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 21:
                    let text21 = "this works at 9pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let logo21 = document.getElementById("logo");
                    if (logo21.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 22:
                    let text22 = "this works at 10pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let logo22 = document.getElementById("logo");
                    if (logo22.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 23:
                    let text23 = "this works at 11pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let logo23 = document.getElementById("logo");
                    if (logo23.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
            }
        case 3:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image logo
                    let logo0 = document.getElementById("logo"); 
                    if (logo0.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 1:
                    let text1 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image logo
                    let logo1 = document.getElementById("logo"); 
                    if (logo1.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 2:
                    let text2 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image logo
                    let logo2 = document.getElementById("logo"); 
                    if (logo2.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 3:
                    let text3 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image logo
                    let logo3 = document.getElementById("logo");
                    if (logo3.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 4:
                    let text4 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image logo
                    let logo4 = document.getElementById("logo");
                    if (logo4.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 5:
                    let text5 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image logo
                    let logo5 = document.getElementById("logo");
                    if (logo5.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 6:
                    let text6 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image logo
                    let logo6 = document.getElementById("logo");
                    if (logo6.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 7:
                    let text7 = "this works at 7am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                        document.getElementById("bio").innerHTML = text7;
                    let logo7 = document.getElementById("logo");
                    if (logo7.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 8:
                    let text8 = "this works at 8am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let logo8 = document.getElementById("logo");
                    if (logo8.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 9:
                    let text9 = "this works at 9am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let logo9 = document.getElementById("logo");
                    if (logo9.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 10:
                    let text10 = "this works at 10am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let logo10 = document.getElementById("logo");
                    if (logo10.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 11:
                    let text11 = "this works at 11am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let logo11 = document.getElementById("logo");
                    if (logo11.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 12:
                    let text12 = "this works at 12pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let logo12 = document.getElementById("logo");
                    if (logo12.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 13:
                    let text13 = "this works at 1pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let logo13 = document.getElementById("logo");
                    if (logo13.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 14:
                    let text14 = "this works at 2pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let logo14 = document.getElementById("logo");
                    if (logo14.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 15:
                    let text15 = "this works at 3pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let logo15 = document.getElementById("logo");
                    if (logo15.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 16:
                    let text16 = "this works at 4pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let logo16 = document.getElementById("logo");
                    if (logo16.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 17:
                    let text17 = "this works at 5pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let logo17 = document.getElementById("logo");
                    if (logo17.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 18:
                    let text18 = "this works at 6pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let logo18 = document.getElementById("logo");
                    if (logo18.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 19:
                    let text19 = "this works at 7pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let logo19 = document.getElementById("logo");
                    if (logo19.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 20:
                    let text20 = "this works at 8pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let logo20 = document.getElementById("logo");
                    if (logo20.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 21:
                    let text21 = "this works at 9pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let logo21 = document.getElementById("logo");
                    if (logo21.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 22:
                    let text22 = "this works at 10pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let logo22 = document.getElementById("logo");
                    if (logo22.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 23:
                    let text23 = "this works at 11pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let logo23 = document.getElementById("logo");
                    if (logo23.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
            }
        case 4:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image logo
                    let logo0 = document.getElementById("logo"); 
                    if (logo0.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 1:
                    let text1 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image logo
                    let logo1 = document.getElementById("logo"); 
                    if (logo1.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 2:
                    let text2 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image logo
                    let logo2 = document.getElementById("logo"); 
                    if (logo2.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 3:
                    let text3 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image logo
                    let logo3 = document.getElementById("logo");
                    if (logo3.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 4:
                    let text4 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image logo
                    let logo4 = document.getElementById("logo");
                    if (logo4.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 5:
                    let text5 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image logo
                    let logo5 = document.getElementById("logo");
                    if (logo5.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 6:
                    let text6 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image logo
                    let logo6 = document.getElementById("logo");
                    if (logo6.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 7:
                    let text7 = "this works at 7am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                        document.getElementById("bio").innerHTML = text7;
                    let logo7 = document.getElementById("logo");
                    if (logo7.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 8:
                    let text8 = "this works at 8am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let logo8 = document.getElementById("logo");
                    if (logo8.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 9:
                    let text9 = "this works at 9am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let logo9 = document.getElementById("logo");
                    if (logo9.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 10:
                    let text10 = "this works at 10am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let logo10 = document.getElementById("logo");
                    if (logo10.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 11:
                    let text11 = "this works at 11am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let logo11 = document.getElementById("logo");
                    if (logo11.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 12:
                    let text12 = "this works at 12pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let logo12 = document.getElementById("logo");
                    if (logo12.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 13:
                    let text13 = "this works at 1pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let logo13 = document.getElementById("logo");
                    if (logo13.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 14:
                    let text14 = "this works at 2pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let logo14 = document.getElementById("logo");
                    if (logo14.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 15:
                    let text15 = "this works at 3pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let logo15 = document.getElementById("logo");
                    if (logo15.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 16:
                    let text16 = "this works at 4pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let logo16 = document.getElementById("logo");
                    if (logo16.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 17:
                    let text17 = "this works at 5pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let logo17 = document.getElementById("logo");
                    if (logo17.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 18:
                    let text18 = "this works at 6pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let logo18 = document.getElementById("logo");
                    if (logo18.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 19:
                    let text19 = "this works at 7pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let logo19 = document.getElementById("logo");
                    if (logo19.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 20:
                    let text20 = "this works at 8pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let logo20 = document.getElementById("logo");
                    if (logo20.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 21:
                    let text21 = "this works at 9pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let logo21 = document.getElementById("logo");
                    if (logo21.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 22:
                    let text22 = "this works at 10pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let logo22 = document.getElementById("logo");
                    if (logo22.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 23:
                    let text23 = "this works at 11pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let logo23 = document.getElementById("logo");
                    if (logo23.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
            }
        case 5:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image logo
                    let logo0 = document.getElementById("logo"); 
                    if (logo0.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 1:
                    let text1 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image logo
                    let logo1 = document.getElementById("logo"); 
                    if (logo1.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 2:
                    let text2 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image logo
                    let logo2 = document.getElementById("logo"); 
                    if (logo2.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 3:
                    let text3 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image logo
                    let logo3 = document.getElementById("logo");
                    if (logo3.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 4:
                    let text4 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image logo
                    let logo4 = document.getElementById("logo");
                    if (logo4.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 5:
                    let text5 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image logo
                    let logo5 = document.getElementById("logo");
                    if (logo5.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 6:
                    let text6 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image logo
                    let logo6 = document.getElementById("logo");
                    if (logo6.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 7:
                    let text7 = "this works at 7am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                        document.getElementById("bio").innerHTML = text7;
                    let logo7 = document.getElementById("logo");
                    if (logo7.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 8:
                    let text8 = "this works at 8am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let logo8 = document.getElementById("logo");
                    if (logo8.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 9:
                    let text9 = "this works at 9am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let logo9 = document.getElementById("logo");
                    if (logo9.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 10:
                    let text10 = "this works at 10am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let logo10 = document.getElementById("logo");
                    if (logo10.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 11:
                    let text11 = "this works at 11am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let logo11 = document.getElementById("logo");
                    if (logo11.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 12:
                    let text12 = "this works at 12pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let logo12 = document.getElementById("logo");
                    if (logo12.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 13:
                    let text13 = "this works at 1pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let logo13 = document.getElementById("logo");
                    if (logo13.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 14:
                    let text14 = "this works at 2pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let logo14 = document.getElementById("logo");
                    if (logo14.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 15:
                    let text15 = "this works at 3pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let logo15 = document.getElementById("logo");
                    if (logo15.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 16:
                    let text16 = "this works at 4pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let logo16 = document.getElementById("logo");
                    if (logo16.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 17:
                    let text17 = "this works at 5pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let logo17 = document.getElementById("logo");
                    if (logo17.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 18:
                    let text18 = "this works at 6pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let logo18 = document.getElementById("logo");
                    if (logo18.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 19:
                    let text19 = "this works at 7pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let logo19 = document.getElementById("logo");
                    if (logo19.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 20:
                    let text20 = "this works at 8pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let logo20 = document.getElementById("logo");
                    if (logo20.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 21:
                    let text21 = "this works at 9pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let logo21 = document.getElementById("logo");
                    if (logo21.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 22:
                    let text22 = "this works at 10pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let logo22 = document.getElementById("logo");
                    if (logo22.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
                case 23:
                    let text23 = "this works at 11pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let logo23 = document.getElementById("logo");
                    if (logo23.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                        document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                    break
            }
            case 6:
                switch(nextDate.getHours()) {
                    case 0:
                        let text0 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                        //change innerHTML of bio to text
                        document.getElementById("bio").innerHTML = text0;
                        //change the image to the DJ's image logo
                        let logo0 = document.getElementById("logo"); 
                        if (logo0.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 1:
                        let text1 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                        //change innerHTML of bio to text
                        document.getElementById("bio").innerHTML = text1;
                        //change the image to the DJ's image logo
                        let logo1 = document.getElementById("logo"); 
                        if (logo1.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 2:
                        let text2 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                        //change innerHTML of bio to text
                        document.getElementById("bio").innerHTML = text2;
                        //change the image to the DJ's image logo
                        let logo2 = document.getElementById("logo"); 
                        if (logo2.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 3:
                        let text3 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                        //change innerHTML of bio to text
                        document.getElementById("bio").innerHTML = text3;
                        //change the image to the DJ's image logo
                        let logo3 = document.getElementById("logo");
                        if (logo3.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 4:
                        let text4 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                        //change innerHTML of bio to text
                        document.getElementById("bio").innerHTML = text4;
                        //change the image to the DJ's image logo
                        let logo4 = document.getElementById("logo");
                        if (logo4.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 5:
                        let text5 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                        //change innerHTML of bio to text
                        document.getElementById("bio").innerHTML = text5;
                        //change the image to the DJ's image logo
                        let logo5 = document.getElementById("logo");
                        if (logo5.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 6:
                        let text6 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                        //change innerHTML of bio to text
                        document.getElementById("bio").innerHTML = text6;
                        //change the image to the DJ's image logo
                        let logo6 = document.getElementById("logo");
                        if (logo6.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 7:
                        let text7 = "this works at 7am";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text7)
                            document.getElementById("bio").innerHTML = text7;
                        let logo7 = document.getElementById("logo");
                        if (logo7.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 8:
                        let text8 = "this works at 8am";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text8)
                            document.getElementById("bio").innerHTML = text8;
                        let logo8 = document.getElementById("logo");
                        if (logo8.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 9:
                        let text9 = "this works at 9am";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text9)
                            document.getElementById("bio").innerHTML = text9;
                        let logo9 = document.getElementById("logo");
                        if (logo9.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 10:
                        let text10 = "this works at 10am";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text10)
                            document.getElementById("bio").innerHTML = text10;
                        let logo10 = document.getElementById("logo");
                        if (logo10.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 11:
                        let text11 = "this works at 11am";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text11)
                            document.getElementById("bio").innerHTML = text11;
                        let logo11 = document.getElementById("logo");
                        if (logo11.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 12:
                        let text12 = "this works at 12pm";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text12)
                            document.getElementById("bio").innerHTML = text12;
                        let logo12 = document.getElementById("logo");
                        if (logo12.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 13:
                        let text13 = "this works at 1pm";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text13)
                            document.getElementById("bio").innerHTML = text13;
                        let logo13 = document.getElementById("logo");
                        if (logo13.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 14:
                        let text14 = "this works at 2pm";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text14)
                            document.getElementById("bio").innerHTML = text14;
                        let logo14 = document.getElementById("logo");
                        if (logo14.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 15:
                        let text15 = "this works at 3pm";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text15)
                            document.getElementById("bio").innerHTML = text15;
                        let logo15 = document.getElementById("logo");
                        if (logo15.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 16:
                        let text16 = "this works at 4pm";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text16)
                            document.getElementById("bio").innerHTML = text16;
                        let logo16 = document.getElementById("logo");
                        if (logo16.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 17:
                        let text17 = "this works at 5pm";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text17)
                            document.getElementById("bio").innerHTML = text17;
                        let logo17 = document.getElementById("logo");
                        if (logo17.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 18:
                        let text18 = "this works at 6pm";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text18)
                            document.getElementById("bio").innerHTML = text18;
                        let logo18 = document.getElementById("logo");
                        if (logo18.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 19:
                        let text19 = "this works at 7pm";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text19)
                            document.getElementById("bio").innerHTML = text19;
                        let logo19 = document.getElementById("logo");
                        if (logo19.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 20:
                        let text20 = "this works at 8pm";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text20)
                            document.getElementById("bio").innerHTML = text20;
                        let logo20 = document.getElementById("logo");
                        if (logo20.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 21:
                        let text21 = "this works at 9pm";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text21)
                            document.getElementById("bio").innerHTML = text21;
                        let logo21 = document.getElementById("logo");
                        if (logo21.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 22:
                        let text22 = "this works at 10pm";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text22)
                            document.getElementById("bio").innerHTML = text22;
                        let logo22 = document.getElementById("logo");
                        if (logo22.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                    case 23:
                        let text23 = "this works at 11pm";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text23)
                            document.getElementById("bio").innerHTML = text23;
                        let logo23 = document.getElementById("logo");
                        if (logo23.src !== "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png")
                            document.getElementById("logo").src = "https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png";
                        break
                }
    }
    if (nextDate.getMinutes() !== 0) { // You can check for seconds here too
        callEveryMinute();
    }
    /*else {
        nextDate.setHours(nextDate.getHours() + 1);
        nextDate.setMinutes(0);
        nextDate.setSeconds(0);
    }
    */
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
    console.log("button clicked");
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

