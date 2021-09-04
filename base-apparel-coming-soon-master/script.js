const input = document.querySelector(".email");
const form = document.querySelector(".form");
const btn = document.querySelector(".btn");

const error = document.querySelector(".error");
const iconError = document.querySelector(".icon-err");

btn.addEventListener("click", (e) =>{
    let errMess = [];
    const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(input.value === "" || !input.value.match(emailValid))
    {
        errMess.push("Please provide a valid email");
    }

    if(errMess)
    {
        e.preventDefault();
        error.innerText = errMess;
        iconError.style.opacity = 1;

        input.classList.add("input-error");

        
    }

    // if(errMess.length ===0)
    // {
    //     iconError.style.opacity = 0;
        
    // }


});