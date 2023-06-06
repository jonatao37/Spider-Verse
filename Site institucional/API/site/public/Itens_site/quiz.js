b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

// Começo da logica do quiz

function responder(pergunta, resposta) {
    if (resposta == 1) {

        var valorMiles = Number(localStorage.getItem('miles'));
        valorMiles++;
        localStorage.setItem('miles', valorMiles);

    } else if (resposta == 2) {

        var valorGwen = Number(localStorage.getItem('gwen'));
        valorGwen++;
        localStorage.setItem('gwen', valorGwen);


    } else if (resposta == 3) {

        var valorPeter = Number(localStorage.getItem('peter'));
        valorPeter++;
        localStorage.setItem('peter', valorPeter);


    } else if (resposta == 4) {

        var valorPeni = Number(localStorage.getItem('peni'));
        valorPeni++;
        localStorage.setItem('peni', valorPeni);


    } else if (resposta == 5) {

        var valorNoir = Number(localStorage.getItem('noir'));
        valorNoir++;
        localStorage.setItem('noir', valorNoir);


    } else {

        var valorPorker = Number(localStorage.getItem('porker'));
        valorPorker++;
        localStorage.setItem('porker', valorPorker);


    }

    if (pergunta < 12) {
        var pagina = `pergunta${pergunta + 1}.html`;
        window.location.href = pagina;

    } else {

        var resultado = `resultado.html`;
        window.location = resultado;

    }

}
var resultadoFinal = ''

function quiz() {


    var miles = Number(localStorage.getItem('miles'));
    var gwen = Number(localStorage.getItem('gwen'));
    var peter = Number(localStorage.getItem('peter'));
    var peni = Number(localStorage.getItem('peni'));
    var noir = Number(localStorage.getItem('noir'));
    var porker = Number(localStorage.getItem('porker'));

    if (miles > peter && miles > gwen && miles > porker && miles > noir && miles > peni) {

        msg_aranha.innerHTML = `
        
        <img src="../assets/img/gifmilesquiz.gif" alt="">

        <h1>Miles Morales</h1>
        
        <p>Você é um jovem e talentoso Homem-Aranha que está aprendendo a lidar com seus poderes e responsabilidades e que tem um bom coração.</p><br>
        
        <span>Para saber mais sobre esse personagem</span>
               <a href="miles.html">Clique aqui</a>
        `

        resultadoFinal = 'Miles Morales'
        cadastrarQuiz()


    } else if (porker > miles && porker > gwen && porker > peter && porker > noir && porker > peni) {

        msg_aranha.innerHTML = `
        
        <img src="../assets/img/gifporker.gif" alt="">

        <h1>Porco-aranha (Peter Porker)</h1>
        
        <p>O Homem-Aranha porco antropomórfico com suas habilidades peculiares e seu estilo descontraído.</p><br>
        
        <span>Para saber mais sobre esse personagem</span>
               <a href="porker.html">Clique aqui</a>
        `

        resultadoFinal = 'Porco-aranha'
        cadastrarQuiz()



    } else if (gwen > peter && gwen > miles && gwen > porker && gwen > noir && gwen > peni) {

        msg_aranha.innerHTML = `
        
        <img src="../assets/img/gifgwen.gif" alt="">

        <h1>Gwen Stacy</h1>
        
        <p>Neste universo, quem foi picada pela aranha e ganhou os poderes não foi Peter Parker, e sim Gwen Stacy. Outra diferença do universo principal foi como ela decidiu ser uma super-heroína. Gwen apenas decidiu assumir a responsabilidade de ser a Mulher-Aranha após Peter Parker morrer tentando ser especial como ela.</p><br>
        
        <span>Para saber mais sobre esse personagem</span>
               <a href="gwen.html">Clique aqui</a>
        `

        resultadoFinal = 'Gwen Stacy'
        cadastrarQuiz()


    } else if (noir > peter && noir > gwen && noir > porker && noir > miles && noir > peni) {

        msg_aranha.innerHTML = `
        
        <img src="../assets/img/gifnoir.gif" alt="">

        <h1>Homem-aranha Noir</h1>
        
        <p>O Homem-Aranha da década de 1930 com uma abordagem única e um senso de humor sarcástico, e uma sabedoria e experiencia um pouco mais superior.</p><br>
        
        <span>Para saber mais sobre esse personagem</span>
               <a href="noir.html">Clique aqui</a>
        `

        resultadoFinal = 'Homem-aranha Noir'
        cadastrarQuiz()


    } else if (peni > peter && peni > gwen && peni > porker && peni > noir && peni > miles) {

        msg_aranha.innerHTML = `
        
        <img src="../assets/img/gifpeni.gif" alt="">

        <h1>Peni Parker</h1>
        
        <p>Você é animada(o) e divertida(0), gosta de fazer coisas usando bastante a criatividade e é muito inteligente.</p><br>
        
        <span>Para saber mais sobre esse personagem</span>
               <a href="peni.html">Clique aqui</a>
        `

        resultadoFinal = 'Peni Parker'
        cadastrarQuiz()


    } else {


        msg_aranha.innerHTML = `
        
        <img src="../assets/img/gifpeter.gif" alt="">

        <h1>Peter B. Parker</h1>
        
        <p>O Homem-Aranha experiente, habilidoso e bastante destemido de outra dimensão, e meio fudido.</p><br>
        
        <span>Para saber mais sobre esse personagem</span>
               <a href="peter.html">Clique aqui</a>
        
        `

        resultadoFinal = 'Peter B. Parker'
        cadastrarQuiz()
    }



}

// Fim da logica do quiz

// Começo do Armazenamento de dados do quiz

function cadastrarQuiz() {
    // aguardar();
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var resultadoVar = resultadoFinal;
    var idUsuarioVar = sessionStorage.ID_USUARIO;

    if (resultadoVar == "" || idUsuarioVar == "") {
        // cardErro.style.display = "block"
        // mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";

        // finalizarAguardar();
        return false;
    }
    else {
        setInterval(5000)
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrarQuiz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            resultadoServer: resultadoVar,
            idUsuarioServer: idUsuarioVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            // cardErro.style.display = "block";

            // mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";



            setTimeout(() => {
                // window.location = "Login.html";
            }, "8470")

            // limparFormulario();
            // finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
    });

    return false;
}

    // function sumirMensagem() {
    //     cardErro.style.display = "none"
    // }


    // Fim do Armazenamento de dados do quiz
