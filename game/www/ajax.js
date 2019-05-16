const url = "http://ec2-18-191-247-51.us-east-2.compute.amazonaws.com:3100/api"
// const url = "http://localhost:3100/api"

function get(path,callback){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", `${url}${path}`, true)

    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status == 200){
            callback(this.responseText)
        }
    }

    xhttp.setRequestHeader("Access-Control-Allow-Origin","*")
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send()
}

function post(path, body, callback){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", `${url}${path}`, true)

    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status == 200){
            callback(this.responseText)
        }
    }
    
    xhttp.setRequestHeader("Access-Control-Allow-Origin","*")
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(body)
}

function put(path, body, callback){
    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", `${url}${path}`, true)

    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status == 200){
            callback(this.responseText)
        }
    }
    
    xhttp.setRequestHeader("Access-Control-Allow-Origin","*")
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(body)
}

function remove(path, callback){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", `${url}${path}`, true)

    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status == 200){
            callback(this.responseText)
        }
    }
    
    xhttp.setRequestHeader("Access-Control-Allow-Origin","*")
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send()
}