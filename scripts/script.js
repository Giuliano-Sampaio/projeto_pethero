'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

// Função para abrir o modal
function openModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

// Fechar o modal se o usuário clicar fora dele
window.onclick = function(event) {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}


  // Função para abrir o modal e preenchê-lo com informações
  function openModal(nome, raca, idade) {
    var modal = document.getElementById("myModal");
    var nomeElement = modal.querySelector("h3");
    var racaElement = modal.querySelector("h4:nth-of-type(1)");
    var idadeElement = modal.querySelector("h4:nth-of-type(2)");

    nomeElement.textContent = "Nome: " + nome;
    racaElement.textContent = "Raça: " + raca;
    idadeElement.textContent = "Idade: " + idade;

    modal.style.display = "block";
  }

  // Função para fechar o modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }


/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);