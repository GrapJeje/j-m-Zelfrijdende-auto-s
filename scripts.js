// JavaScript voor TeslamodelX
setInterval(TeslamodelX, 7000);
function TeslamodelX(){
    var img = document.getElementById("teslaxone")
    if( img.src.match("./images/model-x-front-page.jpg"))
        img.src = "./images/tesla-modelxv2.png"
    
    else if( img.src.match("./images/tesla-modelxv2.png"))
    img.src = "./images/tesla-modelxv3.png"

    else img.src = "./images/model-x-front-page.jpg"
}

setInterval(BwmVijfSeries, 7000);
function BwmVijfSeries(){
    var img = document.getElementById("bwmfiveone")
    if( img.src.match("./images/bwm-5series-pront-page.webp"))
        img.src = "./images/bmw-series-5v2.png"
    
    else if( img.src.match("./images/bmw-series-5v2.png"))
    img.src = "./images/bmw-series-5v3.png"

    else img.src = "./images/bwm-5series-pront-page.webp"
}

// JavaScript voor terms of servise

function creeper(){
    document.getElementById("ender_dragon").innerHTML = ""
    document.getElementById("mario_kart").innerHTML = "Thank you for accepting here is our plan"
}

