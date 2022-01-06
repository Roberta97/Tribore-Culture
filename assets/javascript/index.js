var audio={
    boas_vindas:new Audio('assets/sounds/Bv_cut.mp3')
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

var div=document.getElementById("play-boas_vindas") //selecionar o elemento id


