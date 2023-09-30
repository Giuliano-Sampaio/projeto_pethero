
let formulario = document.getElementById("form")
let button = document.getElementById ("button")

let listaUsuarios = [ /*array de objetos, cada objeto contém as informações dos usuários*/
        {
            emailCad:'rosana@pethero.com.br',
            senhaCad:'654321',
            userIDcad:"001"
        },

        {
            emailCad:'bianca@hotmail.com',
            senhaCad:'123456',
            userIDcad:"002"
        }
    ]





formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    let inputEmail = document.getElementById("imputEmail")
    let inputSenha = document.getElementById("imputSenha")
    
    listaUsuarios.forEach((item) => { /*verificando cada item o array de objetos*/
        if(inputEmail.value == item.emailCad && inputSenha.value == item.senhaCad){
            const userID = item.userIDcad
            window.location.href = `contaCuidador.html?userID=${userID}`;
            
        }
        else{
            alert("usuário ou senha incorretos")
        }
    })
  });

    

    