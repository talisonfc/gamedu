
var controllerDetalhe = {
    verifySucess: function(){
        var n = 0
        modelDetalhe.cenas.forEach(cena=>{
            if(cena.estado) n++
        })
        if(n==modelDetalhe.cenas.length){
            openPage('sucess', undefined)
        }
    }
}

var viewDetalhe = {
    init: function(data){
        console.log(data)
        var persona = document.getElementById("personak")
        next(persona, 0)

        var balao = document.getElementsByClassName('balao')[0]
        var btnNextComment = document.getElementsByClassName('btnNextComment')

        if(data!=undefined){
            if(data.result=='sucess'){
                modelDetalhe.cenas[data.target.position-1].estado = true
                viewDetalhe.render()
            }
        }
        else{
            viewDetalhe.render()
        }
    },
    render: function(){
        modelDetalhe.cenas.forEach(cena=>{
            if(cena.estado){
                var divCena = document.getElementById(`cena-${cena.position}`)
                divCena.style.background = '#ddd'
            }
        })
        controllerDetalhe.verifySucess()
    }
}

var imgs = ['persona.png','persona1.png','persona2.png']
// var imgs = ['persona.png','persona1.png']

function next(img,i){
    setTimeout(()=>{
        img.src = './assets/cena/'+imgs[i]
        next(img, (i+1)%3)
    },2000)
}

var comentarios = [
    "sakjh kdasjhd kjh aksjdh aksdjhas kdjh kjashd kasjhd aksjdh asd",
    "daslkjdalskdj lkj aslkdja lsdkj lkj lkajsd laksjd lkj lkja sldkj lkj asldkj"
]
var icomentario = 0
function nextComentario(balao){
    var div = document.createElement('div')
    div.innerHTM = comentarios[icomentario]
    balao.append(div)
    icomentario++;
}

function check(target){
    openPage("slide", target)
}