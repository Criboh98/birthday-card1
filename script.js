document.addEventListener("DOMContentLoaded", () => {


// =========================
// ELEMENTS
// =========================


const loadingScreen =
document.getElementById("loadingScreen");


const loadingProgress =
document.getElementById("loadingProgress");


const loadingText =
document.getElementById("loadingText");


const startButton =
document.getElementById("startButton");


const meetCrewButton =
document.getElementById("meetCrewButton");


const questButton =
document.getElementById("questButton");


const scenes =
document.querySelectorAll(".scene");



const messageBox =
document.getElementById("messageBox");


const messageText =
document.getElementById("messageText");


const closeMessage =
document.getElementById("closeMessage");






// =========================
// SCENE SYSTEM
// =========================


function changeScene(scene){


scenes.forEach(s=>{

s.classList.remove("active");

});


scene.classList.add("active");


}








// =========================
// LOADING
// =========================


let progress = 0;


const messages = [

"Preparing the ship...",

"Raising the sails...",

"Gathering the crew...",

"Finding the treasure map...",

"The Lily is ready..."

];



const loadingTimer = setInterval(()=>{


progress += 20;


loadingProgress.style.width =
progress + "%";


loadingText.innerText =
messages[(progress/20)-1];



if(progress >= 100){


clearInterval(loadingTimer);



setTimeout(()=>{


loadingScreen.style.opacity="0";


setTimeout(()=>{


loadingScreen.style.display="none";


},1000);


},500);


}


},700);









// =========================
// QUEST SYSTEM
// =========================


function completeQuest(id){


const quest =
document.getElementById(id);


if(quest){

quest.innerHTML =
quest.innerHTML.replace("☐","☑");

}


}






// =========================
// MESSAGE SYSTEM
// =========================


function showMessage(text){


messageText.innerText=text;


messageBox.style.display="block";


}



closeMessage.addEventListener("click",()=>{


messageBox.style.display="none";


});









// =========================
// START GAME
// =========================


startButton.addEventListener("click",()=>{


startButton.innerHTML =
"⛵ Sailing...";



setTimeout(()=>{


changeScene(

document.getElementById("harborScene")

);


},1500);



});









// =========================
// HARBOR QUEST
// =========================



const crate =
document.getElementById("crate");


const wheel =
document.getElementById("wheel");


const mapClue =
document.getElementById("mapClue");





crate.addEventListener("click",()=>{


completeQuest("questHarbor");


showMessage(

"📦 Inside the old crate you find a strange pirate symbol. It may be connected to the Lost Map."

);


});







wheel.addEventListener("click",()=>{


showMessage(

"⚓ The Lily is ready to sail. But the treasure map is still incomplete."

);


});







mapClue.addEventListener("click",()=>{


completeQuest("questMap");


showMessage(

"🗺️ You found a piece of the Lost Map! The path to Treasure Island is becoming clear."

);


});









// =========================
// CREW
// =========================


meetCrewButton.addEventListener("click",()=>{


changeScene(

document.getElementById("crewScene")

);


completeQuest("questCrew");


});







const characterName =
document.getElementById("characterName");


const dialogueText =
document.getElementById("dialogueText");




const crew = {


nova:{

name:"Captain Nova",

text:

"The Lily has been waiting for you, Captain Eli. Our adventure begins now."

},


mira:{

name:"Mira",

text:

"I prepared the supplies. A clever captain always plans ahead."

},


kaito:{

name:"Kaito",

text:

"I found a clue about the lost treasure map."

},


luna:{

name:"Luna",

text:

"I am ready for adventure! And I brought snacks."

}


};






function showCrew(id){


const member =
crew[id];


characterName.innerText =
member.name;


dialogueText.innerText =
member.text;



document.querySelectorAll(".crewPortrait")
.forEach(p=>{

p.classList.remove("selected");

});



document.getElementById(id)
.classList.add("selected");


}






document.querySelectorAll(".crewPortrait")
.forEach(member=>{


member.addEventListener("click",()=>{


showCrew(member.id);


});


});





showCrew("nova");









// =========================
// QUEST BUTTON
// =========================


questButton.addEventListener("click",()=>{


showMessage(

"🗺️ Your first mission: Search the harbor and find the missing piece of the Lost Map."

);


});





});
