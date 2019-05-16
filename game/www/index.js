var body = document.getElementById("body")
// TEMPLATES
var templateHome = document.getElementById("template-home").textContent
var templateGame = document.getElementById("template-game").textContent
var templateDetalhe = document.getElementById("template-detalhe").textContent
var templateSlide = document.getElementById("template-slide").textContent
var templateApresentacao = document.getElementById("template-apresentacao").textContent
var templateSucess = document.getElementById("template-sucess").textContent
var tempalteSucessCena1 = document.getElementById('template-sucess-cena-1').textContent
var tempalteSucessCena2 = document.getElementById('template-sucess-cena-2').textContent
var templatePlay = document.getElementById("template-play").textContent
var templateQuizPerguntas = document.getElementById("template-quiz-perguntas").textContent
var templateQuizGrupos = document.getElementById("template-quiz-grupos").textContent
var templateInformativo = document.getElementById("template-informativo").textContent

var view = {
    init: function (e) {
        openPage()
    }
}

view.init()

function openPage(page, data) {
    
    switch (page) {
        case 'home': {
            body.innerHTML = templateHome
            viewHome.init()
            break
        }
        case 'game': {
            body.innerHTML = templateGame
            viewGame.init(data)
            break
        }
        case 'play': {
            body.innerHTML = templatePlay
            viewPlay.init()
            break
        }
        case 'detalhe': {
            body.innerHTML = templateDetalhe
            viewDetalhe.init(data)
            break
        }
        case 'slide': {
            body.innerHTML = templateSlide
            viewSlide.init(data)
            break
        }
        case 'apresentacao': {
            body.innerHTML = templateApresentacao
            viewApresentacao.init(data)
            break
        }
        case 'sucess': {
            body.innerHTML = templateSucess
            viewSucess.init(data)
            break
        }
        case 'sucess-cena-1':{
            body.innerHTML = tempalteSucessCena1
            viewSucessCena1.init(data)
            break
        }
        case 'sucess-cena-2':{
            body.innerHTML = tempalteSucessCena2
            viewSucessCena2.init(data)
            break
        }
        case 'quiz-perguntas': {
            body.innerHTML = templateQuizPerguntas
            viewQuiz.init(data)
            break
        }
        case 'quiz-grupos': {
            body.innerHTML = templateQuizGrupos
            viewGrupo.init(data)
            break
        }
        case 'informativo': {
            body.innerHTML = templateInformativo
            viewInformativo.init(data)
            break
        }
        default: {
            body.innerHTML = templateHome
        }
    }
}