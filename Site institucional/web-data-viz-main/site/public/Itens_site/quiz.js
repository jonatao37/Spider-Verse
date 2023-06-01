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
    
    if(pergunta < 6){
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

        msg_aranha.innerHTML = `Você é o miles`


    }else if (peter > miles && peter > gwen && peter > porker && peter > noir && peter > peni) {

        msg_aranha.innerHTML = `Você é o Peter B. Parker`


    }else if (gwen > peter && gwen > miles && gwen > porker && gwen > noir && gwen > peni) {

        msg_aranha.innerHTML = `Você é a Gwen Stacy`


    }else if (noir > peter && noir > gwen && noir > porker && noir > miles && noir > peni) {

        msg_aranha.innerHTML = `Você é o Homem aranha Noir`


    }else if (peni > peter && peni > gwen && peni > porker && peni > noir && peni > miles) {

        msg_aranha.innerHTML = `Você é a Peni Parker`


    }else {

        msg_aranha.innerHTML = `Você é o Peter Porker`


    }

}