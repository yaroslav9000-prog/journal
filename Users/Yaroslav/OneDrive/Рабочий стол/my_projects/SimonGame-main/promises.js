// const fetchPromise = fetch(
//     "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );

// fetchPromise
//     .then((response)=>{
//         if(!response.ok){
//             throw new Error(`HTTP error: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data[0].name);
//     })
//     .catch((error)=>{
//         console.log(`Could not get products: ${error}`);
//     });
const randomNumber = ()=>{
    return Math.floor(Math.random() * 4);
}

const topLeft = document.getElementById("top-left");
const topRight = document.getElementById("top-right");
const botLeft = document.getElementById("bot-left");
const botRight = document.getElementById("bot-right");

const buttons = [
    topLeft,
    topRight,
    botLeft,
    botRight   
];
const buttonsToClick = [];
let clicksToGuess = [...buttonsToClick];
const updateClickedList = ()=>{
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            buttonsToClick.push(buttons[randomNumber()]);
            clicksToGuess = [...buttonsToClick];
            
            resolve()}
            , 400
            )
    
})   
}
const makeItFlash = (buttonToFlash) =>{
    return new Promise((resolve, reject)=>{


    setTimeout(()=>{
        buttonToFlash.classList.add("flash");
        setTimeout(()=>{
            buttonToFlash.classList.remove("flash");
        }, 300)
        resolve();
    }, 400)
    
})
}
let canClick = false;
const actionButton = (someButton) =>{
    //I also can limit the player clicking until the panels finished playing
    if(!canClick) return;
    makeItFlash(someButton);
    const firstOnList = clicksToGuess.shift();
    if(someButton !== firstOnList){
        console.log("You missed the button");
        return;
    }else{
        console.log("Good job");
        console.log(clicksToGuess);
    }
    if(clicksToGuess.length == 0){
        theGame();
    }
    
    //Everytime player clicks the button its going to be compared with the first one of pc clicked.
    //shift method removes first element from the list and keeps 
}
const theGame = async ()=>{
    // cloning of list is good in case of this game because the original list is kept saved and 
    // cloned one is one that gets changed     
    await updateClickedList()
    for(let index = 0; index < buttonsToClick.length; index++){
        await makeItFlash(buttonsToClick[index]);
    }
    canClick = true;        
    

}
window.addEventListener("keydown", ()=>{
    theGame();
})