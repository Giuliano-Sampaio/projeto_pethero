const herois = [
  { id: 1,
    nome: "Ana Maria",
    fotoCard: "../img/cuidaM1.jpeg",
    fotoModal: "../img/abrigo1000x500.jpeg",
    frase: "“Minha vida é lutar pelos animais que são abandonados a propria sorte, para mim eles são anjinhos que não falam a nossa lingua mas estão neste mundo apenas para nos dar amor. Se vc se identifica com essa causa Junte-se a mim.”",
    pix: "Pix CPF: 055.999.555-99",
    nomeCompleto: "Ana Paula Moreira",
    banco: "Banco do Brasil",
    cidade: "Joinville/SC",
    endereco: "Rua das Palmas 132 CEP 89230-670",
    contato: "(47)99999-8888",
    contatoTipo: "Ligação e WhatsApp"
       },
  {},
  {},
];

function openModal(idHeroi) {
  const heroi = herois.find((item)=> {
    return item.id === Number(idHeroi);
  });

  const objetoHtmlModal = `
  <h2>Cuidadora ${heroi.nome}</h2>

  <img id="imgCardSelected" src=${heroi.fotoModal} alt="Foto Cuidadora ${heroi.nome}"/>
  <p>${heroi.frase}</p>

  <h3>Faça uma doação</h3>

  <p>${heroi.pix}</p>

  <p>${heroi.nomeCompleto} - ${heroi.banco}</p>

  <p>ou compareça ao local para serviço volutário</p>

  <p>cidade: ${heroi.cidade} - contato: ${heroi.contato} - ${heroi.contatoTipo}</p>
  
  <p>endereço: ${heroi.endereco}</p>
  `;
  document.getElementById("container-modal-content").innerHTML = objetoHtmlModal;
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
