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
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo0 = document.getElementById("DJshowLogo");
                    let DJname0 = document.getElementById("DJname");
                    let DJbio0 = document.getElementById("DJbio");
                    let DJshowBio0 = document.getElementById("DJshowBio");
                    if(DJname0.innerHTML !== "DJ Sam")
                        DJname0.innerHTML = "DJ Sam";
                    if(DJbio0.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio0.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio0.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio0.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 1:
                    let text1 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo"); 
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "DJ Sam")
                        DJname1.innerHTML = "DJ Sam";
                    if(DJbio1.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio1.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio1.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio1.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 2:
                    let text2 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo"); 
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "DJ Sam")
                        DJname2.innerHTML = "DJ Sam";
                    if(DJbio2.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio2.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio2.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio2.innerHTML = "DJ Sam's show is a show where he plays music.";

                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 3:
                    let text3 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");  
                    if(DJname3.innerHTML !== "DJ Sam")
                        DJname3.innerHTML = "DJ Sam";
                    if(DJbio3.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio3.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio3.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio3.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 4:
                    let text4 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "DJ Sam")
                        DJname4.innerHTML = "DJ Sam";
                    if(DJbio4.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio4.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio4.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio4.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 5:
                    let text5 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "DJ Sam")
                        DJname5.innerHTML = "DJ Sam";
                    if(DJbio5.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio5.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio5.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio5.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 6:
                    let text6 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "DJ Sam")
                        DJname6.innerHTML = "DJ Sam";
                    if(DJbio6.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio6.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio6.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio6.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 7:
                    let text7 = "this works at 7am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                        document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "DJ Sam")
                        DJname7.innerHTML = "DJ Sam";
                    if(DJbio7.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio7.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio7.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio7.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 8:
                    let text8 = "this works at 8am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if(DJname8.innerHTML !== "DJ Sam")
                        DJname8.innerHTML = "DJ Sam";
                    if(DJbio8.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio8.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio8.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio8.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 9:
                    let text9 = "this works at 9am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if(DJname9.innerHTML !== "DJ Sam")
                        DJname9.innerHTML = "DJ Sam";
                    if(DJbio9.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio9.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio9.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio9.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 10:
                    let text10 = "this works at 10am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if(DJname10.innerHTML !== "DJ Sam")
                        DJname10.innerHTML = "DJ Sam";
                    if(DJbio10.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio10.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio10.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio10.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 11:
                    let text11 = "this works at 11am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if(DJname11.innerHTML !== "DJ Sam")
                        DJname11.innerHTML = "DJ Sam";
                    if(DJbio11.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio11.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio11.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio11.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 12:
                    let text12 = "this works at 12pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if(DJname12.innerHTML !== "DJ Sam")
                        DJname12.innerHTML = "DJ Sam";
                    if(DJbio12.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio12.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio12.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio12.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 13:
                    let text13 = "this works at 1pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if(DJname13.innerHTML !== "DJ Sam")
                        DJname13.innerHTML = "DJ Sam";
                    if(DJbio13.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio13.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio13.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio13.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 14:
                    let text14 = "this works at 2pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if(DJname14.innerHTML !== "DJ Teal")
                        DJname14.innerHTML = "DJ Teal";
                    if(DJbio14.innerHTML !== "DJ Teal is a DJ who likes to play music.")
                        DJbio14.innerHTML = "DJ Teal is a DJ who likes to play music.";
                    if(DJshowBio14.innerHTML !== "DJ Teal's show is a show where he plays music.")
                        DJshowBio14.innerHTML = "DJ Teal's show is a show where he plays music.";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/10/djTeal.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/10/djTeal.png')";
                    break
                case 15:
                    let text15 = "this works at 3pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if(DJname15.innerHTML !== "DJ Sam")
                        DJname15.innerHTML = "DJ Sam";
                    if(DJbio15.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio15.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio15.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio15.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 16:
                    let text16 = "this works at 4pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if(DJname16.innerHTML !== "DJ Sam")
                        DJname16.innerHTML = "DJ Sam";
                    if(DJbio16.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio16.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio16.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio16.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 17:
                    let text17 = "this works at 5pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if(DJname17.innerHTML !== "DJ Sam")
                        DJname17.innerHTML = "DJ Sam";
                    if(DJbio17.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio17.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio17.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio17.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 18:
                    let text18 = "this works at 6pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if(DJname18.innerHTML !== "DJ Sam")
                        DJname18.innerHTML = "DJ Sam";
                    if(DJbio18.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio18.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio18.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio18.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 19:
                    let text19 = "this works at 7pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if(DJname19.innerHTML !== "DJ Sam")
                        DJname19.innerHTML = "DJ Sam";
                    if(DJbio19.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio19.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio19.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio19.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 20:
                    let text20 = "this works at 8pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if(DJname20.innerHTML !== "DJ Sam")
                        DJname20.innerHTML = "DJ Sam";
                    if(DJbio20.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio20.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio20.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio20.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 21:
                    let text21 = "this works at 9pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if(DJname21.innerHTML !== "DJ Sam")
                        DJname21.innerHTML = "DJ Sam";
                    if(DJbio21.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio21.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio21.innerHTML !== "DJ Sam's show is a show where he plays music.")   
                        DJshowBio21.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 22:
                    let text22 = "this works at 10pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if(DJname22.innerHTML !== "DJ Sam")
                        DJname22.innerHTML = "DJ Sam";
                    if(DJbio22.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio22.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio22.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio22.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 23:
                    let text23 = "this works at 11pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if(DJname23.innerHTML !== "DJ Sam")
                        DJname23.innerHTML = "DJ Sam";
                    if(DJbio23.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio23.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio23.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio23.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
            }
            break
        case 1:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo0 = document.getElementById("DJshowLogo");
                    let DJname0 = document.getElementById("DJname");
                    let DJbio0 = document.getElementById("DJbio");
                    let DJshowBio0 = document.getElementById("DJshowBio");
                    if(DJname0.innerHTML !== "DJ Sam")
                        DJname0.innerHTML = "DJ Sam";
                    if(DJbio0.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio0.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio0.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio0.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 1:
                    let text1 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo"); 
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "DJ Sam")
                        DJname1.innerHTML = "DJ Sam";
                    if(DJbio1.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio1.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio1.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio1.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 2:
                    let text2 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo"); 
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "DJ Sam")
                        DJname2.innerHTML = "DJ Sam";
                    if(DJbio2.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio2.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio2.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio2.innerHTML = "DJ Sam's show is a show where he plays music.";

                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 3:
                    let text3 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");  
                    if(DJname3.innerHTML !== "DJ Sam")
                        DJname3.innerHTML = "DJ Sam";
                    if(DJbio3.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio3.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio3.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio3.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 4:
                    let text4 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "DJ Sam")
                        DJname4.innerHTML = "DJ Sam";
                    if(DJbio4.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio4.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio4.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio4.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 5:
                    let text5 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "DJ Sam")
                        DJname5.innerHTML = "DJ Sam";
                    if(DJbio5.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio5.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio5.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio5.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 6:
                    let text6 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "DJ Sam")
                        DJname6.innerHTML = "DJ Sam";
                    if(DJbio6.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio6.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio6.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio6.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 7:
                    let text7 = "this works at 7am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                        document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "DJ Sam")
                        DJname7.innerHTML = "DJ Sam";
                    if(DJbio7.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio7.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio7.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio7.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 8:
                    let text8 = "this works at 8am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if(DJname8.innerHTML !== "DJ Sam")
                        DJname8.innerHTML = "DJ Sam";
                    if(DJbio8.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio8.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio8.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio8.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 9:
                    let text9 = "this works at 9am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if(DJname9.innerHTML !== "DJ Sam")
                        DJname9.innerHTML = "DJ Sam";
                    if(DJbio9.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio9.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio9.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio9.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 10:
                    let text10 = "this works at 10am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if(DJname10.innerHTML !== "DJ Sam")
                        DJname10.innerHTML = "DJ Sam";
                    if(DJbio10.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio10.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio10.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio10.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 11:
                    let text11 = "this works at 11am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if(DJname11.innerHTML !== "DJ Sam")
                        DJname11.innerHTML = "DJ Sam";
                    if(DJbio11.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio11.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio11.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio11.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 12:
                    let text12 = "this works at 12pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if(DJname12.innerHTML !== "DJ Sam")
                        DJname12.innerHTML = "DJ Sam";
                    if(DJbio12.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio12.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio12.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio12.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 13:
                    let text13 = "this works at 1pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if(DJname13.innerHTML !== "DJ Sam")
                        DJname13.innerHTML = "DJ Sam";
                    if(DJbio13.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio13.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio13.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio13.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 14:
                    let text14 = "this works at 2pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if(DJname14.innerHTML !== "DJ Teal")
                        DJname14.innerHTML = "DJ Teal";
                    if(DJbio14.innerHTML !== "DJ Teal is a DJ who likes to play music.")
                        DJbio14.innerHTML = "DJ Teal is a DJ who likes to play music.";
                    if(DJshowBio14.innerHTML !== "DJ Teal's show is a show where he plays music.")
                        DJshowBio14.innerHTML = "DJ Teal's show is a show where he plays music.";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/10/djTeal.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/10/djTeal.png')";
                    break
                case 15:
                    let text15 = "this works at 3pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if(DJname15.innerHTML !== "DJ Sam")
                        DJname15.innerHTML = "DJ Sam";
                    if(DJbio15.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio15.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio15.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio15.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 16:
                    let text16 = "this works at 4pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if(DJname16.innerHTML !== "DJ Sam")
                        DJname16.innerHTML = "DJ Sam";
                    if(DJbio16.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio16.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio16.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio16.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 17:
                    let text17 = "this works at 5pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if(DJname17.innerHTML !== "DJ Sam")
                        DJname17.innerHTML = "DJ Sam";
                    if(DJbio17.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio17.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio17.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio17.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 18:
                    let text18 = "this works at 6pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if(DJname18.innerHTML !== "DJ Sam")
                        DJname18.innerHTML = "DJ Sam";
                    if(DJbio18.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio18.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio18.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio18.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 19:
                    let text19 = "this works at 7pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if(DJname19.innerHTML !== "DJ Sam")
                        DJname19.innerHTML = "DJ Sam";
                    if(DJbio19.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio19.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio19.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio19.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 20:
                    let text20 = "this works at 8pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if(DJname20.innerHTML !== "DJ Sam")
                        DJname20.innerHTML = "DJ Sam";
                    if(DJbio20.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio20.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio20.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio20.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 21:
                    let text21 = "this works at 9pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if(DJname21.innerHTML !== "DJ Sam")
                        DJname21.innerHTML = "DJ Sam";
                    if(DJbio21.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio21.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio21.innerHTML !== "DJ Sam's show is a show where he plays music.")   
                        DJshowBio21.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 22:
                    let text22 = "this works at 10pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if(DJname22.innerHTML !== "DJ Sam")
                        DJname22.innerHTML = "DJ Sam";
                    if(DJbio22.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio22.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio22.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio22.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 23:
                    let text23 = "this works at 11pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if(DJname23.innerHTML !== "DJ Sam")
                        DJname23.innerHTML = "DJ Sam";
                    if(DJbio23.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio23.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio23.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio23.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
            }
            break
        case 2:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo0 = document.getElementById("DJshowLogo");
                    let DJname0 = document.getElementById("DJname");
                    let DJbio0 = document.getElementById("DJbio");
                    let DJshowBio0 = document.getElementById("DJshowBio");
                    if(DJname0.innerHTML !== "DJ Sam")
                        DJname0.innerHTML = "DJ Sam";
                    if(DJbio0.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio0.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio0.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio0.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 1:
                    let text1 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo"); 
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "DJ Sam")
                        DJname1.innerHTML = "DJ Sam";
                    if(DJbio1.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio1.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio1.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio1.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 2:
                    let text2 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo"); 
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "DJ Sam")
                        DJname2.innerHTML = "DJ Sam";
                    if(DJbio2.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio2.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio2.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio2.innerHTML = "DJ Sam's show is a show where he plays music.";

                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 3:
                    let text3 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");  
                    if(DJname3.innerHTML !== "DJ Sam")
                        DJname3.innerHTML = "DJ Sam";
                    if(DJbio3.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio3.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio3.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio3.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 4:
                    let text4 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "DJ Sam")
                        DJname4.innerHTML = "DJ Sam";
                    if(DJbio4.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio4.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio4.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio4.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 5:
                    let text5 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "DJ Sam")
                        DJname5.innerHTML = "DJ Sam";
                    if(DJbio5.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio5.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio5.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio5.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 6:
                    let text6 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "DJ Sam")
                        DJname6.innerHTML = "DJ Sam";
                    if(DJbio6.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio6.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio6.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio6.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 7:
                    let text7 = "this works at 7am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                        document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "DJ Sam")
                        DJname7.innerHTML = "DJ Sam";
                    if(DJbio7.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio7.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio7.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio7.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 8:
                    let text8 = "this works at 8am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if(DJname8.innerHTML !== "DJ Sam")
                        DJname8.innerHTML = "DJ Sam";
                    if(DJbio8.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio8.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio8.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio8.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 9:
                    let text9 = "this works at 9am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if(DJname9.innerHTML !== "DJ Sam")
                        DJname9.innerHTML = "DJ Sam";
                    if(DJbio9.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio9.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio9.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio9.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 10:
                    let text10 = "this works at 10am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if(DJname10.innerHTML !== "DJ Sam")
                        DJname10.innerHTML = "DJ Sam";
                    if(DJbio10.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio10.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio10.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio10.innerHTML = "DJ Sam's show is a show where he plays music.";
                    DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/TRDJshowLogo_Stacked_ColorBlack-300x240.png')";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/TRDJshowLogo_Stacked_ColorBlack-300x240.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/TRDJshowLogo_Stacked_ColorBlack-300x240.png')";                    
                    break
                case 11:
                    let text11 = "this works at 11am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if(DJname11.innerHTML !== "DJ Sam")
                        DJname11.innerHTML = "DJ Sam";
                    if(DJbio11.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio11.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio11.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio11.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 12:
                    let text12 = "this works at 12pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if(DJname12.innerHTML !== "DJ Sam")
                        DJname12.innerHTML = "DJ Sam";
                    if(DJbio12.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio12.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio12.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio12.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 13:
                    let text13 = "this works at 1pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if(DJname13.innerHTML !== "DJ Sam")
                        DJname13.innerHTML = "DJ Sam";
                    if(DJbio13.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio13.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio13.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio13.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 14:
                    let text14 = "this works at 2pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if(DJname14.innerHTML !== "DJ Teal")
                        DJname14.innerHTML = "DJ Teal";
                    if(DJbio14.innerHTML !== "DJ Teal is a DJ who likes to play music.")
                        DJbio14.innerHTML = "DJ Teal is a DJ who likes to play music.";
                    if(DJshowBio14.innerHTML !== "DJ Teal's show is a show where he plays music.")
                        DJshowBio14.innerHTML = "DJ Teal's show is a show where he plays music.";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/10/djTeal.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/10/djTeal.png')";
                    break
                case 15:
                    let text15 = "this works at 3pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if(DJname15.innerHTML !== "DJ Sam")
                        DJname15.innerHTML = "DJ Sam";
                    if(DJbio15.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio15.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio15.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio15.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 16:
                    let text16 = "this works at 4pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if(DJname16.innerHTML !== "DJ Sam")
                        DJname16.innerHTML = "DJ Sam";
                    if(DJbio16.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio16.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio16.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio16.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 17:
                    let text17 = "this works at 5pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if(DJname17.innerHTML !== "DJ Sam")
                        DJname17.innerHTML = "DJ Sam";
                    if(DJbio17.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio17.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio17.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio17.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 18:
                    let text18 = "this works at 6pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if(DJname18.innerHTML !== "DJ Sam")
                        DJname18.innerHTML = "DJ Sam";
                    if(DJbio18.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio18.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio18.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio18.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 19:
                    let text19 = "this works at 7pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if(DJname19.innerHTML !== "DJ Sam")
                        DJname19.innerHTML = "DJ Sam";
                    if(DJbio19.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio19.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio19.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio19.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 20:
                    let text20 = "this works at 8pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if(DJname20.innerHTML !== "DJ Sam")
                        DJname20.innerHTML = "DJ Sam";
                    if(DJbio20.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio20.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio20.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio20.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 21:
                    let text21 = "this works at 9pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if(DJname21.innerHTML !== "DJ Sam")
                        DJname21.innerHTML = "DJ Sam";
                    if(DJbio21.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio21.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio21.innerHTML !== "DJ Sam's show is a show where he plays music.")   
                        DJshowBio21.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 22:
                    let text22 = "this works at 10pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if(DJname22.innerHTML !== "DJ Sam")
                        DJname22.innerHTML = "DJ Sam";
                    if(DJbio22.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio22.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio22.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio22.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 23:
                    let text23 = "this works at 11pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if(DJname23.innerHTML !== "DJ Sam")
                        DJname23.innerHTML = "DJ Sam";
                    if(DJbio23.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio23.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio23.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio23.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
            }
            break   
        case 3:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo0 = document.getElementById("DJshowLogo");
                    let DJname0 = document.getElementById("DJname");
                    let DJbio0 = document.getElementById("DJbio");
                    let DJshowBio0 = document.getElementById("DJshowBio");
                    if(DJname0.innerHTML !== "DJ Sam")
                        DJname0.innerHTML = "DJ Sam";
                    if(DJbio0.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio0.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio0.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio0.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 1:
                    let text1 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo"); 
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "DJ Sam")
                        DJname1.innerHTML = "DJ Sam";
                    if(DJbio1.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio1.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio1.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio1.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 2:
                    let text2 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo"); 
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "DJ Sam")
                        DJname2.innerHTML = "DJ Sam";
                    if(DJbio2.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio2.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio2.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio2.innerHTML = "DJ Sam's show is a show where he plays music.";

                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 3:
                    let text3 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");  
                    if(DJname3.innerHTML !== "DJ Sam")
                        DJname3.innerHTML = "DJ Sam";
                    if(DJbio3.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio3.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio3.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio3.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 4:
                    let text4 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "DJ Sam")
                        DJname4.innerHTML = "DJ Sam";
                    if(DJbio4.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio4.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio4.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio4.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 5:
                    let text5 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "DJ Sam")
                        DJname5.innerHTML = "DJ Sam";
                    if(DJbio5.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio5.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio5.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio5.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 6:
                    let text6 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "DJ Sam")
                        DJname6.innerHTML = "DJ Sam";
                    if(DJbio6.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio6.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio6.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio6.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 7:
                    let text7 = "this works at 7am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                        document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "DJ Sam")
                        DJname7.innerHTML = "DJ Sam";
                    if(DJbio7.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio7.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio7.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio7.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 8:
                    let text8 = "this works at 8am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if(DJname8.innerHTML !== "DJ Sam")
                        DJname8.innerHTML = "DJ Sam";
                    if(DJbio8.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio8.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio8.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio8.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 9:
                    let text9 = "this works at 9am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if(DJname9.innerHTML !== "DJ Sam")
                        DJname9.innerHTML = "DJ Sam";
                    if(DJbio9.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio9.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio9.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio9.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/10/djTeal.png')")
                    DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/10/djTeal.png')";
                    break
                case 10:
                    let text10 = "Sam's Space";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if(DJname10.innerHTML !== "DJ Sam")
                        DJname10.innerHTML = "DJ Sam";
                    if(DJbio10.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio10.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio10.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio10.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 11:
                    let text11 = "this works at 11am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if(DJname11.innerHTML !== "DJ Sam")
                        DJname11.innerHTML = "DJ Sam";
                    if(DJbio11.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio11.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio11.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio11.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 12:
                    let text12 = "this works at 12pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if(DJname12.innerHTML !== "DJ Sam")
                        DJname12.innerHTML = "DJ Sam";
                    if(DJbio12.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio12.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio12.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio12.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 13:
                    let text13 = "this works at 1pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if(DJname13.innerHTML !== "DJ Sam")
                        DJname13.innerHTML = "DJ Sam";
                    if(DJbio13.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio13.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio13.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio13.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 14:
                    let text14 = "this works at 2pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if(DJname14.innerHTML !== "DJ Teal")
                        DJname14.innerHTML = "DJ Teal";
                    if(DJbio14.innerHTML !== "DJ Teal is a DJ who likes to play music.")
                        DJbio14.innerHTML = "DJ Teal is a DJ who likes to play music.";
                    if(DJshowBio14.innerHTML !== "DJ Teal's show is a show where he plays music.")
                        DJshowBio14.innerHTML = "DJ Teal's show is a show where he plays music.";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/10/djTeal.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/10/djTeal.png')";
                    break
                case 15:
                    let text15 = "this works at 3pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if(DJname15.innerHTML !== "DJ Sam")
                        DJname15.innerHTML = "DJ Sam";
                    if(DJbio15.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio15.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio15.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio15.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 16:
                    let text16 = "this works at 4pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if(DJname16.innerHTML !== "DJ Sam")
                        DJname16.innerHTML = "DJ Sam";
                    if(DJbio16.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio16.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio16.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio16.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 17:
                    let text17 = "this works at 5pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if(DJname17.innerHTML !== "DJ Sam")
                        DJname17.innerHTML = "DJ Sam";
                    if(DJbio17.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio17.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio17.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio17.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 18:
                    let text18 = "this works at 6pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if(DJname18.innerHTML !== "DJ Sam")
                        DJname18.innerHTML = "DJ Sam";
                    if(DJbio18.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio18.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio18.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio18.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 19:
                    let text19 = "this works at 7pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if(DJname19.innerHTML !== "DJ Sam")
                        DJname19.innerHTML = "DJ Sam";
                    if(DJbio19.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio19.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio19.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio19.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 20:
                    let text20 = "this works at 8pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if(DJname20.innerHTML !== "DJ Sam")
                        DJname20.innerHTML = "DJ Sam";
                    if(DJbio20.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio20.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio20.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio20.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 21:
                    let text21 = "this works at 9pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if(DJname21.innerHTML !== "DJ Sam")
                        DJname21.innerHTML = "DJ Sam";
                    if(DJbio21.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio21.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio21.innerHTML !== "DJ Sam's show is a show where he plays music.")   
                        DJshowBio21.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 22:
                    let text22 = "this works at 10pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if(DJname22.innerHTML !== "DJ Sam")
                        DJname22.innerHTML = "DJ Sam";
                    if(DJbio22.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio22.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio22.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio22.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 23:
                    let text23 = "this works at 11pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if(DJname23.innerHTML !== "DJ Sam")
                        DJname23.innerHTML = "DJ Sam";
                    if(DJbio23.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio23.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio23.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio23.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
            }
            break
        case 4:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo0 = document.getElementById("DJshowLogo");
                    let DJname0 = document.getElementById("DJname");
                    let DJbio0 = document.getElementById("DJbio");
                    let DJshowBio0 = document.getElementById("DJshowBio");
                    if(DJname0.innerHTML !== "DJ Sam")
                        DJname0.innerHTML = "DJ Sam";
                    if(DJbio0.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio0.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio0.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio0.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 1:
                    let text1 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo"); 
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "DJ Sam")
                        DJname1.innerHTML = "DJ Sam";
                    if(DJbio1.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio1.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio1.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio1.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 2:
                    let text2 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo"); 
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "DJ Sam")
                        DJname2.innerHTML = "DJ Sam";
                    if(DJbio2.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio2.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio2.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio2.innerHTML = "DJ Sam's show is a show where he plays music.";

                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 3:
                    let text3 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");  
                    if(DJname3.innerHTML !== "DJ Sam")
                        DJname3.innerHTML = "DJ Sam";
                    if(DJbio3.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio3.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio3.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio3.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 4:
                    let text4 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "DJ Sam")
                        DJname4.innerHTML = "DJ Sam";
                    if(DJbio4.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio4.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio4.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio4.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 5:
                    let text5 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "DJ Sam")
                        DJname5.innerHTML = "DJ Sam";
                    if(DJbio5.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio5.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio5.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio5.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 6:
                    let text6 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "DJ Sam")
                        DJname6.innerHTML = "DJ Sam";
                    if(DJbio6.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio6.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio6.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio6.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 7:
                    let text7 = "this works at 7am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                        document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "DJ Sam")
                        DJname7.innerHTML = "DJ Sam";
                    if(DJbio7.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio7.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio7.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio7.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 8:
                    let text8 = "this works at 8am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if(DJname8.innerHTML !== "DJ Sam")
                        DJname8.innerHTML = "DJ Sam";
                    if(DJbio8.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio8.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio8.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio8.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 9:
                    let text9 = "this works at 9am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if(DJname9.innerHTML !== "DJ Sam")
                        DJname9.innerHTML = "DJ Sam";
                    if(DJbio9.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio9.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio9.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio9.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 10:
                    let text10 = "this works at 10am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if(DJname10.innerHTML !== "DJ Sam")
                        DJname10.innerHTML = "DJ Sam";
                    if(DJbio10.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio10.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio10.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio10.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 11:
                    let text11 = "this works at 11am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if(DJname11.innerHTML !== "DJ Sam")
                        DJname11.innerHTML = "DJ Sam";
                    if(DJbio11.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio11.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio11.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio11.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 12:
                    let text12 = "this works at 12pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if(DJname12.innerHTML !== "DJ Sam")
                        DJname12.innerHTML = "DJ Sam";
                    if(DJbio12.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio12.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio12.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio12.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 13:
                    let text13 = "this works at 1pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if(DJname13.innerHTML !== "DJ Sam")
                        DJname13.innerHTML = "DJ Sam";
                    if(DJbio13.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio13.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio13.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio13.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 14:
                    let text14 = "this works at 2pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if(DJname14.innerHTML !== "DJ Teal")
                        DJname14.innerHTML = "DJ Teal";
                    if(DJbio14.innerHTML !== "DJ Teal is a DJ who likes to play music.")
                        DJbio14.innerHTML = "DJ Teal is a DJ who likes to play music.";
                    if(DJshowBio14.innerHTML !== "DJ Teal's show is a show where he plays music.")
                        DJshowBio14.innerHTML = "DJ Teal's show is a show where he plays music.";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/10/djTeal.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/10/djTeal.png')";
                    break
                case 15:
                    let text15 = "this works at 3pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if(DJname15.innerHTML !== "DJ Sam")
                        DJname15.innerHTML = "DJ Sam";
                    if(DJbio15.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio15.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio15.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio15.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 16:
                    let text16 = "this works at 4pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if(DJname16.innerHTML !== "DJ Sam")
                        DJname16.innerHTML = "DJ Sam";
                    if(DJbio16.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio16.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio16.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio16.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 17:
                    let text17 = "this works at 5pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if(DJname17.innerHTML !== "DJ Sam")
                        DJname17.innerHTML = "DJ Sam";
                    if(DJbio17.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio17.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio17.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio17.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 18:
                    let text18 = "this works at 6pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if(DJname18.innerHTML !== "DJ Sam")
                        DJname18.innerHTML = "DJ Sam";
                    if(DJbio18.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio18.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio18.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio18.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 19:
                    let text19 = "this works at 7pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if(DJname19.innerHTML !== "DJ Sam")
                        DJname19.innerHTML = "DJ Sam";
                    if(DJbio19.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio19.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio19.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio19.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 20:
                    let text20 = "this works at 8pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if(DJname20.innerHTML !== "DJ Sam")
                        DJname20.innerHTML = "DJ Sam";
                    if(DJbio20.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio20.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio20.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio20.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 21:
                    let text21 = "this works at 9pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if(DJname21.innerHTML !== "DJ Sam")
                        DJname21.innerHTML = "DJ Sam";
                    if(DJbio21.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio21.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio21.innerHTML !== "DJ Sam's show is a show where he plays music.")   
                        DJshowBio21.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 22:
                    let text22 = "this works at 10pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if(DJname22.innerHTML !== "DJ Sam")
                        DJname22.innerHTML = "DJ Sam";
                    if(DJbio22.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio22.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio22.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio22.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 23:
                    let text23 = "this works at 11pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if(DJname23.innerHTML !== "DJ Sam")
                        DJname23.innerHTML = "DJ Sam";
                    if(DJbio23.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio23.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio23.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio23.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
            }
            break
        case 5:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo0 = document.getElementById("DJshowLogo");
                    let DJname0 = document.getElementById("DJname");
                    let DJbio0 = document.getElementById("DJbio");
                    let DJshowBio0 = document.getElementById("DJshowBio");
                    if(DJname0.innerHTML !== "DJ Sam")
                        DJname0.innerHTML = "DJ Sam";
                    if(DJbio0.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio0.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio0.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio0.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 1:
                    let text1 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo"); 
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "DJ Sam")
                        DJname1.innerHTML = "DJ Sam";
                    if(DJbio1.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio1.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio1.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio1.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 2:
                    let text2 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo"); 
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "DJ Sam")
                        DJname2.innerHTML = "DJ Sam";
                    if(DJbio2.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio2.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio2.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio2.innerHTML = "DJ Sam's show is a show where he plays music.";

                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 3:
                    let text3 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");  
                    if(DJname3.innerHTML !== "DJ Sam")
                        DJname3.innerHTML = "DJ Sam";
                    if(DJbio3.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio3.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio3.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio3.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 4:
                    let text4 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "DJ Sam")
                        DJname4.innerHTML = "DJ Sam";
                    if(DJbio4.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio4.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio4.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio4.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 5:
                    let text5 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "DJ Sam")
                        DJname5.innerHTML = "DJ Sam";
                    if(DJbio5.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio5.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio5.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio5.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 6:
                    let text6 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "DJ Sam")
                        DJname6.innerHTML = "DJ Sam";
                    if(DJbio6.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio6.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio6.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio6.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 7:
                    let text7 = "this works at 7am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                        document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "DJ Sam")
                        DJname7.innerHTML = "DJ Sam";
                    if(DJbio7.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio7.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio7.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio7.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 8:
                    let text8 = "this works at 8am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if(DJname8.innerHTML !== "DJ Sam")
                        DJname8.innerHTML = "DJ Sam";
                    if(DJbio8.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio8.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio8.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio8.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 9:
                    let text9 = "this works at 9am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if(DJname9.innerHTML !== "DJ Sam")
                        DJname9.innerHTML = "DJ Sam";
                    if(DJbio9.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio9.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio9.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio9.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 10:
                    let text10 = "this works at 10am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if(DJname10.innerHTML !== "DJ Sam")
                        DJname10.innerHTML = "DJ Sam";
                    if(DJbio10.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio10.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio10.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio10.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 11:
                    let text11 = "this works at 11am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if(DJname11.innerHTML !== "DJ Sam")
                        DJname11.innerHTML = "DJ Sam";
                    if(DJbio11.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio11.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio11.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio11.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 12:
                    let text12 = "this works at 12pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if(DJname12.innerHTML !== "DJ Sam")
                        DJname12.innerHTML = "DJ Sam";
                    if(DJbio12.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio12.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio12.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio12.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 13:
                    let text13 = "this works at 1pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if(DJname13.innerHTML !== "DJ Sam")
                        DJname13.innerHTML = "DJ Sam";
                    if(DJbio13.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio13.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio13.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio13.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 14:
                    let text14 = "this works at 2pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if(DJname14.innerHTML !== "DJ Teal")
                        DJname14.innerHTML = "DJ Teal";
                    if(DJbio14.innerHTML !== "DJ Teal is a DJ who likes to play music.")
                        DJbio14.innerHTML = "DJ Teal is a DJ who likes to play music.";
                    if(DJshowBio14.innerHTML !== "DJ Teal's show is a show where he plays music.")
                        DJshowBio14.innerHTML = "DJ Teal's show is a show where he plays music.";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/10/djTeal.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/10/djTeal.png')";
                    break
                case 15:
                    let text15 = "this works at 3pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if(DJname15.innerHTML !== "DJ Sam")
                        DJname15.innerHTML = "DJ Sam";
                    if(DJbio15.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio15.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio15.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio15.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 16:
                    let text16 = "this works at 4pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if(DJname16.innerHTML !== "DJ Sam")
                        DJname16.innerHTML = "DJ Sam";
                    if(DJbio16.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio16.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio16.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio16.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 17:
                    let text17 = "this works at 5pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if(DJname17.innerHTML !== "DJ Sam")
                        DJname17.innerHTML = "DJ Sam";
                    if(DJbio17.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio17.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio17.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio17.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 18:
                    let text18 = "this works at 6pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if(DJname18.innerHTML !== "DJ Sam")
                        DJname18.innerHTML = "DJ Sam";
                    if(DJbio18.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio18.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio18.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio18.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 19:
                    let text19 = "this works at 7pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if(DJname19.innerHTML !== "DJ Sam")
                        DJname19.innerHTML = "DJ Sam";
                    if(DJbio19.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio19.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio19.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio19.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 20:
                    let text20 = "this works at 8pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if(DJname20.innerHTML !== "DJ Sam")
                        DJname20.innerHTML = "DJ Sam";
                    if(DJbio20.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio20.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio20.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio20.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 21:
                    let text21 = "this works at 9pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if(DJname21.innerHTML !== "DJ Sam")
                        DJname21.innerHTML = "DJ Sam";
                    if(DJbio21.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio21.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio21.innerHTML !== "DJ Sam's show is a show where he plays music.")   
                        DJshowBio21.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 22:
                    let text22 = "this works at 10pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if(DJname22.innerHTML !== "DJ Sam")
                        DJname22.innerHTML = "DJ Sam";
                    if(DJbio22.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio22.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio22.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio22.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 23:
                    let text23 = "this works at 11pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if(DJname23.innerHTML !== "DJ Sam")
                        DJname23.innerHTML = "DJ Sam";
                    if(DJbio23.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio23.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio23.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio23.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
            }
            break
        case 6:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text0;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo0 = document.getElementById("DJshowLogo");
                    let DJname0 = document.getElementById("DJname");
                    let DJbio0 = document.getElementById("DJbio");
                    let DJshowBio0 = document.getElementById("DJshowBio");
                    if(DJname0.innerHTML !== "DJ Sam")
                        DJname0.innerHTML = "DJ Sam";
                    if(DJbio0.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio0.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio0.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio0.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 1:
                    let text1 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo"); 
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "DJ Sam")
                        DJname1.innerHTML = "DJ Sam";
                    if(DJbio1.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio1.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio1.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio1.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 2:
                    let text2 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo"); 
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "DJ Sam")
                        DJname2.innerHTML = "DJ Sam";
                    if(DJbio2.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio2.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio2.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio2.innerHTML = "DJ Sam's show is a show where he plays music.";

                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 3:
                    let text3 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");  
                    if(DJname3.innerHTML !== "DJ Sam")
                        DJname3.innerHTML = "DJ Sam";
                    if(DJbio3.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio3.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio3.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio3.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 4:
                    let text4 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "DJ Sam")
                        DJname4.innerHTML = "DJ Sam";
                    if(DJbio4.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio4.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio4.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio4.innerHTML = "DJ Sam's show is a show where he plays music."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 5:
                    let text5 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "DJ Sam")
                        DJname5.innerHTML = "DJ Sam";
                    if(DJbio5.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio5.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio5.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio5.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 6:
                    let text6 = "There is no show at this time. Please check back later. If you want something to listen to, check out TR2 for our 24/7 stream.";
                    //change innerHTML of bio to text
                    document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "DJ Sam")
                        DJname6.innerHTML = "DJ Sam";
                    if(DJbio6.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio6.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio6.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio6.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 7:
                    let text7 = "this works at 7am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                        document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "DJ Sam")
                        DJname7.innerHTML = "DJ Sam";
                    if(DJbio7.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio7.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio7.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio7.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 8:
                    let text8 = "this works at 8am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if(DJname8.innerHTML !== "DJ Sam")
                        DJname8.innerHTML = "DJ Sam";
                    if(DJbio8.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio8.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio8.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio8.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 9:
                    let text9 = "this works at 9am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if(DJname9.innerHTML !== "DJ Sam")
                        DJname9.innerHTML = "DJ Sam";
                    if(DJbio9.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio9.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio9.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio9.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 10:
                    let text10 = "this works at 10am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if(DJname10.innerHTML !== "DJ Sam")
                        DJname10.innerHTML = "DJ Sam";
                    if(DJbio10.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio10.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio10.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio10.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 11:
                    let text11 = "this works at 11am";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if(DJname11.innerHTML !== "DJ Sam")
                        DJname11.innerHTML = "DJ Sam";
                    if(DJbio11.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio11.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio11.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio11.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 12:
                    let text12 = "this works at 12pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if(DJname12.innerHTML !== "DJ Sam")
                        DJname12.innerHTML = "DJ Sam";
                    if(DJbio12.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio12.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio12.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio12.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 13:
                    let text13 = "this works at 1pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if(DJname13.innerHTML !== "DJ Sam")
                        DJname13.innerHTML = "DJ Sam";
                    if(DJbio13.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio13.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio13.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio13.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 14:
                    let text14 = "this works at 2pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if(DJname14.innerHTML !== "DJ Teal")
                        DJname14.innerHTML = "DJ Teal";
                    if(DJbio14.innerHTML !== "DJ Teal is a DJ who likes to play music.")
                        DJbio14.innerHTML = "DJ Teal is a DJ who likes to play music.";
                    if(DJshowBio14.innerHTML !== "DJ Teal's show is a show where he plays music.")
                        DJshowBio14.innerHTML = "DJ Teal's show is a show where he plays music.";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/10/djTeal.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/10/djTeal.png')";
                    break
                case 15:
                    let text15 = "this works at 3pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if(DJname15.innerHTML !== "DJ Sam")
                        DJname15.innerHTML = "DJ Sam";
                    if(DJbio15.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio15.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio15.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio15.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 16:
                    let text16 = "this works at 4pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if(DJname16.innerHTML !== "DJ Sam")
                        DJname16.innerHTML = "DJ Sam";
                    if(DJbio16.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio16.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio16.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio16.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 17:
                    let text17 = "this works at 5pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if(DJname17.innerHTML !== "DJ Sam")
                        DJname17.innerHTML = "DJ Sam";
                    if(DJbio17.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio17.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio17.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio17.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 18:
                    let text18 = "this works at 6pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if(DJname18.innerHTML !== "DJ Sam")
                        DJname18.innerHTML = "DJ Sam";
                    if(DJbio18.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio18.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio18.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio18.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 19:
                    let text19 = "this works at 7pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if(DJname19.innerHTML !== "DJ Sam")
                        DJname19.innerHTML = "DJ Sam";
                    if(DJbio19.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio19.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio19.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio19.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 20:
                    let text20 = "this works at 8pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if(DJname20.innerHTML !== "DJ Sam")
                        DJname20.innerHTML = "DJ Sam";
                    if(DJbio20.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio20.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio20.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio20.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 21:
                    let text21 = "this works at 9pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if(DJname21.innerHTML !== "DJ Sam")
                        DJname21.innerHTML = "DJ Sam";
                    if(DJbio21.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio21.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio21.innerHTML !== "DJ Sam's show is a show where he plays music.")   
                        DJshowBio21.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 22:
                    let text22 = "this works at 10pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if(DJname22.innerHTML !== "DJ Sam")
                        DJname22.innerHTML = "DJ Sam";
                    if(DJbio22.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio22.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio22.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio22.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 23:
                    let text23 = "this works at 11pm";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if(DJname23.innerHTML !== "DJ Sam")
                        DJname23.innerHTML = "DJ Sam";
                    if(DJbio23.innerHTML !== "DJ Sam is a DJ who likes to play music.")
                        DJbio23.innerHTML = "DJ Sam is a DJ who likes to play music.";
                    if(DJshowBio23.innerHTML !== "DJ Sam's show is a show where he plays music.")
                        DJshowBio23.innerHTML = "DJ Sam's show is a show where he plays music.";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
            } 
            break                                                           

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

