
const priceArr = document.querySelector("#priceArr");
const resultEl = document.querySelector("#result");
const btnEl = document.querySelector("#btnEl");

const prices = [100, 300, 500, 5500];
priceArr.innerHTML = prices;

btnEl.addEventListener("click", ()=>{
    const newPrices = setPrice(prices, 20)
    if(newPrices){
        resultEl.innerHTML = newPrices;
    }else{
        alert('Error');
    }
});


const setPrice = (arr, rate)=>{
   if(!arr || !Array.isArray || arr.length <=0) return false; 
   if(!rate || isNaN(rate)) return false;

   const newArr = Object.assign([], arr) //create shallow copy of array

   for(let i = 0; i<arr.length; i++){
    newArr[i] = newArr[i] + newArr[i] * rate /100
   }
   return newArr;
}



