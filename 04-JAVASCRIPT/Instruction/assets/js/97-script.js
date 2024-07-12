import randomSort, { numberSortASC, numberSortDESC, stringSortASC, stringSortDESC } from "../modules/sort.js";

const numbers = [23, 1, 8, 5, 7, 45, 12, 16, 34, 25]
const names = ["Zidane", "Şener", "Ronaldo", "Xavi", "Babel", "Mbappe"]

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

btn3.addEventListener("click", ()=>{
    numberSortASC(numbers);
    console.log(numbers)
})


btn4.addEventListener("click", ()=>{
    numberSortDESC(numbers);
    console.log(numbers)
})


btn1.addEventListener("click", ()=>{
    stringSortASC(names);
    console.log(names)
})

btn2.addEventListener("click", ()=>{
    stringSortDESC(names);
    console.log(names)
})

btn5.addEventListener("click", ()=>{
    randomSort(numbers);
    console.log(numbers)
})