function obterParametroURL(nome) {
    const urlSearchParams = new URLSearchParams(window.location.search);//propriedade search procura o que vêm após "?"
    return urlSearchParams.get(nome);
  }
  
  // Obtendo o ID do usuário da URL
  const userID = obterParametroURL('userID');
  console.log(userID)
  
  let nome = document.getElementById("nome")
  let imgCuidador = document.getElementById("imgCuidador")
  let telefone = document.getElementById("telefone")
  let emailTelaUser = document.getElementById("emailTelaUser")
  let dataNasc = document.getElementById("dataNasc")
  let descricaoPet = document.getElementById("descricaoPet")
  let pet1Foto = document.getElementById("pet1Foto")
  let pet1Nome = document.getElementById("pet1Nome")
  console.log(pet1Nome)
  let pet2Nome = document.getElementById("pet2Nome")
  let pet3Nome = document.getElementById("pet3Nome")
  
  let listaUsuarios = [ /*array de objetos, cada objeto contém as informações dos usuários*/
        {
            userIDcad:"001",
            nome:'Rosana',
            foto: '/img/hero01.jpg',
            emailCad:'rosana@pethero.com.br',
            telefone:'(47)99999-8888',
            dataNasc:'12/12/1992',
            descricaoPet: 'Dócio, brincalhão...',
            pet1Nome: 'Thor',
            pet2Nome: 'Bob',
            pet2Nome: 'Lolla',
            pet1Foto: '../img/adoteUmPet/dog1.jpg',
            
        },
  
        {
            userIDcad:"002",
            nome:'Ana',
            foto: '/img/hero02.jpg',
            emailCad:'ana@mail.com',
            telefone:'(00) 91234-5678',
            dataNasc:'30/12/1994',
            descricaoPet: 'Dócio, brincalhão...',
            pet1Nome: 'Bella',
            pet1Foto: '../img/adoteUmPet/dog2.jpg',
        }
    ]
  
    listaUsuarios.forEach((item) => { /*verificando cada item o array de objetos*/
    if(userID == item.userIDcad){        
        nome.innerText = item.nome
        imgCuidador.src = item.foto
        telefone.innerHTML = item.telefone
        emailTelaUser.innerHTML = item.emailCad
        dataNasc.innerHTML = item.dataNasc
        descricaoPet.innerHTML = item.descricaoPet
        pet1Foto.src = item.pet1Foto        
        pet1Nome.textContent = item.pet1Nome
    }
    
  })
  