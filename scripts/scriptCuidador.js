function obterParametroURL(nome) {
    const urlSearchParams = new URLSearchParams(window.location.search);//propriedade search procura o que vêm após "?"
    return urlSearchParams.get(nome);
}

let nome = document.getElementById("nome")
let imgCuidador = document.getElementById("imgCuidador")

// Obtendo o ID do usuário da URL
const userID = obterParametroURL('userID');
console.log(userID)

let listaUsuarios = [ /*array de objetos, cada objeto contém as informações dos usuários*/
        {
            userIDcad:"001",
            nome:'Rosana',
            foto: '../img/hero01.jpg',
            emailCad:'rosana@pethero.com.br',
            telefone:'(47)99999-8888',
            dataNasc:'12/12/1970',
            descricao: 'Minha vida é lutar pelos animais que são abandonados a propria sorte, para mim eles são anjinhos que não falam a nossa lingua mas estão neste mundo apenas para nos dar amor. Se vc se identifica com essa causa Junte-se a mim',
            pet1Nome: 'Bella',
            pet1Foto: '../img/adoteUmPet/dog1.jpg',
            
        },

        {
            userIDcad:"002",
            nome:'Ana',
            foto: '../img/hero02.jpg'
        }
    ]

    listaUsuarios.forEach((item) => { /*verificando cada item o array de objetos*/
    if(userID == item.userIDcad){        
        nome.innerHTML = item.nome
        imgCuidador.src = item.foto       
    }
    
})
