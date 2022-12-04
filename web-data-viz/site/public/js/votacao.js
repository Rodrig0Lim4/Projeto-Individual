//INICIO VALIDAÇÔES DE VOTO
var votos = {
    posicao1: [],
    posicao2: [],
    posicao3: [],
    posicao4: [],
    posicao5: [],
    posicao6: [],
    posicao7: [],
    posicao8: [],
    posicao9: [],
    posicao10: []
}
var idUsuario = sessionStorage.ID_USUARIO

function button_votar() {
    var voto = 0
    var perso1 = document.getElementById("personagem1").checked
    var perso2 = document.getElementById("personagem2").checked
    var perso3 = document.getElementById("personagem3").checked
    var perso4 = document.getElementById("personagem4").checked
    var perso5 = document.getElementById("personagem5").checked
    var perso6 = document.getElementById("personagem6").checked
    var perso7 = document.getElementById("personagem7").checked
    var perso8 = document.getElementById("personagem8").checked
    var perso9 = document.getElementById("personagem9").checked
    var perso10 = document.getElementById("personagem10").checked

    if (perso1 == true) {
        perso2.checked = false
        perso3.checked = false
        perso4.checked = false
        perso5.checked = false
        perso6.checked = false
        perso7.checked = false
        perso8.checked = false
        perso9.checked = false
        perso10.checked = false
        voto = 1
        votos.posicao1.push(1)
    } else if (perso2 == true) {
        perso1.checked = false
        perso3.checked = false
        perso4.checked = false
        perso5.checked = false
        perso6.checked = false
        perso7.checked = false
        perso8.checked = false
        perso9.checked = false
        perso10.checked = false
        voto = 1
        votos.posicao2.push(1)
    } else if (perso3 == true) {
        perso1.checked = false
        perso2.checked = false
        perso4.checked = false
        perso5.checked = false
        perso6.checked = false
        perso7.checked = false
        perso8.checked = false
        perso9.checked = false
        perso10.checked = false
        voto = 1
        votos.posicao3.push(1)
    } else if (perso4 == true) {
        perso1.checked = false
        perso2.checked = false
        perso3.checked = false
        perso5.checked = false
        perso6.checked = false
        perso7.checked = false
        perso8.checked = false
        perso9.checked = false
        perso10.checked = false
        voto = 1
        votos.posicao4.push(1)
    } else if (perso5 == true) {
        perso1.checked = false
        perso2.checked = false
        perso3.checked = false
        perso4.checked = false
        perso6.checked = false
        perso7.checked = false
        perso8.checked = false
        perso9.checked = false
        perso10.checked = false
        voto = 1
        votos.posicao5.push(1)
    } else if (perso6 == true) {
        perso1.checked = false
        perso2.checked = false
        perso3.checked = false
        perso4.checked = false
        perso5.checked = false
        perso7.checked = false
        perso8.checked = false
        perso9.checked = false
        perso10.checked = false
        voto = 1
        votos.posicao6.push(1)
    } else if (perso7 == true) {
        perso1.checked = false
        perso2.checked = false
        perso3.checked = false
        perso4.checked = false
        perso5.checked = false
        perso6.checked = false
        perso8.checked = false
        perso9.checked = false
        perso10.checked = false
        voto = 1
        votos.posicao7.push(1)
    } else if (perso8 == true) {
        perso1.checked = false
        perso2.checked = false
        perso3.checked = false
        perso4.checked = false
        perso5.checked = false
        perso6.checked = false
        perso7.checked = false
        perso9.checked = false
        perso10.checked = false
        voto = 1
        votos.posicao8.push(1)
    } else if (perso9 == true) {
        perso1.checked = false
        perso2.checked = false
        perso3.checked = false
        perso4.checked = false
        perso5.checked = false
        perso6.checked = false
        perso7.checked = false
        perso8.checked = false
        perso10.checked = false
        votarVar = 1
        votos.posicao9.push(1)
    } else if (perso10 == true) {
        perso1.checked = false
        perso2.checked = false
        perso3.checked = false
        perso4.checked = false
        perso5.checked = false
        perso6.checked = false
        perso7.checked = false
        perso8.checked = false
        perso9.checked = false
        votarVar = 1
        votos.posicao10.push(1)
    }

    fetch(`/usuarios/inserirVotos/${idUsuario}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            votoServer: voto,
            usuarioServer: idUsuario
        })
    }).then(function (resposta) {

        console.log("Voto : ", resposta);

        if (resposta.ok) {
            validar()
            setTimeout(() => {
                alert("Voto cadastrado com sucesso!")
                sumir_btn.style.display = "none"
            }, "1000");
        } else {
            alert("Houve um erro ao tentar inserir o voto!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });

    function validar() {
        fetch(`/usuarios/inserirVotos/${idUsuario}`)
            .then(resposta => {
                if (resposta.ok) {
                    resposta.json().then(resposta => { console.log(`Voto já recebido ${JSON.stringify(resposta)}`) })
                    var voto = JSON.stringify(resposta[0].a);
                }
                else {
                    console.error('Nenhum voto encontrado ou erro na API')
                }
            })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
            });

        console.log("Lógica funcionando!")
    }
};
//FIM VALIDAÇÕES DE VOTO


//INICIO RANKING
function button_resultado_votacao() {
    personagem_resultado.style.display = "block"
    resultado.style.display = "none"
    selecao_personagens.style.display = "none"
    titulo.style.display = "block"
    sub_titulo.style.display = "block"

    //CONTAGEM DOS VOTOS
    var TotalVotos = 0;
    var ranking1 = 0;
    var ranking2 = 0;
    var ranking3 = 0;
    var ranking4 = 0;
    var ranking5 = 0;
    var ranking6 = 0;
    var ranking7 = 0;
    var ranking8 = 0;
    var ranking9 = 0;
    var ranking10 = 0;

    for (contador1 = 0; contador1 < votos.posicao1.length; contador1++) {
        TotalVotos++
        ranking1++
    }

    for (contador2 = 0; contador2 < votos.posicao2.length; contador2++) {
        TotalVotos++;
        ranking2++
    }

    for (contador3 = 0; contador3 < votos.posicao3.length; contador3++) {
        TotalVotos++;
        ranking3++
    }

    for (contador4 = 0; contador4 < votos.posicao4.length; contador4++) {
        TotalVotos++
        ranking4++
    }

    for (contador5 = 0; contador5 < votos.posicao5.length; contador5++) {
        TotalVotos++
        ranking5++
    }

    for (contador6 = 0; contador6 < votos.posicao6.length; contador6++) {
        TotalVotos++
        ranking6++
    }

    for (contador7 = 0; contador7 < votos.posicao7.length; contador7++) {
        TotalVotos++
        ranking7++
    }

    for (contador8 = 0; contador8 < votos.posicao8.length; contador8++) {
        TotalVotos++
        ranking8++
    }

    for (contador9 = 0; contador9 < votos.posicao9.length; contador9++) {
        TotalVotos++
        ranking9++
    }

    for (contador10 = 0; contador10 < votos.posicao10.length; contador10++) {
        TotalVotos++
        ranking10++
    }

    //DEFININDO AS POSIÇÕES DO RANKING 

    if (ranking1 > ranking2 && ranking1 > ranking3 && ranking1 > ranking4 && ranking1 > ranking5 && ranking1 > ranking6 && ranking1 > ranking7 && ranking1 > ranking8 && ranking1 > ranking9 && ranking1 > ranking10) {
        personagem_semana.innerHTML = `<div style="display: flex;"><img src="./assets/yoda_inicial.jpg">
                <h4>Yoda foi um dos Grandes Mestres do Alto Conselho Jedi e seu Tempo durante os últimos séculos da
                    República Galáctica e da Ordem Jedi lhe fizeram uma figura inesquecivel na história galáctica.
                    Durante 800 anos ele treinou novas gerações de Jedi sempre lutando a favor da lei e da ordem,
                    enquanto buscava descobrir os segredos da força.
                    Sua frase mais famosa é:<br>
                    "Faça ou não faça, tentativa não ah" dita por ele para Luke Skywalker em O Imperio Contra-Ataca.
                </h4></div>`
    } else if (ranking2 > ranking1 && ranking2 > ranking3 && ranking2 > ranking4 && ranking2 > ranking5 && ranking2 > ranking6 && ranking2 > ranking7 && ranking2 > ranking8 && ranking2 > ranking9 && ranking2 > ranking10) {
        personagem_semana.innerHTML = `<div style="display: flex;"><img src="./assets/yoda_inicial.jpg">
        <h4>Yoda foi um dos Grandes Mestres do Alto Conselho Jedi e seu Tempo durante os últimos séculos da
            República Galáctica e da Ordem Jedi lhe fizeram uma figura inesquecivel na história galáctica.
            Durante 800 anos ele treinou novas gerações de Jedi sempre lutando a favor da lei e da ordem,
            enquanto buscava descobrir os segredos da força.
            Sua frase mais famosa é:<br>
            "Faça ou não faça, tentativa não ah" dita por ele para Luke Skywalker em O Imperio Contra-Ataca.
        </h4></div>`
    } else if (ranking3 > ranking1 && ranking3 > ranking2 && ranking3 > ranking4 && ranking3 > ranking5 && ranking3 > ranking6 && ranking3 > ranking7 && ranking3 > ranking8 && ranking3 > ranking9 && ranking3 > ranking10) {
        personagem_semana.innerHTML = `<div style="display: flex;"><img src="./assets/yoda_inicial.jpg">
                <h4>Yoda foi um dos Grandes Mestres do Alto Conselho Jedi e seu Tempo durante os últimos séculos da
                    República Galáctica e da Ordem Jedi lhe fizeram uma figura inesquecivel na história galáctica.
                    Durante 800 anos ele treinou novas gerações de Jedi sempre lutando a favor da lei e da ordem,
                    enquanto buscava descobrir os segredos da força.
                    Sua frase mais famosa é:<br>
                    "Faça ou não faça, tentativa não ah" dita por ele para Luke Skywalker em O Imperio Contra-Ataca.
                </h4></div>`
    } else if (ranking4 > ranking1 && ranking4 > ranking2 && ranking4 > ranking3 && ranking4 > ranking5 && ranking4 > ranking6 && ranking4 > ranking7 && ranking4 > ranking8 && ranking4 > ranking9 && ranking4 > ranking10) {
        personagem_semana.innerHTML = `<div style="display: flex;"><img src="./assets/yoda_inicial.jpg">
                <h4>Yoda foi um dos Grandes Mestres do Alto Conselho Jedi e seu Tempo durante os últimos séculos da
                    República Galáctica e da Ordem Jedi lhe fizeram uma figura inesquecivel na história galáctica.
                    Durante 800 anos ele treinou novas gerações de Jedi sempre lutando a favor da lei e da ordem,
                    enquanto buscava descobrir os segredos da força.
                    Sua frase mais famosa é:<br>
                    "Faça ou não faça, tentativa não ah" dita por ele para Luke Skywalker em O Imperio Contra-Ataca.
                </h4></div>`
    } else if (ranking5 > ranking1 && ranking5 > ranking2 && ranking5 > ranking3 && ranking5 > ranking4 && ranking5 > ranking6 && ranking5 > ranking7 && ranking5 > ranking8 && ranking5 > ranking9 && ranking5 > ranking10) {
        personagem_semana.innerHTML = `<div style="display: flex;"><img src="./assets/yoda_inicial.jpg">
                <h4>Yoda foi um dos Grandes Mestres do Alto Conselho Jedi e seu Tempo durante os últimos séculos da
                    República Galáctica e da Ordem Jedi lhe fizeram uma figura inesquecivel na história galáctica.
                    Durante 800 anos ele treinou novas gerações de Jedi sempre lutando a favor da lei e da ordem,
                    enquanto buscava descobrir os segredos da força.
                    Sua frase mais famosa é:<br>
                    "Faça ou não faça, tentativa não ah" dita por ele para Luke Skywalker em O Imperio Contra-Ataca.
                </h4></div>`
    } else if (ranking6 > ranking1 && ranking6 > ranking2 && ranking6 > ranking3 && ranking6 > ranking4 && ranking6 > ranking5 && ranking6 > ranking7 && ranking6 > ranking8 && ranking6 > ranking9 && ranking6 > ranking10) {
        personagem_semana.innerHTML = `<div style="display: flex;"><img src="./assets/yoda_inicial.jpg">
                <h4>Yoda foi um dos Grandes Mestres do Alto Conselho Jedi e seu Tempo durante os últimos séculos da
                    República Galáctica e da Ordem Jedi lhe fizeram uma figura inesquecivel na história galáctica.
                    Durante 800 anos ele treinou novas gerações de Jedi sempre lutando a favor da lei e da ordem,
                    enquanto buscava descobrir os segredos da força.
                    Sua frase mais famosa é:<br>
                    "Faça ou não faça, tentativa não ah" dita por ele para Luke Skywalker em O Imperio Contra-Ataca.
                </h4></div>`
    } else if (ranking7 > ranking1 && ranking7 > ranking2 && ranking7 > ranking3 && ranking7 > ranking4 && ranking7 > ranking5 && ranking7 > ranking6 && ranking7 > ranking8 && ranking7 > ranking9 && ranking7 > ranking10) {
        personagem_semana.innerHTML = `<div style="display: flex;"><img src="./assets/yoda_inicial.jpg">
                <h4>Yoda foi um dos Grandes Mestres do Alto Conselho Jedi e seu Tempo durante os últimos séculos da
                    República Galáctica e da Ordem Jedi lhe fizeram uma figura inesquecivel na história galáctica.
                    Durante 800 anos ele treinou novas gerações de Jedi sempre lutando a favor da lei e da ordem,
                    enquanto buscava descobrir os segredos da força.
                    Sua frase mais famosa é:<br>
                    "Faça ou não faça, tentativa não ah" dita por ele para Luke Skywalker em O Imperio Contra-Ataca.
                </h4></div>`
    } else if (ranking8 > ranking1 && ranking8 > ranking2 && ranking8 > ranking3 && ranking8 > ranking4 && ranking8 > ranking5 && ranking8 > ranking6 && ranking8 > ranking7 && ranking8 > ranking9 && ranking8 > ranking10) {
        personagem_semana.innerHTML = `<div style="display: flex;"><img src="./assets/yoda_inicial.jpg">
                <h4>Yoda foi um dos Grandes Mestres do Alto Conselho Jedi e seu Tempo durante os últimos séculos da
                    República Galáctica e da Ordem Jedi lhe fizeram uma figura inesquecivel na história galáctica.
                    Durante 800 anos ele treinou novas gerações de Jedi sempre lutando a favor da lei e da ordem,
                    enquanto buscava descobrir os segredos da força.
                    Sua frase mais famosa é:<br>
                    "Faça ou não faça, tentativa não ah" dita por ele para Luke Skywalker em O Imperio Contra-Ataca.
                </h4></div>`
    } else if (ranking9 > ranking1 && ranking9 > ranking2 && ranking9 > ranking3 && ranking9 > ranking4 && ranking9 > ranking5 && ranking9 > ranking6 && ranking9 > ranking7 && ranking9 > ranking8 && ranking9 > ranking10) {
        personagem_semana.innerHTML = `<div style="display: flex;"><img src="./assets/yoda_inicial.jpg">
                <h4>Yoda foi um dos Grandes Mestres do Alto Conselho Jedi e seu Tempo durante os últimos séculos da
                    República Galáctica e da Ordem Jedi lhe fizeram uma figura inesquecivel na história galáctica.
                    Durante 800 anos ele treinou novas gerações de Jedi sempre lutando a favor da lei e da ordem,
                    enquanto buscava descobrir os segredos da força.
                    Sua frase mais famosa é:<br>
                    "Faça ou não faça, tentativa não ah" dita por ele para Luke Skywalker em O Imperio Contra-Ataca.
                </h4></div>`
    } else if (ranking10 > ranking1 && ranking10 > ranking2 && ranking10 > ranking3 && ranking10 > ranking4 && ranking10 > ranking5 && ranking10 > ranking6 && ranking10 > ranking7 && ranking10 > ranking8 && ranking10 > ranking9) {
        personagem_semana.innerHTML = `<div style="display: flex;"><img src="./assets/yoda_inicial.jpg">
        <h4>Yoda foi um dos Grandes Mestres do Alto Conselho Jedi e seu Tempo durante os últimos séculos da
            República Galáctica e da Ordem Jedi lhe fizeram uma figura inesquecivel na história galáctica.
            Durante 800 anos ele treinou novas gerações de Jedi sempre lutando a favor da lei e da ordem,
            enquanto buscava descobrir os segredos da força.
            Sua frase mais famosa é:<br>
            "Faça ou não faça, tentativa não ah" dita por ele para Luke Skywalker em O Imperio Contra-Ataca.
        </h4></div>`
    }
};
//FINAL DO RANKING