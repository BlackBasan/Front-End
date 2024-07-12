import {countries} from "../data/countries.js"
//console.log(countries)
const tblCountry = document.querySelector("#tblCountry");
const ddlSelect = document.querySelector("#ddlSelect");
const totalAreaEl = document.querySelector("#totalArea");

ddlSelect.addEventListener("change", (e)=>{
    const selectedValue = e.target.value; //value selected country (cca3)
    //console.log(selectedValue)
    const selectedCountry = getCountry(selectedValue); //holds 1 country obj
    //console.log(selectedCountry)
    fillTableData(selectedCountry);

})

const loadData=()=>{
    let options = ` <option disabled selected>Select a Country</option>`;
    for(let country of countries){
        //console.log(country.name.common)
        options += ` <option value="${country.cca3}">${country.name.common}</option>`

    }
    
    ddlSelect.innerHTML = options;
    totalAreaEl.innerHTML = `The total area of all countries: ${getTotalAea()}`

}




//function to return a country which has passed code
const getCountry = (countryCode)=>{
    const filteredCountry = countries.filter((country)=>country.cca3 === countryCode)
    //if there is no match return, if there is match return first element
    return filteredCountry.length > 0 ? filteredCountry[0] : null;
}

//function to fill table data
const fillTableData=(countryObj)=>{
    const capitalCity = countryObj.capital.join(", ");
    const currency = Object.keys(countryObj.currencies).join(", ")
    const language = Object.values(countryObj.languages).join(", ")
    const area = countryObj.area;
    const map = `<a href="https://google.com/maps/@${countryObj.latlng.toString()},6z" target="_blank">Go to google map</a>`;

    tblCountry.querySelector("tr:nth-child(1) td").innerHTML = capitalCity;
    tblCountry.querySelector("tr:nth-child(2) td").innerHTML = currency;
    tblCountry.querySelector("tr:nth-child(3) td").innerHTML = language;
    tblCountry.querySelector("tr:nth-child(4) td").innerHTML = area;
    tblCountry.querySelector("tr:nth-child(5) td").innerHTML = map;

    tblCountry.style.display = "block"

}

const getTotalAea = ()=>{
    const totalArea = countries.reduce((total, country)=>total + country.area, 0)
    return totalArea.toFixed(2);
}

loadData()

