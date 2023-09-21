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
                    if (DJshowBio9.innerHTML !== "Do you tend to daydream whenever you listen to music and create little scenes? If you do that too, then Fairy Soirée is the right fit for you! Feeling small in a big world of music is something everyone experiences, and this show welcomes you!")
                        DJshowBio9.innerHTML = "Do you tend to daydream whenever you listen to music and create little scenes? If you do that too, then Fairy Soirée is the right fit for you! Feeling small in a big world of music is something everyone experiences, and this show welcomes you!";
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
                    if (DJshowBio17.innerHTML !== "This show is a place where people can find new music from artists they might not know about yet. We are going to spotlight different artists every episode, play some of their music, and interview them on what it’s like first starting out in the music industry. This show will give small artists a chance to gain some listeners as well as give listeners a chance to find a new artist they love.")
                        DJshowBio17.innerHTML = "This show is a place where people can find new music from artists they might not know about yet. We are going to spotlight different artists every episode, play some of their music, and interview them on what it’s like first starting out in the music industry. This show will give small artists a chance to gain some listeners as well as give listeners a chance to find a new artist they love.";
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
                    let text7 = "Lunch Break";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                            document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "Sabrina")
                        DJname7.innerHTML = "Sabrina";
                    if(DJbio7.innerHTML !== "Sabrina is a fourth year CTVA student with a focus in sound production for film/TV. She enjoys going to concerts throughout California is search of new music. In her free time she enjoys learning new instruments, watching films, and going to the gym.")
                            DJbio7.innerHTML = "Sabrina is a fourth year CTVA student with a focus in sound production for film/TV. She enjoys going to concerts throughout California is search of new music. In her free time she enjoys learning new instruments, watching films, and going to the gym.";
                    if(DJshowBio7.innerHTML !== "Features new music for a variety of listeners open to music such as indie, pop, electronic.")
                        DJshowBio7.innerHTML = "Features new music for a variety of listeners open to music such as indie, pop, electronic.";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break
                case 8:
                    let text8 = "Good News Bears";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if (DJname8.innerHTML !== "Parties Of Mars")
                        DJname8.innerHTML = "Parties Of Mars";
                    if (DJbio8.innerHTML !== "Allan is all about good vibes and stress free environments. He loves all kinds of art and natural beauty, and has a whole bunch of hobbies. The most important thing for him is experiencing new things!")
                        DJbio8.innerHTML = "Allan is all about good vibes and stress free environments. He loves all kinds of art and natural beauty, and has a whole bunch of hobbies. The most important thing for him is experiencing new things!";
                    if (DJshowBio8.innerHTML !== "Good News Bears is all about spreading positivity, good news, and good music! Every time we're on we'll have some good news stories to share so that we can spread some love and positivity for Titans during this stressful semester. Between the good news, we’ll have some good music for titans on early morning Mondays!")
                        DJshowBio8.innerHTML = "Good News Bears is all about spreading positivity, good news, and good music! Every time we're on we'll have some good news stories to share so that we can spread some love and positivity for Titans during this stressful semester. Between the good news, we’ll have some good music for titans on early morning Mondays!";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                case 9:
                    let text9 = "Salted's Jam n Slam";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if (DJname9.innerHTML !== "Salted")
                        DJname9.innerHTML = "Salted";
                    if (DJbio9.innerHTML !== "Salted, the guy with a thousand options and plans and hobbies but can’t decide on a single thing. Hell he couldn’t even decide if he wanted to run a music or sports channel! Whether you wanna laugh, get mad, or vibe on your own, or all at the same time, Salted’s the guy to talk to.")
                        DJbio9.innerHTML = "Salted, the guy with a thousand options and plans and hobbies but can’t decide on a single thing. Hell he couldn’t even decide if he wanted to run a music or sports channel! Whether you wanna laugh, get mad, or vibe on your own, or all at the same time, Salted’s the guy to talk to.";
                    if (DJshowBio9.innerHTML !== "Play a few songs, then in between give baseball updates, or if not bring in a contestant to have a wacky sports-related argument about")
                        DJshowBio9.innerHTML = "Play a few songs, then in between give baseball updates, or if not bring in a contestant to have a wacky sports-related argument about";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;                            
                case 10:
                    let text10 = "Rocking with El Chicano";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if (DJname10.innerHTML !== "Silver Lupe")
                        DJname10.innerHTML = "Silver Lupe";
                    if (DJbio10.innerHTML !== "Silver Lupe grew up listening to oldies and has found passion in the music. His knowledge on the singers and groups of the past is as extensive as the catalog of songs that he knows. Silver Lupe knows the best of the best of the 50s and 60s.")
                        DJbio10.innerHTML = "Silver Lupe grew up listening to oldies and has found passion in the music. His knowledge on the singers and groups of the past is as extensive as the catalog of songs that he knows. Silver Lupe knows the best of the best of the 50s and 60s.";
                    if (DJshowBio10.innerHTML !== "A mix of songs from the 50s and early 60s. Doo wop, rock & roll, and oldies that you won't ever forget. Listeners call in to chat about pop culture from the past in our current generation.")
                        DJshowBio10.innerHTML = "A mix of songs from the 50s and early 60s. Doo wop, rock & roll, and oldies that you won't ever forget. Listeners call in to chat about pop culture from the past in our current generation.";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 11:
                    let text11 = "Indie Encounters";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if (DJname11.innerHTML !== "DJ Raniel")
                        DJname11.innerHTML = "DJ Raniel";
                    if (DJbio11.innerHTML !== "DJ Raniel (RAN-yel) is an aspiring music critic. To him, there’s no such thing as a guilty pleasure. Overall, he loves talking about whatever he’s listening to and wants to share it with others.")
                        DJbio11.innerHTML = "DJ Raniel (RAN-yel) is an aspiring music critic. To him, there’s no such thing as a guilty pleasure. Overall, he loves talking about whatever he’s listening to and wants to share it with others.";
                    if (DJshowBio11.innerHTML !== "A mainly modern mix of indie, alternative, pop and rock. Designed to introduce you to artists you may not have heard before, and hopefully help you get through the day.")
                        DJshowBio11.innerHTML = "A mainly modern mix of indie, alternative, pop and rock. Designed to introduce you to artists you may not have heard before, and hopefully help you get through the day.";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 12:
                    let text12 = "Next Door Neighbor Radio";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if (DJname12.innerHTML !== "Maya Desai")
                        DJname12.innerHTML = "Maya Desai";
                    if (DJbio12.innerHTML !== "Maya Desai is a senior transfer student majoring in Marketing. She hopes to utilize her marketing skills in the love music industry one day to get others as excited about music as she is. Maya has been a diehard Harry Styles fan since 2011 and a lover of music since 2001.")
                        DJbio12.innerHTML = "Maya Desai is a senior transfer student majoring in Marketing. She hopes to utilize her marketing skills in the love music industry one day to get others as excited about music as she is. Maya has been a diehard Harry Styles fan since 2011 and a lover of music since 2001.";
                    if (DJshowBio12.innerHTML !== "Next Door Neighbor Radio brings you music of the manic pixie dream girl next door. You’ll find music ranging from indie pop to alternative to pop rock to straight-up pop. With artists as mainstream as Harry Styles, Taylor Swift, and Phoebe Bridgers to lesser known musicians like Clairo, Ethel Cain, and The National, Next Door Neighbor Radio is here to provide you with the best sounds from the self-proclaimed cool girl’s bedroom.")
                        DJshowBio12.innerHTML = "Next Door Neighbor Radio brings you music of the manic pixie dream girl next door. You’ll find music ranging from indie pop to alternative to pop rock to straight-up pop. With artists as mainstream as Harry Styles, Taylor Swift, and Phoebe Bridgers to lesser known musicians like Clairo, Ethel Cain, and The National, Next Door Neighbor Radio is here to provide you with the best sounds from the self-proclaimed cool girl’s bedroom.";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 13:
                    let text13 = "Vic's VapoRhythms";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if (DJname13.innerHTML !== "DJ v")
                        DJname13.innerHTML = "DJ v";
                    if (DJbio13.innerHTML !== "Dj v is the sole proprietor of Vics VapoRhythm’s. Student by day, ice cream scooper by night. Allergic to peanuts and tree nuts. CDs ok.")
                        DJbio13.innerHTML = "Dj v is the sole proprietor of Vics VapoRhythm’s. Student by day, ice cream scooper by night. Allergic to peanuts and tree nuts. CDs ok.";
                    if (DJshowBio13.innerHTML !== "Let Vic's VapoRhythms invigorate your senses. Take a deep breath and take in this hour of Vics favorite tunes from all genres (from soft and soothing to unsettlingly unsoothing). Active ingredients: 97.4% A good time, 2.6% Menthol")
                        DJshowBio13.innerHTML = "Let Vic's VapoRhythms invigorate your senses. Take a deep breath and take in this hour of Vics favorite tunes from all genres (from soft and soothing to unsettlingly unsoothing). Active ingredients: 97.4% A good time, 2.6% Menthol";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;

                case 14:
                    let text14 = "Docs and Crocs Radio";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if (DJname14.innerHTML !== "Tyler")
                        DJname14.innerHTML = "Tyler";
                    if (DJbio14.innerHTML !== "I think every week his music taste changes a little here and there and it always contributes to whatever he puts on” “Whether it’s new music or something classic I think his music taste is very centered around feeling which really resonates with the listener.")
                        DJbio14.innerHTML = "I think every week his music taste changes a little here and there and it always contributes to whatever he puts on” “Whether it’s new music or something classic I think his music taste is very centered around feeling which really resonates with the listener.";
                    if (DJshowBio14.innerHTML !== "We know you like to listen to a widespread range of music with your mid day cold brew, and sometimes it’s Faye Webster sometimes it’s The Cure, but no matter what the style of sound it is we listen to it because it’s good. So if you want a break from picking through your playlists for just the right song, put us on and we’ll do the picking and choosing for you. Welcome to Docs and Crocs Radio.")
                        DJshowBio14.innerHTML = "We know you like to listen to a widespread range of music with your mid day cold brew, and sometimes it’s Faye Webster sometimes it’s The Cure, but no matter what the style of sound it is we listen to it because it’s good. So if you want a break from picking through your playlists for just the right song, put us on and we’ll do the picking and choosing for you. Welcome to Docs and Crocs Radio.";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 15:
                    let text15 = "Vinyl Vibes";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if (DJname15.innerHTML !== "Macycrafts")
                        DJname15.innerHTML = "Macycrafts";
                    if (DJbio15.innerHTML !== "Macy is in her final year studying earth science. She is a musician and artist who loves to create art and go on adventures in her free time. Her show features physical media that she has collected almost exclusively through thrifting that exemplifies her unique taste ranging from jazz and symphonic to rock and pop.")
                        DJbio15.innerHTML = "Macy is in her final year studying earth science. She is a musician and artist who loves to create art and go on adventures in her free time. Her show features physical media that she has collected almost exclusively through thrifting that exemplifies her unique taste ranging from jazz and symphonic to rock and pop.";
                    if (DJshowBio15.innerHTML !== "Come for the vinyl. Stay for the vibes. This live show is all about physical media and the joys of listening to music that you can hold in your hands. No genres, just vibes.")
                        DJshowBio15.innerHTML = "Come for the vinyl. Stay for the vibes. This live show is all about physical media and the joys of listening to music that you can hold in your hands. No genres, just vibes.";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 16:
                    let text16 = "Ant’s Analytics";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if (DJname16.innerHTML !== "Anthony Manifold")
                        DJname16.innerHTML = "Anthony Manifold";
                    if (DJbio16.innerHTML !== "Anthony Manifold brings a new voice to talk show sports and introduces unique guest interviews.")
                        DJbio16.innerHTML = "Anthony Manifold brings a new voice to talk show sports and introduces unique guest interviews.";
                    if (DJshowBio16.innerHTML !== "Sports talk show")
                        DJshowBio16.innerHTML = "Sports talk show";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 17:
                    let text17 = "The Feed";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if (DJname17.innerHTML !== "TR Staff")
                        DJname17.innerHTML = "TR Staff";
                    if (DJbio17.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio17.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if (DJshowBio17.innerHTML !== "The Feed is a weekly staff segment where you can hear from the staff that support the station! Tune in each week to hear about the staff and what they're up to!")
                        DJshowBio17.innerHTML = "The Feed is a weekly staff segment where you can hear from the staff that support the station! Tune in each week to hear about the staff and what they're up to!";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 18:
                    let text18 = "Recess";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if (DJname18.innerHTML !== "Ari")
                        DJname18.innerHTML = "Ari";
                    if (DJbio18.innerHTML !== "Dj Arianna is the host of Recess which airs on Mondays at 6PM.")
                        DJbio18.innerHTML = "Dj Arianna is the host of Recess which airs on Mondays at 6PM.";
                    if (DJshowBio18.innerHTML !== "Recess airing Mondays at 6pm is my hour to have fun and play whatever music I’m feeling that week.")
                        DJshowBio18.innerHTML = "Recess airing Mondays at 6pm is my hour to have fun and play whatever music I’m feeling that week.";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 19:
                    let text19 = "The Mouse Hole";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if (DJname19.innerHTML !== "DJ Peach Rat")
                        DJname19.innerHTML = "DJ Peach Rat";
                    if (DJbio19.innerHTML !== "DJ Peach Rat not only brings a wide variety of music to his house, but also brings a lot of thoughts and observations about the world. From the mundane to the unique, he always has observations and thoughts that are best said out loud. Life is too short to leave things unheard and unsaid.")
                        DJbio19.innerHTML = "DJ Peach Rat not only brings a wide variety of music to his house, but also brings a lot of thoughts and observations about the world. From the mundane to the unique, he always has observations and thoughts that are best said out loud. Life is too short to leave things unheard and unsaid.";
                    if (DJshowBio19.innerHTML !== "Enjoy a wide variety of genres? Then, walk through the door and enter this hole of musical whiplash, where there's no such thing as a stranger. Come for the music, stay for the thoughts. Everyone's welcome in this little hole.")
                        DJshowBio19.innerHTML = "Enjoy a wide variety of genres? Then, walk through the door and enter this hole of musical whiplash, where there's no such thing as a stranger. Come for the music, stay for the thoughts. Everyone's welcome in this little hole.";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 20:
                    let text20 = "The Jam";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if (DJname20.innerHTML !== "Reagan Gift")
                        DJname20.innerHTML = "Reagan Gift";
                    if (DJbio20.innerHTML !== "Reagan finds herself to be somewhat of a musical nomad. Never sitting in one genre too long, always on the hunt for a new record to call home. Maybe it’s her love for all music, maybe it’s ADD.")
                        DJbio20.innerHTML = "Reagan finds herself to be somewhat of a musical nomad. Never sitting in one genre too long, always on the hunt for a new record to call home. Maybe it’s her love for all music, maybe it’s ADD.";
                    if (DJshowBio20.innerHTML !== "For the self proclaimed musical sponges of the world. R&B, Alternative Rock, Reggae, Indie, Soul, Funk and so much more. Tune into the soundtrack of life.")
                        DJshowBio20.innerHTML = "For the self proclaimed musical sponges of the world. R&B, Alternative Rock, Reggae, Indie, Soul, Funk and so much more. Tune into the soundtrack of life.";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                                 
                case 21:
                    let text21 = "The Kickback Hour";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if (DJname21.innerHTML !== "DJ K")
                        DJname21.innerHTML = "DJ K";
                    if (DJbio21.innerHTML !== "DJ K is a 3rd year Communications Major who enjoys many genres of music. His go to artist is blackbear, but is open to whatever recommendations come his way! He’s also a sociable person and enjoys the company of guests on his show!")
                        DJbio21.innerHTML = "DJ K is a 3rd year Communications Major who enjoys many genres of music. His go to artist is blackbear, but is open to whatever recommendations come his way! He’s also a sociable person and enjoys the company of guests on his show!";
                    if (DJshowBio21.innerHTML !== "The Kickback Hour is a show where all music is welcome! Each week, various genres are played through the episodes. Not only will there be music, but guests are welcome to add their own take on music and chat with DJ K himself about music, their lives, and anything else that comes to mind!")
                        DJshowBio21.innerHTML = "The Kickback Hour is a show where all music is welcome! Each week, various genres are played through the episodes. Not only will there be music, but guests are welcome to add their own take on music and chat with DJ K himself about music, their lives, and anything else that comes to mind!";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 22:
                    let text22 = "The Harrison The Goofball Show";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if (DJname22.innerHTML !== "Harrison The Goofball")
                        DJname22.innerHTML = "Harrison The Goofball";
                    if (DJbio22.innerHTML !== "I am Harrison The Goofball and I am your wacky radio dj. Tune into my show to hear all the best music from the likes of Weird Al, Cheech and Chong, Adam Sandler, and more!")
                        DJbio22.innerHTML = "I am Harrison The Goofball and I am your wacky radio dj. Tune into my show to hear all the best music from the likes of Weird Al, Cheech and Chong, Adam Sandler, and more!";
                    if (DJshowBio22.innerHTML !== "Comedy/novelty songs, bits, skits, and games.")
                        DJshowBio22.innerHTML = "Comedy/novelty songs, bits, skits, and games.";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 23:
                    let text23 = "Brain Damage";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if (DJname23.innerHTML !== "user12151920")
                        DJname23.innerHTML = "user12151920";
                    if (DJbio23.innerHTML !== "user12151920 loves music!!! (she has an unhealthy relationship with anything that makes sound). with her inevitable screaming and crying to the ridiculous number of songs saved onto all of her music streaming apps she hopes to be able to share and appreciate the music she loves with others.")
                        DJbio23.innerHTML = "user12151920 loves music!!! (she has an unhealthy relationship with anything that makes sound). with her inevitable screaming and crying to the ridiculous number of songs saved onto all of her music streaming apps she hopes to be able to share and appreciate the music she loves with others.";
                    if (DJshowBio23.innerHTML !== "music I listen to when I'm staring at my glow in the dark ceiling stars at 3 am - thought vomit and nice noise.")
                        DJshowBio23.innerHTML = "music I listen to when I'm staring at my glow in the dark ceiling stars at 3 am - thought vomit and nice noise.";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;        
            }
            break
        case 2: //TUESDAY
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
                    let text7 = "Wow Time Flew";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                            document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "Wow Waldo")
                        DJname7.innerHTML = "Wow Waldo";
                    if(DJbio7.innerHTML !== "I’m told I have a way with words that pulls people in. Occasionally I’m funny.")
                            DJbio7.innerHTML = "I’m told I have a way with words that pulls people in. Occasionally I’m funny.";
                    if(DJshowBio7.innerHTML !== "I discuss various topics that come to mind: experiences, recent interests, stories and such. Listen if you have spare time.")
                        DJshowBio7.innerHTML = "I discuss various topics that come to mind: experiences, recent interests, stories and such. Listen if you have spare time.";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break
                case 8:
                    let text8 = "The Underground Groove";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if (DJname8.innerHTML !== "PBJ")
                        DJname8.innerHTML = "PBJ";
                    if (DJbio8.innerHTML !== "PBJ is an upcoming street artist based in Santa Ana, whose desire is to share his underground treasures with the world. Some of them are underground, while others are common treasures.")
                        DJbio8.innerHTML = "PBJ is an upcoming street artist based in Santa Ana, whose desire is to share his underground treasures with the world. Some of them are underground, while others are common treasures.";
                    if (DJshowBio8.innerHTML !== "One hour of just pure creative junk that’ll make stay for another hour. *background explosion*")
                        DJshowBio8.innerHTML = "One hour of just pure creative junk that’ll make stay for another hour. *background explosion*";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                case 9:
                    let text9 = "Free party show";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if (DJname9.innerHTML !== "DRYMK")
                        DJname9.innerHTML = "DRYMK";
                    if (DJbio9.innerHTML !== "DRYMK is a French techno dj and music producer from France. He performed mixes and lives at festivals and rave parties in Europe since 4 years. His style blends heavy underground music with remixes from popular international songs.")
                        DJbio9.innerHTML = "DRYMK is a French techno dj and music producer from France. He performed mixes and lives at festivals and rave parties in Europe since 4 years. His style blends heavy underground music with remixes from popular international songs.";
                    if (DJshowBio9.innerHTML !== "I am a French student coming for a few months, sharing the underground electronic music from Europe, as it is pretty much different from the US! Join me in a journey through the endless nights of European rave parties.")
                        DJshowBio9.innerHTML = "I am a French student coming for a few months, sharing the underground electronic music from Europe, as it is pretty much different from the US! Join me in a journey through the endless nights of European rave parties.";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;                            
                case 10:
                    let text10 = "The Morning Show";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if (DJname10.innerHTML !== "Abby Mornhinweg")
                        DJname10.innerHTML = "Abby Mornhinweg";
                    if (DJbio10.innerHTML !== "Abby’s a third-year here at CSUF. An English major with a criminal justice minor, Abby’s college experience brings out what makes The Morning Show great: relatable coming-of-age experiences that a majority of college students go through. When not in the station, Abby’s either reading, writing, listening to music, or drinking coffee.")
                        DJbio10.innerHTML = "Abby’s a third-year here at CSUF. An English major with a criminal justice minor, Abby’s college experience brings out what makes The Morning Show great: relatable coming-of-age experiences that a majority of college students go through. When not in the station, Abby’s either reading, writing, listening to music, or drinking coffee.";
                    if (DJshowBio10.innerHTML !== "Welcome back to the fourth season of The Morning Show!! With interviews, solo episodes, and music shows in this season's line up, tune in live only on Titan Radio 🙂")
                        DJshowBio10.innerHTML = "Welcome back to the fourth season of The Morning Show!! With interviews, solo episodes, and music shows in this season's line up, tune in live only on Titan Radio 🙂";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 11:
                    let text11 = "Complete Mess";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if (DJname11.innerHTML !== "Claire")
                        DJname11.innerHTML = "Claire";
                    if (DJbio11.innerHTML !== "Claire is a fourth year and hopes to work with books or anything pop culture related some day. She goes to as many concerts as her bank account will let her and loves discovering new music.")
                        DJbio11.innerHTML = "Claire is a fourth year and hopes to work with books or anything pop culture related some day. She goes to as many concerts as her bank account will let her and loves discovering new music.";
                    if (DJshowBio11.innerHTML !== "Music drowns out the noise of everything around you and lets you escape from everything. Here, we can escape together and be complete messes with one another.")
                        DJshowBio11.innerHTML = "Music drowns out the noise of everything around you and lets you escape from everything. Here, we can escape together and be complete messes with one another.";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 12:
                    let text12 = "Final Curtain Call";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if (DJname12.innerHTML !== "Dante")
                        DJname12.innerHTML = "Dante";
                    if (DJbio12.innerHTML !== "Hello everyone! My names Dante and for me music is the lifeblood of the soul. So my goal is to share some of my personal favorites hoping you enjoy them too. This is my last semester so here’s to one.. final.. hour")
                        DJbio12.innerHTML = "Hello everyone! My names Dante and for me music is the lifeblood of the soul. So my goal is to share some of my personal favorites hoping you enjoy them too. This is my last semester so here’s to one.. final.. hour";
                    if (DJshowBio12.innerHTML !== "Welcome ladies and gentlemen! Join me on my final semester.. as I take you on a journey through the inner workings of my heart.. expressed to music.")
                        DJshowBio12.innerHTML = "Welcome ladies and gentlemen! Join me on my final semester.. as I take you on a journey through the inner workings of my heart.. expressed to music.";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 13:
                    let text13 = "Webmaster's Wave";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if (DJname13.innerHTML !== "Angel A.")
                        DJname13.innerHTML = "Angel A.";
                    if (DJbio13.innerHTML !== "The guy who makes it all happen. Meet the Webmaster of Titan Radio who keeps the site from blowing up every day just barely. I’ve been at Titan Radio for a year so far and have loved every minute of it. Here for a short time and a bad time. 🙂")
                        DJbio13.innerHTML = "The guy who makes it all happen. Meet the Webmaster of Titan Radio who keeps the site from blowing up every day just barely. I’ve been at Titan Radio for a year so far and have loved every minute of it. Here for a short time and a bad time. 🙂";
                    if (DJshowBio13.innerHTML !== "Just playing some jams and chatting live. Will probably drag in some other staff members for special appearances to liven up the show and bring an hour of Titan Radio Fun.")
                        DJshowBio13.innerHTML = "Just playing some jams and chatting live. Will probably drag in some other staff members for special appearances to liven up the show and bring an hour of Titan Radio Fun.";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;

                case 14:
                    let text14 = "808s and Mixtapes";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if (DJname14.innerHTML !== "Khalil")
                        DJname14.innerHTML = "Khalil";
                    if (DJbio14.innerHTML !== "Well khalils dad is a dj, so i’ve been experienced in djing for my whole life whether that’s just watching or djing on my own. his music taste is pretty diverse whether that’s between genres subgenres, or even time periods.")
                        DJbio14.innerHTML = "Well khalils dad is a dj, so i’ve been experienced in djing for my whole life whether that’s just watching or djing on my own. his music taste is pretty diverse whether that’s between genres subgenres, or even time periods.";
                    if (DJshowBio14.innerHTML !== "I would most likely just do a mix of different tracks for an hour, specifically hip hop. But also house music r&b, dancehall ect.")
                        DJshowBio14.innerHTML = "I would most likely just do a mix of different tracks for an hour, specifically hip hop. But also house music r&b, dancehall ect.";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 15:
                    let text15 = "life with lex";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if (DJname15.innerHTML !== "one lexus")
                        DJname15.innerHTML = "one lexus";
                    if (DJbio15.innerHTML !== "one lexus is a fourth year liberal studies major with an emphasis in elementary education. when not working her research job on-campus, she is most likely blasting music in her car on a drive, playing video games, or attending concerts. lots and lots of concerts.")
                        DJbio15.innerHTML = "one lexus is a fourth year liberal studies major with an emphasis in elementary education. when not working her research job on-campus, she is most likely blasting music in her car on a drive, playing video games, or attending concerts. lots and lots of concerts.";
                    if (DJshowBio15.innerHTML !== "life with lex covers many topics, from my current songs on repeat, one on one interviews with bands apart of the local scene, or rambling about my latest hobbies and interests. my goal with my show is to provide a friendly persona to anyone and everyone who tunes into my shows and learn about the ins and outs of varying music genres and shows.")
                        DJshowBio15.innerHTML = "life with lex covers many topics, from my current songs on repeat, one on one interviews with bands apart of the local scene, or rambling about my latest hobbies and interests. my goal with my show is to provide a friendly persona to anyone and everyone who tunes into my shows and learn about the ins and outs of varying music genres and shows.";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 16:
                    let text16 = "Your Temporary Fix";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if (DJname16.innerHTML !== "DJ ACE")
                        DJname16.innerHTML = "DJ ACE";
                    if (DJbio16.innerHTML !== "DJ ACE is a 2nd year student who enjoys listening to music and attending concerts! She loves discovering new songs and talking about her favorite artists and bands. She hopes to bring some good vibes as a “temporary fix” for all of her listeners!")
                        DJbio16.innerHTML = "DJ ACE is a 2nd year student who enjoys listening to music and attending concerts! She loves discovering new songs and talking about her favorite artists and bands. She hopes to bring some good vibes as a “temporary fix” for all of her listeners!";
                    if (DJshowBio16.innerHTML !== "My show will include a mix of mainly pop and rock music, along with some fun themed shows! Some of my favorite artists include 5 Seconds of Summer, One Direction, Taylor Swift, The Driver Era, Van Halen, and The Go Go’s. Be sure to check out my instagram @yourtemporaryfix.titanradio to discover more!")
                        DJshowBio16.innerHTML = "My show will include a mix of mainly pop and rock music, along with some fun themed shows! Some of my favorite artists include 5 Seconds of Summer, One Direction, Taylor Swift, The Driver Era, Van Halen, and The Go Go’s. Be sure to check out my instagram @yourtemporaryfix.titanradio to discover more!";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 17:
                    let text17 = "The Feed";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if (DJname17.innerHTML !== "TR Staff")
                        DJname17.innerHTML = "TR Staff";
                    if (DJbio17.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio17.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if (DJshowBio17.innerHTML !== "The Feed is a weekly staff segment where you can hear from the staff that support the station! Tune in each week to hear about the staff and what they're up to!")
                        DJshowBio17.innerHTML = "The Feed is a weekly staff segment where you can hear from the staff that support the station! Tune in each week to hear about the staff and what they're up to!";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 18:
                    let text18 = "Resident's Afters";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if (DJname18.innerHTML !== "OneBee")
                        DJname18.innerHTML = "OneBee";
                    if (DJbio18.innerHTML !== "Introduced into the hypnotic beats of trance from her first ever desert rave, and spearheading into the dark warehouses in DTLA, onebee’s goal is to share her love of the arts through different genre changing mixes. life is too short to not try everything that interests you in this life-time…So, as the saying goes, duck it we ball and tune in.")
                        DJbio18.innerHTML = "Introduced into the hypnotic beats of trance from her first ever desert rave, and spearheading into the dark warehouses in DTLA, onebee’s goal is to share her love of the arts through different genre changing mixes. life is too short to not try everything that interests you in this life-time…So, as the saying goes, duck it we ball and tune in.";
                    if (DJshowBio18.innerHTML !== "Genre bending, and always evolving just like people. Bringing in new weekly sounds of deep house, acid techno, and melodic trance with influences from disco to underground warehouse raves.")
                        DJshowBio18.innerHTML = "Genre bending, and always evolving just like people. Bringing in new weekly sounds of deep house, acid techno, and melodic trance with influences from disco to underground warehouse raves.";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 19:
                    let text19 = "From the Dining Table";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if (DJname19.innerHTML !== "Ihdalia")
                        DJname19.innerHTML = "Ihdalia";
                    if (DJbio19.innerHTML !== "Ihdalia loves listening to and expressing herself through all kinds of music. Finding new artists to listen to and share is something she wants to make a habit of on this show.")
                        DJbio19.innerHTML = "Ihdalia loves listening to and expressing herself through all kinds of music. Finding new artists to listen to and share is something she wants to make a habit of on this show.";
                    if (DJshowBio19.innerHTML !== "From the dining table brings music from Ihdalia's dining table to yours! Although you may enjoy the comfortable silence, some say it's overrated! This show brings just the right amount of noise to your dining table, or wherever you choose to listen.")
                        DJshowBio19.innerHTML = "From the dining table brings music from Ihdalia's dining table to yours! Although you may enjoy the comfortable silence, some say it's overrated! This show brings just the right amount of noise to your dining table, or wherever you choose to listen.";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 20:
                    let text20 = "Yara's House (specifically the garden)";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if (DJname20.innerHTML !== "DJ Yara")
                        DJname20.innerHTML = "DJ Yara";
                    if (DJbio20.innerHTML !== "DJ yara is a second year student at CSUF with a love for all kinds of music. She loves exploring different sub-genres of music often but she eventually ends up going back to her comfort artists. Her comfort artists include Harry Styles, Frank Ocean and Kendrick Lamar!")
                        DJbio20.innerHTML = "DJ yara is a second year student at CSUF with a love for all kinds of music. She loves exploring different sub-genres of music often but she eventually ends up going back to her comfort artists. Her comfort artists include Harry Styles, Frank Ocean and Kendrick Lamar!";
                    if (DJshowBio20.innerHTML !== "Music can be so comforting for some people- it can almost make you feel like you’re at home. Join me in my metaphorical house (specifically the garden) to hear music that feels like home!")
                        DJshowBio20.innerHTML = "Music can be so comforting for some people- it can almost make you feel like you’re at home. Join me in my metaphorical house (specifically the garden) to hear music that feels like home!";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                                 
                case 21:
                    let text21 = "Playlisting with Blondie";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if (DJname21.innerHTML !== "DJ Blondie")
                        DJname21.innerHTML = "DJ Blondie";
                    if (DJbio21.innerHTML !== "Sophia is a hardcore music lover and concert enthusiast. She has an extremely wide range taste in music, going from classic rock, to hardcore punk, to funky jazz. She overall loves collecting vinyls, drinking iced vanilla lattes, and talking about upcoming events in town. She plans on working with a record label in production after graduating.")
                        DJbio21.innerHTML = "Sophia is a hardcore music lover and concert enthusiast. She has an extremely wide range taste in music, going from classic rock, to hardcore punk, to funky jazz. She overall loves collecting vinyls, drinking iced vanilla lattes, and talking about upcoming events in town. She plans on working with a record label in production after graduating.";
                    if (DJshowBio21.innerHTML !== "Whether it's local bands from Orange County, or big bands from all around, there's good music everywhere. Playlisting with Blondie is all about experiencing life through music. Playlisting with Blondie brings you a good mix of indie, rock, psychedelic, grunge, punk, and some funk to get you through you day.")
                        DJshowBio21.innerHTML = "Whether it's local bands from Orange County, or big bands from all around, there's good music everywhere. Playlisting with Blondie is all about experiencing life through music. Playlisting with Blondie brings you a good mix of indie, rock, psychedelic, grunge, punk, and some funk to get you through you day.";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 22:
                    let text22 = "La Pupuseria";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if (DJname22.innerHTML !== "DJ Anona")
                        DJname22.innerHTML = "DJ Anona";
                    if (DJbio22.innerHTML !== "DJ Anona is dedicated to exploring all the realms within genres of music. They don’t believe in only defining music taste as one genre but rather bits and pieces of everything. They hope that this will be evident through their show and most importantly enjoy! 🙂")
                        DJbio22.innerHTML = "DJ Anona is dedicated to exploring all the realms within genres of music. They don’t believe in only defining music taste as one genre but rather bits and pieces of everything. They hope that this will be evident through their show and most importantly enjoy! 🙂";
                    if (DJshowBio22.innerHTML !== "La Pupuseria is a big metaphor. I'm in the kitchen (studio) cooking up masa (songs) for my listeners. I hope you will enjoy the pupusas (episodes) that I'll make every week!")
                        DJshowBio22.innerHTML = "La Pupuseria is a big metaphor. I'm in the kitchen (studio) cooking up masa (songs) for my listeners. I hope you will enjoy the pupusas (episodes) that I'll make every week!";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 23:
                    let text23 = "Tabuu's Tracks";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if (DJname23.innerHTML !== "TABUU")
                        DJname23.innerHTML = "TABUU";
                    if (DJbio23.innerHTML !== "DJ TABUU (aka Gabe) tries to keep an open mind when it comes to music. Most people would say their playlists give them “emotional whiplash” as it can play a melancholic “lay in your bed and stare at the ceiling” ballad then escalate to an energetic hardstyle rave track. However, Tabuu believes that an extreme and drastic shift in one’s preferred genre can help to remind audiences that there is more to the world of music than what you choose to consume.")
                        DJbio23.innerHTML = "DJ TABUU (aka Gabe) tries to keep an open mind when it comes to music. Most people would say their playlists give them “emotional whiplash” as it can play a melancholic “lay in your bed and stare at the ceiling” ballad then escalate to an energetic hardstyle rave track. However, Tabuu believes that an extreme and drastic shift in one’s preferred genre can help to remind audiences that there is more to the world of music than what you choose to consume.";
                    if (DJshowBio23.innerHTML !== "Music of varying genres following a specific theme each week. Get ready to either rot in your bed or jump like a madman ^_^")
                        DJshowBio23.innerHTML = "Music of varying genres following a specific theme each week. Get ready to either rot in your bed or jump like a madman ^_^";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;  
            }
            break   
        case 3: //WEDNESDAY
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
                    let text7 = "Cáiganle";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                            document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "Lloshi")
                        DJname7.innerHTML = "Lloshi";
                    if(DJbio7.innerHTML !== "Lloshi has always had a unique passion for music. Granted she doesn’t know how to play a single instrument or has never tried to compose her own song, but she will have a song for any occasion. She’ll play music ranging from top hits to underground songs you’ve never heard of from your favorite Latin artists.")
                            DJbio7.innerHTML = "Lloshi has always had a unique passion for music. Granted she doesn’t know how to play a single instrument or has never tried to compose her own song, but she will have a song for any occasion. She’ll play music ranging from top hits to underground songs you’ve never heard of from your favorite Latin artists.";
                    if(DJshowBio7.innerHTML !== "Tune into this dynamic radio show that brings you the best of both worlds, blending English and Spanish hits seamlessly. From rhythmic reggaeton to catchy pop, a diverse range of music that will most definitely satisfy your taste.")
                        DJshowBio7.innerHTML = "Tune into this dynamic radio show that brings you the best of both worlds, blending English and Spanish hits seamlessly. From rhythmic reggaeton to catchy pop, a diverse range of music that will most definitely satisfy your taste.";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break
                case 8:
                    let text8 = "Lovely Tunes";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if (DJname8.innerHTML !== "Lovely Reduque")
                        DJname8.innerHTML = "Lovely Reduque";
                    if (DJbio8.innerHTML !== "Despite Lovely Reduque’s name, do not be fooled by her persona at first glance! Seeking to not be constrained to a certain label, Lovely finds extreme joy in exploring various music genres and embracing the beauty in individual sounds!")
                        DJbio8.innerHTML = "Despite Lovely Reduque’s name, do not be fooled by her persona at first glance! Seeking to not be constrained to a certain label, Lovely finds extreme joy in exploring various music genres and embracing the beauty in individual sounds!";
                    if (DJshowBio8.innerHTML !== "My show would consist of music from all sorts of different artists, highlighting the diversity of sounds pleasing to the ear. I hope to share music I vibe with and resonate to, as music and supporting musical artists have shaped me into the person I am today! Because of the broadness of music, I seek to emphasize the significance of exploring your own music taste and bringing life to art.")
                        DJshowBio8.innerHTML = "My show would consist of music from all sorts of different artists, highlighting the diversity of sounds pleasing to the ear. I hope to share music I vibe with and resonate to, as music and supporting musical artists have shaped me into the person I am today! Because of the broadness of music, I seek to emphasize the significance of exploring your own music taste and bringing life to art.";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                case 9:
                    let text9 = "Earth 2 Space";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if (DJname9.innerHTML !== "Carla & Cristina")
                        DJname9.innerHTML = "Carla & Cristina";
                    if (DJbio9.innerHTML !== "Carla and Cristina Rivas are different, yet alike. Their passion for music, movies, and good conversation brings them together… most of the time. They grew up together, it can’t all be sunshine and rainbows!")
                        DJbio9.innerHTML = "Carla and Cristina Rivas are different, yet alike. Their passion for music, movies, and good conversation brings them together… most of the time. They grew up together, it can’t all be sunshine and rainbows!";
                    if (DJshowBio9.innerHTML !== "Welcome to Earth to Space! The show where we play and say whatever we're feeling that week. Looking for some cool new music to drown out your thoughts to? Some podcast-style conversation to reel you back into reality? We're the show for you! Join us every week for an eclectic playlist of music and conversation about everything and nothing all at once!")
                        DJshowBio9.innerHTML = "Welcome to Earth to Space! The show where we play and say whatever we're feeling that week. Looking for some cool new music to drown out your thoughts to? Some podcast-style conversation to reel you back into reality? We're the show for you! Join us every week for an eclectic playlist of music and conversation about everything and nothing all at once!";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;                            
                case 10:
                    let text10 = "The Queer Code";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if (DJname10.innerHTML !== "Gabi Angiuli")
                        DJname10.innerHTML = "Gabi Angiuli";
                    if (DJbio10.innerHTML !== "Gabi is a third year here at CSUF, and she is ecstatic to be a Titan Radio DJ for the second time! She’s loved music across all different genres, being inspired by artists like Lucy Dacus to the Cure. They cannot wait to share their favorite tunes with you.")
                        DJbio10.innerHTML = "Gabi is a third year here at CSUF, and she is ecstatic to be a Titan Radio DJ for the second time! She’s loved music across all different genres, being inspired by artists like Lucy Dacus to the Cure. They cannot wait to share their favorite tunes with you.";
                    if (DJshowBio10.innerHTML !== "With passion for LGBTQIA + visibility, The Queer Code explores what it means to be queer through music from many genres. During this show, you’ll hear music from queer artists, queer coded songs and music that is loved by the queer community. You won’t want to miss this opportunity to discover new music from artists of all different identities.")
                        DJshowBio10.innerHTML = "With passion for LGBTQIA + visibility, The Queer Code explores what it means to be queer through music from many genres. During this show, you’ll hear music from queer artists, queer coded songs and music that is loved by the queer community. You won’t want to miss this opportunity to discover new music from artists of all different identities.";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 11:
                    let text11 = "Starstruck Sync";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if (DJname11.innerHTML !== "DJ Barbi")
                        DJname11.innerHTML = "DJ Barbi";
                    if (DJbio11.innerHTML !== "DJ Barbi is a Physics Master’s Student at CSUF. In her free time she keeps with the Kardashians, Taylor Nation, and NANOGrav. Her favorite Nicki Minaj quote is ”I look like ‘yes’ and you like ‘no'”")
                        DJbio11.innerHTML = "DJ Barbi is a Physics Master’s Student at CSUF. In her free time she keeps with the Kardashians, Taylor Nation, and NANOGrav. Her favorite Nicki Minaj quote is ”I look like ‘yes’ and you like ‘no'”";
                    if (DJshowBio11.innerHTML !== "A show where space, pop culture, and musics collide! Tune in to keep up to date for what's happening in the universe, to viral internet phenomena and dynamic events within the music industry! We aim educate and entertain!")
                        DJshowBio11.innerHTML = "A show where space, pop culture, and musics collide! Tune in to keep up to date for what's happening in the universe, to viral internet phenomena and dynamic events within the music industry! We aim educate and entertain!";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 12:
                    let text12 = "Setlist Sound Waves";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if (DJname12.innerHTML !== "DJ Sofia")
                        DJname12.innerHTML = "DJ Sofia";
                    if (DJbio12.innerHTML !== "Sofia’s biggest pleasure in her daily life is music. Last year, she listened to 62k minutes of music on Spotify, and has already attended 15 concerts in 2023. On top of listening to music and attending concerts, she loves to introduce friends and family to new music and artists. Through her radio show, she wants her listeners to understand the feeling of getting to hear your favorite songs live, and make memories and friends that can last a lifetime.")
                        DJbio12.innerHTML = "Sofia’s biggest pleasure in her daily life is music. Last year, she listened to 62k minutes of music on Spotify, and has already attended 15 concerts in 2023. On top of listening to music and attending concerts, she loves to introduce friends and family to new music and artists. Through her radio show, she wants her listeners to understand the feeling of getting to hear your favorite songs live, and make memories and friends that can last a lifetime.";
                    if (DJshowBio12.innerHTML !== "Setlist Sound Waves will give an opportunity for listeners to hear music from indie rock/alternative artists who are currently on tour or scheduled to tour. Ticket sale dates and local venue locations will also be announced. Sofia, your Setlist Sound Waves host, also gives concert tips and reviews on-air.")
                        DJshowBio12.innerHTML = "Setlist Sound Waves will give an opportunity for listeners to hear music from indie rock/alternative artists who are currently on tour or scheduled to tour. Ticket sale dates and local venue locations will also be announced. Sofia, your Setlist Sound Waves host, also gives concert tips and reviews on-air.";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 13:
                    let text13 = "Record Sesh";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if (DJname13.innerHTML !== "Izzy")
                        DJname13.innerHTML = "Izzy";
                    if (DJbio13.innerHTML !== "They are an enthusiastic music lover, exploring orange county’s indie music scene bringing you new music recommendations and information on up and coming events in the area. Trough their unique and broad taste in music, you can find new bands and broaden your musical horizon.")
                        DJbio13.innerHTML = "They are an enthusiastic music lover, exploring orange county’s indie music scene bringing you new music recommendations and information on up and coming events in the area. Trough their unique and broad taste in music, you can find new bands and broaden your musical horizon.";
                    if (DJshowBio13.innerHTML !== "Playing while exploring and sharing information about music events in the orange county area (concert, concert venues, clubs etc). I hope to become your new music discovery stop!")
                        DJshowBio13.innerHTML = "Playing while exploring and sharing information about music events in the orange county area (concert, concert venues, clubs etc). I hope to become your new music discovery stop!";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;

                case 14:
                    let text14 = "Behind The Waves";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if (DJname14.innerHTML !== "Antoine G")
                        DJname14.innerHTML = "Antoine G";
                    if (DJbio14.innerHTML !== "Antoine is a French guitarist, saxophonist but first and foremost a music lover. His playlist of thousands songs from (almost)every era and every continent takes half the storage of his laptop. He played with professional musicians in a jazz Big Band and currently has its band in his college in France. He’s here to share what he loves about music: groove, emotion and storytelling ! And all this with a little bit of French accent 😉")
                        DJbio14.innerHTML = "Antoine is a French guitarist, saxophonist but first and foremost a music lover. His playlist of thousands songs from (almost)every era and every continent takes half the storage of his laptop. He played with professional musicians in a jazz Big Band and currently has its band in his college in France. He’s here to share what he loves about music: groove, emotion and storytelling ! And all this with a little bit of French accent 😉";
                    if (DJshowBio14.innerHTML !== "A French ear sharing a song or artist with its story. Come and join me on journey to discover hidden gems from many different genres and from all around the world ! This show is all about making people discover new music and learning anecdotes about the making of a song !")
                        DJshowBio14.innerHTML = "A French ear sharing a song or artist with its story. Come and join me on journey to discover hidden gems from many different genres and from all around the world ! This show is all about making people discover new music and learning anecdotes about the making of a song !";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 15:
                    let text15 = "Eavesdrop";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if (DJname15.innerHTML !== "DJ E")
                        DJname15.innerHTML = "DJ E";
                    if (DJbio15.innerHTML !== "I feel like I have a wide variety of music taste and genres that I’m constantly rotating between.")
                        DJbio15.innerHTML = "I feel like I have a wide variety of music taste and genres that I’m constantly rotating between.";
                    if (DJshowBio15.innerHTML !== "Whatever I want to play 🙂 eavesdrop on what I’d be listening to whether you’re there or not.")
                        DJshowBio15.innerHTML = "Whatever I want to play 🙂 eavesdrop on what I’d be listening to whether you’re there or not.";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 16:
                    let text16 = "Garden Radio";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if (DJname16.innerHTML !== "Viri")
                        DJname16.innerHTML = "Viri";
                    if (DJbio16.innerHTML !== "Venturer of new music, vidward has always made it a goal to explore different genres and artists. Google is her friend, as she looks up the lyrics to every song she finds to try to understand what the hell is being said, or what story is being told.")
                        DJbio16.innerHTML = "Venturer of new music, vidward has always made it a goal to explore different genres and artists. Google is her friend, as she looks up the lyrics to every song she finds to try to understand what the hell is being said, or what story is being told.";
                    if (DJshowBio16.innerHTML !== "In depth music commentary and analysis on the technicalities musicians incorporate in their music. This show will dig into the meanings of songs that may be overlooked, as well as introducing smaller artists that deserve recognition.")
                        DJshowBio16.innerHTML = "In depth music commentary and analysis on the technicalities musicians incorporate in their music. This show will dig into the meanings of songs that may be overlooked, as well as introducing smaller artists that deserve recognition.";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 17:
                    let text17 = "The Feed";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if (DJname17.innerHTML !== "TR Staff")
                        DJname17.innerHTML = "TR Staff";
                    if (DJbio17.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio17.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if (DJshowBio17.innerHTML !== "The Feed is a weekly staff segment where you can hear from the staff that support the station! Tune in each week to hear about the staff and what they're up to!")
                        DJshowBio17.innerHTML = "The Feed is a weekly staff segment where you can hear from the staff that support the station! Tune in each week to hear about the staff and what they're up to!";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 18:
                    let text18 = "Commercial Break";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if (DJname18.innerHTML !== "Bashcash")
                        DJname18.innerHTML = "Bashcash";
                    if (DJbio18.innerHTML !== "")
                        DJbio18.innerHTML = "";
                    if (DJshowBio18.innerHTML !== "")
                        DJshowBio18.innerHTML = "";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 19:
                    let text19 = "Drop the Playlist";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if (DJname19.innerHTML !== "Lyss")
                        DJname19.innerHTML = "Lyss";
                    if (DJbio19.innerHTML !== "Dj Lyss is a Samoan artist from Carson, CA and has always been interested in all things creative. From painting and sketches, to photography and jewelry making, Lyss loves to delve into it all. Lyss loves to chat, and would love to connect with all listeners interested.")
                        DJbio19.innerHTML = "Dj Lyss is a Samoan artist from Carson, CA and has always been interested in all things creative. From painting and sketches, to photography and jewelry making, Lyss loves to delve into it all. Lyss loves to chat, and would love to connect with all listeners interested.";
                    if (DJshowBio19.innerHTML !== "My show is for all the shazam warriors who need music recommendations, but feel awkward asking. I drop a playlist every week to introduce more music of all genres to my listeners. In the past I've played tons of 90's-00's R&B, Island Reggae, Punk/Alt, and all eras of Hip-Hop. This is a comforting and chill show for all to enjoy and be a part of.")
                        DJshowBio19.innerHTML = "My show is for all the shazam warriors who need music recommendations, but feel awkward asking. I drop a playlist every week to introduce more music of all genres to my listeners. In the past I've played tons of 90's-00's R&B, Island Reggae, Punk/Alt, and all eras of Hip-Hop. This is a comforting and chill show for all to enjoy and be a part of.";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 20:
                    let text20 = "The Dean's List";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if (DJname20.innerHTML !== "Dr. Dean")
                        DJname20.innerHTML = "Dr. Dean";
                    if (DJbio20.innerHTML !== "Dr. Dean is an amateur radio host who has the biggest brain in the world and the best taste in music and also millions of dollars. He is majoring in cinema aka the most academically intensive subject possible because again he’s just so smart.")
                        DJbio20.innerHTML = "Dr. Dean is an amateur radio host who has the biggest brain in the world and the best taste in music and also millions of dollars. He is majoring in cinema aka the most academically intensive subject possible because again he’s just so smart.";
                    if (DJshowBio20.innerHTML !== "The Dean’s List presents an hour of delightful musical whiplash for anyone who feels so inclined to tune in. Between hip hop, indie, R&B, pop, rock, electronic, and who knows what else, from smash hits to hidden gems, nothing is off limits.")
                        DJshowBio20.innerHTML = "The Dean’s List presents an hour of delightful musical whiplash for anyone who feels so inclined to tune in. Between hip hop, indie, R&B, pop, rock, electronic, and who knows what else, from smash hits to hidden gems, nothing is off limits.";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                                 
                case 21:
                    let text21 = "Living Well with TitanWELL";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if (DJname21.innerHTML !== "TitanWELL")
                        DJname21.innerHTML = "TitanWELL";
                    if (DJbio21.innerHTML !== "")
                        DJbio21.innerHTML = "";
                    if (DJshowBio21.innerHTML !== "This spot is reserved for CSUF programming, otherwise TR2 will play. This can be either for clubs or campus departments. If you are interested in having your programming on Titan Radio, please contact us at titanradio-gm@fullerton.edu")
                        DJshowBio21.innerHTML = "This spot is reserved for CSUF programming, otherwise TR2 will play. This can be either for clubs or campus departments. If you are interested in having your programming on Titan Radio, please contact us at titanradio-gm@fullerton.edu";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 22:
                    let text22 = "BLEACH";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if (DJname22.innerHTML !== "DJ Syd Vicious")
                        DJname22.innerHTML = "DJ Syd Vicious";
                    if (DJbio22.innerHTML !== "What makes DJ Syd Viscous unique is that they aren’t afraid to explore music outside the box and introduce their listeners to all types of new music.")
                        DJbio22.innerHTML = "What makes DJ Syd Viscous unique is that they aren’t afraid to explore music outside the box and introduce their listeners to all types of new music.";
                    if (DJshowBio22.innerHTML !== "BLEACH is a show that wants to break the boundaries and think outside the box. Hopefully you will tune in this semester and like what I play 🙂")
                        DJshowBio22.innerHTML = "BLEACH is a show that wants to break the boundaries and think outside the box. Hopefully you will tune in this semester and like what I play 🙂";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 23:
                    let text23 = "Undercurrent";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if (DJname23.innerHTML !== "DJ Danny DeVenividivicivito")
                        DJname23.innerHTML = "DJ Danny DeVenividivicivito";
                    if (DJbio23.innerHTML !== "Evan Cooper is a senior Cinema and Television Arts student, philanthropist, Clyde’s 1930 Hot Wing Challenge silver medalist, and audiophile with an ear to the streets.")
                        DJbio23.innerHTML = "Evan Cooper is a senior Cinema and Television Arts student, philanthropist, Clyde’s 1930 Hot Wing Challenge silver medalist, and audiophile with an ear to the streets.";
                    if (DJshowBio23.innerHTML !== "I’m just a guy always trying to finesse my way into an AUX cord near you. Undercurrent is a continuation of that pattern of behavior. Come along with me on a trip across the musical spectrum. Maybe a few unsolicited opinions. Free of charge.")
                        DJshowBio23.innerHTML = "I’m just a guy always trying to finesse my way into an AUX cord near you. Undercurrent is a continuation of that pattern of behavior. Come along with me on a trip across the musical spectrum. Maybe a few unsolicited opinions. Free of charge.";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;  
            }
            break
        case 4: //THURSDAY
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
                    let text7 = "Soul Machine";
                    //change innerHTML of bio to text
                    if(document.getElementById("bio").innerHTML !== text7)
                            document.getElementById("bio").innerHTML = text7;
                    let DJshowLogo7 = document.getElementById("DJshowLogo");
                    let DJname7 = document.getElementById("DJname");
                    let DJbio7 = document.getElementById("DJbio");
                    let DJshowBio7 = document.getElementById("DJshowBio");  
                    if(DJname7.innerHTML !== "DJ D")
                        DJname7.innerHTML = "DJ D";
                    if(DJbio7.innerHTML !== "DJ D is a third-year Communication Major with a concentration on Public Relations. She has passion for good music, good food and good vibes all around. Although she has a broad taste in music she mostly focuses on Indie, Alternative, and Neo-Soul.")
                            DJbio7.innerHTML = "DJ D is a third-year Communication Major with a concentration on Public Relations. She has passion for good music, good food and good vibes all around. Although she has a broad taste in music she mostly focuses on Indie, Alternative, and Neo-Soul.";
                    if(DJshowBio7.innerHTML !== "eclectic music with commentary, and guests.")
                        DJshowBio7.innerHTML = "eclectic music with commentary, and guests.";
                    if (DJshowLogo7.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                    DJshowLogo7.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break
                case 8:
                    let text8 = "Shy Eyes";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text8)
                        document.getElementById("bio").innerHTML = text8;
                    let DJshowLogo8 = document.getElementById("DJshowLogo");
                    let DJname8 = document.getElementById("DJname");
                    let DJbio8 = document.getElementById("DJbio");
                    let DJshowBio8 = document.getElementById("DJshowBio");
                    if (DJname8.innerHTML !== "Itzel")
                        DJname8.innerHTML = "Itzel";
                    if (DJbio8.innerHTML !== "Paula is a 4th year psychology major. Her love for music stems from her parents love and passion for music and collecting records. Paula enjoys going to any concert or show at her fingertips while expanding her music taste always on the hunt for new artists.")
                        DJbio8.innerHTML = "Paula is a 4th year psychology major. Her love for music stems from her parents love and passion for music and collecting records. Paula enjoys going to any concert or show at her fingertips while expanding her music taste always on the hunt for new artists.";
                    if (DJshowBio8.innerHTML !== "Get ready for an hour of my favorite new and old artists to distract from the pressure of college. Shy eyes is a mix of indie, new wave, post punk, 80’s, alternative, grunge and any song I can’t seem to get out of my head that week.")
                        DJshowBio8.innerHTML = "Get ready for an hour of my favorite new and old artists to distract from the pressure of college. Shy eyes is a mix of indie, new wave, post punk, 80’s, alternative, grunge and any song I can’t seem to get out of my head that week.";
                    if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                case 9:
                    let text9 = "Between The Posts Podcast";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text9)
                        document.getElementById("bio").innerHTML = text9;
                    let DJshowLogo9 = document.getElementById("DJshowLogo");
                    let DJname9 = document.getElementById("DJname");
                    let DJbio9 = document.getElementById("DJbio");
                    let DJshowBio9 = document.getElementById("DJshowBio");
                    if (DJname9.innerHTML !== "DJ J Rose")
                        DJname9.innerHTML = "DJ J Rose";
                    if (DJbio9.innerHTML !== "DJ J rose is a college sophomore, ready to dig deeper into his passions and interests, with possibly hosting a radio show. He has known that this is what he wanted to pursue and take after since he was a baby, and he could not be more excited to finally bring his energy and perspective to the radio, along with his friends.")
                        DJbio9.innerHTML = "DJ J rose is a college sophomore, ready to dig deeper into his passions and interests, with possibly hosting a radio show. He has known that this is what he wanted to pursue and take after since he was a baby, and he could not be more excited to finally bring his energy and perspective to the radio, along with his friends.";
                    if (DJshowBio9.innerHTML !== "In the status quo where every celebrity or influencer under the sun has a podcast, this show comes from a differing perspective. Three college sophomores, all with aspirations to be sports journalists/ broadcasters, sharing their perspective on everything from sports, to music, to current events happening in the media. This show will feature debates, interviews, and overall display a great level of chemistry and camaraderie between three friends, all with one common goal.")
                        DJshowBio9.innerHTML = "In the status quo where every celebrity or influencer under the sun has a podcast, this show comes from a differing perspective. Three college sophomores, all with aspirations to be sports journalists/ broadcasters, sharing their perspective on everything from sports, to music, to current events happening in the media. This show will feature debates, interviews, and overall display a great level of chemistry and camaraderie between three friends, all with one common goal.";
                    if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;                            
                case 10:
                    let text10 = "The Chill Pill";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text10)
                        document.getElementById("bio").innerHTML = text10;
                    let DJshowLogo10 = document.getElementById("DJshowLogo");
                    let DJname10 = document.getElementById("DJname");
                    let DJbio10 = document.getElementById("DJbio");
                    let DJshowBio10 = document.getElementById("DJshowBio");
                    if (DJname10.innerHTML !== "MC²")
                        DJname10.innerHTML = "MC²";
                    if (DJbio10.innerHTML !== "Join MC² with his calm and soothing voice as he explores different genres of chill electronic music. So sit back, relax, and take a chill pill!")
                        DJbio10.innerHTML = "Join MC² with his calm and soothing voice as he explores different genres of chill electronic music. So sit back, relax, and take a chill pill!";
                    if (DJshowBio10.innerHTML !== "Here on the Chill Pill we play chill electronic music. Each week we’ll be showcasing vinyl, music videos and diving deeper into the artists behind the music.")
                        DJshowBio10.innerHTML = "Here on the Chill Pill we play chill electronic music. Each week we’ll be showcasing vinyl, music videos and diving deeper into the artists behind the music.";
                    if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 11:
                    let text11 = "Mawskia";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text11)
                        document.getElementById("bio").innerHTML = text11;
                    let DJshowLogo11 = document.getElementById("DJshowLogo");
                    let DJname11 = document.getElementById("DJname");
                    let DJbio11 = document.getElementById("DJbio");
                    let DJshowBio11 = document.getElementById("DJshowBio");
                    if (DJname11.innerHTML !== "MIA")
                        DJname11.innerHTML = "MIA";
                    if (DJbio11.innerHTML !== "Mawksia: The radio show that embraces awkwardness but down for the wild ride of witty banter while discovering hidden music gems. Get ready to cringe and groove with MIA.")
                        DJbio11.innerHTML = "Mawksia: The radio show that embraces awkwardness but down for the wild ride of witty banter while discovering hidden music gems. Get ready to cringe and groove with MIA.";
                    if (DJshowBio11.innerHTML !== "Hosted by the amusingly awkward MIA, this show dives headfirst into the depths of offbeat humor and curates a playlist that will make you do that goofy head bobbing with every tune. Mawskia will take you on a rollercoaster ride through a kaleidoscope of music genres, ensuring you discover hidden gems and have unforgettable laughs along the way.")
                        DJshowBio11.innerHTML = "Hosted by the amusingly awkward MIA, this show dives headfirst into the depths of offbeat humor and curates a playlist that will make you do that goofy head bobbing with every tune. Mawskia will take you on a rollercoaster ride through a kaleidoscope of music genres, ensuring you discover hidden gems and have unforgettable laughs along the way.";
                    if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 12:
                    let text12 = "Top Down Radio";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text12)
                        document.getElementById("bio").innerHTML = text12;
                    let DJshowLogo12 = document.getElementById("DJshowLogo");
                    let DJname12 = document.getElementById("DJname");
                    let DJbio12 = document.getElementById("DJbio");
                    let DJshowBio12 = document.getElementById("DJshowBio");
                    if (DJname12.innerHTML !== "EVP")
                        DJname12.innerHTML = "EVP";
                    if (DJbio12.innerHTML !== "Emily or EVP is a returning DJ who was so obsessed last semester she came back. She loves to make playlists and constantly find new music that fit the aesthetic of Top Down. If you stay long enough you’ll be sure to catch a cheeky little comment here and there throughout her sets…")
                        DJbio12.innerHTML = "Emily or EVP is a returning DJ who was so obsessed last semester she came back. She loves to make playlists and constantly find new music that fit the aesthetic of Top Down. If you stay long enough you’ll be sure to catch a cheeky little comment here and there throughout her sets…";
                    if (DJshowBio12.innerHTML !== "Warm and upbeat songs that make you think of your California PCH fantasy. Roll down your windows and enjoy Top Down to put yourself in an eternal beachy dream.")
                        DJshowBio12.innerHTML = "Warm and upbeat songs that make you think of your California PCH fantasy. Roll down your windows and enjoy Top Down to put yourself in an eternal beachy dream.";
                    if (DJshowLogo12.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo12.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 13:
                    let text13 = "Victory Lap";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text13)
                        document.getElementById("bio").innerHTML = text13;
                    let DJshowLogo13 = document.getElementById("DJshowLogo");
                    let DJname13 = document.getElementById("DJname");
                    let DJbio13 = document.getElementById("DJbio");
                    let DJshowBio13 = document.getElementById("DJshowBio");
                    if (DJname13.innerHTML !== "Meg")
                        DJname13.innerHTML = "Meg";
                    if (DJbio13.innerHTML !== "Meg has been part of Titan Radio since the spring of 2020! She is going to be done with her degree in December 2023, so needless to say she’s ready to get going!")
                        DJbio13.innerHTML = "Meg has been part of Titan Radio since the spring of 2020! She is going to be done with her degree in December 2023, so needless to say she’s ready to get going!";
                    if (DJshowBio13.innerHTML !== "Victory lap is all about finishing college and playing whatever music matches the mood for the day. Meg’s final semester is quickly coming to a close, time for a victory lap!")
                        DJshowBio13.innerHTML = "Victory lap is all about finishing college and playing whatever music matches the mood for the day. Meg’s final semester is quickly coming to a close, time for a victory lap!";
                    if (DJshowLogo13.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo13.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;

                case 14:
                    let text14 = "Sunsick Radio";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text14)
                        document.getElementById("bio").innerHTML = text14;
                    let DJshowLogo14 = document.getElementById("DJshowLogo");
                    let DJname14 = document.getElementById("DJname");
                    let DJbio14 = document.getElementById("DJbio");
                    let DJshowBio14 = document.getElementById("DJshowBio");
                    if (DJname14.innerHTML !== "DJ Silly")
                        DJname14.innerHTML = "DJ Silly";
                    if (DJbio14.innerHTML !== "Hey, it’s Dj Silly! As a music lover and avid concertgoer, I am so excited to share my weekly tunes with you all!")
                        DJbio14.innerHTML = "Hey, it’s Dj Silly! As a music lover and avid concertgoer, I am so excited to share my weekly tunes with you all!";
                    if (DJshowBio14.innerHTML !== "Sunsick Radio is a music and commentary show featuring variety of different genres, including indie, alternative, pop, rock, jazz, soul, R&B, and hip-hop. The show has an overall theme of happy and upbeat vibes, but with occasionally feature the angsty, post-punk side of my music taste.")
                        DJshowBio14.innerHTML = "Sunsick Radio is a music and commentary show featuring variety of different genres, including indie, alternative, pop, rock, jazz, soul, R&B, and hip-hop. The show has an overall theme of happy and upbeat vibes, but with occasionally feature the angsty, post-punk side of my music taste.";
                    if (DJshowLogo14.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo14.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 15:
                    let text15 = "The Cooler";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text15)
                        document.getElementById("bio").innerHTML = text15;
                    let DJshowLogo15 = document.getElementById("DJshowLogo");
                    let DJname15 = document.getElementById("DJname");
                    let DJbio15 = document.getElementById("DJbio");
                    let DJshowBio15 = document.getElementById("DJshowBio");
                    if (DJname15.innerHTML !== "DJ Natty Ice")
                        DJname15.innerHTML = "DJ Natty Ice";
                    if (DJbio15.innerHTML !== "I am DJ Natty Ice AKA Nat Betancourt Arellano AKA Senior Coordinator for the LGBT center at CSUF.")
                        DJbio15.innerHTML = "I am DJ Natty Ice AKA Nat Betancourt Arellano AKA Senior Coordinator for the LGBT center at CSUF.";
                    if (DJshowBio15.innerHTML !== "Crack open a cold one and tune into The Cooler with DJ Natty Ice! Listen to new playlists, chat pop culture, and learn about events from DIRC!")
                        DJshowBio15.innerHTML = "Crack open a cold one and tune into The Cooler with DJ Natty Ice! Listen to new playlists, chat pop culture, and learn about events from DIRC!";
                    if (DJshowLogo15.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo15.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 16:
                    let text16 = "ECYCE MUSIC";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text16)
                        document.getElementById("bio").innerHTML = text16;
                    let DJshowLogo16 = document.getElementById("DJshowLogo");
                    let DJname16 = document.getElementById("DJname");
                    let DJbio16 = document.getElementById("DJbio");
                    let DJshowBio16 = document.getElementById("DJshowBio");
                    if (DJname16.innerHTML !== "rin.apa")
                        DJname16.innerHTML = "rin.apa";
                    if (DJbio16.innerHTML !== "RIN.APA likes to spread his wings and fly, music allows him to do that. He may be introverted when you meet him, but his real self really gets out there when he feels comfortable and gives you a great time. With his last year in CSUF, he will continue to share his love for music till he turns that tassel.")
                        DJbio16.innerHTML = "RIN.APA likes to spread his wings and fly, music allows him to do that. He may be introverted when you meet him, but his real self really gets out there when he feels comfortable and gives you a great time. With his last year in CSUF, he will continue to share his love for music till he turns that tassel.";
                    if (DJshowBio16.innerHTML !== "REDUCE>REUSE>ECYCE.")
                        DJshowBio16.innerHTML = "REDUCE>REUSE>ECYCE.";
                    if (DJshowLogo16.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo16.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                    
                case 17:
                    let text17 = "The Feed";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text17)
                        document.getElementById("bio").innerHTML = text17;
                    let DJshowLogo17 = document.getElementById("DJshowLogo");
                    let DJname17 = document.getElementById("DJname");
                    let DJbio17 = document.getElementById("DJbio");
                    let DJshowBio17 = document.getElementById("DJshowBio");
                    if (DJname17.innerHTML !== "TR Staff")
                        DJname17.innerHTML = "TR Staff";
                    if (DJbio17.innerHTML !== "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.")
                        DJbio17.innerHTML = "Titan Radio staff are a group of talented and dedicated individuals who work tirelessly to bring quality radio programs to their listeners. They are passionate about music and knowledgeable about the industry, and they go above and beyond to create an engaging and enjoyable listening experience for their audience. With their diverse backgrounds and personalities, the Titan Radio staff is a dynamic and creative team that never fails to impress.";
                    if (DJshowBio17.innerHTML !== "The Feed is a weekly staff segment where you can hear from the staff that support the station! Tune in each week to hear about the staff and what they're up to!")
                        DJshowBio17.innerHTML = "The Feed is a weekly staff segment where you can hear from the staff that support the station! Tune in each week to hear about the staff and what they're up to!";
                    if (DJshowLogo17.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo17.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 18:
                    let text18 = "The Buzz";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text18)
                        document.getElementById("bio").innerHTML = text18;
                    let DJshowLogo18 = document.getElementById("DJshowLogo");
                    let DJname18 = document.getElementById("DJname");
                    let DJbio18 = document.getElementById("DJbio");
                    let DJshowBio18 = document.getElementById("DJshowBio");
                    if (DJname18.innerHTML !== "Bee")
                        DJname18.innerHTML = "Bee";
                    if (DJbio18.innerHTML !== "Bee is a generally introverted person, but when it comes to music he loves to share what he’s into. His taste ranges from early 2000s emo bands to late stage musical theater. Whatever he listens to he’s got a passion for.")
                        DJbio18.innerHTML = "Bee is a generally introverted person, but when it comes to music he loves to share what he’s into. His taste ranges from early 2000s emo bands to late stage musical theater. Whatever he listens to he’s got a passion for.";
                    if (DJshowBio18.innerHTML !== "music should be like honey: sweet, versatile, and cultivated by bee(s).")
                        DJshowBio18.innerHTML = "music should be like honey: sweet, versatile, and cultivated by bee(s).";
                    if (DJshowLogo18.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo18.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 19:
                    let text19 = "Música Recuerdos";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text19)
                        document.getElementById("bio").innerHTML = text19;
                    let DJshowLogo19 = document.getElementById("DJshowLogo");
                    let DJname19 = document.getElementById("DJname");
                    let DJbio19 = document.getElementById("DJbio");
                    let DJshowBio19 = document.getElementById("DJshowBio");
                    if (DJname19.innerHTML !== "DJ Nikki")
                        DJname19.innerHTML = "DJ Nikki";
                    if (DJbio19.innerHTML !== "DJ Nikki knows how to prepare the music to keep you dancing. She’ll take you from 1970 to 2010 without it feeling off and keep the vibes going. Plus who doesn’t love a music history queen.")
                        DJbio19.innerHTML = "DJ Nikki knows how to prepare the music to keep you dancing. She’ll take you from 1970 to 2010 without it feeling off and keep the vibes going. Plus who doesn’t love a music history queen.";
                    if (DJshowBio19.innerHTML !== "Música recuerdos is a show that will take you down memory lane. Who doesn’t love a blast from the past.")
                        DJshowBio19.innerHTML = "Música recuerdos is a show that will take you down memory lane. Who doesn’t love a blast from the past.";
                    if (DJshowLogo19.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo19.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 20:
                    let text20 = "Still Working On It";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text20)
                        document.getElementById("bio").innerHTML = text20;
                    let DJshowLogo20 = document.getElementById("DJshowLogo");
                    let DJname20 = document.getElementById("DJname");
                    let DJbio20 = document.getElementById("DJbio");
                    let DJshowBio20 = document.getElementById("DJshowBio");
                    if (DJname20.innerHTML !== "Will Mason")
                        DJname20.innerHTML = "Will Mason";
                    if (DJbio20.innerHTML !== "I’ll put on a song that will become your favorite ever or make you quit the radio app. Never had there been a white boy so proudly bumping Afro Beats on the airways.")
                        DJbio20.innerHTML = "I’ll put on a song that will become your favorite ever or make you quit the radio app. Never had there been a white boy so proudly bumping Afro Beats on the airways.";
                    if (DJshowBio20.innerHTML !== "Genre-less music to make you feel good. There’s a million different types of music, find your sound.")
                        DJshowBio20.innerHTML = "Genre-less music to make you feel good. There’s a million different types of music, find your sound.";
                    if (DJshowLogo20.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo20.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                                 
                case 21:
                    let text21 = "Brain Dead Radio";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text21)
                        document.getElementById("bio").innerHTML = text21;
                    let DJshowLogo21 = document.getElementById("DJshowLogo");
                    let DJname21 = document.getElementById("DJname");
                    let DJbio21 = document.getElementById("DJbio");
                    let DJshowBio21 = document.getElementById("DJshowBio");
                    if (DJname21.innerHTML !== "Jedrek")
                        DJname21.innerHTML = "Jedrek";
                    if (DJbio21.innerHTML !== "love you")
                        DJbio21.innerHTML = "love you";
                    if (DJshowBio21.innerHTML !== "Your brain is itching. BDR scratches the mind with a variety of hardcore electronic, alt/rock, RnB, acoustic, and ambience. The unique sounds played on this radio beckons listeners who want to change their taste in music, find a new appreciation for the art form , or just have it in the background as brain food. The choice is yours")
                        DJshowBio21.innerHTML = "Your brain is itching. BDR scratches the mind with a variety of hardcore electronic, alt/rock, RnB, acoustic, and ambience. The unique sounds played on this radio beckons listeners who want to change their taste in music, find a new appreciation for the art form , or just have it in the background as brain food. The choice is yours";
                    if (DJshowLogo21.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo21.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 22:
                    let text22 = "Libra Hour";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text22)
                        document.getElementById("bio").innerHTML = text22;
                    let DJshowLogo22 = document.getElementById("DJshowLogo");
                    let DJname22 = document.getElementById("DJname");
                    let DJbio22 = document.getElementById("DJbio");
                    let DJshowBio22 = document.getElementById("DJshowBio");
                    if (DJname22.innerHTML !== "Izabella")
                        DJname22.innerHTML = "Izabella";
                    if (DJbio22.innerHTML !== "Izabella is a communications major here at CSUF. She is a true Libra at heart, lover of fashion and music, and hopes to be a part of the fashion industry after CSUF. Her music taste is truly everywhere so be prepared for anything!!!")
                        DJbio22.innerHTML = "Izabella is a communications major here at CSUF. She is a true Libra at heart, lover of fashion and music, and hopes to be a part of the fashion industry after CSUF. Her music taste is truly everywhere so be prepared for anything!!!";
                    if (DJshowBio22.innerHTML !== "Libra Hour is eclectic show where I play whatever I want! I hardly ever stick to one genre of music (because I’m a libra, obviously), so be prepared for anything from Lana Del Rey, Depeche Mode, Mazzy Star, Tyler the creator, or any other artist I fall in love with!")
                        DJshowBio22.innerHTML = "Libra Hour is eclectic show where I play whatever I want! I hardly ever stick to one genre of music (because I’m a libra, obviously), so be prepared for anything from Lana Del Rey, Depeche Mode, Mazzy Star, Tyler the creator, or any other artist I fall in love with!";
                    if (DJshowLogo22.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo22.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;
                
                case 23:
                    let text23 = "Montefalcon Radio";
                    // Change innerHTML of bio to text
                    if (document.getElementById("bio").innerHTML !== text23)
                        document.getElementById("bio").innerHTML = text23;
                    let DJshowLogo23 = document.getElementById("DJshowLogo");
                    let DJname23 = document.getElementById("DJname");
                    let DJbio23 = document.getElementById("DJbio");
                    let DJshowBio23 = document.getElementById("DJshowBio");
                    if (DJname23.innerHTML !== "dbmontefalcon")
                        DJname23.innerHTML = "dbmontefalcon";
                    if (DJbio23.innerHTML !== "dbmontefalcon is a strong advocate for personal, artistic expression. be a little weird. be you. be true.")
                        DJbio23.innerHTML = "dbmontefalcon is a strong advocate for personal, artistic expression. be a little weird. be you. be true.";
                    if (DJshowBio23.innerHTML !== "tune in for an auditory journey that delves deep into various music genres! educational and fun!")
                        DJshowBio23.innerHTML = "tune in for an auditory journey that delves deep into various music genres! educational and fun!";
                    if (DJshowLogo23.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                        DJshowLogo23.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                    break;  
            }
            break
        case 5: //FRIDAY
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
                        let text8 = "Rent Free History";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text8)
                            document.getElementById("bio").innerHTML = text8;
                        let DJshowLogo8 = document.getElementById("DJshowLogo");
                        let DJname8 = document.getElementById("DJname");
                        let DJbio8 = document.getElementById("DJbio");
                        let DJshowBio8 = document.getElementById("DJshowBio");
                        if (DJname8.innerHTML !== "Kemdi")
                            DJname8.innerHTML = "Kemdi";
                        if (DJbio8.innerHTML !== "Kemdi was told from a young age that he had a face for radio and ever since, he’s set out to become the best radio DJ he could be. He’s really good at improve and is a fast thinker.")
                            DJbio8.innerHTML = "Kemdi was told from a young age that he had a face for radio and ever since, he’s set out to become the best radio DJ he could be. He’s really good at improve and is a fast thinker.";
                        if (DJshowBio8.innerHTML !== "A show about moments in history that live rent free in people's heads")
                            DJshowBio8.innerHTML = "A show about moments in history that live rent free in people's heads";
                        if (DJshowLogo8.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo8.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    case 9:
                        let text9 = "Grey Space";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text9)
                            document.getElementById("bio").innerHTML = text9;
                        let DJshowLogo9 = document.getElementById("DJshowLogo");
                        let DJname9 = document.getElementById("DJname");
                        let DJbio9 = document.getElementById("DJbio");
                        let DJshowBio9 = document.getElementById("DJshowBio");
                        if (DJname9.innerHTML !== "Nook")
                            DJname9.innerHTML = "Nook";
                        if (DJbio9.innerHTML !== "Nook’s music journey has been nothing short of turns at every corner. Going from listening to great disco classics & alternative rock to listening to k-pop & PC music, Nook’s music palette is expansive & unique. Despite focusing on a new genre every few months, some of the mainstays on his playlists include Grentperez, Niki, Cavetown and Carly Rae Jepsen.")
                            DJbio9.innerHTML = "Nook’s music journey has been nothing short of turns at every corner. Going from listening to great disco classics & alternative rock to listening to k-pop & PC music, Nook’s music palette is expansive & unique. Despite focusing on a new genre every few months, some of the mainstays on his playlists include Grentperez, Niki, Cavetown and Carly Rae Jepsen.";
                        if (DJshowBio9.innerHTML !== "The limbo of juggling life as we figure out how we will be spending our adult years deserves a sweet soundtrack. Grey Space radio explores music from artists our age as they grow up alongside us and music you can sit down, have a coffee and reminisce on the days where all our struggles felt so big, but ended up being so small. Whether you need time to recollect your thoughts, decompress or just want to discover new music, join us at Grey Space radio!")
                            DJshowBio9.innerHTML = "The limbo of juggling life as we figure out how we will be spending our adult years deserves a sweet soundtrack. Grey Space radio explores music from artists our age as they grow up alongside us and music you can sit down, have a coffee and reminisce on the days where all our struggles felt so big, but ended up being so small. Whether you need time to recollect your thoughts, decompress or just want to discover new music, join us at Grey Space radio!";
                        if (DJshowLogo9.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo9.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;                            
                    case 10:
                        let text10 = "Soul Food";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text10)
                            document.getElementById("bio").innerHTML = text10;
                        let DJshowLogo10 = document.getElementById("DJshowLogo");
                        let DJname10 = document.getElementById("DJname");
                        let DJbio10 = document.getElementById("DJbio");
                        let DJshowBio10 = document.getElementById("DJshowBio");
                        if (DJname10.innerHTML !== "Josh B. + Gianna D")
                            DJname10.innerHTML = "Josh B. + Gianna D";
                        if (DJbio10.innerHTML !== "This is Josh B, he is a 2nd year psych major, and not super psyched for his upcoming classes for this semester. He enjoys gaming, listening to music, and singing. This is Gianna D, she is a 1st year Child and Adolescent Studies major! She loves drawing, painting, and singing. She’s here to make sure that Josh doesn’t make really bad setlists every week.")
                            DJbio10.innerHTML = "This is Josh B, he is a 2nd year psych major, and not super psyched for his upcoming classes for this semester. He enjoys gaming, listening to music, and singing. This is Gianna D, she is a 1st year Child and Adolescent Studies major! She loves drawing, painting, and singing. She’s here to make sure that Josh doesn’t make really bad setlists every week.";
                        if (DJshowBio10.innerHTML !== "Josh B. plus Gianna D. listening to some of our favorite music, splitting our setlists 50/50, and enjoying each other's company.")
                            DJshowBio10.innerHTML = "Josh B. plus Gianna D. listening to some of our favorite music, splitting our setlists 50/50, and enjoying each other's company.";
                        if (DJshowLogo10.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo10.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 11:
                        let text11 = "Mom Jeans and Caffeine";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text11)
                            document.getElementById("bio").innerHTML = text11;
                        let DJshowLogo11 = document.getElementById("DJshowLogo");
                        let DJname11 = document.getElementById("DJname");
                        let DJbio11 = document.getElementById("DJbio");
                        let DJshowBio11 = document.getElementById("DJshowBio");
                        if (DJname11.innerHTML !== "Queen E")
                            DJname11.innerHTML = "Queen E";
                        if (DJbio11.innerHTML !== "DJ Queen E is a free flowing spirit who finds comfort in listening to music. She’s a little soft spoken until you bring music or lattes into the conversation. Her perfect moment would be gloomy weather, iced latte in hand, and hanging with friends while some coming of age music is playing")
                            DJbio11.innerHTML = "DJ Queen E is a free flowing spirit who finds comfort in listening to music. She’s a little soft spoken until you bring music or lattes into the conversation. Her perfect moment would be gloomy weather, iced latte in hand, and hanging with friends while some coming of age music is playing";
                        if (DJshowBio11.innerHTML !== "Mom Jeans and Caffeine is your local spot to listen to indie and alternative music! Discover the new, listen to the old, and overall have a great time with feel-good music.")
                            DJshowBio11.innerHTML = "Mom Jeans and Caffeine is your local spot to listen to indie and alternative music! Discover the new, listen to the old, and overall have a great time with feel-good music.";
                        if (DJshowLogo11.style.backgroundImage !== "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')")
                            DJshowLogo11.style.backgroundImage = "url('https://titanradio.org/wp-content/uploads/2021/08/cropped-TRLogo_Stacked_ColorBlack.png')";
                        break;
                    
                    case 12:
                        let text12 = "Black Classics";
                        // Change innerHTML of bio to text
                        if (document.getElementById("bio").innerHTML !== text12)
                            document.getElementById("bio").innerHTML = text12;
                        let DJshowLogo12 = document.getElementById("DJshowLogo");
                        let DJname12 = document.getElementById("DJname");
                        let DJbio12 = document.getElementById("DJbio");
                        let DJshowBio12 = document.getElementById("DJshowBio");
                        if (DJname12.innerHTML !== "Jordan O'Garro")
                            DJname12.innerHTML = "Jordan O'Garro";
                        if (DJbio12.innerHTML !== "Jordan is a third-year student who was raised in a mixed household but if there’s one thing he took from the black side of his family, it’s a love for music. He has a versatile music taste and is a fan of many genres.")
                            DJbio12.innerHTML = "Jordan is a third-year student who was raised in a mixed household but if there’s one thing he took from the black side of his family, it’s a love for music. He has a versatile music taste and is a fan of many genres.";
                        if (DJshowBio12.innerHTML !== "Black Classics is a radio show that consists of songs that are or have been popular in the black community. The show is welcome for all to listen to but is especially a space for black students to listen to music that ranges from the Sunday morning oldies their parents used to play to hip-hop/R&B hits of the past few years.")
                            DJshowBio12.innerHTML = "Black Classics is a radio show that consists of songs that are or have been popular in the black community. The show is welcome for all to listen to but is especially a space for black students to listen to music that ranges from the Sunday morning oldies their parents used to play to hip-hop/R&B hits of the past few years.";
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
        case 6: //SATURDAY
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
