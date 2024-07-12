import {countries} from "../data/countries.js";

const txtSearch = document.getElementById("txtSearch");
const resultBox = document.getElementById("resultBox");
let timer = null;

//function to filter countries
const filterCountry = (val) => { 
    if(!val) return [];
    return countries.filter((county)=>
    county.name.common.toLowerCase().includes(val.toLowerCase()))
 }

 //function to fill ul element

 const setSerchBox = (items) => { 
    resultBox.innerHTML = "";

    if(items.length<=0){
        resultBox.style.display = "none"
        return;
    }

    items.forEach((item)=>{
        let li = document.createElement('li');
        li.textContent= item.name.common;   
        resultBox.appendChild(li);
    })
    resultBox.style.display = "block"
  }


txtSearch.addEventListener("input", (e)=>{
    //to clear timer which was set already
   if(timer)  clearTimeout(timer)
   // console.log(e.target.value);
    timer = setTimeout(()=>{
        const filteredCountries= filterCountry(e.target.value);
        setSerchBox(filteredCountries)
    }, 500)
})