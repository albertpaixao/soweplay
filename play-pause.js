let container = document.getElementsByClassName('presave-player')
let play = document.getElementsByClassName('play')
let pause = document.getElementsByClassName('pause')
let audio = document.getElementsByClassName('audio-presave')
audio[0].addEventListener('ended', audioFim)
pause[0].classList.add('hide')
let statusPlay = 0

function playPause() {
    if (statusPlay === 0) {
        play[0].classList.add('hide')
        pause[0].classList.remove('hide')
        statusPlay = 1
        audio[0].play()
    } else {
        play[0].classList.remove('hide')
        pause[0].classList.add('hide')
        statusPlay = 0
        audio[0].pause()
    }
}

function audioFim(){
    play[0].classList.remove('hide')
    pause[0].classList.add('hide')
    statusPlay = 0
}