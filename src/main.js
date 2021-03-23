import string from './style.js'
let n = 0;
let time = 50;
let move = document.getElementById('move')
let move2 = document.getElementById('move2')
move.innerText = string.substr(0, n)
move2.innerHTML = string.substr(0, n)
const run = () => {
    n = n + 1;
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    move.innerText = string.substr(0, n)
    move2.innerHTML = string.substr(0, n)
    window.scrollTo(0, 9999);
}
const play = () => {
    return setInterval(run, time)
}
const pause = () => {
    window.clearInterval(id)
}
let id = play();

btnPause.onclick = () => {
    pause()
}
btnPlay.onclick = () => {
    id = play();
}
btnSlow.onclick = () => {
    pause()
    time = 200;
    id = play()
}
btnNormal.onclick = () => {
    pause()
    time = 50;
    id = play()
}
btnFast.onclick = () => {
    pause()
    time = 0;
    id = play()
}