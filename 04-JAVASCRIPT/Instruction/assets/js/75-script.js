import {students} from "../data/students.js"

const tblBody = document.getElementById("tblBody");

document.getElementById("btnShowLowScore").addEventListener("click", ()=>{
    setColorForLowScores()
})


//function to select scores <50 and changes color to red
const setColorForLowScores = ()=>{
    const trEls = document.querySelectorAll("#tblBody tbody tr")
   // console.log(trEls)
    trEls.forEach((tr)=>{
        const score =tr.querySelector("td:last-child").innerText;
       // console.log(score)
        if(score < 50){
            tr.classList.add("table-danger");
        }
    })

}

const loadData = ()=>{
    let html = "";

    students.forEach((std)=>{
        html += `
            <tr>
                <td >${std.id}</td>
                <td >${std.name}</td>
                <td >${std.point}</td>
                <td ><button class="btn btn-link btn-del" >🗑️</button></td>
            </tr>
        `;

        document.querySelector("#tblBody tbody").innerHTML = html
    })


}

tblBody.addEventListener("click", (e)=>{
    
   if(e.target.classList.contains("btn-del")){
        const name = e.target.closest("tr").children[1].innerText;
        const result =  confirm(`Are you sure to delete ${name}`);
   }
    
})


loadData()

/*
document.querySelectorAll(".btn-del").forEach((btn)=>{
    console.log(btn)
    btn.addEventListener("click", (e)=>{
        alert(e.target)
    })
    
})
*/