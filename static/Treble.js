function darkMode(bool) {
    
    if(bool) {
        //BG
        const back = document.getElementsByClassName("container-fluid mainDiv");
        back[0].style.backgroundColor = "rgba(24, 24, 24)";


        //NAVIGATION BAR
        {
            document.getElementById("navigationBar").className = "navbar navbar-expand-lg navbar-dark bg-dark rounded";        
            document.getElementById("navImg").src = "Images/Treble1(White).png";

            const navItems = document.getElementsByClassName("nav-item");
            for (let i = 0; i < navItems.length; i++) {
                navItems[i].className="nav-item nav-darkText";
            }

            document.getElementById("searchTextField").className = "form-control mr-sm-2 bg-dark";
            document.getElementById("searchButton").className = "btn btn-outline-danger bg-dark";
        }
        

        //JUMBOTRON
        {
            var tmp1 = document.getElementById("jumbotron");
            if(tmp1)
                tmp1.className = "jumbotron bg-dark";

            var tmp2 = document.getElementById("jumbotronTitle");
            if(tmp2)
                tmp2.className = "Display-1 text-light";

            var tmp3 = document.getElementById("darkModeSwitchLabel");
            if(tmp3)
                tmp3.style.color = "white";
        }
        
        //document.getElementById("navbarSupportedContent").style.color = "white";

        //titleOnImageText
        tmp=document.getElementById("titleOnImgText");
        if(tmp)
        {
            document.getElementById("textOnImg1").className="Display-2 textOnImgDark";
        }

        //Courses Page Large Text On Image
        tmp=document.getElementById("coursesPage");
        if(tmp)
        {
            const largeTexts = document.getElementsByClassName("Display-2 textOnImg");
            for (let i = 0 ; i < largeTexts.length ; i++) {
                largeTexts[i].className="Display-2 textOnImgDark";
            }
        }

        
        //Large Text Container
        tmp = document.getElementById("largeTextInContainer");
        if(tmp)
        {
            document.getElementById("musicText").className="Display-4 text-light";
        }

        
        //Cards
        tmp=document.getElementById("cardsSection");
        if(tmp)
        {
            tmp = document.getElementById("textOnImg2").className="Display-2 textOnImgDark";
            if(tmp)
                tmp;

            const cardsBG = document.getElementsByClassName("card myCard");
            if(cardsBG)
            {
                for (let i = 0 ; i < cardsBG.length ; i++) {
                    cardsBG[i].className="card myCard bg-dark";
                }
            }
            
            const cardsText = document.getElementsByClassName("card-text");
            if(cardsText)
            {
                for (let i = 0 ; i < cardsText.length ; i++) {
                    cardsText[i].className="card-text text-light";
                }
            }
        }


        //Changing all text holding containers.
        const myDivs = document.getElementsByClassName("container-fluid rounded myDiv");
        if(myDivs)
        {
            for (let i = 0 ; i < myDivs.length ; i++) {
                myDivs[i].className="container-fluid rounded myDiv bg-dark";
            }
        }
        

        const smallTexts = document.getElementsByClassName("container Display-5");
        if(smallTexts)
        {
            for (let i = 0 ; i < smallTexts.length ; i++) {
                smallTexts[i].className="container Display-5 text-light";
            }
        }


        //STATISTICS
        tmp = document.getElementById("statistics");
        if(tmp)
        {
            const statsText = document.getElementsByClassName("display-3");
            if(statsText)
            {
                for (let i = 0 ; i < statsText.length ; i++) {
                    statsText[i].className="display-3 text-light";
                }
            }
            
            var tmp = document.getElementById("statsRow")
            if(tmp)
                tmp.style.backgroundColor = "rgba(50, 50, 50, 0.73)";
        }


        //Contact Page Table
        tmp=document.getElementById("contactPage");
        if(tmp)
        {
            document.getElementById("contactTable").className="table table-striped table-dark table-bordered table-hover";
            document.getElementById("theader").className=("thead-dark");
        }

        //signUp Page form
        tmp=document.getElementById("signupPage");
        if(tmp)
        {
            document.getElementById("formDiv").className="container-fluid rounded formDiv bg-dark";
            const labels = document.getElementsByClassName("text-dark myLabel");
            for (let i = 0 ; i < labels.length ; i++) {
                labels[i].className="text-light myLabel";
            }

            const labels2 = document.getElementsByClassName("text-dark myLabel2");
            for (let i = 0 ; i < labels2.length ; i++) {
                labels2[i].className="text-light myLabel";
            }

            document.getElementById("formTitle").className="text-light";
        }

        /*const hor = document.getElementsByClassName("myHR");
        hor[0].className="myHRDark";
          */  
        
    } 
    else //EEEEEEEEEELLLLLLLLLLLSSSSSSSSSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
    {
        
        //BG
        const back = document.getElementsByClassName("container-fluid mainDiv");
        back[0].style.backgroundColor = "rgba(76, 74, 74, 0.278)";


        //NAVIGATION BAR
        {
            document.getElementById("navigationBar").className = "navbar navbar-expand-lg navbar-light bg-light rounded";
            document.getElementById("navImg").src = "Images/Treble1.png";
            const navItems = document.getElementsByClassName("nav-item");
            for (let i = 0; i < navItems.length; i++) {
                //navItems[i].style.color = "white";
                navItems[i].className="nav-item";
            }
            document.getElementById("searchTextField").className = ("form-control mr-sm-2");
            document.getElementById("searchButton").className = ("btn btn-outline-danger");
        }
        

        //JUMNOTRON
        {
            tmp = document.getElementById("jumbotron")
            if(tmp)
                tmp.className = "jumbotron bg-light";

            tmp = document.getElementById("jumbotronTitle")
            if(tmp)
                tmp.className = "Display-1 text-dark";

            tmp = document.getElementById("darkModeSwitchLabel")
            if(tmp)
                tmp.style.color = "black";
        }


        //titleOnImageText
        tmp=document.getElementById("titleOnImgText");
        if(tmp)
        {
            document.getElementById("textOnImg1").className="Display-2 textOnImg";
            console.log("TITLE EXECUTED!");
        }

        //Courses Page Large Text On Image
        tmp=document.getElementById("coursesPage");
        if(tmp)
        {
            const largeTexts = document.getElementsByClassName("Display-2 textOnImgDark");
            for (let i = 0 ; i < largeTexts.length ; i++) {
                largeTexts[i].className="Display-2 textOnImg";
            }
        }

        //Large Text Container
        tmp = document.getElementById("largeTextInContainer");
        if(tmp)
        {
            document.getElementById("musicText").className="Display-4 text-dark";
        }


        //Cards
        tmp=document.getElementById("cardsSection");
        if(tmp)
        {
            tmp = document.getElementById("textOnImg2").className="Display-2 textOnImg";
            if(tmp)
                tmp;

            const cardsBG = document.getElementsByClassName("card myCard");
            for (let i = 0 ; i < cardsBG.length ; i++) {
                cardsBG[i].className="card myCard";
            }

            const cardsText = document.getElementsByClassName("card-text");
            for (let i = 0 ; i < cardsText.length ; i++) {
                cardsText[i].className="card-text";
            }
        }


        //Changing all text holding containers.
        const myDivs = document.getElementsByClassName("container-fluid rounded myDiv");
        if(myDivs)
        {
            for (let i = 0; i < myDivs.length; i++) {
                myDivs[i].className="container-fluid rounded myDiv";
            }
        }

        tmp=document.getElementById("aboutPage");
        if(tmp)
        {
            const myDivs = document.getElementsByClassName("container-fluid rounded myDiv");
            if(myDivs)
            {
                for (let i = 0; i < myDivs.length; i++) {
                    myDivs[i].className="container-fluid rounded myDiv";
                }
            }
        }
        
        

        const smallTexts = document.getElementsByClassName("container Display-5");
        if(smallTexts)
        {
            for (let i = 0 ; i < smallTexts.length ; i++) {
                smallTexts[i].className="container Display-5";
            }
        }



        //Contact Page Table
        tmp=document.getElementById("contactPage");
        if(tmp)
        {
            document.getElementById("contactTable").className="table table-striped table-light table-bordered table-hover";
            document.getElementById("theader").className=("thead-light");
        }



        //signUp Page form
        tmp=document.getElementById("signupPage");
        if(tmp)
        {
            document.getElementById("formDiv").className="container-fluid rounded formDiv"; 

            const labels = document.getElementsByClassName("text-light myLabel");
            for (let i = 0 ; i < labels.length ; i++) {
                labels[i].className="text-dark myLabel";
            }
 
            const labels2 = document.getElementsByClassName("text-light  myLabel2");
            for (let i = 0 ; i < labels2.length ; i++) {
                labels2[i].className="text-dark myLabel";
            }

            document.getElementById("formTitle").className="text-dark";
        }


        //STATISTICS
        tmp = document.getElementById("statistics");
        if(tmp)
        {
            const statsText = document.getElementsByClassName("display-3");
            for (let i = 0 ; i < statsText.length ; i++) {
                statsText[i].className="display-3";
            }

            document.getElementById("statsRow").style.backgroundColor = "rgba(135, 135, 135, 0.73)";
        }

        /*const hr = document.getElementsByClassName("myHR");
        if(hr)
            hr[0].className="myHR";*/
    }

}