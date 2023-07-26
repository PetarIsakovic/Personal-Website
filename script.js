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
    console.log("wioosoasd")
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
console.log("wioosoasd")
    }, 2600); // 2000 milliseconds (2 seconds) delay


coolWords[0].style.marginLeft = '-1000px';
console.log(coolWords[0].style.marginLeft);



function tick(){
    // console.log("target: = " + (parseInt(coolWords[1].offsetWidth) - 1000));
    console.log("target: = " + (coolWords.length));
    // console.log("current: = " + (coolWords[0].style.marginLeft));
    if(coolWords[coolWords.length-1].offsetWidth -950 == parseInt(coolWords[0].style.marginLeft)){
        movingText.insertBefore(coolWords[coolWords.length-1].cloneNode(true), movingText.firstChild);
        coolWords[coolWords.length-1].remove();
        coolWords = document.getElementsByClassName("coolWords");
        coolWords[0].style.marginLeft = '-1000px';
        coolWords[1].style.marginLeft = '50px';
    }

    if(coolWords[coolWords.length-1].getBoundingClientRect().x > window.innerWidth + 1000){
        // coolWords[coolWords.length-1].remove();
        // coolWords = document.getElementsByClassName("coolWords");
    }
    coolWords[0].style.marginLeft = (parseInt(coolWords[0].style.marginLeft) +1)+ "px";
}



setInterval(tick, 1);
