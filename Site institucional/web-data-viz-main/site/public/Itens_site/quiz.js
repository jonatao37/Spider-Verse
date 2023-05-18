var miles = 0
var gwen = 0
var peter = 0
var noir = 0
var peni = 0
var porker = 0

function quiz() {
    
    var Resposta1 = resposta1.value 
    var Resposta2 = resposta2.value
    var Resposta3 = resposta3.value
    var Resposta4 = resposta4.value
    var Resposta5 = resposta5.value
    var Resposta6 = resposta6.value
    var Resposta7 = resposta7.value
    var Resposta8 = resposta8.value
    var Resposta9 = resposta9.value
    var Resposta10 = resposta10.value
    var Resposta11 = resposta11.value
    var Resposta12 = resposta12.value
    var Resposta13 = resposta13.value
    var Resposta14 = resposta14.value
    var Resposta15 = resposta15.value
    var Resposta16 = resposta16.value
    var Resposta17 = resposta17.value
    var Resposta18 = resposta18.value
    var Resposta19 = resposta19.value
    var Resposta20 = resposta20.value
    var Resposta21 = resposta21.value
    var Resposta22 = resposta22.value
    var Resposta23 = resposta23.value
    var Resposta24 = resposta24.value
    var Resposta25 = resposta25.value
    var Resposta26 = resposta26.value
    var Resposta27 = resposta27.value
    var Resposta28 = resposta28.value
    var Resposta29 = resposta29.value
    var Resposta30 = resposta30.value
    var Resposta31 = resposta31.value
    var Resposta32 = resposta32.value
    var Resposta33 = resposta33.value
    var Resposta34 = resposta34.value
    var Resposta35 = resposta35.value
    var Resposta36 = resposta36.value
    contador = 1


    while (contador > 6) {

        if (contador == 1){

                if (Resposta1 == "Miles Morales") {
                    miles++
                } else if (Resposta2) {
                    gwen++
                } else if (Resposta3) {
                    peter++
                } else if (Resposta4) {
                    noir++
                } else if (Resposta5) {
                    peni++
                } else {
                    porker++
                }


            }

            if (contador == 2){
            
                if (Resposta7 == "Sunflower - Post Malone") {
                    miles++
                } else if (Resposta12) {
                    gwen++
                } else if (Resposta9) {
                    peter++
                } else if (Resposta8) {
                    noir++
                } else if (Resposta10) {
                    peni++
                } else {
                    porker++
                }


            }

            if (contador == 3){
            
                if (Resposta14 == "Hamburguer") {
                    miles++
                } else if (Resposta18) {
                    gwen++
                } else if (Resposta15) {
                    peter++
                } else if (Resposta16) {
                    noir++
                } else if (Resposta17) {
                    peni++
                } else {
                    porker++
                }


            }

            if (contador == 4){
            
                if (Resposta22 == "Determinado e Leal") {
                    miles++
                } else if (Resposta20) {
                    gwen++
                } else if (Resposta19) {
                    peter++
                } else if (Resposta23) {
                    noir++
                } else if (Resposta24) {
                    peni++
                } else {
                    porker++
                }


            }

            if (contador == 5){
            
                if (Resposta26 == "Vermelho") {
                    miles++
                } else if (Resposta25) {
                    gwen++
                } else if (Resposta28) {
                    peter++
                } else if (Resposta27) {
                    noir++
                } else if (Resposta29) {
                    peni++
                } else {
                    porker++
                }


            }

            if (contador == 6){
            
                if (Resposta32 == "Humildade e Empatia" ) {
                    miles++
                } else if (Resposta33) {
                    gwen++
                } else if (Resposta34) {
                    peter++
                } else if (Resposta36) {
                    noir++
                } else if (Resposta31) {
                    peni++
                } else {
                    porker++
                }


            }

        contador++

    }

    if (miles > peter && miles > gwen && miles > porker && miles > noir && miles > peni) {

        msg_aranha.innerHTML = `Você é o miles`


    }


    if (peter > miles && peter > gwen && peter > porker && peter > noir && peter > peni) {

        msg_aranha.innerHTML = `Você é o Peter B. Parker`


    }

    if (gwen > peter && gwen > miles && gwen > porker && gwen > noir && gwen > peni) {

        msg_aranha.innerHTML = `Você é a Gwen Stacy`


    }

    if (noir > peter && noir > gwen && noir > porker && noir > miles && noir > peni) {

        msg_aranha.innerHTML = `Você é o Homem aranha Noir`


    }

    if (peni > peter && peni > gwen && peni > porker && peni > noir && peni  > miles) {

        msg_aranha.innerHTML = `Você é a Peni Parker`


    }

    if (porker > peter && porker > gwen && porker > miles && porker > noir && porker > peni) {

        msg_aranha.innerHTML = `Você é o Peter Porker`


    }

}