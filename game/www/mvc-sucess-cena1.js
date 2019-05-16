
var controllerSucessCena1 = {
    indexConteudo: 0,
    showConteudo: (element) => {
        
        var btnNext = document.createElement('button')
        btnNext.innerHTML = 'Próximo'
        btnNext.className = 'btn btn-pramary btn-lg btn-block'
        btnNext.addEventListener('click', () => {
            controllerSucessCena1.showConteudo(element)
        })

        if (controllerSucessCena1.indexConteudo < modelSucessCena1.texto.length) {
            cleanElement(element)
            var paragraph = document.createElement('p')
            paragraph.style.textAlign = 'justify'
            paragraph.innerHTML = modelSucessCena1.texto[controllerSucessCena1.indexConteudo].conteudo

            element.appendChild(paragraph)
            element.appendChild(btnNext)
            controllerSucessCena1.indexConteudo++
        }
        else {
            cleanElement(element)
            var paragraph = document.createElement('p')
            paragraph.style.textAlign = 'justify'
            paragraph.innerHTML = modelSucessCena1.texto[controllerSucessCena1.indexConteudo-1].conteudo

            var btnStart = document.createElement('button')
            btnStart.innerHTML = "Jogo dos 6 erros"
            btnStart.className = "btn btn-danger btn-lg btn-block"
            btnStart.addEventListener('click', () => {
                openPage('play')
            })
            
            element.appendChild(paragraph)
            element.appendChild(btnStart)
        }
    }
}

var viewSucessCena1 = {
    init: function(data){
        var persona = document.getElementById("personak")
        var speaktxt = document.getElementById("speaktxt")
        next(persona, 0)
        controllerSucessCena1.showConteudo(speaktxt)
    },
    render: function(){

    }
}


var imgs = ['persona.png','persona1.png','persona2.png']

function next(img,i){
    setTimeout(()=>{
        img.src = './assets/cena/'+imgs[i]
        next(img, (i+1)%3)
    },1000)
}
