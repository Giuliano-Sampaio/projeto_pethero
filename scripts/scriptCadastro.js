const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("password");
const contatoInput = document.querySelector("#contato");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    //verifica se o nome esta vázio

    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome");
        return;
    }

    //verifica se o email está preenchido e se é válido
    if(emailInput.value ==="" || isEmailValid(emailInput.value)){
     alert("Por favor, preencha o seu e-mail");
    return;

    }

    if(!validatePassword(passwordInput.value,8)){
        alert("A senha precisa de no mínimo 8 digitos");
        return;
    }

    //se todos os campos estiverem corretamente preenchidos envie o form
    form.submit();
});

//Função que valida email 

function isEmailValid(email){
    const emailRegex = new RegExp{
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

    };
    if(emailRegex.test(email)){
        return true
    }
    return false;
}

//Função que valida a senha 

function validatePassword(password,minDigits){
    if(password.length >= minDigits){
        return true
    }

    return false

}