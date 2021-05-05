window.onload = firstJs;
var frames  = EXERCISE.split("=====");
var frame=0;
var timer = 800;
var timeInterval;

function firstJs(){
    let anim = document.getElementById("animation"); 
    let font = document.getElementById("fontsize"); 
    let turbo = document.getElementById("turbo");
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    start.onclick = str;
    anim.onchange = select;
    font.onchange = fontSize;
    turbo.onchange = turboFn;
    stop.onclick = stopfn;

}

function stopfn(){
    document.getElementById("text-area").value =frames[0];
    clearInterval(timeInterval);
}

function fontSize(){
    document.getElementById("text-area").style.fontSize = document.getElementById("fontsize").value;
}

function turboFn(){
    clearInterval(timeInterval);
    if(this.checked){
        timeInterval = setInterval(tes,250);
    }
    else{
        timeInterval = setInterval(tes,800);
    }
}

function select(){
    let selected = this.value.toUpperCase();
    frames = ANIMATIONS[selected].split("=====");
    frame=0;
   
}

function str(){          
    document.getElementById("stop").disabled = false;  
    turboFn();  
}

function tes(){
    frame  = frame % frames.length;
    document.getElementById("text-area").value =frames[frame];
    frame++;
}
