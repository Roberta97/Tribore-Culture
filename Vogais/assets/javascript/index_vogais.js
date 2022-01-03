var audios={
    Letra_A:new Audio('assets/sounds/Letra_A.mp3'),
    Letra_E:new Audio('assets/sounds/Letra_E.mp3'),
    Letra_I:new Audio('assets/sounds/Letra_I.mp3'),
    Letra_O:new Audio('assets/sounds/Letra_O.mp3'),
    Letra_U:new Audio('assets/sounds/Letra_U.mp3')
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

var button=document.getElementById("play-Letra_A") //selecionar o elemento id

button.addEventListener("click",function(){ //ouvir click
    playAudio(audios.Letra_A)
})

var button=document.getElementById("play-Letra_E") //selecionar o elemento id

button.addEventListener("click",function(){ //ouvir click
    playAudio(audios.Letra_E)
})
var button=document.getElementById("play-Letra_I") //selecionar o elemento id

button.addEventListener("click",function(){ //ouvir click
    playAudio(audios.Letra_I)
})
var button=document.getElementById("play-Letra_O") //selecionar o elemento id

button.addEventListener("click",function(){ //ouvir click
    playAudio(audios.Letra_O)
})
var button=document.getElementById("play-Letra_U") //selecionar o elemento id

button.addEventListener("click",function(){ //ouvir click
    playAudio(audios.Letra_U)
})


