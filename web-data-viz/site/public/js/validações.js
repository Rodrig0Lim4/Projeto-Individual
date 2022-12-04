//TELA DE CADASTRO
function cadastrar() {
    var nome = input_nome.value;
    var email = input_email.value;
    var senha = input_senha.value;
    var repetir_senha = input_repetir_senha.value;


    if (nome.length < 2) {
        alert('Nome Inválido!');
    }
    else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        alert('Preencha seu email corretamente!');
    }
    else if (senha.length < 8) {
        alert('Sua senha precisa ter no minimo 8 caracteres!');
    }
    else if (repetir_senha.length == 0) {
        alert('Insira sua senha novamente!');
    }
    else if (senha != repetir_senha) {
        alert('Os campos não coincidem!');
    }
    else {
        // Enviando o valor da nova input
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nome,
                emailServer: email,
                senhaServer: senha
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {

                alert(`Cadastro realizado com sucesso! Seja bem vindo(a) ${nome}`);
                window.location.replace("./login.html");

            } else {
                alert("Houve um erro ao tentar realizar o cadastro!");
            }
        });
    }
}

//TELA DE LOGIN
function entrar() {

    var email = input_login.value;
    var senha = input_senha.value;

    if (email == "" || senha == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
    }

    console.log("FORM LOGIN: ", email);
    console.log("FORM SENHA: ", senha);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;

                alert("Bem vindo de volta!")
                window.location.replace("./index_logado.html");
            
            });

        } else {
            console.log("Houve um erro ao tentar realizar o login!");
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}