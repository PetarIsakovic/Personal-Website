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

const dropdown = document.getElementById("dropdown");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const dropdownBackground = document.getElementById("dropdownBackground");

const skill = document.getElementsByClassName("skill");
const skills = document.getElementById("skills");

const mainImage = document.getElementById("mainImage");
const informationSection = document.getElementById("informationSection");

const logoInformationHolder = document.getElementById("logoInformationHolder");
const home = document.getElementById("home");
const home2 = document.getElementById("home2");
const about = document.getElementById("about");
const about2 = document.getElementById("about2");
const nextPage = document.getElementById("nextPage");

const hand = document.getElementById("hand");

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

skill[0].style.marginLeft = '0px';

let done = true;
let count = 0;

function tick(){
    if(coolWords[coolWords.length-1].offsetWidth - 1450 < parseInt(coolWords[0].style.marginLeft)){
        movingText.insertBefore(coolWords[coolWords.length-1].cloneNode(true), movingText.firstChild);
        coolWords[coolWords.length-1].remove();
        coolWords = document.getElementsByClassName("coolWords");
        coolWords[0].style.marginLeft = '-1500px';
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
    }
    if(backgroundNumber == 0){

        backgroundOfMainPage[backgroundOfMainPage.length-1].appendChild(blackFade[0]);

        backgroundNumber = backgroundOfMainPage.length-1;
        for(let i = 1; i < backgroundOfMainPage.length; i++){
            backgroundOfMainPage[i].style.display = 'block';
        }

    }

    if(skill[0].getBoundingClientRect().x >= -144){
        skill[0].style.marginLeft = (parseInt(skill[0].style.marginLeft) - 1) + 'px'
    }
    else{
        skill[0].style.marginLeft = '150px';
        skills.appendChild(skill[0].cloneNode(true));
        skill[0].remove();
        skill[0].style.marginLeft = '148px';
    }
    if(window.scrollY > mainImage.getBoundingClientRect().y-200){
        mainImage.style.transform = "translateX(0px)";
        mainImage.style.opacity = 1;
        informationSection.style.transform = "translateX(0px)";
        informationSection.style.opacity = 1;
        skills.style.opacity = 1;
    }
    else{
        mainImage.style.transform = "translateX(-550px)";
        mainImage.style.opacity = 0;
        informationSection.style.transform = "translateX(1050px)";
        informationSection.style.opacity = 0;
        skills.style.opacity = 0;
    }

    if(done){
        hand.style.transform = "rotate(75deg)";
        done = false;           
    }
    
    if(!done){
        console.log(count);
        count++;
        if(count == 400){
            hand.style.transform = "rotate(0deg)";
        }
        if(count == 800){
            done = true;
            count = 0;
        }
    }
        

}



setInterval(tick, 1);


window.addEventListener("scroll", (e) => {
    if(window.scrollY > 30){
        navBarBackground.style.transition = "287ms";
        navBarBackground.style.width = "100%";
        dropdown.style.width = "100%";
        navBar.style.transition = "100ms";
        navBar.style.marginTop = '0px'
        navBarBackground.style.borderRadius = '0px';
        
    }
    else{
        navBarBackground.style.width = "80%";
        dropdown.style.width = "80%";
        navBar.style.marginTop = '15px'
        navBarBackground.style.borderRadius = '15px';
    }
})

namePetar.addEventListener('mouseover', () => {
    if(window.innerWidth > '515'){
        isMouseHoveringName = true;
        namePetar.style.letterSpacing = '15px';
    }
});

namePetar.addEventListener('mouseout', () => {
    isMouseHoveringName = false;
    namePetar.style.letterSpacing = 'normal';
});

nameIsakovic.addEventListener('mouseover', () => {
    if(window.innerWidth > '515'){
        isMouseHoveringLastName = true;
        nameIsakovic.style.letterSpacing = '15px';
    }
});

nameIsakovic.addEventListener('mouseout', () => {
    isMouseHoveringLastName = false;
    nameIsakovic.style.letterSpacing = 'normal';
});

hamburgerMenu.addEventListener("click", () => {
    if(dropdown.style.display == 'block'){
        dropdown.style.display = 'none';
        navBarBackground.style.boxShadow = "6px 8px 5px rgba(0, 0, 0, 0.1)";
    }
    else{
        dropdown.style.display = 'block';
        navBarBackground.style.boxShadow = 'none';
    }
    
})

window.addEventListener('resize', () => {
    dropdown.style.display = 'none';
    navBarBackground.style.boxShadow = "6px 8px 5px rgba(0, 0, 0, 0.1)";
});

home.addEventListener("click", function() {
    var scrollPosition = home.offsetTop - 150;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});

home2.addEventListener("click", function() {
    var scrollPosition = home.offsetTop - 150;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
    dropdown.style.display = 'none';
});

logoInformationHolder.addEventListener("click", function() {
    var scrollPosition = logoInformationHolder.offsetTop - 150;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});

about.addEventListener("click", function() {
    var scrollPosition = nextPage.offsetTop-120;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});

about2.addEventListener("click", function() {
    var scrollPosition = nextPage.offsetTop-120;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
    dropdown.style.display = 'none';
});

namePetar.addEventListener("click", function() {
    var scrollPosition = nextPage.offsetTop-120;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});

nameIsakovic.addEventListener("click", function() {
    var scrollPosition = nextPage.offsetTop-120;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});