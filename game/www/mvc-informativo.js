

var controllerInformativo = {

}

var conteudo
var btnNext
var indexTitle = 0
var indexSubtitle = 0

var viewInformativo = {
    init: function (data) {
        conteudo = document.getElementById('conteudo')
        // btnNext = document.getElementById('btnNext')
        // btnNext.addEventListener('click', nextInformativo)

        indexTitle = 0
        indexSubtitle = 0
        viewInformativo.render()
    },
    render: function () {
        viewInformativo.clean(conteudo)

        var info = modelInformativo.informacoes[indexTitle]
        var card = document.createElement('div')
        card.className = 'card-informativo card-informativo-title'
        card.style.textAlign = "center"
        card.innerHTML = info.title

        var text = document.createElement('div')
        text.style.textAlign = 'justify'
        text.className = 'card-informativo'
        text.addEventListener('click', (event)=>nextInformativo(event))

        if (info.text) {
            text.innerHTML = info.text
        }
        else {
            if (info.subtitles) {
                var sb = modelInformativo.informacoes[indexTitle].subtitles[indexSubtitle]
                var subtitle = document.createElement('div')
                subtitle.style.fontWeight = 'bold'
                var tsub = document.createElement('div')
                tsub.style.textAlign = 'justify'
                subtitle.innerHTML = sb.title
                tsub.innerHTML = sb.text

                text.appendChild(subtitle)
                text.appendChild(tsub)

            }
        }

        conteudo.appendChild(card)
        conteudo.appendChild(text)
    },
    clean(element) {
        while (element.children.length > 0) {
            element.removeChild(element.children[0])
        }
    }
}

function nextInformativo(event){

    if(event.clientX<100){
        if(indexTitle==1 && indexSubtitle > 0){
            indexSubtitle--
        }
        else if (indexTitle > 0){
            indexTitle--
        }
    }
    else{
        if(indexTitle==1 && indexSubtitle < modelInformativo.informacoes[indexTitle].subtitles.length-1){
            indexSubtitle++
        }
        else if (indexTitle < modelInformativo.informacoes.length - 1){
            indexTitle++
        }
        else{
            // openPage()
        }
    }

    
    viewInformativo.render()
}