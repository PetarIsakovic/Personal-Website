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
const projects = document.getElementById("projects");
const projects2 = document.getElementById("projects2");
const awardsButton = document.getElementById("awards");
const awardsButton2 = document.getElementById("awards2");
const awardsPage = document.getElementById('awardsPage');
const nextPage = document.getElementById("nextPage");
const hand = document.getElementById("hand");
const projectsSection = document.getElementById("projectsSection");
const project = document.getElementsByClassName("project");
const awards = document.getElementsByClassName("awards");
const awardsTitle = document.getElementById("awardsTitle");
let coolWords = document.getElementsByClassName("coolWords");
const movingText = document.getElementById("movingText");
const navBarBackground = document.getElementById("navBarBackground");
const backgroundOfMainPage = document.getElementsByClassName("backgroundOfMainPage");
const left = document.getElementsByClassName("left");
const right = document.getElementsByClassName("right");
const blackFade = document.getElementsByClassName("blackFade");
const namePetar = document.getElementById("namePetar");
const nameIsakovic = document.getElementById("nameIsakovic");
const videos = document.getElementsByClassName("videos");
const imageSection = document.getElementsByClassName("imageSection");
const leftSection = document.getElementById("leftSection");
const rightSection = document.getElementById("rightSection");
let isMouseHoveringName = false;
let isMouseHoveringLastName = false;

let hoveredLeft = [];
let hoveredRight = [];
let hovered = [];

let mainHover = false;

let transitioned = [];

for(let i = 0; i < project.length; i++){
    hoveredLeft[i] = false;
    hoveredRight[i] = false;
    hovered[i] = false;
    transitioned[i] = true;
}

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
      }, 2000);

setTimeout(() => {
lastnameI.style.transition = '100ms';
lastnameS.style.transition = '100ms';
lastnameA.style.transition = '100ms';
lastnameK.style.transition = '100ms';
lastnameO.style.transition = '100ms';
lastnameV.style.transition = '100ms';
lastnameI2.style.transition = '100ms';
lastnameC.style.transition = '100ms';
    }, 2600);

let backgroundNumber = backgroundOfMainPage.length-1;
let ticks = 0;
let transparency = 1.0;
let on = false;
let done = true;
let count = 0;

skill[0].style.marginLeft = '0px';
coolWords[0].style.marginLeft = '-1500px';

function tick(){
    if(coolWords[coolWords.length-1].offsetWidth - 1450 < parseInt(coolWords[0].style.marginLeft)){
        movingText.insertBefore(coolWords[coolWords.length-1].cloneNode(true), movingText.firstChild);
        coolWords[coolWords.length-1].remove();
        coolWords = document.getElementsByClassName("coolWords");
        coolWords[0].style.marginLeft = '-1500px';
        coolWords[1].style.marginLeft = '50px';
    }
    else{
        coolWords[0].style.marginLeft = (parseInt(coolWords[0].style.marginLeft) + 1)+ "px";
    }

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

        if(mainHover){
            mainImage.style.transform = "scale(103%)";
        }
    }
    else{
        mainImage.style.transform = "translateX(-550px)";
        mainImage.style.opacity = 0;
        informationSection.style.transform = "translateX(1050px)";
        informationSection.style.opacity = 0;
        skills.style.opacity = 0;
    }

    if(leftSection.getBoundingClientRect().y < 1350){
        leftSection.style.transform = "translateX(0px)";
        rightSection.style.transform = "translateX(0px)";
        awardsPage.style.opacity = "1";
        awardsPage.style.transform = "translateY(0px)";
    }
    else{
        leftSection.style.transform = "translateX(-500px)";
        rightSection.style.transform = "translateX(500px)";
        awardsPage.style.opacity = "0";
        awardsPage.style.transform = "translateY(500px)";
    }

    for(let i = 0; i < project.length; i++){
        if(window.scrollY > project[i].getBoundingClientRect().y+200){
                project[i].style.opacity = 1;
                project[i].style.transform = "scale(100%)";
                
                if((hoveredLeft[i] || hoveredRight[i]) && transitioned[i]){
                    project[i].style.transition = "0.05s";
                    if(hoveredLeft[i]){
                        project[i].style.transform = `scale(1.01) rotateZ(${-6}deg)`;
                    }
                    else if(hoveredRight[i]){
                        project[i].style.transform = `rotateZ(${6}deg) scale(1.01)`;
                    }
                    project[i].style.cursor = "pointer";
                    project[i].style.border = "1px solid black";
                    project[i].style.zIndex = "1000";

                }
                else if(hovered[i]){
                    project[i].style.border = "1px solid black";
                }
                else{
                    project[i].style.zIndex = "1";
                    project[i].style.border = "1px solid rgba(0, 0, 0, 0)";
                }
        }
        else{
            project[i].style.transition = "1.5s";
            project[i].style.opacity = 0;
            project[i].style.transform = "scale(0%)";
            project[i].style.border = "none";
            
        }
    }
    
    if(done){
        hand.style.transform = "rotate(75deg)";
        done = false;           
    }
    
    if(!done){
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

projects.addEventListener("click", function() {
    var scrollPosition = projectsSection.offsetTop-120;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});

projects2.addEventListener("click", function() {
    var scrollPosition = projectsSection.offsetTop-120;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
    dropdown.style.display = 'none';
});

awardsButton.addEventListener("click", function() {
    var scrollPosition = awardsPage.offsetTop-100;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});

awardsButton2.addEventListener("click", function() {
    var scrollPosition = awardsPage.offsetTop-100;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
    dropdown.style.display = 'none';
});

for(let i = 0; i < project.length; i++){

    project[i].addEventListener('mouseover', () => {
        hovered[i] = true;
        videos[i].style.display = "block";
        imageSection[i].style.display = "none";

    });
    project[i].addEventListener('mouseout', () => {
        hovered[i] = false;
        videos[i].style.display = "none";
        imageSection[i].style.display = "block";
    });

    project[i].addEventListener('transitionend', function(event) {
        transitioned[i] = true;
    });

    project[i].addEventListener('transitionstart', function(event) {
        if(!hoveredLeft[i] && !hoveredRight[i]){
            transitioned[i] = false;
        }
    });
}

for(let i = 0; i < left.length; i++){
    left[i].addEventListener('mouseover', () => {
        hoveredLeft[i] = true;
        left[i].style.width = "100%";
        right[i].style.display = "none";
    });

    left[i].addEventListener('mouseout', () => {
        hoveredLeft[i] = false;
        left[i].style.width = "50%";
        right[i].style.display = "block";
    });
    right[i].addEventListener('mouseover', () => {
            hoveredRight[i] = true;
            right[i].style.width = "100%";
            left[i].style.display = "none";
            right[i].style.left = "0px";
    });
    right[i].addEventListener('mouseout', () => {
        hoveredRight[i] = false;
        right[i].style.width = "50%";
        left[i].style.display = "block";
        right[i].style.left = "50%";
});

}

mainImage.addEventListener('mouseover', () => {
    mainHover = true;
});

mainImage.addEventListener('mouseout', () => {
    mainHover = false;
});

mainImage.addEventListener("click", function() {
    var scrollPosition = projectsSection.offsetTop - 100;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});