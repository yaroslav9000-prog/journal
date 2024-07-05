
const pcClicking = ()=>{
    return Math.floor(Math.random()*4);
}
let pcSequence = [];
let playerSequence = [];
const buttonColors = ["red", "yellow", "green", "blue"];
let gameIsOn = true;

const makeFlash = (objectToFlash)=>{
    return new Promise((resolve, reject)=>{
        objectToFlash.fadeOut(100);
        setTimeout(()=>{
            objectToFlash.fadeIn(100);
            resolve();
        }, 150)
        
    })
}


// loop below traverses through list of pc clicked buttons
const nextSequence = ()=>{
    const randomColor = buttonColors[pcClicking()];
    pcSequence.push(randomColor);
    
    //promise section.    
}

const main = async () =>{
    nextSequence();
    for(const objectOfSequence of pcSequence){
        await makeFlash(objectOfSequence)
    }
}
main();
console.log("i exited the function");
$(".square").click((event)=> {
    $(`#${event.target.id}`).fadeOut(100).fadeIn(100);
    playerSequence.push(event.target.id);
    for(let index = 0; index < playerSequence.length; index++){
        if(playerSequence[index] !== pcSequence[index]){
            gameIsOn = false;
        }
    }    
    console.log(playerSequence);
})

