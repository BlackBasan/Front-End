
const frmLogin = document.getElementById("frmLogin");

frmLogin.addEventListener("submit", (e)=>{
    e.preventDefault();  //to prevent the default behaviour of submit button

    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword")

    try {
        
        const email = txtEmail.value;
        const password = txtPassword.value;

        if(!email || !isEmail(email)) throw new Error("Please enter a valid email");
        if(!password) throw new Error ("Enter password")

        e.target.submit();

    } catch (err) {
        console.log(err);
        alert(err)
    }
    finally{
        
    }

})

//function to check if email is valid;
const isEmail = (email) => { 
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return emailRegex.test(email)
 }