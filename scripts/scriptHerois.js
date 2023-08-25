const herois = [
  { id: 1,
    nome: "Ana Maria",
    fotoCard: "../img/cuidaM1.jpeg",
    fotoModal: "",
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
/*
function openModal(idHeroi) {
  const heroi = herois.find((item)=> {
    return item.id === Number(idHeroi);
  })
  document.getElementById("myModal").style.display = "flex";
}
 */

function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

/*
  `Cuidadora ${heroi.nome}`
  foto ${heroi.fotoModal}
  heroi.frase
  heroi.pix


*/

/* <!-- <section class="selected">
        <h2>Cuidadora Ana Maria</h2>
        <div class="card-selected">
          <img
            id="imgCardSelected"
            src="../img/abrigo1000x500.jpeg"
            alt="Foto Cuidadora Ana Paula"
          />
          <p>
            “Minha vida é lutar pelos animais que são abandonados a propria
            sorte,<br />
            para mim eles são anjinhos que não falam a nossa lingua mas estão
            nesse<br />
            mundo apenas para nos dar amor. Se vc se identifica com essa
            causa<br />
            Junte-se a mim.”
          </p>

          <h3>Faça uma doação</h3>
          <p>Pix CPF: 055.999.555-99</p>
          <span>Ana Paula Moreira</span>
          <span> - </span>
          <span>Banco do Brasil</span>
          <p>ou compareça ao local para serviço volutário</p>
          <span>cidade: </span>
          <span>Joinville/SC</span>
          <p>endereço: Rua das Palmas 132 CEP 89230-670</p>
        </div>
      </section> --> */

