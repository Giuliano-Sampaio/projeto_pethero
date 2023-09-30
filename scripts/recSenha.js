
function confirmarEmail(email) {
            const emailDeRecuperacao = "pethero@example.com.br";

            return email === emailDeRecuperacao;
        }
        function verificarEmail() {
            const emailDigitado = document.getElementById("email").value;
            const messageDiv = document.getElementById("message");

            if (confirmarEmail(emailDigitado)) {
                messageDiv.innerHTML = "E-mail de recuperação válido. Enviando instruções de recuperação.";
                messageDiv.style.color = "green";
                return true; 
            } else {
                messageDiv.innerHTML = "Endereço de e-mail de recuperação inválido. Por favor, verifique o e-mail digitado.";
                messageDiv.style.color = "red";
                return false; 
            }
        }
    
