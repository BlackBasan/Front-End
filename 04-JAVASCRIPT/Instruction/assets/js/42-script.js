
let randomNumber = 0;
const btnGuess = document.querySelector(".btn-guess");
const btnStart = document.querySelector(".btn-start");
const numEL = document.querySelector("#txtNumber");
const labelEl = document.querySelector("#lblResult");



const start = ()=>{
    //display guess button
    btnGuess.style.display = "inline"
    //generate random number
    randomNumber = generateRandomNumber(1, 100) ;
    console.log(randomNumber)
    //change text on button 
    btnStart.innerHTML = "Reset Game"
    numEL.value = "";
    //enable input el
    numEL.removeAttribute ("disabled");
    
    numEL.focus();

    //clean lblResult
    labelEl.textContent ="";
}


const reset =()=>{
    btnGuess.style.display = "none";
    btnStart.innerHTML = "Start Game"
    numEL.setAttribute("disabled", true);
}

const guess = ()=>{

    

    //compare input value to random number 
    let num = Number(numEL.value)

    /*
    if(!num) {
        num = 0;
    }
    */

    num = num || 0;

    //update label



    if(num === randomNumber){
        labelEl.innerHTML = "Congrats! You got the number!"
        reset();
    }else if (num>randomNumber){
        labelEl.innerHTML = "Enter smaller number"
    }else{
        labelEl.innerHTML = "Enter larger number"
    }

}


//function to generate random number
const generateRandomNumber = (min, max) =>{
    return Math.floor(Math.random() * (max-min+1))+min
}