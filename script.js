const navBar = document.getElementById("navBar");
const mainPage = document.getElementById("mainPage");
const nameP = document.getElementById("nameP");
const nameE = document.getElementById("nameE");
const nameT = document.getElementById("nameT");
const nameA = document.getElementById("nameA");
const nameR = document.getElementById("nameR");

const lastnameI = document.getElementById("lastnameI");
const lastnameS = document.getElementById("lastnameS");
const lastnameA = document.getElementById("lastnameA");
const lastnameK = document.getElementById("lastnameK");
const lastnameO = document.getElementById("lastnameO");
const lastnameV = document.getElementById("lastnameV");
const lastnameI2 = document.getElementById("lastnameI2");
const lastnameC = document.getElementById("lastnameC");

let coolWords = document.getElementsByClassName("coolWords");

const movingText = document.getElementById("movingText");

const navBarBackground = document.getElementById("navBarBackground");

const backgroundOfMainPage = document.getElementsByClassName("backgroundOfMainPage");

const blackFade = document.getElementsByClassName("blackFade");

const namePetar = document.getElementById("namePetar");

const nameIsakovic = document.getElementById("nameIsakovic");

let isMouseHoveringName = false;
let isMouseHoveringLastName = false;


navBar.style.transform = "translateY(0px)";
navBar.style.opacity = 1;

mainPage.style.transform = "translateY(0px)";
mainPage.style.opacity = 1;

nameP.style.transform = "translateY(0px)";
nameE.style.transform = "translateY(0px)";
nameT.style.transform = "translateY(0px)";
nameA.style.transform = "translateY(0px)";
nameR.style.transform = "translateY(0px)";

nameP.style.opacity = 1;
nameE.style.opacity = 1;
nameT.style.opacity = 1;
nameA.style.opacity = 1;
nameR.style.opacity = 1;

lastnameI.style.transform = "translateY(0px)";
lastnameS.style.transform = "translateY(0px)";
lastnameA.style.transform = "translateY(0px)";
lastnameK.style.transform = "translateY(0px)";
lastnameO.style.transform = "translateY(0px)";
lastnameV.style.transform = "translateY(0px)";
lastnameI2.style.transform = "translateY(0px)";
lastnameC.style.transform = "translateY(0px)";

lastnameI.style.opacity = 1;
lastnameS.style.opacity = 1;
lastnameA.style.opacity = 1;
lastnameK.style.opacity = 1;
lastnameO.style.opacity = 1;
lastnameV.style.opacity = 1;
lastnameI2.style.opacity = 1;
lastnameC.style.opacity = 1;




setTimeout(() => {
    nameP.style.transition = '100ms';
    nameE.style.transition = '100ms';
    nameT.style.transition = '100ms';
    nameA.style.transition = '100ms';
    nameR.style.transition = '100ms';
      }, 2000); // 2000 milliseconds (2 seconds) delay

setTimeout(() => {
lastnameI.style.transition = '100ms';
lastnameS.style.transition = '100ms';
lastnameA.style.transition = '100ms';
lastnameK.style.transition = '100ms';
lastnameO.style.transition = '100ms';
lastnameV.style.transition = '100ms';
lastnameI2.style.transition = '100ms';
lastnameC.style.transition = '100ms';
    }, 2600); // 2000 milliseconds (2 seconds) delay


coolWords[0].style.marginLeft = '-1000px';

let backgroundNumber = backgroundOfMainPage.length-1;
let ticks = 0;
let transparency = 1.0;


function tick(){
    // console.log("target: = " + (parseInt(coolWords[1].offsetWidth) - 1000));
    // console.log("current: = " + (coolWords[0].style.marginLeft));
    if(coolWords[coolWords.length-1].offsetWidth -950 < parseInt(coolWords[0].style.marginLeft)){
        movingText.insertBefore(coolWords[coolWords.length-1].cloneNode(true), movingText.firstChild);
        coolWords[coolWords.length-1].remove();
        coolWords = document.getElementsByClassName("coolWords");
        coolWords[0].style.marginLeft = '-1000px';
        coolWords[1].style.marginLeft = '50px';
    }

  
    coolWords[0].style.marginLeft = (parseInt(coolWords[0].style.marginLeft) + 1)+ "px";

   
    ticks++;

    if(ticks < 500 && transparency > 0.5){
        if(ticks % 5 == 0){
            for(let i = 0; i < blackFade.length; i++){
                blackFade[i].style.backgroundColor = "rgba(0, 0, 0, "+transparency+")";
            }
            transparency-=0.01;
            // console.log(blackFade.style.backgroundColor);
        }
    }
    else if(ticks > 2750){
        if(ticks % 5 == 0){
            for(let i = 0; i < blackFade.length; i++){
                blackFade[i].style.backgroundColor = "rgba(0, 0, 0, "+transparency+")";
            }
            if(transparency < 1){
                transparency+=0.01;
            }
            // console.log(blackFade.style.backgroundColor);
        }
    }
    if(ticks % 3000 == 0){
        ticks = 0;
        backgroundOfMainPage[backgroundNumber].style.display = 'none';
        backgroundNumber--;
        if(backgroundNumber > 0){
            if(isMouseHoveringName){
                namePetar.style.letterSpacing = '15px';
            }
            if(isMouseHoveringLastName){
                nameIsakovic.style.letterSpacing = '15px';
            }
            backgroundOfMainPage[backgroundNumber].appendChild(blackFade[0]);
        }
        console.log("HEEEHAAWAA: " + blackFade.length)
    }
    if(backgroundNumber == 0){

        backgroundOfMainPage[backgroundOfMainPage.length-1].appendChild(blackFade[0]);

        console.log("wooosh");
        backgroundNumber = backgroundOfMainPage.length-1;
        for(let i = 1; i < backgroundOfMainPage.length; i++){
            backgroundOfMainPage[i].style.display = 'block';
        }

    }
}



setInterval(tick, 1);


window.addEventListener("scroll", (e) => {
    // console.log(window.scrollY);
    if(window.scrollY > 30){
        navBarBackground.style.transition = "287ms";
        navBarBackground.style.width = "100%";
        navBar.style.transition = "100ms";
        navBar.style.marginTop = '0px'
        navBarBackground.style.borderRadius = '0px';
        
    }
    else{
        navBarBackground.style.width = "80%";
        navBar.style.marginTop = '15px'
        navBarBackground.style.borderRadius = '15px';
    }

})

namePetar.addEventListener('mouseover', () => {
    console.log("hovering")
    isMouseHoveringName = true;
    namePetar.style.letterSpacing = '15px';
});

namePetar.addEventListener('mouseout', () => {
    console.log("notHovering")

    isMouseHoveringName = false;
    namePetar.style.letterSpacing = 'normal';
});

nameIsakovic.addEventListener('mouseover', () => {
    console.log("hovering")
    isMouseHoveringLastName = true;
    nameIsakovic.style.letterSpacing = '15px';
});

nameIsakovic.addEventListener('mouseout', () => {
    console.log("notHovering")

    isMouseHoveringLastName = false;
    nameIsakovic.style.letterSpacing = 'normal';
});