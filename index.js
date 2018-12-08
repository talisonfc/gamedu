var body = document.getElementById("body")
// TEMPLATES
var templateHome = document.getElementById("template-home").textContent
var templateGame = document.getElementById("template-game").textContent
var templateDetalhe = document.getElementById("template-detalhe").textContent
var templateSlide = document.getElementById("template-slide").textContent
var templateApresentacao = document.getElementById("template-apresentacao").textContent
var templateSucess = document.getElementById("template-sucess").textContent

var view = {
    init: function(){
        openPage('game')
    }
}

view.init()

function openPage(page, data){
    switch(page){
        case 'home':{
            body.innerHTML = templateHome
            viewHome.init()
            break
        }
        case 'game':{
            body.innerHTML = templateGame
            viewGame.init()
            break
        }
        case 'detalhe':{
            body.innerHTML = templateDetalhe
            viewDetalhe.init(data)
            break
        }
        case 'slide':{
            body.innerHTML = templateSlide
            viewSlide.init(data)
            break
        }
        case 'apresentacao':{
            body.innerHTML = templateApresentacao
            viewApresentacao.init(data)
            break
        }
        case 'sucess':{
            body.innerHTML = templateSucess
            viewSucess.init(data)
            break
        }
        default: {
            body.innerHTML = templateHome
        }
    }
}