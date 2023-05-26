let modeCounter = 0;
let element = document.querySelector("#mode");
element.addEventListener("mouseover",checkmode);
element.addEventListener("mouseout",checkmode);
function checkmode(){
    modeCounter++;
    console.log(`${modeCounter}`);
    if(modeCounter%2==0){
        daymode();
    } else {
        nightmode();
    }
}
function nightmode(){
    document.body.style.background = "#131958";
    document.body.style.transition = "background cubic-bezier(0.55,0.41,0.65,0.65) 0.5s";
    document.querySelector("#mode").innerHTML = "Night mode";
    document.querySelector("#main").style.transition = "background cubic-bezier(0.55,0.41,0.65,0.65) 0.5s"; 
    document.querySelector("#main").style.padding = "5rem";
    document.querySelector("#main").style.background = "rgb(62,60,60)";
    document.querySelector("#main").style.color = "aliceblue";
}
function daymode(){
    document.body.style.background = "aliceblue";
    document.body.style.transition = "background cubic-bezier(0.55,0.41,0.65,0.65) 0.5s";
    document.querySelector("#mode").innerHTML = "Day mode";
    document.querySelector("#mode").style.background = "#232f3e";
    document.querySelector("#main").style.transition = "background cubic-bezier(0.55,0.41,0.65,0.65) 1s"; 
    document.querySelector("#main").style.padding = "";
    document.querySelector("#main").style.background = "";
    document.querySelector("#main").style.color = "";
    
}