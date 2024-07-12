import {countries} from "../data/countries.js"

//console.log(countries)

const loadData=()=>{
    let options = "";
    for(let country of countries){
        //console.log(country.name.common)
        options += ` <option value="${country.cca3}">${country.name.common}</option>`

    }
    const ddlSelect = document.querySelector("#ddlSelect");
    ddlSelect.innerHTML = options;
}

loadData()