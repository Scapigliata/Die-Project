
function myfunction(){
    document.querySelector("#die-cast1").innerHTML = random();
    document.querySelector("#die-cast2").innerHTML = random();
} 

function random() {
    return Math.floor(Math.random() * 6) + 1;
}

