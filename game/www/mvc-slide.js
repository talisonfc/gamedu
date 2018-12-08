var imgsSlide = [
    'caixa-c.png',
    'caixa-d.png',
    'latas-d.png',
    'lixo-c.png',
    'penus-d.png',
    'pneu-c.png',
    'vaso-c.png',
    'vaso-d.png'
]

var mapa = {
    "caixa-d.png": "caixa-c.png",
    "latas-d.png": "pneu-c.png",
    "penus-d.png": "pneu-c.png",
    "vaso-d.png": "vaso-c.png"
}


var index = 0 

var modelSlide = {}

var controllerSlide = {}

var viewSlide = {
    init: function(data){
        console.log(data)
        var btnNextImg = document.getElementById("btnNextImg")
        btnNextImg.addEventListener('click',()=>{
            index++;
            index = index%imgsSlide.length
            viewSlide.render()
        })

        var imgSlideDiv = document.getElementById("imgSlideDiv")
        var btnSolve = document.getElementById('btnSolve')
        btnSolve.addEventListener("click", ()=>{
            if(data!=undefined){
                // console.log(data)
                // console.log(mapa[data])
                // console.log(imgsSlide[index])
                if(imgsSlide[index]==mapa[data.target]){
                    //console.log("parabens")
                    imgSlideDiv.style.border = "2px solid green"
                    setTimeout(()=>{
                        openPage("detalhe", {target: data, result: "sucess"})
                    },2000)
                }
                else{
                    imgSlideDiv.style.border = "2px solid red"
                }
            }
        })

        var imgTarget = document.getElementById("imgTarget")
        if(data!=undefined){
            imgTarget.src = `./assets/cena/${data.target}`
        }

        viewSlide.render()
    },
    render: function(){
        var imgOption = document.getElementById("imgOption")
        imgOption.src = `./assets/cena/${imgsSlide[index]}`
    }
}