
var controllerSucessCena2 = {
    indexConteudo: 0,
    showConteudo: (element) => {
        
        var btnNext = document.createElement('button')
        btnNext.innerHTML = 'Próximo'
        btnNext.className = 'btn btn-pramary btn-lg btn-block'
        btnNext.addEventListener('click', () => {
            controllerSucessCena2.showConteudo(element)
        })

        if (controllerSucessCena2.indexConteudo < modelSucessCena2.texto.length) {
            cleanElement(element)
            var paragraph = document.createElement('p')
            paragraph.style.textAlign = 'justify'
            paragraph.innerHTML = modelSucessCena2.texto[controllerSucessCena2.indexConteudo].conteudo

            element.appendChild(paragraph)
            element.appendChild(btnNext)
            controllerSucessCena2.indexConteudo++
        }
        else {
            cleanElement(element)
            var paragraph = document.createElement('p')
            paragraph.style.textAlign = 'justify'
            paragraph.innerHTML = modelSucessCena2.texto[controllerSucessCena2.indexConteudo-1].conteudo

            var btnStart = document.createElement('button')
            btnStart.innerHTML = "Quiz"
            btnStart.className = "btn btn-danger btn-lg btn-block"
            btnStart.addEventListener('click', () => {
                openPage('quiz-grupos')
            })
            
            element.appendChild(paragraph)
            element.appendChild(btnStart)
        }
    }
}

var viewSucessCena2 = {
    init: function(data){
        var persona = document.getElementById("personak")
        var speaktxt = document.getElementById("speaktxt")
        next(persona, 0)
        controllerSucessCena2.showConteudo(speaktxt)
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
