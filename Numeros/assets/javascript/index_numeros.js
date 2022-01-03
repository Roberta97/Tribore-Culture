var audios={
    n1:new Audio('assets/sounds/n1.mp3'),
    n2:new Audio('assets/sounds/n2.mp3'),
    n3:new Audio('assets/sounds/n3.mp3'),

}

var currentAudio=null

function playAudio(audio){
    if (currentAudio != null){
        currentAudio.pause();
        currentAudio.currentTime = 0
    }
    currentAudio=audio
    audio.play();
}

var div=document.getElementById("play-n1") //selecionar o elemento id

div.addEventListener("click",function(){ //ouvir click
    playAudio(audios.n1)
})
var div=document.getElementById("play-n2") //selecionar o elemento id

div.addEventListener("click",function(){ //ouvir click
    playAudio(audios.n2)
})
var div=document.getElementById("play-n3") //selecionar o elemento id

div.addEventListener("click",function(){ //ouvir click
    playAudio(audios.n3)
})

