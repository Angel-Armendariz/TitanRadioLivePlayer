// <script type="text/javascript"> 
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
                    let text0 = "Titan Radio";
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
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 1:
                    let text1 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text1)
                        document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo");
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "TR Staff")
                        DJname1.innerHTML = "TR Staff";
                    if(DJbio1.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio1.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio1.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio1.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 2:
                    let text2 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text2)
                        document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo");
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "TR Staff")
                        DJname2.innerHTML = "TR Staff";
                    if(DJbio2.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio2.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio2.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio2.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 3:
                    let text3 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text3)
                        document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");
                    if(DJname3.innerHTML !== "TR Staff")
                        DJname3.innerHTML = "TR Staff";
                    if(DJbio3.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio3.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio3.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio3.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 4:
                    let text4 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text4)
                        document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "TR Staff")
                        DJname4.innerHTML = "TR Staff";
                    if(DJbio4.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio4.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio4.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio4.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 5:
                    let text5 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text5)
                        document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "TR Staff")
                        DJname5.innerHTML = "TR Staff";
                    if(DJbio5.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio5.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio5.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio5.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 6:
                    let text6 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text6)
                        document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "TR Staff")
                        DJname6.innerHTML = "TR Staff";
                    if(DJbio6.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio6.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio6.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio6.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 7:
                    let text7 = "Buckwild's Blanket";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                        document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "Renee 'Buckwild' Buckley")
                        DJname7.innerHTML = "Renee 'Buckwild' Buckley";
                    if(DJbio7.innerHTML !== "Renee 'Buckwild' Buckley works her day job rubbing elbows with the most talented comedians and podcasters at the largest comedy club in the country. Though when she’s not there she’s enjoying Bravo, listening to her favorite podcasts or exploring her Spotify’s discover weekly. After hosting her own news segment on CSUSB’s student station, she found herself with a passion for not just news but radio too.")
                        DJbio7.innerHTML = "Renee 'Buckwild' Buckley works her day job rubbing elbows with the most talented comedians and podcasters at the largest comedy club in the country. Though when she’s not there she’s enjoying Bravo, listening to her favorite podcasts or exploring her Spotify’s discover weekly. After hosting her own news segment on CSUSB’s student station, she found herself with a passion for not just news but radio too.";
                    if(DJshowBio7.innerHTML !== "As a journalism major I love to make sure people are informed on politics, current events and my favorite POP CULTURE!!From the White House to Real Housewives I cover it all, while introducing some of my favorite new songs of the week. Come take a load off and lend an ear with me Renee “Buckwild” Buckley on Buckwilds Blanket.")
                        DJshowBio7.innerHTML = "As a journalism major I love to make sure people are informed on politics, current events and my favorite POP CULTURE!!From the White House to Real Housewives I cover it all, while introducing some of my favorite new songs of the week. Come take a load off and lend an ear with me Renee “Buckwild” Buckley on Buckwilds Blanket.";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break
                case 8:
                    let text8 = "Willowing Hour";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if (DJname8.innerHTML !== "DJ Meadow")
                        DJname8.innerHTML = "DJ Meadow";
                    if (DJbio8.innerHTML !== "Kylee (Kye) Viayra has been involved with music throughout her entire life. She started writing, playing and performing since 11 years old. She is now a music enthusiast who loves to listen to songs on repeat and learn about the overall meaning of the song. She is constantly looking for new music of any and every genre to break down and listen too.  ")
                        DJbio8.innerHTML = "Kylee (Kye) Viayra has been involved with music throughout her entire life. She started writing, playing and performing since 11 years old. She is now a music enthusiast who loves to listen to songs on repeat and learn about the overall meaning of the song. She is constantly looking for new music of any and every genre to break down and listen too.  ";
                    if (DJshowBio8.innerHTML !== "This show would focus on specific albums and songs every week. I would listen to certain songs on the album and break them down for the viewers. Describe theories and ideas based on parts of each song and possibly link them to the artists other songs.")
                        DJshowBio8.innerHTML = "This show would focus on specific albums and songs every week. I would listen to certain songs on the album and break them down for the viewers. Describe theories and ideas based on parts of each song and possibly link them to the artists other songs.";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 9:
                    let text9 = "Fairy Soirée";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text9)
                            document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if (DJname9.innerHTML !== "Linz")
                         DJname9.innerHTML = "Linz";
                    if (DJbio9.innerHTML !== "I wanted to become a DJ because music is something that I love. Sharing my songs is something I’ve been afraid to do but been wanting to finally pursue. I’m always open to listening to new genres and songs, although I always have my personal playlist on a loop.")
                        DJbio9.innerHTML = "I wanted to become a DJ because music is something that I love. Sharing my songs is something I’ve been afraid to do but been wanting to finally pursue. I’m always open to listening to new genres and songs, although I always have my personal playlist on a loop.";
                    if (DJshowBio9.innerHTML !== "Do you tend to daydream whenever you listen to music and create little scenes? If you do that too, then Fairy Daydream is the right fit for you! Feeling small in a big world of music is something everyone experiences, and this show welcomes you!")
                        DJshowBio9.innerHTML = "Do you tend to daydream whenever you listen to music and create little scenes? If you do that too, then Fairy Daydream is the right fit for you! Feeling small in a big world of music is something everyone experiences, and this show welcomes you!";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 10:
                    let text10 = "Team Huddle";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if (DJname10.innerHTML !== "Pey")
                        DJname10.innerHTML = "Pey";
                    if (DJbio10.innerHTML !== "Pey is an ambitious, creative individual who wants nothing more than to create human connections and emote positive energy into the world. She loves trying out new experiences, as well as finding new ways to explore more artistic forms of self expression. Peyton’s goal is to use her passions for film, art, and music to connect with others and build a safe community that is open to all.")
                        DJbio10.innerHTML = "Pey is an ambitious, creative individual who wants nothing more than to create human connections and emote positive energy into the world. She loves trying out new experiences, as well as finding new ways to explore more artistic forms of self expression. Peyton’s goal is to use her passions for film, art, and music to connect with others and build a safe community that is open to all.";
                    if (DJshowBio10.innerHTML !== "o you need more positive energy in your life? From covering current pop culture events to discussing ways to maintain healthy habits in this stress inducing world, Pey is here to host heartfelt, energetic conversations to connect listeners together.")
                        DJshowBio10.innerHTML = "o you need more positive energy in your life? From covering current pop culture events to discussing ways to maintain healthy habits in this stress inducing world, Pey is here to host heartfelt, energetic conversations to connect listeners together.";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 11:
                    let text11 = "Tasty Waves";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if (DJname11.innerHTML !== "Bigaaron100")
                        DJname11.innerHTML = "Bigaaron100";
                    if (DJbio11.innerHTML !== "Bigaaron100 was born inside of a Guitar Center during a forbidden Stairway to Heaven solo. He is not of this world.")
                        DJbio11.innerHTML = "Bigaaron100 was born inside of a Guitar Center during a forbidden Stairway to Heaven solo. He is not of this world.";
                    if (DJshowBio11.innerHTML !== "You want them, we got them, come get them.")
                        DJshowBio11.innerHTML = "You want them, we got them, come get them.";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 12:
                    let text12 = "CSUF Programming";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if(DJname12.innerHTML !== "CSUF")
                        DJname12.innerHTML = "CSUF";
                    if(DJbio12.innerHTML !== "")
                        DJbio12.innerHTML = "";
                    if(DJshowBio12.innerHTML !== "This spot is reserved for CSUF programming, otherwise TR2 will play. This can be either for clubs or campus departments. If you are interested in having your programming on Titan Radio, please contact us at titanradio-gm@fullerton.edu")
                        DJshowBio12.innerHTML = "This spot is reserved for CSUF programming, otherwise TR2 will play. This can be either for clubs or campus departments. If you are interested in having your programming on Titan Radio, please contact us at titanradio-gm@fullerton.edu";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 13:
                    let text13 = "CSUF Programming";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if(DJname13.innerHTML !== "CSUF")
                        DJname13.innerHTML = "CSUF";
                    if(DJbio13.innerHTML !== "")
                        DJbio13.innerHTML = "";
                    if(DJshowBio13.innerHTML !== "This spot is reserved for CSUF programming, otherwise TR2 will play. This can be either for clubs or campus departments. If you are interested in having your programming on Titan Radio, please contact us at titanradio-gm@fullerton.edu")
                        DJshowBio13.innerHTML = "This spot is reserved for CSUF programming, otherwise TR2 will play. This can be either for clubs or campus departments. If you are interested in having your programming on Titan Radio, please contact us at titanradio-gm@fullerton.edu";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 14:
                    let text14 = "CSUF Programming";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if(DJname14.innerHTML !== "CSUF")
                        DJname14.innerHTML = "CSUF";
                    if(DJbio14.innerHTML !== "")
                        DJbio14.innerHTML = "";
                    if(DJshowBio14.innerHTML !== "This spot is reserved for CSUF programming, otherwise TR2 will play. This can be either for clubs or campus departments. If you are interested in having your programming on Titan Radio, please contact us at titanradio-gm@fullerton.edu")
                        DJshowBio14.innerHTML = "This spot is reserved for CSUF programming, otherwise TR2 will play. This can be either for clubs or campus departments. If you are interested in having your programming on Titan Radio, please contact us at titanradio-gm@fullerton.edu";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 15:
                    let text15 = "CSUF Programming";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if(DJname15.innerHTML !== "CSUF")
                        DJname15.innerHTML = "CSUF";
                    if(DJbio15.innerHTML !== "")
                        DJbio15.innerHTML = "";
                    if(DJshowBio15.innerHTML !== "This spot is reserved for CSUF programming, otherwise TR2 will play. This can be either for clubs or campus departments. If you are interested in having your programming on Titan Radio, please contact us at titanradio-gm@fullerton.edu")
                        DJshowBio15.innerHTML = "This spot is reserved for CSUF programming, otherwise TR2 will play. This can be either for clubs or campus departments. If you are interested in having your programming on Titan Radio, please contact us at titanradio-gm@fullerton.edu";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        document.getElementById("DJshowLogo").style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 16:
                    let text16 = "Nic's Mix";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if (DJname16.innerHTML !== "Nic")
                        DJname16.innerHTML = "Nic";
                    if (DJbio16.innerHTML !== "Nic, or nicollette, loves all things music. she’s a singer who finds her sound in dolores o’riordan of the cranberries. she hopes you love indie and rock, because she’s got a whole lot of it!")
                        DJbio16.innerHTML = "Nic, or nicollette, loves all things music. she’s a singer who finds her sound in dolores o’riordan of the cranberries. she hopes you love indie and rock, because she’s got a whole lot of it!";
                    if (DJshowBio16.innerHTML !== "I love music, and I want to share my favorites to the world. so we’re starting with csuf.")
                        DJshowBio16.innerHTML = "I love music, and I want to share my favorites to the world. so we’re starting with csuf.";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 17:
                    let text17 = "Who's on Aux";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if (DJname17.innerHTML !== "Reggie and K8")
                        DJname17.innerHTML = "Reggie and K8";
                    if (DJbio17.innerHTML !== "I love listening and making music. I have a lot of friends who are making music and putting it out there for others to listen. I feel like our generation is using the technology we have at our disposal to create music and share it without having to have a lot of money or having a real studio. With the rise of artists using things like garage band and their phones to create works of art appreciated by so many, it’s important to expand our music collections to include these smaller artists.")
                        DJbio17.innerHTML = "I love listening and making music. I have a lot of friends who are making music and putting it out there for others to listen. I feel like our generation is using the technology we have at our disposal to create music and share it without having to have a lot of money or having a real studio. With the rise of artists using things like garage band and their phones to create works of art appreciated by so many, it’s important to expand our music collections to include these smaller artists.";
                    if (DJshowBio17.innerHTML !== "This show would be a place where people can find new music from artists they might not know about yet. We would spotlight different artists every episode, play some of their music, and interview them on what it’s like first starting out in the music industry. This show would give small artists a chance to gain some listeners as well as give listeners a chance to find a new artist they love.")
                        DJshowBio17.innerHTML = "This show would be a place where people can find new music from artists they might not know about yet. We would spotlight different artists every episode, play some of their music, and interview them on what it’s like first starting out in the music industry. This show would give small artists a chance to gain some listeners as well as give listeners a chance to find a new artist they love.";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                    case 18:
                        let text18 = "annwarps";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text18)
                            document.getElementById("bio").innerHTML = text18;
                        let DJshowLogo18 = document.getElementById("DJshowLogo");
                        let DJname18 = document.getElementById("DJname");
                        let DJbio18 = document.getElementById("DJbio");
                        let DJshowBio18 = document.getElementById("DJshowBio");
                        if (DJname18.innerHTML !== "annwarp")
                            DJname18.innerHTML = "annwarp";
                        if (DJbio18.innerHTML !== "Always looking for a new sound, but appreciative of the roots of a genre. Can dabble in most genres but appreciates electronic and rap the most.")
                            DJbio18.innerHTML = "Always looking for a new sound, but appreciative of the roots of a genre. Can dabble in most genres but appreciates electronic and rap the most.";
                        if (DJshowBio18.innerHTML !== "A mixture of pop, rap, noise and weird stuff.")
                            DJshowBio18.innerHTML = "A mixture of pop, rap, noise and weird stuff.";
                        if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 19:
                        let text19 = "The Kaynéti Show";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text19)
                            document.getElementById("bio").innerHTML = text19;
                        let DJshowLogo19 = document.getElementById("DJshowLogo");
                        let DJname19 = document.getElementById("DJname");
                        let DJbio19 = document.getElementById("DJbio");
                        let DJshowBio19 = document.getElementById("DJshowBio");
                        if (DJname19.innerHTML !== "Kaynéti")
                            DJname19.innerHTML = "Kaynéti";
                        if (DJbio19.innerHTML !== "Kaynéti is a 1st year college student with a big personality, big opinions, and a lot to say. Her unique takes on popular topics and colorful music taste makes for good vibes and an extremely boisterous show!")
                            DJbio19.innerHTML = "Kaynéti is a 1st year college student with a big personality, big opinions, and a lot to say. Her unique takes on popular topics and colorful music taste makes for good vibes and an extremely boisterous show!";
                        if (DJshowBio19.innerHTML !== "A fun silly little show with a fun and silly little girl! On The Kayneti Show, we talk about all kinds of things! From pop culture to politics, there’s something here for everyone. Don’t be afraid to stop by!")
                            DJshowBio19.innerHTML = "A fun silly little show with a fun and silly little girl! On The Kayneti Show, we talk about all kinds of things! From pop culture to politics, there’s something here for everyone. Don’t be afraid to stop by!";
                        if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                        
                    case 20:
                        let text20 = "sprinkle of spanish";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text20)
                            document.getElementById("bio").innerHTML = text20;
                        let DJshowLogo20 = document.getElementById("DJshowLogo");
                        let DJname20 = document.getElementById("DJname");
                        let DJbio20 = document.getElementById("DJbio");
                        let DJshowBio20 = document.getElementById("DJshowBio");
                        if (DJname20.innerHTML !== "DJ VEVO")
                            DJname20.innerHTML = "DJ VEVO";
                        if (DJbio20.innerHTML !== "Fresh to the scene and armed with clean beats to get you time to feel seen. DJ VEVO is ready to bring the spice to the stage!")
                            DJbio20.innerHTML = "Fresh to the scene and armed with clean beats to get you time to feel seen. DJ VEVO is ready to bring the spice to the stage!";
                        if (DJshowBio20.innerHTML !== "The show to get your flow moving like Shakira. It's time to explore feel-good hits that inspire you to keep overachieving. There'll be sounds to take you way back or moments to keep you laid-back.")
                            DJshowBio20.innerHTML = "The show to get your flow moving like Shakira. It's time to explore feel-good hits that inspire you to keep overachieving. There'll be sounds to take you way back or moments to keep you laid-back.";
                        if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;                        
                    case 21:
                        let text21 = "Not A Phase";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text21)
                            document.getElementById("bio").innerHTML = text21;
                        let DJshowLogo21 = document.getElementById("DJshowLogo");
                        let DJname21 = document.getElementById("DJname");
                        let DJbio21 = document.getElementById("DJbio");
                        let DJshowBio21 = document.getElementById("DJshowBio");
                        if (DJname21.innerHTML !== "DJ Anais")
                            DJname21.innerHTML = "DJ Anais";
                        if (DJbio21.innerHTML !== "Growing up attending Warped Tour and local shows, Anais has always adored the sense of community and belonging this music has brought to her and those who enjoy it. Anais is eager to bring this same community and nostalgia to CSUF through her musical picks each week.")
                            DJbio21.innerHTML = "Growing up attending Warped Tour and local shows, Anais has always adored the sense of community and belonging this music has brought to her and those who enjoy it. Anais is eager to bring this same community and nostalgia to CSUF through her musical picks each week.";
                        if (DJshowBio21.innerHTML !== "A show for fans of Post-hardcore, pop-punk, melodic hardcore, hardcore punk, shoegaze, and emo. Current and throwback, it’s not a phase, mom!")
                            DJshowBio21.innerHTML = "A show for fans of Post-hardcore, pop-punk, melodic hardcore, hardcore punk, shoegaze, and emo. Current and throwback, it’s not a phase, mom!";
                        if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                        
                    case 22:
                        let text22 = "A Little to Gone...";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text22)
                            document.getElementById("bio").innerHTML = text22;
                        let DJshowLogo22 = document.getElementById("DJshowLogo");
                        let DJname22 = document.getElementById("DJname");
                        let DJbio22 = document.getElementById("DJbio");
                        let DJshowBio22 = document.getElementById("DJshowBio");
                        if (DJname22.innerHTML !== "DJ GG")
                            DJname22.innerHTML = "DJ GG";
                        if (DJbio22.innerHTML !== "Gone Girl is her persona but Rachel R. is currently a Communications Marketing Major here at CSUF. She can often be described as Outspoken and a little bit eccentric. Her obsession with film makes her quite a bit of a Cinephile. Rachel’s Obsessive behavior towards pop culture and media makes her the perfect fit for 'A Little to Gone..'")
                            DJbio22.innerHTML = "Gone Girl is her persona but Rachel R. is currently a Communications Marketing Major here at CSUF. She can often be described as Outspoken and a little bit eccentric. Her obsession with film makes her quite a bit of a Cinephile. Rachel’s Obsessive behavior towards pop culture and media makes her the perfect fit for 'A Little to Gone..'";
                        if (DJshowBio22.innerHTML !== "Messy, Unorganized, and Complicated. 'A Little to Gone' is the newest show here at Titan Radio that will be your daily fix for messy and complicated pop culture news, media, and movie fix. Each episode will share the latest tea. Share the latest and hottest movie recommendations. And stories that are little too gone from host DJ GG.")
                            DJshowBio22.innerHTML = "Messy, Unorganized, and Complicated. 'A Little to Gone' is the newest show here at Titan Radio that will be your daily fix for messy and complicated pop culture news, media, and movie fix. Each episode will share the latest tea. Share the latest and hottest movie recommendations. And stories that are little too gone from host DJ GG.";
                        if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;                        
                    case 23:
                        let text23 = "Trending Now";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text23)
                            document.getElementById("bio").innerHTML = text23;
                        let DJshowLogo23 = document.getElementById("DJshowLogo");
                        let DJname23 = document.getElementById("DJname");
                        let DJbio23 = document.getElementById("DJbio");
                        let DJshowBio23 = document.getElementById("DJshowBio");
                        if (DJname23.innerHTML !== "Mayrizzle/Mydaaaa")
                            DJname23.innerHTML = "Mayrizzle/Mydaaaa";
                        if (DJbio23.innerHTML !== "FT Student & Worker fighting for her life, but just vibin’. She has been experiencing the full experience of being a commuter, and she sees how sometimes it just isn’t talked about much. Also working as a social media is funsies and a very cool insight she’d like to share. She is funny, stubborn (prob the taurus in her), determined, ambitious, friendly, outgoing and can discuss about anything and everything")
                            DJbio23.innerHTML = "FT Student & Worker fighting for her life, but just vibin’. She has been experiencing the full experience of being a commuter, and she sees how sometimes it just isn’t talked about much. Also working as a social media is funsies and a very cool insight she’d like to share. She is funny, stubborn (prob the taurus in her), determined, ambitious, friendly, outgoing and can discuss about anything and everything";
                        if (DJshowBio23.innerHTML !== "A lil' besties chat. We will talk about the highs and lows of commuting (Parking?!?! I dont even know to park, how am i supposed to avoid 100 other cars now), working, and classes. I'd also talk about work (social media manager) and any pop culture trends. Pop culture trends would even have a guest and little banter on our thoughts and dissecting it and even adding in our lil humor into it.")
                            DJshowBio23.innerHTML = "A lil' besties chat. We will talk about the highs and lows of commuting (Parking?!?! I dont even know to park, how am i supposed to avoid 100 other cars now), working, and classes. I'd also talk about work (social media manager) and any pop culture trends. Pop culture trends would even have a guest and little banter on our thoughts and dissecting it and even adding in our lil humor into it.";
                        if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;                        
            }
            break
        case 1:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "Titan Radio";
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
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 1:
                    let text1 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text1)
                        document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo");
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "TR Staff")
                        DJname1.innerHTML = "TR Staff";
                    if(DJbio1.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio1.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio1.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio1.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 2:
                    let text2 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text2)
                        document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo");
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "TR Staff")
                        DJname2.innerHTML = "TR Staff";
                    if(DJbio2.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio2.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio2.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio2.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 3:
                    let text3 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text3)
                        document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");
                    if(DJname3.innerHTML !== "TR Staff")
                        DJname3.innerHTML = "TR Staff";
                    if(DJbio3.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio3.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio3.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio3.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 4:
                    let text4 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text4)
                        document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "TR Staff")
                        DJname4.innerHTML = "TR Staff";
                    if(DJbio4.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio4.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio4.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio4.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 5:
                    let text5 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text5)
                        document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "TR Staff")
                        DJname5.innerHTML = "TR Staff";
                    if(DJbio5.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio5.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio5.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio5.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 6:
                    let text6 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text6)
                        document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "TR Staff")
                        DJname6.innerHTML = "TR Staff";
                    if(DJbio6.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio6.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio6.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio6.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 7:
                    let text7 = "";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                            document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "")
                        DJname7.innerHTML = "";
                    if(DJbio7.innerHTML !== "")
                            DJbio7.innerHTML = "";
                    if(DJshowBio7.innerHTML !== "")
                        DJshowBio7.innerHTML = "";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break
                case 8:
                    let text8 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if (DJname8.innerHTML !== "")
                        DJname8.innerHTML = "";
                    if (DJbio8.innerHTML !== "")
                        DJbio8.innerHTML = "";
                    if (DJshowBio8.innerHTML !== "")
                        DJshowBio8.innerHTML = "";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                case 9:
                    let text9 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if (DJname9.innerHTML !== "")
                        DJname9.innerHTML = "";
                    if (DJbio9.innerHTML !== "")
                        DJbio9.innerHTML = "";
                    if (DJshowBio9.innerHTML !== "")
                        DJshowBio9.innerHTML = "";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;                            
                case 10:
                    let text10 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if (DJname10.innerHTML !== "")
                        DJname10.innerHTML = "";
                    if (DJbio10.innerHTML !== "")
                        DJbio10.innerHTML = "";
                    if (DJshowBio10.innerHTML !== "")
                        DJshowBio10.innerHTML = "";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 11:
                    let text11 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if (DJname11.innerHTML !== "")
                        DJname11.innerHTML = "";
                    if (DJbio11.innerHTML !== "")
                        DJbio11.innerHTML = "";
                    if (DJshowBio11.innerHTML !== "")
                        DJshowBio11.innerHTML = "";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 12:
                    let text12 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if (DJname12.innerHTML !== "")
                        DJname12.innerHTML = "";
                    if (DJbio12.innerHTML !== "")
                        DJbio12.innerHTML = "";
                    if (DJshowBio12.innerHTML !== "")
                        DJshowBio12.innerHTML = "";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 13:
                    let text13 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if (DJname13.innerHTML !== "")
                        DJname13.innerHTML = "";
                    if (DJbio13.innerHTML !== "")
                        DJbio13.innerHTML = "";
                    if (DJshowBio13.innerHTML !== "")
                        DJshowBio13.innerHTML = "";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;

                case 14:
                    let text14 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if (DJname14.innerHTML !== "")
                        DJname14.innerHTML = "";
                    if (DJbio14.innerHTML !== "")
                        DJbio14.innerHTML = "";
                    if (DJshowBio14.innerHTML !== "")
                        DJshowBio14.innerHTML = "";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 15:
                    let text15 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if (DJname15.innerHTML !== "")
                        DJname15.innerHTML = "";
                    if (DJbio15.innerHTML !== "")
                        DJbio15.innerHTML = "";
                    if (DJshowBio15.innerHTML !== "")
                        DJshowBio15.innerHTML = "";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 16:
                    let text16 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if (DJname16.innerHTML !== "")
                        DJname16.innerHTML = "";
                    if (DJbio16.innerHTML !== "")
                        DJbio16.innerHTML = "";
                    if (DJshowBio16.innerHTML !== "")
                        DJshowBio16.innerHTML = "";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 17:
                    let text17 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if (DJname17.innerHTML !== "")
                        DJname17.innerHTML = "";
                    if (DJbio17.innerHTML !== "")
                        DJbio17.innerHTML = "";
                    if (DJshowBio17.innerHTML !== "")
                        DJshowBio17.innerHTML = "";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 18:
                    let text18 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if (DJname18.innerHTML !== "")
                        DJname18.innerHTML = "";
                    if (DJbio18.innerHTML !== "")
                        DJbio18.innerHTML = "";
                    if (DJshowBio18.innerHTML !== "")
                        DJshowBio18.innerHTML = "";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 19:
                    let text19 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if (DJname19.innerHTML !== "")
                        DJname19.innerHTML = "";
                    if (DJbio19.innerHTML !== "")
                        DJbio19.innerHTML = "";
                    if (DJshowBio19.innerHTML !== "")
                        DJshowBio19.innerHTML = "";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 20:
                    let text20 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if (DJname20.innerHTML !== "")
                        DJname20.innerHTML = "";
                    if (DJbio20.innerHTML !== "")
                        DJbio20.innerHTML = "";
                    if (DJshowBio20.innerHTML !== "")
                        DJshowBio20.innerHTML = "";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                                 
                case 21:
                    let text21 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if (DJname21.innerHTML !== "")
                        DJname21.innerHTML = "";
                    if (DJbio21.innerHTML !== "")
                        DJbio21.innerHTML = "";
                    if (DJshowBio21.innerHTML !== "")
                        DJshowBio21.innerHTML = "";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 22:
                    let text22 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if (DJname22.innerHTML !== "")
                        DJname22.innerHTML = "";
                    if (DJbio22.innerHTML !== "")
                        DJbio22.innerHTML = "";
                    if (DJshowBio22.innerHTML !== "")
                        DJshowBio22.innerHTML = "";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 23:
                    let text23 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if (DJname23.innerHTML !== "")
                        DJname23.innerHTML = "";
                    if (DJbio23.innerHTML !== "")
                        DJbio23.innerHTML = "";
                    if (DJshowBio23.innerHTML !== "")
                        DJshowBio23.innerHTML = "";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;        
            }
            break
        case 2:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "Titan Radio";
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
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 1:
                    let text1 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text1)
                        document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo");
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "TR Staff")
                        DJname1.innerHTML = "TR Staff";
                    if(DJbio1.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio1.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio1.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio1.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 2:
                    let text2 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text2)
                        document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo");
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "TR Staff")
                        DJname2.innerHTML = "TR Staff";
                    if(DJbio2.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio2.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio2.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio2.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 3:
                    let text3 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text3)
                        document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");
                    if(DJname3.innerHTML !== "TR Staff")
                        DJname3.innerHTML = "TR Staff";
                    if(DJbio3.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio3.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio3.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio3.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 4:
                    let text4 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text4)
                        document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "TR Staff")
                        DJname4.innerHTML = "TR Staff";
                    if(DJbio4.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio4.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio4.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio4.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 5:
                    let text5 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text5)
                        document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "TR Staff")
                        DJname5.innerHTML = "TR Staff";
                    if(DJbio5.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio5.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio5.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio5.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 6:
                    let text6 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text6)
                        document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "TR Staff")
                        DJname6.innerHTML = "TR Staff";
                    if(DJbio6.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio6.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio6.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio6.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 7:
                    let text7 = "";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                            document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "")
                        DJname7.innerHTML = "";
                    if(DJbio7.innerHTML !== "")
                            DJbio7.innerHTML = "";
                    if(DJshowBio7.innerHTML !== "")
                        DJshowBio7.innerHTML = "";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break
                case 8:
                    let text8 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if (DJname8.innerHTML !== "")
                        DJname8.innerHTML = "";
                    if (DJbio8.innerHTML !== "")
                        DJbio8.innerHTML = "";
                    if (DJshowBio8.innerHTML !== "")
                        DJshowBio8.innerHTML = "";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                case 9:
                    let text9 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if (DJname9.innerHTML !== "")
                        DJname9.innerHTML = "";
                    if (DJbio9.innerHTML !== "")
                        DJbio9.innerHTML = "";
                    if (DJshowBio9.innerHTML !== "")
                        DJshowBio9.innerHTML = "";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;                            
                case 10:
                    let text10 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if (DJname10.innerHTML !== "")
                        DJname10.innerHTML = "";
                    if (DJbio10.innerHTML !== "")
                        DJbio10.innerHTML = "";
                    if (DJshowBio10.innerHTML !== "")
                        DJshowBio10.innerHTML = "";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 11:
                    let text11 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if (DJname11.innerHTML !== "")
                        DJname11.innerHTML = "";
                    if (DJbio11.innerHTML !== "")
                        DJbio11.innerHTML = "";
                    if (DJshowBio11.innerHTML !== "")
                        DJshowBio11.innerHTML = "";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 12:
                    let text12 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if (DJname12.innerHTML !== "")
                        DJname12.innerHTML = "";
                    if (DJbio12.innerHTML !== "")
                        DJbio12.innerHTML = "";
                    if (DJshowBio12.innerHTML !== "")
                        DJshowBio12.innerHTML = "";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 13:
                    let text13 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if (DJname13.innerHTML !== "")
                        DJname13.innerHTML = "";
                    if (DJbio13.innerHTML !== "")
                        DJbio13.innerHTML = "";
                    if (DJshowBio13.innerHTML !== "")
                        DJshowBio13.innerHTML = "";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;

                case 14:
                    let text14 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if (DJname14.innerHTML !== "")
                        DJname14.innerHTML = "";
                    if (DJbio14.innerHTML !== "")
                        DJbio14.innerHTML = "";
                    if (DJshowBio14.innerHTML !== "")
                        DJshowBio14.innerHTML = "";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 15:
                    let text15 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if (DJname15.innerHTML !== "")
                        DJname15.innerHTML = "";
                    if (DJbio15.innerHTML !== "")
                        DJbio15.innerHTML = "";
                    if (DJshowBio15.innerHTML !== "")
                        DJshowBio15.innerHTML = "";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 16:
                    let text16 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if (DJname16.innerHTML !== "")
                        DJname16.innerHTML = "";
                    if (DJbio16.innerHTML !== "")
                        DJbio16.innerHTML = "";
                    if (DJshowBio16.innerHTML !== "")
                        DJshowBio16.innerHTML = "";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 17:
                    let text17 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if (DJname17.innerHTML !== "")
                        DJname17.innerHTML = "";
                    if (DJbio17.innerHTML !== "")
                        DJbio17.innerHTML = "";
                    if (DJshowBio17.innerHTML !== "")
                        DJshowBio17.innerHTML = "";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 18:
                    let text18 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if (DJname18.innerHTML !== "")
                        DJname18.innerHTML = "";
                    if (DJbio18.innerHTML !== "")
                        DJbio18.innerHTML = "";
                    if (DJshowBio18.innerHTML !== "")
                        DJshowBio18.innerHTML = "";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 19:
                    let text19 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if (DJname19.innerHTML !== "")
                        DJname19.innerHTML = "";
                    if (DJbio19.innerHTML !== "")
                        DJbio19.innerHTML = "";
                    if (DJshowBio19.innerHTML !== "")
                        DJshowBio19.innerHTML = "";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 20:
                    let text20 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if (DJname20.innerHTML !== "")
                        DJname20.innerHTML = "";
                    if (DJbio20.innerHTML !== "")
                        DJbio20.innerHTML = "";
                    if (DJshowBio20.innerHTML !== "")
                        DJshowBio20.innerHTML = "";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                                 
                case 21:
                    let text21 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if (DJname21.innerHTML !== "")
                        DJname21.innerHTML = "";
                    if (DJbio21.innerHTML !== "")
                        DJbio21.innerHTML = "";
                    if (DJshowBio21.innerHTML !== "")
                        DJshowBio21.innerHTML = "";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 22:
                    let text22 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if (DJname22.innerHTML !== "")
                        DJname22.innerHTML = "";
                    if (DJbio22.innerHTML !== "")
                        DJbio22.innerHTML = "";
                    if (DJshowBio22.innerHTML !== "")
                        DJshowBio22.innerHTML = "";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 23:
                    let text23 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if (DJname23.innerHTML !== "")
                        DJname23.innerHTML = "";
                    if (DJbio23.innerHTML !== "")
                        DJbio23.innerHTML = "";
                    if (DJshowBio23.innerHTML !== "")
                        DJshowBio23.innerHTML = "";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;  
            }
            break   
        case 3:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "Titan Radio";
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
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 1:
                    let text1 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text1)
                        document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo");
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "TR Staff")
                        DJname1.innerHTML = "TR Staff";
                    if(DJbio1.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio1.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio1.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio1.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 2:
                    let text2 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text2)
                        document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo");
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "TR Staff")
                        DJname2.innerHTML = "TR Staff";
                    if(DJbio2.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio2.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio2.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio2.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 3:
                    let text3 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text3)
                        document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");
                    if(DJname3.innerHTML !== "TR Staff")
                        DJname3.innerHTML = "TR Staff";
                    if(DJbio3.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio3.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio3.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio3.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 4:
                    let text4 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text4)
                        document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "TR Staff")
                        DJname4.innerHTML = "TR Staff";
                    if(DJbio4.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio4.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio4.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio4.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 5:
                    let text5 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text5)
                        document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "TR Staff")
                        DJname5.innerHTML = "TR Staff";
                    if(DJbio5.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio5.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio5.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio5.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 6:
                    let text6 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text6)
                        document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "TR Staff")
                        DJname6.innerHTML = "TR Staff";
                    if(DJbio6.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio6.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio6.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio6.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 7:
                    let text7 = "";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                            document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "")
                        DJname7.innerHTML = "";
                    if(DJbio7.innerHTML !== "")
                            DJbio7.innerHTML = "";
                    if(DJshowBio7.innerHTML !== "")
                        DJshowBio7.innerHTML = "";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break
                case 8:
                    let text8 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if (DJname8.innerHTML !== "")
                        DJname8.innerHTML = "";
                    if (DJbio8.innerHTML !== "")
                        DJbio8.innerHTML = "";
                    if (DJshowBio8.innerHTML !== "")
                        DJshowBio8.innerHTML = "";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                case 9:
                    let text9 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if (DJname9.innerHTML !== "")
                        DJname9.innerHTML = "";
                    if (DJbio9.innerHTML !== "")
                        DJbio9.innerHTML = "";
                    if (DJshowBio9.innerHTML !== "")
                        DJshowBio9.innerHTML = "";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;                            
                case 10:
                    let text10 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if (DJname10.innerHTML !== "")
                        DJname10.innerHTML = "";
                    if (DJbio10.innerHTML !== "")
                        DJbio10.innerHTML = "";
                    if (DJshowBio10.innerHTML !== "")
                        DJshowBio10.innerHTML = "";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 11:
                    let text11 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if (DJname11.innerHTML !== "")
                        DJname11.innerHTML = "";
                    if (DJbio11.innerHTML !== "")
                        DJbio11.innerHTML = "";
                    if (DJshowBio11.innerHTML !== "")
                        DJshowBio11.innerHTML = "";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 12:
                    let text12 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if (DJname12.innerHTML !== "")
                        DJname12.innerHTML = "";
                    if (DJbio12.innerHTML !== "")
                        DJbio12.innerHTML = "";
                    if (DJshowBio12.innerHTML !== "")
                        DJshowBio12.innerHTML = "";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 13:
                    let text13 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if (DJname13.innerHTML !== "")
                        DJname13.innerHTML = "";
                    if (DJbio13.innerHTML !== "")
                        DJbio13.innerHTML = "";
                    if (DJshowBio13.innerHTML !== "")
                        DJshowBio13.innerHTML = "";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;

                case 14:
                    let text14 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if (DJname14.innerHTML !== "")
                        DJname14.innerHTML = "";
                    if (DJbio14.innerHTML !== "")
                        DJbio14.innerHTML = "";
                    if (DJshowBio14.innerHTML !== "")
                        DJshowBio14.innerHTML = "";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 15:
                    let text15 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if (DJname15.innerHTML !== "")
                        DJname15.innerHTML = "";
                    if (DJbio15.innerHTML !== "")
                        DJbio15.innerHTML = "";
                    if (DJshowBio15.innerHTML !== "")
                        DJshowBio15.innerHTML = "";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 16:
                    let text16 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if (DJname16.innerHTML !== "")
                        DJname16.innerHTML = "";
                    if (DJbio16.innerHTML !== "")
                        DJbio16.innerHTML = "";
                    if (DJshowBio16.innerHTML !== "")
                        DJshowBio16.innerHTML = "";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 17:
                    let text17 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if (DJname17.innerHTML !== "")
                        DJname17.innerHTML = "";
                    if (DJbio17.innerHTML !== "")
                        DJbio17.innerHTML = "";
                    if (DJshowBio17.innerHTML !== "")
                        DJshowBio17.innerHTML = "";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 18:
                    let text18 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if (DJname18.innerHTML !== "")
                        DJname18.innerHTML = "";
                    if (DJbio18.innerHTML !== "")
                        DJbio18.innerHTML = "";
                    if (DJshowBio18.innerHTML !== "")
                        DJshowBio18.innerHTML = "";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 19:
                    let text19 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if (DJname19.innerHTML !== "")
                        DJname19.innerHTML = "";
                    if (DJbio19.innerHTML !== "")
                        DJbio19.innerHTML = "";
                    if (DJshowBio19.innerHTML !== "")
                        DJshowBio19.innerHTML = "";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 20:
                    let text20 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if (DJname20.innerHTML !== "")
                        DJname20.innerHTML = "";
                    if (DJbio20.innerHTML !== "")
                        DJbio20.innerHTML = "";
                    if (DJshowBio20.innerHTML !== "")
                        DJshowBio20.innerHTML = "";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                                 
                case 21:
                    let text21 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if (DJname21.innerHTML !== "")
                        DJname21.innerHTML = "";
                    if (DJbio21.innerHTML !== "")
                        DJbio21.innerHTML = "";
                    if (DJshowBio21.innerHTML !== "")
                        DJshowBio21.innerHTML = "";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 22:
                    let text22 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if (DJname22.innerHTML !== "")
                        DJname22.innerHTML = "";
                    if (DJbio22.innerHTML !== "")
                        DJbio22.innerHTML = "";
                    if (DJshowBio22.innerHTML !== "")
                        DJshowBio22.innerHTML = "";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 23:
                    let text23 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if (DJname23.innerHTML !== "")
                        DJname23.innerHTML = "";
                    if (DJbio23.innerHTML !== "")
                        DJbio23.innerHTML = "";
                    if (DJshowBio23.innerHTML !== "")
                        DJshowBio23.innerHTML = "";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;  
            }
            break
        case 4:
            switch(nextDate.getHours()) {
                case 0:
                    let text0 = "Titan Radio";
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
                    if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 1:
                    let text1 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text1)
                        document.getElementById("bio").innerHTML = text1;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo1 = document.getElementById("DJshowLogo");
                    let DJname1 = document.getElementById("DJname");
                    let DJbio1 = document.getElementById("DJbio");
                    let DJshowBio1 = document.getElementById("DJshowBio");
                    if(DJname1.innerHTML !== "TR Staff")
                        DJname1.innerHTML = "TR Staff";
                    if(DJbio1.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio1.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio1.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio1.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 2:
                    let text2 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text2)
                        document.getElementById("bio").innerHTML = text2;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo2 = document.getElementById("DJshowLogo");
                    let DJname2 = document.getElementById("DJname");
                    let DJbio2 = document.getElementById("DJbio");
                    let DJshowBio2 = document.getElementById("DJshowBio");
                    if(DJname2.innerHTML !== "TR Staff")
                        DJname2.innerHTML = "TR Staff";
                    if(DJbio2.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio2.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio2.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio2.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 3:
                    let text3 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text3)
                        document.getElementById("bio").innerHTML = text3;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo3 = document.getElementById("DJshowLogo");
                    let DJname3 = document.getElementById("DJname");
                    let DJbio3 = document.getElementById("DJbio");
                    let DJshowBio3 = document.getElementById("DJshowBio");
                    if(DJname3.innerHTML !== "TR Staff")
                        DJname3.innerHTML = "TR Staff";
                    if(DJbio3.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio3.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio3.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio3.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 4:
                    let text4 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text4)
                        document.getElementById("bio").innerHTML = text4;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo4 = document.getElementById("DJshowLogo");
                    let DJname4 = document.getElementById("DJname");
                    let DJbio4 = document.getElementById("DJbio");
                    let DJshowBio4 = document.getElementById("DJshowBio");
                    if(DJname4.innerHTML !== "TR Staff")
                        DJname4.innerHTML = "TR Staff";
                    if(DJbio4.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio4.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio4.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio4.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 5:
                    let text5 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text5)
                        document.getElementById("bio").innerHTML = text5;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo5 = document.getElementById("DJshowLogo");
                    let DJname5 = document.getElementById("DJname");
                    let DJbio5 = document.getElementById("DJbio");
                    let DJshowBio5 = document.getElementById("DJshowBio");
                    if(DJname5.innerHTML !== "TR Staff")
                        DJname5.innerHTML = "TR Staff";
                    if(DJbio5.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio5.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio5.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio5.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 6:
                    let text6 = "Titan Radio";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text6)
                        document.getElementById("bio").innerHTML = text6;
                    //change the image to the DJ's image DJshowLogo
                    let DJshowLogo6 = document.getElementById("DJshowLogo");
                    let DJname6 = document.getElementById("DJname");
                    let DJbio6 = document.getElementById("DJbio");
                    let DJshowBio6 = document.getElementById("DJshowBio");
                    if(DJname6.innerHTML !== "TR Staff")
                        DJname6.innerHTML = "TR Staff";
                    if(DJbio6.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio6.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if(DJshowBio6.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                        DJshowBio6.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                    if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                    DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                    break
                case 7:
                    let text7 = "";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                            document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "")
                        DJname7.innerHTML = "";
                    if(DJbio7.innerHTML !== "")
                            DJbio7.innerHTML = "";
                    if(DJshowBio7.innerHTML !== "")
                        DJshowBio7.innerHTML = "";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break
                case 8:
                    let text8 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if (DJname8.innerHTML !== "")
                        DJname8.innerHTML = "";
                    if (DJbio8.innerHTML !== "")
                        DJbio8.innerHTML = "";
                    if (DJshowBio8.innerHTML !== "")
                        DJshowBio8.innerHTML = "";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                case 9:
                    let text9 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if (DJname9.innerHTML !== "")
                        DJname9.innerHTML = "";
                    if (DJbio9.innerHTML !== "")
                        DJbio9.innerHTML = "";
                    if (DJshowBio9.innerHTML !== "")
                        DJshowBio9.innerHTML = "";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;                            
                case 10:
                    let text10 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if (DJname10.innerHTML !== "")
                        DJname10.innerHTML = "";
                    if (DJbio10.innerHTML !== "")
                        DJbio10.innerHTML = "";
                    if (DJshowBio10.innerHTML !== "")
                        DJshowBio10.innerHTML = "";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 11:
                    let text11 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if (DJname11.innerHTML !== "")
                        DJname11.innerHTML = "";
                    if (DJbio11.innerHTML !== "")
                        DJbio11.innerHTML = "";
                    if (DJshowBio11.innerHTML !== "")
                        DJshowBio11.innerHTML = "";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 12:
                    let text12 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if (DJname12.innerHTML !== "")
                        DJname12.innerHTML = "";
                    if (DJbio12.innerHTML !== "")
                        DJbio12.innerHTML = "";
                    if (DJshowBio12.innerHTML !== "")
                        DJshowBio12.innerHTML = "";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 13:
                    let text13 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if (DJname13.innerHTML !== "")
                        DJname13.innerHTML = "";
                    if (DJbio13.innerHTML !== "")
                        DJbio13.innerHTML = "";
                    if (DJshowBio13.innerHTML !== "")
                        DJshowBio13.innerHTML = "";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;

                case 14:
                    let text14 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if (DJname14.innerHTML !== "")
                        DJname14.innerHTML = "";
                    if (DJbio14.innerHTML !== "")
                        DJbio14.innerHTML = "";
                    if (DJshowBio14.innerHTML !== "")
                        DJshowBio14.innerHTML = "";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 15:
                    let text15 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if (DJname15.innerHTML !== "")
                        DJname15.innerHTML = "";
                    if (DJbio15.innerHTML !== "")
                        DJbio15.innerHTML = "";
                    if (DJshowBio15.innerHTML !== "")
                        DJshowBio15.innerHTML = "";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 16:
                    let text16 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if (DJname16.innerHTML !== "")
                        DJname16.innerHTML = "";
                    if (DJbio16.innerHTML !== "")
                        DJbio16.innerHTML = "";
                    if (DJshowBio16.innerHTML !== "")
                        DJshowBio16.innerHTML = "";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 17:
                    let text17 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if (DJname17.innerHTML !== "")
                        DJname17.innerHTML = "";
                    if (DJbio17.innerHTML !== "")
                        DJbio17.innerHTML = "";
                    if (DJshowBio17.innerHTML !== "")
                        DJshowBio17.innerHTML = "";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 18:
                    let text18 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if (DJname18.innerHTML !== "")
                        DJname18.innerHTML = "";
                    if (DJbio18.innerHTML !== "")
                        DJbio18.innerHTML = "";
                    if (DJshowBio18.innerHTML !== "")
                        DJshowBio18.innerHTML = "";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 19:
                    let text19 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if (DJname19.innerHTML !== "")
                        DJname19.innerHTML = "";
                    if (DJbio19.innerHTML !== "")
                        DJbio19.innerHTML = "";
                    if (DJshowBio19.innerHTML !== "")
                        DJshowBio19.innerHTML = "";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 20:
                    let text20 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if (DJname20.innerHTML !== "")
                        DJname20.innerHTML = "";
                    if (DJbio20.innerHTML !== "")
                        DJbio20.innerHTML = "";
                    if (DJshowBio20.innerHTML !== "")
                        DJshowBio20.innerHTML = "";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                                 
                case 21:
                    let text21 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if (DJname21.innerHTML !== "")
                        DJname21.innerHTML = "";
                    if (DJbio21.innerHTML !== "")
                        DJbio21.innerHTML = "";
                    if (DJshowBio21.innerHTML !== "")
                        DJshowBio21.innerHTML = "";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 22:
                    let text22 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if (DJname22.innerHTML !== "")
                        DJname22.innerHTML = "";
                    if (DJbio22.innerHTML !== "")
                        DJbio22.innerHTML = "";
                    if (DJshowBio22.innerHTML !== "")
                        DJshowBio22.innerHTML = "";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 23:
                    let text23 = "";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if (DJname23.innerHTML !== "")
                        DJname23.innerHTML = "";
                    if (DJbio23.innerHTML !== "")
                        DJbio23.innerHTML = "";
                    if (DJshowBio23.innerHTML !== "")
                        DJshowBio23.innerHTML = "";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;  
            }
            break
        case 5:
            switch(nextDate.getHours()) {
                case 0:
                    case 0:
                        let text0 = "Titan Radio";
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
                        if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 1:
                        let text1 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text1)
                            document.getElementById("bio").innerHTML = text1;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo1 = document.getElementById("DJshowLogo");
                        let DJname1 = document.getElementById("DJname");
                        let DJbio1 = document.getElementById("DJbio");
                        let DJshowBio1 = document.getElementById("DJshowBio");
                        if(DJname1.innerHTML !== "TR Staff")
                            DJname1.innerHTML = "TR Staff";
                        if(DJbio1.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio1.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio1.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio1.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 2:
                        let text2 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text2)
                            document.getElementById("bio").innerHTML = text2;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo2 = document.getElementById("DJshowLogo");
                        let DJname2 = document.getElementById("DJname");
                        let DJbio2 = document.getElementById("DJbio");
                        let DJshowBio2 = document.getElementById("DJshowBio");
                        if(DJname2.innerHTML !== "TR Staff")
                            DJname2.innerHTML = "TR Staff";
                        if(DJbio2.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio2.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio2.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio2.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 3:
                        let text3 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text3)
                            document.getElementById("bio").innerHTML = text3;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo3 = document.getElementById("DJshowLogo");
                        let DJname3 = document.getElementById("DJname");
                        let DJbio3 = document.getElementById("DJbio");
                        let DJshowBio3 = document.getElementById("DJshowBio");
                        if(DJname3.innerHTML !== "TR Staff")
                            DJname3.innerHTML = "TR Staff";
                        if(DJbio3.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio3.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio3.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio3.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 4:
                        let text4 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text4)
                            document.getElementById("bio").innerHTML = text4;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo4 = document.getElementById("DJshowLogo");
                        let DJname4 = document.getElementById("DJname");
                        let DJbio4 = document.getElementById("DJbio");
                        let DJshowBio4 = document.getElementById("DJshowBio");
                        if(DJname4.innerHTML !== "TR Staff")
                            DJname4.innerHTML = "TR Staff";
                        if(DJbio4.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio4.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio4.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio4.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 5:
                        let text5 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text5)
                            document.getElementById("bio").innerHTML = text5;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo5 = document.getElementById("DJshowLogo");
                        let DJname5 = document.getElementById("DJname");
                        let DJbio5 = document.getElementById("DJbio");
                        let DJshowBio5 = document.getElementById("DJshowBio");
                        if(DJname5.innerHTML !== "TR Staff")
                            DJname5.innerHTML = "TR Staff";
                        if(DJbio5.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio5.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio5.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio5.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 6:
                        let text6 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text6)
                            document.getElementById("bio").innerHTML = text6;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo6 = document.getElementById("DJshowLogo");
                        let DJname6 = document.getElementById("DJname");
                        let DJbio6 = document.getElementById("DJbio");
                        let DJshowBio6 = document.getElementById("DJshowBio");
                        if(DJname6.innerHTML !== "TR Staff")
                            DJname6.innerHTML = "TR Staff";
                        if(DJbio6.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio6.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio6.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio6.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 7:
                        let text7 = "";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text7)
                                document.getElementById("bio").innerHTML = text7;
                        let DJshowLogo7 = document.getElementById("DJshowLogo");
                        let DJname7 = document.getElementById("DJname");
                        let DJbio7 = document.getElementById("DJbio");
                        let DJshowBio7 = document.getElementById("DJshowBio");  
                        if(DJname7.innerHTML !== "")
                            DJname7.innerHTML = "";
                        if(DJbio7.innerHTML !== "")
                                DJbio7.innerHTML = "";
                        if(DJshowBio7.innerHTML !== "")
                            DJshowBio7.innerHTML = "";
                        if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break
                    case 8:
                        let text8 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text8)
                            document.getElementById("bio").innerHTML = text8;
                        let DJshowLogo8 = document.getElementById("DJshowLogo");
                        let DJname8 = document.getElementById("DJname");
                        let DJbio8 = document.getElementById("DJbio");
                        let DJshowBio8 = document.getElementById("DJshowBio");
                        if (DJname8.innerHTML !== "")
                            DJname8.innerHTML = "";
                        if (DJbio8.innerHTML !== "")
                            DJbio8.innerHTML = "";
                        if (DJshowBio8.innerHTML !== "")
                            DJshowBio8.innerHTML = "";
                        if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    case 9:
                        let text9 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text9)
                            document.getElementById("bio").innerHTML = text9;
                        let DJshowLogo9 = document.getElementById("DJshowLogo");
                        let DJname9 = document.getElementById("DJname");
                        let DJbio9 = document.getElementById("DJbio");
                        let DJshowBio9 = document.getElementById("DJshowBio");
                        if (DJname9.innerHTML !== "")
                            DJname9.innerHTML = "";
                        if (DJbio9.innerHTML !== "")
                            DJbio9.innerHTML = "";
                        if (DJshowBio9.innerHTML !== "")
                            DJshowBio9.innerHTML = "";
                        if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;                            
                    case 10:
                        let text10 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text10)
                            document.getElementById("bio").innerHTML = text10;
                        let DJshowLogo10 = document.getElementById("DJshowLogo");
                        let DJname10 = document.getElementById("DJname");
                        let DJbio10 = document.getElementById("DJbio");
                        let DJshowBio10 = document.getElementById("DJshowBio");
                        if (DJname10.innerHTML !== "")
                            DJname10.innerHTML = "";
                        if (DJbio10.innerHTML !== "")
                            DJbio10.innerHTML = "";
                        if (DJshowBio10.innerHTML !== "")
                            DJshowBio10.innerHTML = "";
                        if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 11:
                        let text11 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text11)
                            document.getElementById("bio").innerHTML = text11;
                        let DJshowLogo11 = document.getElementById("DJshowLogo");
                        let DJname11 = document.getElementById("DJname");
                        let DJbio11 = document.getElementById("DJbio");
                        let DJshowBio11 = document.getElementById("DJshowBio");
                        if (DJname11.innerHTML !== "")
                            DJname11.innerHTML = "";
                        if (DJbio11.innerHTML !== "")
                            DJbio11.innerHTML = "";
                        if (DJshowBio11.innerHTML !== "")
                            DJshowBio11.innerHTML = "";
                        if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 12:
                        let text12 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text12)
                            document.getElementById("bio").innerHTML = text12;
                        let DJshowLogo12 = document.getElementById("DJshowLogo");
                        let DJname12 = document.getElementById("DJname");
                        let DJbio12 = document.getElementById("DJbio");
                        let DJshowBio12 = document.getElementById("DJshowBio");
                        if (DJname12.innerHTML !== "")
                            DJname12.innerHTML = "";
                        if (DJbio12.innerHTML !== "")
                            DJbio12.innerHTML = "";
                        if (DJshowBio12.innerHTML !== "")
                            DJshowBio12.innerHTML = "";
                        if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 13:
                        let text13 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text13)
                            document.getElementById("bio").innerHTML = text13;
                        let DJshowLogo13 = document.getElementById("DJshowLogo");
                        let DJname13 = document.getElementById("DJname");
                        let DJbio13 = document.getElementById("DJbio");
                        let DJshowBio13 = document.getElementById("DJshowBio");
                        if (DJname13.innerHTML !== "")
                            DJname13.innerHTML = "";
                        if (DJbio13.innerHTML !== "")
                            DJbio13.innerHTML = "";
                        if (DJshowBio13.innerHTML !== "")
                            DJshowBio13.innerHTML = "";
                        if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
    
                    case 14:
                        let text14 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text14)
                            document.getElementById("bio").innerHTML = text14;
                        let DJshowLogo14 = document.getElementById("DJshowLogo");
                        let DJname14 = document.getElementById("DJname");
                        let DJbio14 = document.getElementById("DJbio");
                        let DJshowBio14 = document.getElementById("DJshowBio");
                        if (DJname14.innerHTML !== "")
                            DJname14.innerHTML = "";
                        if (DJbio14.innerHTML !== "")
                            DJbio14.innerHTML = "";
                        if (DJshowBio14.innerHTML !== "")
                            DJshowBio14.innerHTML = "";
                        if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 15:
                        let text15 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text15)
                            document.getElementById("bio").innerHTML = text15;
                        let DJshowLogo15 = document.getElementById("DJshowLogo");
                        let DJname15 = document.getElementById("DJname");
                        let DJbio15 = document.getElementById("DJbio");
                        let DJshowBio15 = document.getElementById("DJshowBio");
                        if (DJname15.innerHTML !== "")
                            DJname15.innerHTML = "";
                        if (DJbio15.innerHTML !== "")
                            DJbio15.innerHTML = "";
                        if (DJshowBio15.innerHTML !== "")
                            DJshowBio15.innerHTML = "";
                        if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 16:
                        let text16 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text16)
                            document.getElementById("bio").innerHTML = text16;
                        let DJshowLogo16 = document.getElementById("DJshowLogo");
                        let DJname16 = document.getElementById("DJname");
                        let DJbio16 = document.getElementById("DJbio");
                        let DJshowBio16 = document.getElementById("DJshowBio");
                        if (DJname16.innerHTML !== "")
                            DJname16.innerHTML = "";
                        if (DJbio16.innerHTML !== "")
                            DJbio16.innerHTML = "";
                        if (DJshowBio16.innerHTML !== "")
                            DJshowBio16.innerHTML = "";
                        if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                        
                    case 17:
                        let text17 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text17)
                            document.getElementById("bio").innerHTML = text17;
                        let DJshowLogo17 = document.getElementById("DJshowLogo");
                        let DJname17 = document.getElementById("DJname");
                        let DJbio17 = document.getElementById("DJbio");
                        let DJshowBio17 = document.getElementById("DJshowBio");
                        if (DJname17.innerHTML !== "")
                            DJname17.innerHTML = "";
                        if (DJbio17.innerHTML !== "")
                            DJbio17.innerHTML = "";
                        if (DJshowBio17.innerHTML !== "")
                            DJshowBio17.innerHTML = "";
                        if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 18:
                        let text18 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text18)
                            document.getElementById("bio").innerHTML = text18;
                        let DJshowLogo18 = document.getElementById("DJshowLogo");
                        let DJname18 = document.getElementById("DJname");
                        let DJbio18 = document.getElementById("DJbio");
                        let DJshowBio18 = document.getElementById("DJshowBio");
                        if (DJname18.innerHTML !== "")
                            DJname18.innerHTML = "";
                        if (DJbio18.innerHTML !== "")
                            DJbio18.innerHTML = "";
                        if (DJshowBio18.innerHTML !== "")
                            DJshowBio18.innerHTML = "";
                        if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 19:
                        let text19 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text19)
                            document.getElementById("bio").innerHTML = text19;
                        let DJshowLogo19 = document.getElementById("DJshowLogo");
                        let DJname19 = document.getElementById("DJname");
                        let DJbio19 = document.getElementById("DJbio");
                        let DJshowBio19 = document.getElementById("DJshowBio");
                        if (DJname19.innerHTML !== "")
                            DJname19.innerHTML = "";
                        if (DJbio19.innerHTML !== "")
                            DJbio19.innerHTML = "";
                        if (DJshowBio19.innerHTML !== "")
                            DJshowBio19.innerHTML = "";
                        if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 20:
                        let text20 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text20)
                            document.getElementById("bio").innerHTML = text20;
                        let DJshowLogo20 = document.getElementById("DJshowLogo");
                        let DJname20 = document.getElementById("DJname");
                        let DJbio20 = document.getElementById("DJbio");
                        let DJshowBio20 = document.getElementById("DJshowBio");
                        if (DJname20.innerHTML !== "")
                            DJname20.innerHTML = "";
                        if (DJbio20.innerHTML !== "")
                            DJbio20.innerHTML = "";
                        if (DJshowBio20.innerHTML !== "")
                            DJshowBio20.innerHTML = "";
                        if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                                     
                    case 21:
                        let text21 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text21)
                            document.getElementById("bio").innerHTML = text21;
                        let DJshowLogo21 = document.getElementById("DJshowLogo");
                        let DJname21 = document.getElementById("DJname");
                        let DJbio21 = document.getElementById("DJbio");
                        let DJshowBio21 = document.getElementById("DJshowBio");
                        if (DJname21.innerHTML !== "")
                            DJname21.innerHTML = "";
                        if (DJbio21.innerHTML !== "")
                            DJbio21.innerHTML = "";
                        if (DJshowBio21.innerHTML !== "")
                            DJshowBio21.innerHTML = "";
                        if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 22:
                        let text22 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text22)
                            document.getElementById("bio").innerHTML = text22;
                        let DJshowLogo22 = document.getElementById("DJshowLogo");
                        let DJname22 = document.getElementById("DJname");
                        let DJbio22 = document.getElementById("DJbio");
                        let DJshowBio22 = document.getElementById("DJshowBio");
                        if (DJname22.innerHTML !== "")
                            DJname22.innerHTML = "";
                        if (DJbio22.innerHTML !== "")
                            DJbio22.innerHTML = "";
                        if (DJshowBio22.innerHTML !== "")
                            DJshowBio22.innerHTML = "";
                        if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 23:
                        let text23 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text23)
                            document.getElementById("bio").innerHTML = text23;
                        let DJshowLogo23 = document.getElementById("DJshowLogo");
                        let DJname23 = document.getElementById("DJname");
                        let DJbio23 = document.getElementById("DJbio");
                        let DJshowBio23 = document.getElementById("DJshowBio");
                        if (DJname23.innerHTML !== "")
                            DJname23.innerHTML = "";
                        if (DJbio23.innerHTML !== "")
                            DJbio23.innerHTML = "";
                        if (DJshowBio23.innerHTML !== "")
                            DJshowBio23.innerHTML = "";
                        if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;  
            }
            break
        case 6:
            switch(nextDate.getHours()) {
                case 0:
                    case 0:
                        let text0 = "Titan Radio";
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
                        if (DJshowLogo0.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo0.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 1:
                        let text1 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text1)
                            document.getElementById("bio").innerHTML = text1;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo1 = document.getElementById("DJshowLogo");
                        let DJname1 = document.getElementById("DJname");
                        let DJbio1 = document.getElementById("DJbio");
                        let DJshowBio1 = document.getElementById("DJshowBio");
                        if(DJname1.innerHTML !== "TR Staff")
                            DJname1.innerHTML = "TR Staff";
                        if(DJbio1.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio1.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio1.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio1.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo1.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo1.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 2:
                        let text2 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text2)
                            document.getElementById("bio").innerHTML = text2;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo2 = document.getElementById("DJshowLogo");
                        let DJname2 = document.getElementById("DJname");
                        let DJbio2 = document.getElementById("DJbio");
                        let DJshowBio2 = document.getElementById("DJshowBio");
                        if(DJname2.innerHTML !== "TR Staff")
                            DJname2.innerHTML = "TR Staff";
                        if(DJbio2.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio2.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio2.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio2.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo2.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo2.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 3:
                        let text3 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text3)
                            document.getElementById("bio").innerHTML = text3;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo3 = document.getElementById("DJshowLogo");
                        let DJname3 = document.getElementById("DJname");
                        let DJbio3 = document.getElementById("DJbio");
                        let DJshowBio3 = document.getElementById("DJshowBio");
                        if(DJname3.innerHTML !== "TR Staff")
                            DJname3.innerHTML = "TR Staff";
                        if(DJbio3.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio3.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio3.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio3.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo3.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo3.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 4:
                        let text4 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text4)
                            document.getElementById("bio").innerHTML = text4;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo4 = document.getElementById("DJshowLogo");
                        let DJname4 = document.getElementById("DJname");
                        let DJbio4 = document.getElementById("DJbio");
                        let DJshowBio4 = document.getElementById("DJshowBio");
                        if(DJname4.innerHTML !== "TR Staff")
                            DJname4.innerHTML = "TR Staff";
                        if(DJbio4.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio4.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio4.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio4.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo4.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo4.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 5:
                        let text5 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text5)
                            document.getElementById("bio").innerHTML = text5;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo5 = document.getElementById("DJshowLogo");
                        let DJname5 = document.getElementById("DJname");
                        let DJbio5 = document.getElementById("DJbio");
                        let DJshowBio5 = document.getElementById("DJshowBio");
                        if(DJname5.innerHTML !== "TR Staff")
                            DJname5.innerHTML = "TR Staff";
                        if(DJbio5.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio5.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio5.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio5.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo5.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo5.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 6:
                        let text6 = "Titan Radio";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text6)
                            document.getElementById("bio").innerHTML = text6;
                        //change the image to the DJ's image DJshowLogo
                        let DJshowLogo6 = document.getElementById("DJshowLogo");
                        let DJname6 = document.getElementById("DJname");
                        let DJbio6 = document.getElementById("DJbio");
                        let DJshowBio6 = document.getElementById("DJshowBio");
                        if(DJname6.innerHTML !== "TR Staff")
                            DJname6.innerHTML = "TR Staff";
                        if(DJbio6.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                            DJbio6.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                        if(DJshowBio6.innerHTML !== "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff.")
                            DJshowBio6.innerHTML = "TR2 is like a musical potluck where all the staff brings their favorite songs to share with the listeners. It's a great way to discover new music and learn more about the people behind the station. From classic rock to electronic dance music, the variety of genres is amazing. You never know what you're going to get, but one thing is for sure, it's always good stuff."; 
                        if (DJshowLogo6.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')")
                        DJshowLogo6.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2023/03/vMr9sj74.png')";
                        break
                    case 7:
                        let text7 = "";
                        //change innerHTML of bio to text
                        if(document.getElementById("bio").innerHTML !== text7)
                                document.getElementById("bio").innerHTML = text7;
                        let DJshowLogo7 = document.getElementById("DJshowLogo");
                        let DJname7 = document.getElementById("DJname");
                        let DJbio7 = document.getElementById("DJbio");
                        let DJshowBio7 = document.getElementById("DJshowBio");  
                        if(DJname7.innerHTML !== "")
                            DJname7.innerHTML = "";
                        if(DJbio7.innerHTML !== "")
                                DJbio7.innerHTML = "";
                        if(DJshowBio7.innerHTML !== "")
                            DJshowBio7.innerHTML = "";
                        if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break
                    case 8:
                        let text8 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text8)
                            document.getElementById("bio").innerHTML = text8;
                        let DJshowLogo8 = document.getElementById("DJshowLogo");
                        let DJname8 = document.getElementById("DJname");
                        let DJbio8 = document.getElementById("DJbio");
                        let DJshowBio8 = document.getElementById("DJshowBio");
                        if (DJname8.innerHTML !== "")
                            DJname8.innerHTML = "";
                        if (DJbio8.innerHTML !== "")
                            DJbio8.innerHTML = "";
                        if (DJshowBio8.innerHTML !== "")
                            DJshowBio8.innerHTML = "";
                        if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    case 9:
                        let text9 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text9)
                            document.getElementById("bio").innerHTML = text9;
                        let DJshowLogo9 = document.getElementById("DJshowLogo");
                        let DJname9 = document.getElementById("DJname");
                        let DJbio9 = document.getElementById("DJbio");
                        let DJshowBio9 = document.getElementById("DJshowBio");
                        if (DJname9.innerHTML !== "")
                            DJname9.innerHTML = "";
                        if (DJbio9.innerHTML !== "")
                            DJbio9.innerHTML = "";
                        if (DJshowBio9.innerHTML !== "")
                            DJshowBio9.innerHTML = "";
                        if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;                            
                    case 10:
                        let text10 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text10)
                            document.getElementById("bio").innerHTML = text10;
                        let DJshowLogo10 = document.getElementById("DJshowLogo");
                        let DJname10 = document.getElementById("DJname");
                        let DJbio10 = document.getElementById("DJbio");
                        let DJshowBio10 = document.getElementById("DJshowBio");
                        if (DJname10.innerHTML !== "")
                            DJname10.innerHTML = "";
                        if (DJbio10.innerHTML !== "")
                            DJbio10.innerHTML = "";
                        if (DJshowBio10.innerHTML !== "")
                            DJshowBio10.innerHTML = "";
                        if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 11:
                        let text11 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text11)
                            document.getElementById("bio").innerHTML = text11;
                        let DJshowLogo11 = document.getElementById("DJshowLogo");
                        let DJname11 = document.getElementById("DJname");
                        let DJbio11 = document.getElementById("DJbio");
                        let DJshowBio11 = document.getElementById("DJshowBio");
                        if (DJname11.innerHTML !== "")
                            DJname11.innerHTML = "";
                        if (DJbio11.innerHTML !== "")
                            DJbio11.innerHTML = "";
                        if (DJshowBio11.innerHTML !== "")
                            DJshowBio11.innerHTML = "";
                        if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 12:
                        let text12 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text12)
                            document.getElementById("bio").innerHTML = text12;
                        let DJshowLogo12 = document.getElementById("DJshowLogo");
                        let DJname12 = document.getElementById("DJname");
                        let DJbio12 = document.getElementById("DJbio");
                        let DJshowBio12 = document.getElementById("DJshowBio");
                        if (DJname12.innerHTML !== "")
                            DJname12.innerHTML = "";
                        if (DJbio12.innerHTML !== "")
                            DJbio12.innerHTML = "";
                        if (DJshowBio12.innerHTML !== "")
                            DJshowBio12.innerHTML = "";
                        if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 13:
                        let text13 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text13)
                            document.getElementById("bio").innerHTML = text13;
                        let DJshowLogo13 = document.getElementById("DJshowLogo");
                        let DJname13 = document.getElementById("DJname");
                        let DJbio13 = document.getElementById("DJbio");
                        let DJshowBio13 = document.getElementById("DJshowBio");
                        if (DJname13.innerHTML !== "")
                            DJname13.innerHTML = "";
                        if (DJbio13.innerHTML !== "")
                            DJbio13.innerHTML = "";
                        if (DJshowBio13.innerHTML !== "")
                            DJshowBio13.innerHTML = "";
                        if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
    
                    case 14:
                        let text14 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text14)
                            document.getElementById("bio").innerHTML = text14;
                        let DJshowLogo14 = document.getElementById("DJshowLogo");
                        let DJname14 = document.getElementById("DJname");
                        let DJbio14 = document.getElementById("DJbio");
                        let DJshowBio14 = document.getElementById("DJshowBio");
                        if (DJname14.innerHTML !== "")
                            DJname14.innerHTML = "";
                        if (DJbio14.innerHTML !== "")
                            DJbio14.innerHTML = "";
                        if (DJshowBio14.innerHTML !== "")
                            DJshowBio14.innerHTML = "";
                        if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 15:
                        let text15 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text15)
                            document.getElementById("bio").innerHTML = text15;
                        let DJshowLogo15 = document.getElementById("DJshowLogo");
                        let DJname15 = document.getElementById("DJname");
                        let DJbio15 = document.getElementById("DJbio");
                        let DJshowBio15 = document.getElementById("DJshowBio");
                        if (DJname15.innerHTML !== "")
                            DJname15.innerHTML = "";
                        if (DJbio15.innerHTML !== "")
                            DJbio15.innerHTML = "";
                        if (DJshowBio15.innerHTML !== "")
                            DJshowBio15.innerHTML = "";
                        if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 16:
                        let text16 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text16)
                            document.getElementById("bio").innerHTML = text16;
                        let DJshowLogo16 = document.getElementById("DJshowLogo");
                        let DJname16 = document.getElementById("DJname");
                        let DJbio16 = document.getElementById("DJbio");
                        let DJshowBio16 = document.getElementById("DJshowBio");
                        if (DJname16.innerHTML !== "")
                            DJname16.innerHTML = "";
                        if (DJbio16.innerHTML !== "")
                            DJbio16.innerHTML = "";
                        if (DJshowBio16.innerHTML !== "")
                            DJshowBio16.innerHTML = "";
                        if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                        
                    case 17:
                        let text17 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text17)
                            document.getElementById("bio").innerHTML = text17;
                        let DJshowLogo17 = document.getElementById("DJshowLogo");
                        let DJname17 = document.getElementById("DJname");
                        let DJbio17 = document.getElementById("DJbio");
                        let DJshowBio17 = document.getElementById("DJshowBio");
                        if (DJname17.innerHTML !== "")
                            DJname17.innerHTML = "";
                        if (DJbio17.innerHTML !== "")
                            DJbio17.innerHTML = "";
                        if (DJshowBio17.innerHTML !== "")
                            DJshowBio17.innerHTML = "";
                        if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 18:
                        let text18 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text18)
                            document.getElementById("bio").innerHTML = text18;
                        let DJshowLogo18 = document.getElementById("DJshowLogo");
                        let DJname18 = document.getElementById("DJname");
                        let DJbio18 = document.getElementById("DJbio");
                        let DJshowBio18 = document.getElementById("DJshowBio");
                        if (DJname18.innerHTML !== "")
                            DJname18.innerHTML = "";
                        if (DJbio18.innerHTML !== "")
                            DJbio18.innerHTML = "";
                        if (DJshowBio18.innerHTML !== "")
                            DJshowBio18.innerHTML = "";
                        if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 19:
                        let text19 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text19)
                            document.getElementById("bio").innerHTML = text19;
                        let DJshowLogo19 = document.getElementById("DJshowLogo");
                        let DJname19 = document.getElementById("DJname");
                        let DJbio19 = document.getElementById("DJbio");
                        let DJshowBio19 = document.getElementById("DJshowBio");
                        if (DJname19.innerHTML !== "")
                            DJname19.innerHTML = "";
                        if (DJbio19.innerHTML !== "")
                            DJbio19.innerHTML = "";
                        if (DJshowBio19.innerHTML !== "")
                            DJshowBio19.innerHTML = "";
                        if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 20:
                        let text20 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text20)
                            document.getElementById("bio").innerHTML = text20;
                        let DJshowLogo20 = document.getElementById("DJshowLogo");
                        let DJname20 = document.getElementById("DJname");
                        let DJbio20 = document.getElementById("DJbio");
                        let DJshowBio20 = document.getElementById("DJshowBio");
                        if (DJname20.innerHTML !== "")
                            DJname20.innerHTML = "";
                        if (DJbio20.innerHTML !== "")
                            DJbio20.innerHTML = "";
                        if (DJshowBio20.innerHTML !== "")
                            DJshowBio20.innerHTML = "";
                        if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                                     
                    case 21:
                        let text21 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text21)
                            document.getElementById("bio").innerHTML = text21;
                        let DJshowLogo21 = document.getElementById("DJshowLogo");
                        let DJname21 = document.getElementById("DJname");
                        let DJbio21 = document.getElementById("DJbio");
                        let DJshowBio21 = document.getElementById("DJshowBio");
                        if (DJname21.innerHTML !== "")
                            DJname21.innerHTML = "";
                        if (DJbio21.innerHTML !== "")
                            DJbio21.innerHTML = "";
                        if (DJshowBio21.innerHTML !== "")
                            DJshowBio21.innerHTML = "";
                        if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 22:
                        let text22 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text22)
                            document.getElementById("bio").innerHTML = text22;
                        let DJshowLogo22 = document.getElementById("DJshowLogo");
                        let DJname22 = document.getElementById("DJname");
                        let DJbio22 = document.getElementById("DJbio");
                        let DJshowBio22 = document.getElementById("DJshowBio");
                        if (DJname22.innerHTML !== "")
                            DJname22.innerHTML = "";
                        if (DJbio22.innerHTML !== "")
                            DJbio22.innerHTML = "";
                        if (DJshowBio22.innerHTML !== "")
                            DJshowBio22.innerHTML = "";
                        if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 23:
                        let text23 = "";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text23)
                            document.getElementById("bio").innerHTML = text23;
                        let DJshowLogo23 = document.getElementById("DJshowLogo");
                        let DJname23 = document.getElementById("DJname");
                        let DJbio23 = document.getElementById("DJbio");
                        let DJshowBio23 = document.getElementById("DJshowBio");
                        if (DJname23.innerHTML !== "")
                            DJname23.innerHTML = "";
                        if (DJbio23.innerHTML !== "")
                            DJbio23.innerHTML = "";
                        if (DJshowBio23.innerHTML !== "")
                            DJshowBio23.innerHTML = "";
                        if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;  
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

// </script>
