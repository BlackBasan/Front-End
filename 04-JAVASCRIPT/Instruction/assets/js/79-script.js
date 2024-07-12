const txtSnn = document.getElementById("txtSnn")
const btnUpdate = document.getElementById("btnUpdate")

txtSnn.addEventListener("input", (e)=>{
    const ssnNum = e.target.value;
    if(ssnNum && ssnNum.length === 11){
        btnUpdate.removeAttribute("disabled")
    }else{
        btnUpdate.setAttribute("disabled","true");
    }
})