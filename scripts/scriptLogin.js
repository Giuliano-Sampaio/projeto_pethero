
let formulario = document.getElementById("form")
let button = document.getElementById ("button")

let listaUsuarios = [ /*array de objetos, cada objeto contém as informações dos usuários*/
        {
            emailCad:'rosana@pethero.com.br',
            senhaCad:'123456',
            userIDcad:"001"
        },

        {
            emailCad:'ana@mail.com',
            senhaCad:'123456',
            userIDcad:"002"
        }
    ]

formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    let inputEmail = document.getElementById("imputEmail")
    let inputSenha = document.getElementById("imputSenha")
    let userID
    let autentic = false
        
    listaUsuarios.forEach((item) => { /*verificando cada item o array de objetos*/
    
        if(inputEmail.value == item.emailCad && inputSenha.value == item.senhaCad){
            userID = item.userIDcad
            autentic = true            
        }
        
    })

    if (autentic == true) {        
        window.location.href = `../pages/dashboard/dashboardUser.html?userID=${userID}`;
        return;
    }
    else{
        alert("Usuário ou senha incorretos")        
    }

  });


    

    