var body = document.getElementById("body")
// TEMPLATES
var templateHome = document.getElementById("template-home").textContent
var templateGame = document.getElementById("template-game").textContent
var templateDetalhe = document.getElementById("template-detalhe").textContent
var templateSlide = document.getElementById("template-slide").textContent

var view = {
    init: function(){
        openPage()
    }
}

view.init()

function openPage(page, data){
    switch(page){
        case 'game':{
            body.innerHTML = templateGame
            viewGame.init()
            break
        }
        case 'detalhe':{
            body.innerHTML = templateDetalhe
            viewDetalhe.init()
            break
        }
        case 'slide':{
            body.innerHTML = templateSlide
            viewSlide.init(data)
            break
        }
        default: {
            body.innerHTML = templateHome

        }
    }
}