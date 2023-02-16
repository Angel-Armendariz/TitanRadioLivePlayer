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
                    let text18 = "Izzy's Inner Thoughts";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if(DJname18.innerHTML !== "Izzy")
                        DJname18.innerHTML = "Izzy";
                    if(DJbio18.innerHTML !== "Izzyyyyy")
                        DJbio18.innerHTML = "Izzy is a 4th year majoring in Child and Adolescent Development and minoring in Queer Studies. She is mostly an introverted person and has been trying new things to get themselves out of their comfort zone so being a DJ for Titan Radio is something she knows she would enjoy while also bringing herself closer to being comfortable with speaking with others. Although they can be introverted, they are also a person who loves to speak upon important topics and issues and bring light on things that are often overlooked. She is very passionate about their sexuality, gender identity, culture, and mental health which are topics that she likes to share to help others know that they're not alone.";
                    if(DJshowBio18.innerHTML !== "IzzysShowBio")
                        DJshowBio18.innerHTML = "My show is part podcast where I will be talking about topics related to my last semester CSUF and basically anything I feel like needs to be discussed/shared. I also bring on some friends who are also finishing up their last semester to share our experiences/hardships being a student here at CSUF. My show is also part radio where I will be sharing songs and albums I'm obsessed with and/or that mean something to me that I'd like to share. With it being my last semester, this show is a way for me to reflect the last 4 years of college and share that with other students who are also graduating soon!";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/08/TItan-Radio-Mobile-Logo.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/08/TItan-Radio-Mobile-Logo.png')";
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
                    let text20 = "The Vibe";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if(DJname20.innerHTML !== "OscarNotSkates")
                        DJname20.innerHTML = "OscarNotSkates";
                    if(DJbio20.innerHTML !== "If given the opportunity to DJ, to have a large amount of variety of music to bunk off from one genre to another has always been interesting. One would think that if a person were to DJ that they should stick to one area, but really it should be where everyone gets a bit of everything and even give them a new exposure to music they have never listened to.")
                        DJbio20.innerHTML = "If given the opportunity to DJ, to have a large amount of variety of music to bunk off from one genre to another has always been interesting. One would think that if a person were to DJ that they should stick to one area, but really it should be where everyone gets a bit of everything and even give them a new exposure to music they have never listened to.";
                    if(DJshowBio20.innerHTML !== "Although I'm new to DJing, I know that my variety in music is something that I try to cater to most. From house music, too classical, metal, reggaeton, indie, hip-hop, and much more. Music has always been a huge aspect in my life since I've had family members that would DJ at parties and I would tag along with them as a kid and eventually teaching myself how to play instruments such as the guitar and bass. Music has always been my universal language to not only make connections, but also create new friendships out of it as well.")
                        DJshowBio20.innerHTML = "Although I'm new to DJing, I know that my variety in music is something that I try to cater to most. From house music, too classical, metal, reggaeton, indie, hip-hop, and much more. Music has always been a huge aspect in my life since I've had family members that would DJ at parties and I would tag along with them as a kid and eventually teaching myself how to play instruments such as the guitar and bass. Music has always been my universal language to not only make connections, but also create new friendships out of it as well.";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/08/TItan-Radio-Mobile-Logo.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/08/TItan-Radio-Mobile-Logo.png')";
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
                    let text8 = "Maxxed Out";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if(DJname8.innerHTML !== "Maxx")
                        DJname8.innerHTML = "Maxx";
                    if(DJbio8.innerHTML !== "Maxx is a 3rd year at CSUF. They love discovering new music that matches how they feel. They also love movies and pop culture, so you can expect to hear about what's going on in hollywood while discovering some great songs.")
                        DJbio8.innerHTML = "Maxx is a 3rd year at CSUF. They love discovering new music that matches how they feel. They also love movies and pop culture, so you can expect to hear about what's going on in hollywood while discovering some great songs.";
                    if(DJshowBio8.innerHTML !== "A mix of music that feels like a cozy coffee shop with my thoughts sprinkled between.")
                        DJshowBio8.innerHTML = "A mix of music that feels like a cozy coffee shop with my thoughts sprinkled between.";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 9:
                    let text9 = "Listen Before You Speak";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if(DJname9.innerHTML !== "DJ Zay")
                        DJname9.innerHTML = "DJ Zay";
                    if(DJbio9.innerHTML !== "Isaiah is a quiet soul, he keeps it real and simple. He doesn't try to shine brighter than others, but if there ever was a case for that to happen it would be when he plays his music. Listening to music is what makes him whole.")
                        DJbio9.innerHTML = "Isaiah is a quiet soul, he keeps it real and simple. He doesn't try to shine brighter than others, but if there ever was a case for that to happen it would be when he plays his music. Listening to music is what makes him whole.";
                    if(DJshowBio9.innerHTML !== "This show is all about listening, a lot of times people tend to speak before even sitting down and listening to what they're hearing. I want this show to speak volumes about how important music is and how it has an infinite hold on everybody in the universe.")
                        DJshowBio9.innerHTML = "This show is all about listening, a lot of times people tend to speak before even sitting down and listening to what they're hearing. I want this show to speak volumes about how important music is and how it has an infinite hold on everybody in the universe.";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')")
                    DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/sams-space-DJ-show-logo-2022.jpeg')";
                    break
                case 10:
                    let text10 = "The Chill Pill";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if(DJname10.innerHTML !== "MC²")
                        DJname10.innerHTML = "MC²";
                    if(DJbio10.innerHTML !== "MC² is all chilled out. With his calm and soothing voice he'll take you on eclectic journey though your dreams to explore the many genres of chill electronic music. So come on in, take a chill pill and relax.")
                        DJbio10.innerHTML = "MC² is all chilled out. With his calm and soothing voice he'll take you on eclectic journey though your dreams to explore the many genres of chill electronic music. So come on in, take a chill pill and relax.";
                    if(DJshowBio10.innerHTML !== "Here on the Chill Pill we play all kinds of chill electronic music. From chillsnyth, to chillhop, to pluderphonics, we play it all. Each week I'll also be giving background on artist, as well as showcasing vinyl and music videos.")
                        DJshowBio10.innerHTML = "Here on the Chill Pill we play all kinds of chill electronic music. From chillsnyth, to chillhop, to pluderphonics, we play it all. Each week I'll also be giving background on artist, as well as showcasing vinyl and music videos.";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/chill-pill-DJ-show-logo-2022.jpeg')")
                    DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/chill-pill-DJ-show-logo-2022.jpeg')";
                    break
                case 11:
                    let text11 = "Mawksia";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if(DJname11.innerHTML !== "MIA")
                        DJname11.innerHTML = "MIA";
                    if(DJbio11.innerHTML !== "Mia never grew out of her ,it's not just a phase, mom!, era and still scream lyrics to MCR songs like her life depends on it. Though since her middle school days she has broaden her music taste and listens from the classic Tennessee Whiskey to Tu Cárcel by Los Bukis and enjoys the occasional K-Pop and J-Pop. As awkward as she comes across, Mia hopes to share her unique taste in music to a bigger audience and put small artists on the map with your support.")
                        DJbio11.innerHTML = "Mia never grew out of her ,it's not just a phase, mom!, era and still scream lyrics to MCR songs like her life depends on it. Though since her middle school days she has broaden her music taste and listens from the classic Tennessee Whiskey to Tu Cárcel by Los Bukis and enjoys the occasional K-Pop and J-Pop. As awkward as she comes across, Mia hopes to share her unique taste in music to a bigger audience and put small artists on the map with your support.";
                    if(DJshowBio11.innerHTML !== "It's a proven fact that music affects your mood, expect for this hour you'll be listening to my mood. An hour dedicated to listening to the nostalgic songs for a 2000's kid and the embarrassing guilty-pleasures our parents had us secretly creating a playlist for, I hope you can tune in and try to guess what song will be up next in the queue.")
                        DJshowBio11.innerHTML = "It's a proven fact that music affects your mood, expect for this hour you'll be listening to my mood. An hour dedicated to listening to the nostalgic songs for a 2000's kid and the embarrassing guilty-pleasures our parents had us secretly creating a playlist for, I hope you can tune in and try to guess what song will be up next in the queue.";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/08/TItan-Radio-Mobile-Logo.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/08/TItan-Radio-Mobile-Logo.png')";
                    break
                case 12:
                    let text12 = "Call Your Dad";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if(DJname12.innerHTML !== "Eclaire")
                        DJname12.innerHTML = "Eclaire";
                    if(DJbio12.innerHTML !== "Eclaire is a communications student with a keen interest and appreciation for music. Her dream is to be a successful music artist, but for now hosts a radio hour inspired by the music she heard growing up (with some of her own favorites scrambled in).")
                        DJbio12.innerHTML = "Eclaire is a communications student with a keen interest and appreciation for music. Her dream is to be a successful music artist, but for now hosts a radio hour inspired by the music she heard growing up (with some of her own favorites scrambled in).";
                    if(DJshowBio12.innerHTML !== "Hey! Have you called your dad recently? It's okay, you can just tune into Call Your Dad for your weekly dose of dad music! In other words, an hour of songs inspired by my dad (and whatever I'm listening to).")
                        DJshowBio12.innerHTML = "Hey! Have you called your dad recently? It's okay, you can just tune into Call Your Dad for your weekly dose of dad music! In other words, an hour of songs inspired by my dad (and whatever I'm listening to).";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/call-your-dad-with-eclaire-DJ-show-logo-2022.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/call-your-dad-with-eclaire-DJ-show-logo-2022.jpeg')";
                    break
                case 13:
                    let text13 = "Dabble With Dan";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if(DJname13.innerHTML !== "Dani Gonsales")
                        DJname13.innerHTML = "Dani Gonsales";
                    if(DJbio13.innerHTML !== "Dani Gonsales (they/them) is a second-year Liberal Arts major with a passion for fashion, among other things. They enjoy consuming media in many forms and most importantly can't keep their mouth shut even if you paid them to. These traits make them the perfect person to go rambling on the internet.")
                        DJbio13.innerHTML = "Dani Gonsales (they/them) is a second-year Liberal Arts major with a passion for fashion, among other things. They enjoy consuming media in many forms and most importantly can't keep their mouth shut even if you paid them to. These traits make them the perfect person to go rambling on the internet.";
                    if(DJshowBio13.innerHTML !== "Dabble with Dan is a broadcasted deep dive of my eclectic thoughts, which will often include conversations on pop culture! I'll keep you updated with everything poppin' and accompany it with music that will either set the mood, add interesting commentary, or both.")
                        DJshowBio13.innerHTML = "Dabble with Dan is a broadcasted deep dive of my eclectic thoughts, which will often include conversations on pop culture! I'll keep you updated with everything poppin' and accompany it with music that will either set the mood, add interesting commentary, or both.";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/08/TItan-Radio-Mobile-Logo.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/08/TItan-Radio-Mobile-Logo.png')";
                    break
                case 14:
                    let text14 = "The Good Ol Vibes";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if(DJname14.innerHTML !== "Eddie")
                        DJname14.innerHTML = "Eddie";
                    if(DJbio14.innerHTML !== "The host of this show is Eddie an inspired filmmaker, who is a transfer student from Chaffey College. This spring will be his first semester at Cal State Fullerton, he is majoring in CTVA. On his free time he loves to watch movies and spend time at the beach.")
                        DJbio14.innerHTML = "The host of this show is Eddie an inspired filmmaker, who is a transfer student from Chaffey College. This spring will be his first semester at Cal State Fullerton, he is majoring in CTVA. On his free time he loves to watch movies and spend time at the beach.";
                    if(DJshowBio14.innerHTML !== "The Good Ol' Vibes is a radio show about music you can enjoy in every situation. The show will focus on hip hop/ RnB /Rap. I feel that music can change a person's mood and uplift one when having a bad day.")
                        DJshowBio14.innerHTML = "The Good Ol' Vibes is a radio show about music you can enjoy in every situation. The show will focus on hip hop/ RnB /Rap. I feel that music can change a person's mood and uplift one when having a bad day.";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/08/TItan-Radio-Mobile-Logo.png)")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/08/TItan-Radio-Mobile-Logo.png')";
                    break
                case 15:
                    let text15 = "The Realest Radio Show";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if(DJname15.innerHTML !== "DJ Ari")
                        DJname15.innerHTML = "DJ Ari";
                    if(DJbio15.innerHTML !== "I'm a outgoing and chaotic gemini who loves the entertainment industry. I've always been the type of girl that just puts everything out there and is uniquely myself. I hope that my listeners can connect with me and enjoy listening to whatever I have going on that week.")
                        DJbio15.innerHTML = "I'm a outgoing and chaotic gemini who loves the entertainment industry. I've always been the type of girl that just puts everything out there and is uniquely myself. I hope that my listeners can connect with me and enjoy listening to whatever I have going on that week.";
                    if(DJshowBio15.innerHTML !== "Looking for a scoop on what's hot in the entertainment world? I'm your girl…we will be talking about all things movies, music and tv. Love a little bit of everything? Perfect!!! My music taste is all over the place, so I will have themed music weeks you won't want to miss all on the realest radio show.")
                        DJshowBio15.innerHTML = "Looking for a scoop on what's hot in the entertainment world? I'm your girl…we will be talking about all things movies, music and tv. Love a little bit of everything? Perfect!!! My music taste is all over the place, so I will have themed music weeks you won't want to miss all on the realest radio show.";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/02/TheRealestRadioShowSpring2023.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/02/TheRealestRadioShowSpring2023.jpeg')";
                    break
                case 16:
                    let text16 = "Stay Wavy";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if(DJname16.innerHTML !== "Wavy Baby")
                        DJname16.innerHTML = "Wavy Baby";
                    if(DJbio16.innerHTML !== "Claire is a communications student with a keen interest and appreciation for music. Her dream is to be a successful music artist, but for now hosts a radio hour inspired by the music she heard growing up (with some of her own favorites scrambled in).")
                        DJbio16.innerHTML = "Claire is a communications student with a keen interest and appreciation for music. Her dream is to be a successful music artist, but for now hosts a radio hour inspired by the music she heard growing up (with some of her own favorites scrambled in).";
                    if(DJshowBio16.innerHTML !== "Introducing new, hip music from a wide range of diverse music artists that anyone from anywhere can vibe and connect to. A show where you can STAY WAVY and ride the tide alongside rockin' beats! Tune in with WAVY BABY!")
                        DJshowBio16.innerHTML = "Introducing new, hip music from a wide range of diverse music artists that anyone from anywhere can vibe and connect to. A show where you can STAY WAVY and ride the tide alongside rockin' beats! Tune in with WAVY BABY!";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/02/StayWavySpring2023.jpeg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/02/StayWavySpring2023.jpeg')";
                    break
                case 17:
                    let text17 = "THE FEED";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if(DJname17.innerHTML !== "THE FEED")
                        DJname17.innerHTML = "THE FEED";
                    if(DJbio17.innerHTML !== "DJ Titan Radio.")
                        DJbio17.innerHTML = "DJ Titan Radio.";
                    if(DJshowBio17.innerHTML !== "The Feed.")
                        DJshowBio17.innerHTML = "The Feed.";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/04/untitled_design__1_.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/04/untitled_design__1_.png')";
                    break
                case 18:
                    let text18 = "Ecyce Music";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if(DJname18.innerHTML !== "rin.apa")
                        DJname18.innerHTML = "rin.apa";
                    if(DJbio18.innerHTML !== "rin is coming back for another semester to bring out the best sets ranging from melodic bass to hardstyle edm. Why is he doing this show? Cuz he's doing it for fun and interact with the sickest station on campus.")
                        DJbio18.innerHTML = "rin is coming back for another semester to bring out the best sets ranging from melodic bass to hardstyle edm. Why is he doing this show? Cuz he's doing it for fun and interact with the sickest station on campus.";
                    if(DJshowBio18.innerHTML !== "ECYCE MUSIC is the goto station to listen to or leave on as white noise. The station is known to play EDM and will continue to. It can also branch out to other genres as well as covering various topics.")
                        DJshowBio18.innerHTML = "ECYCE MUSIC is the goto station to listen to or leave on as white noise. The station is known to play EDM and will continue to. It can also branch out to other genres as well as covering various topics.";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/Ecyce-music-DJ-show-logo-2022.jpg')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/Ecyce-music-DJ-show-logo-2022.jpg')";
                    break
                case 19:
                    let text19 = "Titan Radio After Hours";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if(DJname19.innerHTML !== "Julio Reyes")
                        DJname19.innerHTML = "Julio Reyes";
                    if(DJbio19.innerHTML !== "From the desert to the warehouse, join me, Julio Reyes, in bringing you DJs from the underground. Come party with us at the afters that everyone is invited to. The sound from the underground - Titan Radio After Hours.")
                        DJbio19.innerHTML = "From the desert to the warehouse, join me, Julio Reyes, in bringing you DJs from the underground. Come party with us at the afters that everyone is invited to. The sound from the underground - Titan Radio After Hours.";
                    if(DJshowBio19.innerHTML !== "Bringing you live mixes from the best DJs from the underground dance music scene")
                        DJshowBio19.innerHTML = "Bringing you live mixes from the best DJs from the underground dance music scene";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/04/untitled_design__1_.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/04/untitled_design__1_.png')";
                    break
                case 20:
                    let text20 = "Titan Radio After Hours";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if(DJname20.innerHTML !== "Julio Reyes")
                        DJname20.innerHTML = "Julio Reyes";
                    if(DJbio19.innerHTML !== "From the desert to the warehouse, join me, Julio Reyes, in bringing you DJs from the underground. Come party with us at the afters that everyone is invited to. The sound from the underground - Titan Radio After Hours.")
                        DJbio20.innerHTML = "From the desert to the warehouse, join me, Julio Reyes, in bringing you DJs from the underground. Come party with us at the afters that everyone is invited to. The sound from the underground - Titan Radio After Hours.";
                    if(DJshowBio20.innerHTML !== "Bringing you live mixes from the best DJs from the underground dance music scene")
                        DJshowBio20.innerHTML = "Bringing you live mixes from the best DJs from the underground dance music scene";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/04/untitled_design__1_.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/04/untitled_design__1_.png')";
                    break
                case 21:
                    let text21 = "The Void 2.0";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if(DJname21.innerHTML !== "DJ AJ")
                        DJname21.innerHTML = "DJ AJ";
                    if(DJbio21.innerHTML !== "DJ AJ is witty, sarcastic, and will talk about anything under the sun. Some say her music taste is polarizing to her looks but she's just trying her best. She loves anything rock and the occasional j-pop, and if you don't like it please keep that to yourself she's sensitive. Just kidding say it to my face I love drama it'll be good for my show. But anyways DJAJ is as ready as ever to be your favorite DJ.")
                        DJbio21.innerHTML = "DJ AJ is witty, sarcastic, and will talk about anything under the sun. Some say her music taste is polarizing to her looks but she's just trying her best. She loves anything rock and the occasional j-pop, and if you don't like it please keep that to yourself she's sensitive. Just kidding say it to my face I love drama it'll be good for my show. But anyways DJAJ is as ready as ever to be your favorite DJ.";
                    if(DJshowBio21.innerHTML !== "The void that I scream into and play only bangers. Scream with me and enjoy the jams.")   
                        DJshowBio21.innerHTML = "The void that I scream into and play only bangers. Scream with me and enjoy the jams.";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/08/TItan-Radio-Mobile-Logo.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/08/TItan-Radio-Mobile-Logo.png')";
                    break
                case 22:
                    let text22 = "Dreamsort Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if(DJname22.innerHTML !== "DJ Liza")
                        DJname22.innerHTML = "DJ Liza";
                    if(DJbio22.innerHTML !== "Dj liza (known by her stage alias, liza blaise) brings dreamsort radio to you once again to keep up with the latest of internet music. once belonging to the OC punk and shoegaze scene, but also an artist in the eclectic soundcloud underground, she's seen firsthand the rise and evolution of many self-made and driven artists, from names like ethel cain to blackwinterwells. as a vocalist, writer, & producer, she offers a personal and technical selection of these musical kodak moments.")
                        DJbio22.innerHTML = "Dj liza (known by her stage alias, liza blaise) brings dreamsort radio to you once again to keep up with the latest of internet music. once belonging to the OC punk and shoegaze scene, but also an artist in the eclectic soundcloud underground, she's seen firsthand the rise and evolution of many self-made and driven artists, from names like ethel cain to blackwinterwells. as a vocalist, writer, & producer, she offers a personal and technical selection of these musical kodak moments.";
                    if(DJshowBio22.innerHTML !== "it's the underground scene on a personal level- dreamsort works to bring a voice to soundcloud/bandcamp producers and artists in both local and global alternative/indie music scenes, especially queer and or POC artists gaining exposure independently. producer & vocalist liza shows you the newest projects and perspectives of the artists building the future of internet music..")
                        DJshowBio22.innerHTML = "it's the underground scene on a personal level- dreamsort works to bring a voice to soundcloud/bandcamp producers and artists in both local and global alternative/indie music scenes, especially queer and or POC artists gaining exposure independently. producer & vocalist liza shows you the newest projects and perspectives of the artists building the future of internet music.";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/10/dreamsort-radio-DJ-show-logo-2022.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/10/dreamsort-radio-DJ-show-logo-2022.png')";
                    break
                case 23:
                    let text23 = "(adjective noun)";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if(DJname23.innerHTML !== "Dylan Whitaker")
                        DJname23.innerHTML = "Dylan Whitaker";
                    if(DJbio23.innerHTML !== "Dylan is a theatre major who is happy, outgoing, and loves to talk ideas. He has been on a stage many times but is looking forward to dipping his toe into the radio pool and possibly making a splash.")
                        DJbio23.innerHTML = "Dylan is a theatre major who is happy, outgoing, and loves to talk ideas. He has been on a stage many times but is looking forward to dipping his toe into the radio pool and possibly making a splash.";
                    if(DJshowBio23.innerHTML !== "This podcast is a comedy made by two guys about anything and everything. Dylan Whitaker and Dante Hernandez will be discussing music, pop culture, playing games and so much more from the perspective of a college student and a drop out. So come hang with us and laugh a little.")
                        DJshowBio23.innerHTML = "This podcast is a comedy made by two guys about anything and everything. Dylan Whitaker and Dante Hernandez will be discussing music, pop culture, playing games and so much more from the perspective of a college student and a drop out. So come hang with us and laugh a little.";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2022/08/TItan-Radio-Mobile-Logo.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2022/08/TItan-Radio-Mobile-Logo.png')";
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

