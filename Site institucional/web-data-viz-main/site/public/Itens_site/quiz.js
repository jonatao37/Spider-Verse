b_usuario.innerHTML = sessionStorage.NOME_USUARIO;



function responder (pergunta, resposta) {
    if (resposta == 1) {

        var valorMiles = Number(localStorage.getItem('miles'));
        valorMiles++;
        localStorage.setItem('miles', valorMiles);
        
    } else if (resposta == 2) {

        var valorGwen = Number(localStorage.getItem('gwen'));
        valorGwen++;
        localStorage.setItem('gwen', valorGwen);
        

    }else if (resposta == 3) {

        var valorPeter = Number(localStorage.getItem('peter'));
        valorPeter++;
        localStorage.setItem('peter', valorPeter);
       

    }else if (resposta == 4) {

        var valorPeni = Number(localStorage.getItem('peni'));
        valorPeni++;
        localStorage.setItem('peni', valorPeni);
        

    }else if (resposta == 5) {

        var valorNoir = Number(localStorage.getItem('noir'));
        valorNoir++;
        localStorage.setItem('noir', valorNoir);
        

    }else {

        var valorPorker = Number(localStorage.getItem('porker'));
        valorPorker++;
        localStorage.setItem('porker', valorPorker);
        

    }
    
    if(pergunta < 12){
    var pagina = `pergunta${pergunta + 1}.html`;
    window.location.href = pagina;

}else {

    var resultado = `resultado.html`;
    window.location = resultado;

}

}

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
        
        Você é um jovem e talentoso Homem-Aranha que está aprendendo a lidar com seus poderes e responsabilidades e que tem um bom coração.`


    }else if (peter > miles && peter > gwen && peter > porker && peter > noir && peter > peni) {

        msg_aranha.innerHTML = `
        
        <img src="../assets/img/gifpeter.gif" alt="">

        <h1>Peter B. Parker</h1>
        
        O Homem-Aranha experiente, habilidoso e bastante destemido de outra dimensão, e meio fudido.`


    }else if (gwen > peter && gwen > miles && gwen > porker && gwen > noir && gwen > peni) {

        msg_aranha.innerHTML = `
        
        <img src="../assets/img/gifgwen.gif" alt="">

        <h1>Gwen Stacy</h1>
        
        Neste universo, quem foi picada pela aranha e ganhou os poderes não foi Peter Parker, e sim Gwen Stacy. Outra diferença do universo principal foi como ela decidiu ser uma super-heroína. Gwen apenas decidiu assumir a responsabilidade de ser a Mulher-Aranha após Peter Parker morrer tentando ser especial como ela.`


    }else if (noir > peter && noir > gwen && noir > porker && noir > miles && noir > peni) {

        msg_aranha.innerHTML = `
        
        <img src="../assets/img/gifnoir.gif" alt="">

        <h1>Homem-aranha Noir</h1>
        
        O Homem-Aranha da década de 1930 com uma abordagem única e um senso de humor sarcástico, e uma sabedoria e experiencia um pouco mais superior.`


    }else if (peni > peter && peni > gwen && peni > porker && peni > noir && peni > miles) {

        msg_aranha.innerHTML =  `
        
        <img src="../assets/img/gifpeni.gif" alt="">

        <h1>Peni Parker</h1>
        
        Você é animada(o) e divertida(0), gosta de fazer coisas usando bastante a criatividade e é muito inteligente.`


    }else {

        msg_aranha.innerHTML =  `
        
        <img src="../assets/img/gifporker.gif" alt="">

        <h1>Peter Porker</h1>
        
        o Homem-Aranha porco antropomórfico com suas habilidades peculiares e seu estilo descontraído.`


    }

}