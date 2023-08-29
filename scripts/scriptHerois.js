const herois = [
  {
    //deixei esse primeiro objeto vazio para construir o card-list
  },
  {
    id: 1,
    nome: "Rosana",
    fotoCard: "../img/rosanaId1Card1.png",
    fotoModal: "../img/abrigo1000x500.jpeg",
    frase:
      "“Minha vida é lutar pelos animais que são abandonados a propria sorte, para mim eles são anjinhos que não falam a nossa lingua mas estão neste mundo apenas para nos dar amor. Se vc se identifica com essa causa Junte-se a mim.”",
    pix: "Pix CPF: 055.999.555-99",
    nomeCompleto: "Ana Paula Moreira",
    banco: "Banco do Brasil",
    cidade: "Joinville/SC",
    endereco: "Rua das Palmas 132 CEP 89230-670",
    contato: "(47)99999-8888",
    contatoTipo: "Ligação e WhatsApp",
  },
  {
    id: 2,
    nome: "Ana Maria",
    fotoCard: "../img/cuidaM1.jpeg",
    fotoModal: "../img/abrigo1000x500.jpeg",
    frase:
      "“Minha vida é lutar pelos animais que são abandonados a propria sorte, para mim eles são anjinhos que não falam a nossa lingua mas estão neste mundo apenas para nos dar amor. Se vc se identifica com essa causa Junte-se a mim.”",
    pix: "Pix CPF: 055.999.555-99",
    nomeCompleto: "Ana Paula Moreira",
    banco: "Banco do Brasil",
    cidade: "Joinville/SC",
    endereco: "Rua das Palmas 132 CEP 89230-670",
    contato: "(47)99999-8888",
    contatoTipo: "Ligação e WhatsApp",
  },
  {
    id: 3,
    nome: "Claudio PitBull",
    fotoCard: "../img/cuidaH3.jpeg",
    fotoModal: "../img/abrigo1000x500.jpeg",
    frase:
      "“Minha vida é lutar pelos animais que são abandonados a propria sorte, para mim eles são anjinhos que não falam a nossa lingua mas estão neste mundo apenas para nos dar amor. Se vc se identifica com essa causa Junte-se a mim.”",
    pix: "Pix CPF: 055.999.555-99",
    nomeCompleto: "Claudio Nazario do Nascimento",
    banco: "Banco do Brasil",
    cidade: "Joinville/SC",
    endereco: "Rua das Palmas 132 CEP 89230-670",
    contato: "(47)99999-8888",
    contatoTipo: "Ligação e WhatsApp",
  },
  {
    id: 4,
    nome: "Beatriz",
    fotoCard: "../img/cuidaM3.jpeg",
    fotoModal: "../img/abrigo1000x500.jpeg",
    frase:
      "“Minha vida é lutar pelos animais que são abandonados a propria sorte, para mim eles são anjinhos que não falam a nossa lingua mas estão neste mundo apenas para nos dar amor. Se vc se identifica com essa causa Junte-se a mim.”",
    pix: "Pix CPF: 055.999.555-99",
    nomeCompleto: "Beatriz de Oliveira",
    banco: "Banco do Brasil",
    cidade: "Joinville/SC",
    endereco: "Rua das Palmas 132 CEP 89230-670",
    contato: "(47)99999-8888",
    contatoTipo: "Ligação e WhatsApp",
  },
  {
    id: 5,
    nome: "Sebastião",
    fotoCard: "../img/cuidaH2.jpeg",
    fotoModal: "../img/abrigo1000x500.jpeg",
    frase:
      "“Minha vida é lutar pelos animais que são abandonados a propria sorte, para mim eles são anjinhos que não falam a nossa lingua mas estão neste mundo apenas para nos dar amor. Se vc se identifica com essa causa Junte-se a mim.”",
    pix: "Pix CPF: 055.999.555-99",
    nomeCompleto: "Sebastião de Souza",
    banco: "Banco do Brasil",
    cidade: "Joinville/SC",
    endereco: "Rua das Palmas 132 CEP 89230-670",
    contato: "(47)99999-8888",
    contatoTipo: "Ligação e WhatsApp",
  },
];

/* import { herois } from './repositorioHerois.js'; */
/* const { herois } = require('./repositorioHerois.js'); */

const totalHerois = herois.length;
for (let i = 0; i < totalHerois; i++) {
  if (i === 0) {
    let cardLista = document.createElement("div");//criei o elemento
    cardLista.className = "card-icon";//adicionei a classe card-icon para puxar as medidas de icone
    cardLista.id = "card-list";// adicionei o id para manipular a lista
    let listaDeHerois = document.createElement("ul");//criei o elemento lista
    for (let j = 0; j < herois.length; j++) {
      if (j === 0) {//na primeira iteração vamos criar o titulo
        let itemLista = document.createElement("li"); // Criar o elemento <li>
        itemLista.textContent = "Nossos Heróis"; // Definir o titulo <li>
        listaDeHerois.appendChild(itemLista);// adicionar o item a lista
        continue;// pula para proxima iteração do loop
      }
      let itemLista = document.createElement("li"); // Criar o elemento <li> item da lista
      itemLista.textContent = `${herois[j].nome}`; // Definir o texto do elemento <li> nome da cuidadora
      listaDeHerois.appendChild(itemLista); // Adicionar o elemento <li> à lista
    }
    cardLista.appendChild(listaDeHerois);// adicionar a lista ao card
    document.getElementById("cards").appendChild(cardLista); // Adicionar o cardLista
  } else {
    const card = `
    <div class="card-icon">
        <img
          id="heroi${i}"
          value="${i}"
          src="${herois[i].fotoCard}"
          alt="Foto Cuidadora ${herois[i].nome}"
          onclick="openModal(${i})"
        />
      </div>
    `;
    let cards = document.getElementById("cards");
    cards.insertAdjacentHTML("beforeend", card);
  }
}

function openModal(idHeroi) {
  const heroi = herois.find((item) => {
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

  <button onclick="closeModal()">Fechar</button>
  `;
  document.getElementById("container-modal-content").innerHTML =
    objetoHtmlModal;
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
