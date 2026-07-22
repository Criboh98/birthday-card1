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


// inventory

const inventoryButton =
document.getElementById("inventoryButton");

const inventoryPanel =
document.getElementById("inventoryPanel");

const inventoryList =
document.getElementById("inventoryList");



let inventory = [];



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
// LOADING SCREEN
// =========================


let progress = 0;


const loadingMessages = [

"Preparing the ship...",
"Raising the sails...",
"Gathering the crew...",
"Finding the treasure map...",
"The Lily is ready..."

];



const loadingTimer=setInterval(()=>{


progress +=20;


loadingProgress.style.width =
progress+"%";


loadingText.innerText =
loadingMessages[(progress/20)-1];



if(progress>=100){


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


if(quest && quest.innerHTML.includes("☐")){


quest.innerHTML =
quest.innerHTML.replace("☐","☑");


}


}





// =========================
// INVENTORY SYSTEM
// =========================


function addItem(item){


if(!inventory.includes(item)){


inventory.push(item);


updateInventory();


}


}



function updateInventory(){


inventoryList.innerHTML="";


inventory.forEach(item=>{


const li=document.createElement("li");

li.innerHTML="🗺️ "+item;


inventoryList.appendChild(li);


});


if(inventory.length===0){


inventoryList.innerHTML=
"<li>No items yet</li>";


}


}



inventoryButton.addEventListener("click",()=>{


inventoryPanel.style.display =
inventoryPanel.style.display==="block"
?"none"
:"block";


});






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


},1200);


});







// =========================
// HARBOR OBJECTS
// =========================


const crate =
document.getElementById("crate");


const wheel =
document.getElementById("wheel");


const mapClue =
document.getElementById("mapClue");





crate.addEventListener("click",()=>{


showMessage(
"📦 Inside the crate you discover an old pirate symbol. The Lily's journey has begun."
);


});






wheel.addEventListener("click",()=>{


showMessage(
"⚓ The ship wheel turns smoothly. The Lily is ready for the voyage."
);


});






mapClue.addEventListener("click",()=>{


addItem("Voyage Map");


showMessage(
"🗺️ You found the Voyage Map! It may reveal the path to the islands."
);


});









// =========================
// CREW SYSTEM
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




const crew={


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
"I discovered signs of the lost treasure map."

},


luna:{


name:"Luna",


text:
"I am ready for adventure! The stars are guiding us."

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
// CONTINUE TO MAP
// =========================


questButton.addEventListener("click",()=>{


completeQuest("questCrew");


changeScene(
document.getElementById("mapScene")
);


});







// =========================
// WORLD MAP
// =========================



const skondalButton =
document.getElementById("skondalButton");


const portoButton =
document.getElementById("portoButton");


const hokarangenButton =
document.getElementById("hokarangenButton");





skondalButton.addEventListener("click",()=>{


changeScene(
document.getElementById("skondalScene")
);


});





portoButton.addEventListener("click",()=>{


changeScene(
document.getElementById("portoScene")
);


});





hokarangenButton.addEventListener("click",()=>{


changeScene(
document.getElementById("hokarangenScene")
);


});







// =========================
// SKÖNDAL PUZZLE
// =========================



const findMapOne =
document.getElementById("findMapOne");


findMapOne.addEventListener("click",()=>{


completeQuest("questIsland1");


completeQuest("questMap1");


addItem("Sköndal Clue");


document.getElementById("skondalResult")
.innerText =
"☑ Correct! The first clue has been discovered.";



portoButton.disabled=false;


portoButton.innerHTML =
"🌊 Porto Badisco";


showMessage(
"🗺️ Sköndal clue found! Porto Badisco is now unlocked."
);


});





document.querySelectorAll(".wrongPuzzle")
.forEach(button=>{


button.addEventListener("click",()=>{


showMessage(
"❌ That answer does not reveal the secret. Try again, Captain."
);


});


});

                          // =========================
// PORTO BADISCO PUZZLE
// =========================


const findMapTwo =
document.getElementById("findMapTwo");



findMapTwo.addEventListener("click",()=>{


completeQuest("questIsland2");


completeQuest("questMap2");


addItem("Porto Badisco Clue");



document.getElementById("portoResult")
.innerText =
"☑ Correct! The second clue has been discovered.";



hokarangenButton.disabled=false;


hokarangenButton.innerHTML =
"✨ Hökarängen";



showMessage(
"🌊 Porto Badisco clue found! The final island has appeared on the map."
);


});









// =========================
// HÖKARÄNGEN PUZZLE
// =========================


const openTreasure =
document.getElementById("openTreasure");



openTreasure.addEventListener("click",()=>{


completeQuest("questIsland3");


completeQuest("questTreasure");


addItem("The Lily Treasure");



document.getElementById("hokarangenResult")
.innerText =
"☑ Correct! The treasure has been revealed.";



setTimeout(()=>{


changeScene(
document.getElementById("treasureScene")
);


},1500);



});








// =========================
// BACK TO MAP BUTTONS
// =========================


document.querySelectorAll(".backToMapButton")
.forEach(button=>{


button.addEventListener("click",()=>{


changeScene(
document.getElementById("mapScene")
);


});


});








// =========================
// TREASURE LETTER
// =========================


const birthdayButton =
document.getElementById("birthdayButton");



birthdayButton.addEventListener("click",()=>{


changeScene(
document.getElementById("letterScene")
);


});








// =========================
// INITIAL STATE
// =========================


inventoryPanel.style.display="none";

messageBox.style.display="none";


});
