  function toggleSenha() {
            const input = document.getElementById("senha");

            if (input.type === "password") {
                input.type = "text";
            } else {
                input.type = "password";
            }
        }

        const form = document.querySelector("form");

        form.addEventListener("submit", function(e){
            e.preventDefault();

            let email = document.getElementById("email").value;
            let senha = document.getElementById("senha").value;

            if (email === "" || senha === "") {
                alert("Preencha todos os campos");
            } else {
                alert("Login enviado!")
            }
        });