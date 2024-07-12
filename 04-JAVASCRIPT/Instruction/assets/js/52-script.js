

const arr = [34, 54, 2, 56, 7, 777, 45, 23]
let nullArr;
const arrEl = document.querySelector("#arrEl");
const maxEl = document.querySelector("#maxEl");
const buttonEl = document.querySelector("#btnEL");

arrEl.innerHTML = arr;

buttonEl.addEventListener("click", ()=>{
    const maxNumber = getMaxNumber(arr);
    if(maxNumber){
        maxEl.innerHTML = `Maximum number in array is : ${maxNumber}`
    }else{
        alert('Array is empty')
    }
    //console.log(maxNumber)
    
})

//function finds max number from array
const getMaxNumber = (arr)=>{
    //check if it is valid arr
    if(!arr || !Array.isArray(arr) || arr.length<=0) return false;

    //arr = [34, 54, 2, 56, 7, 777, 45, 23]
    let maxNum = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(maxNum < arr[i]){
            maxNum = arr[i];
        }
    }
    return maxNum;
}
