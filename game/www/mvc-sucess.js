
var controllerSucess = {
    indexConteudo: 0,
    showConteudo: (element) => {
        
        var btnNext = document.createElement('button')
        btnNext.innerHTML = 'Próximo'
        btnNext.className = 'btn btn-pramary btn-lg btn-block'
        btnNext.addEventListener('click', () => {
            controllerSucess.showConteudo(element)
        })

        if (controllerSucess.indexConteudo < modelSucess.texto.length) {
            cleanElement(element)
            var paragraph = document.createElement('p')
            paragraph.style.textAlign = 'justify'
            paragraph.innerHTML = modelSucess.texto[controllerSucess.indexConteudo].conteudo

            element.appendChild(paragraph)
            element.appendChild(btnNext)
            controllerSucess.indexConteudo++
        }
        else {
            cleanElement(element)
            var paragraph = document.createElement('p')
            paragraph.style.textAlign = 'justify'
            paragraph.innerHTML = modelSucess.texto[controllerSucess.indexConteudo-1].conteudo

            var btnStart = document.createElement('button')
            btnStart.innerHTML = "Você chegou ao fim!"
            btnStart.className = "btn btn-danger btn-lg btn-block"
            btnStart.addEventListener('click', () => {
                openPage('home')
            })
            
            element.appendChild(paragraph)
            element.appendChild(btnStart)
        }
    }
}

var viewSucess = {
    init: function(data){
        var persona = document.getElementById("personak")
        var speaktxt = document.getElementById("speaktxt")
        next(persona, 0)
        controllerSucess.showConteudo(speaktxt)
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
