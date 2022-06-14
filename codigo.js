let contadorPerguntas = 0
let contadorAlternativas=0
let contadorCertas = 0
let respostaCorreta = 0



$('#alternativasdiv').hide()
$("#finalizarbt").hide()
$('#resultado').hide()



let perguntas = {
    pergunta1: "Qual a linguagem de programação estamos estudando?",
    pergunta2: "Quantas materias estamos estudando no 3 semestre?",
    pergunta3: "Qual a tradução de potato para português?",
    pergunta4: "que horas e nossa aula no ifb?",
    pergunta5: "quantos semestres tem o nosso curso?"

}
let alternativas = {
    "alternativas1": [
        "ruby","java","javascript","python"
    ],
    "alternativas2":[
        "4","6","5","7"
    ],
    "alternativas3":[
        "abacate","limão","batata","abacaxi"
    ],
    "alternativas4":[
        "13 horas","15 horas","14 horas","12 horas"
    ],
     "alternativas5":[
         "1","2","3","4"
    ]
    

}
let alteCorretas = {
    correta1 : "javascript",
    correta2 : "5",
    correta3 : "batata",
    correta4 : "14 horas",
    correta5 : '3'

}




function cliqueAqui(){
    $("#jogo-all").show()
    contadorPerguntas++
    contadorAlternativas ++
    respostaCorreta++
    $('#alternativasdiv').show()

   if(contadorPerguntas == 5){
        $('#avancarbt').hide()
         $('#finalizarbt').show()
       
    } 

    

        


    $('#avancarbt').text("proxima pergunta")

    $('#perguntas').text(perguntas['pergunta'+(contadorPerguntas)])
    
    $('#label1').text(alternativas['alternativas'+[contadorAlternativas]][0])
    $('#label2').text(alternativas['alternativas'+[contadorAlternativas]][1])
    $('#label3').text(alternativas['alternativas'+[contadorAlternativas]][2])
    $('#label4').text(alternativas['alternativas'+[contadorAlternativas]][3])

    
    console.log(contadorPerguntas);
    
}

function confirmaResposta(){
    let valorAlternativas = $('input[name="alternativas"]:checked').val()
    if(valorAlternativas == "errada1"){
        $('#resposta').text('alternativa está errada!')
    }else if(valorAlternativas == "errada2"){
        $('#resposta').text('alternativa está errada!')
    }else if(valorAlternativas == "correta"){
       $('#resposta').text( "a resposta correta é " + alteCorretas['correta'+[respostaCorreta][0]])
       contadorCertas++
    }else if(valorAlternativas == "errada3"){
        $('#resposta').text('alternativa está errada!')
    }


}


function finalizar(){
   
    $("#avancarbt").text('começar jogo').show()
    $('#jogo-all').hide()
    contadorCertas = 0
    contadorAlternativas = 0
    contadorPerguntas = 0
    respostaCorreta = 0

}

function reiniciar(){
    contadorAlternativas = 0
    contadorPerguntas = 0
    respostaCorreta = 0
    contadorCertas = 0
    $("#avancarbt").text('começar jogo').show()
    $('#jogo-all').hide()
}

 



