function obterParametroURL(nome) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(nome);
}

// Obtenha o ID do usuário da URL
const userID = obterParametroURL('userID');
console.log(userID)