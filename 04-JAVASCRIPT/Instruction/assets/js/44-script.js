
const txtScore1 = document.querySelector("#txtScore1");
const txtScore2 = document.querySelector("#txtScore2");
const txtScore3 = document.querySelector("#txtScore3");
const btnAverage = document.querySelector("#btnAverage");


btnAverage.addEventListener("click", ()=>{
    //get values of 3 inputs
    const score1 = txtScore1.value;
    const score2 = txtScore2.value;
    const score3 = txtScore3.value;
    //calculate average
    const avg = calculateAverage(score1, score2, score3);
    
    if(!avg){
        alert("enter valid score")
        return;
    }
    //convert average to Letter
    const letter = convertScoreToLetter(avg);
    //display result
    alert(`Average score is: ${avg.toFixed(2)}. Grade is: ${letter}`)

})

//function to calculate average

const calculateAverage = (num1, num2, num3) => { 

    if(!isScoreValid(num1) || !isScoreValid(num2) || !isScoreValid(num3)){
        return false;      
    }

    const avg = (Number(num1) + Number(num2) + Number(num3))/3
    return avg;
 }

//function to convert number score to letter
const convertScoreToLetter = (num) => { 
    if(!isScoreValid(num)){
        return false;
    }
    //return letter
    if(num >=90 && num<100){
        return "A";
    }else if(num>=80 && num<90){
        return "B";
    }else if(num>=70 && num<80){
        return "C";
    }else if(num>=50 && num<70){
        return "D";
    }else{
        return "F"
    }
 }

//function to check if it is valid score or not
 const isScoreValid = (score) => { 
    return ( (score || score===0 ) && !isNaN(score) && score<=100 && score>=0)
  }