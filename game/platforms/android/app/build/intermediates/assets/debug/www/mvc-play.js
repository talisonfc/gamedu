


var controllerPlay = {

}

// all: {x: 1167, y: 837}
var objs = [
    {
        name: 'obj-1.png',
        ponto: {
            x: 293,
            y: 109
        }
    },
    {
        name: 'obj-2.png',
        ponto: {
            x: 139,
            y: 573
        }
    },
    {
        name: 'obj-3.png',
        ponto: {
            x: 298,
            y: 457
        }
    },
    {
        name: 'obj-4.png',
        ponto: {
            x: 376,
            y: 501
        }
    },
    {
        name: 'obj-5.png',
        ponto: {
            x: 626,
            y: 587
        }
    },
    {
        name: 'obj-6.png',
        ponto: {
            x: 761,
            y: 446
        }
    }
]

var marks = [
    {
        x: 417,
        y: 163
    },
    {
        x: 261,
        y: 652
    },
    {
        x: 330,
        y: 519
    },
    {
        x: 423,
        y: 563
    },
    {
        x: 698,
        y: 662
    },
    {
        x: 938,
        y: 555
    }
]

var viewPlay = {
    init: function (data) {
        var toughArea = document.getElementById('tough-area')
        var mutation = document.getElementById('mutation')
        mutation.style.width = screen.width
        mutation.style.height = screen.height
        // var mark = document.getElementById("template-mark").textContent

        // console.log(toughArea.children[0].children[0].style)

        toughArea.addEventListener('click', (event) => {
            var fe = screen.availWidth / 1167
            // var mark = document.createElement('div')
            // mark.style.position = 'absolute'
            // mark.style.width = '10px'
            // mark.style.height = '10px'
            // mark.style.background = 'blue'
            // mark.style.marginTop = `${event.clientY-52}px`
            // mark.style.marginLeft = `${event.clientX}px`
            // mutation.appendChild(mark)
            // console.log(`${event.clientX} - ${event.clientY}`)
            marks.forEach((mk, i) => {
                // console.log(distance(mk, {x: event.clientX, y: event.clientY-52}))
                if (distance(mk, { x: event.clientX, y: event.clientY - 52 }) < 20) {
                    console.log(objs[i])
                    var divimg = document.createElement('div')
                    var img = document.createElement('img')
                    divimg.style.position = 'absolute'
                    img.src = './assets/cena2/' + objs[i].name
                    divimg.appendChild(img)
                    mutation.appendChild(divimg)

                    setTimeout(()=>{
                        console.log(img.width)
                        img.style.width = img.width*fe
                    },100)
                    

                }
            })
            // console.log(event)
        })

        // marks.forEach(e=>{
        //     var fe = screen.availWidth/1167
        //     var mark = document.createElement('div')
        //     mark.style.position = 'absolute'
        //     mark.style.width = '10px'
        //     mark.style.height = '10px'
        //     mark.style.background = 'red'
        //     mark.style.marginTop = `${screen.availHeight+fe*e.y-52-fe*937}px`
        //     mark.style.marginLeft = `${fe*e.x-5}px`

        //     mutation.appendChild(mark)
        // })

        console.log(screen)
    },
    render: function () {

    }
}

function distance(p1, p2) {
    var fe = screen.availWidth / 1167
    var dx = Number(fe * p1.x - 5) - Number(p2.x)
    var dy = Number(screen.availHeight + fe * p1.y - 52 - fe * 937) - Number(p2.y)
    return Math.sqrt(dx * dx + dy * dy)
}