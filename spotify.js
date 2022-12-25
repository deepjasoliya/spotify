let back = document.getElementById('Back');
let Mply = document.getElementById('play');
let forw = document.getElementById('for');
let audioElement = new Audio();
let songIndex = 0;
let sicbar = document.getElementById('rang');
let gif = document.getElementById('gif');
let plysong = Array.from(document.getElementsByClassName('playSong'));
let music=[];
let song = [
    { filePath: '1.mp3' },
    { filePath: '2.mp3' },
    { filePath: '3.mp3' },
    { filePath: '4.mp3' },
    { filePath: '5.mp3' },
    { filePath: '6.mp3' },
    { filePath: '7.mp3' },
    { filePath: '8.mp3' },
    { filePath: '9.mp3' },
    { filePath: '10.mp3' },
    { filePath: '11.mp3' }
]
let currentSong = new Audio();
// function makeAllpase () {
//     audio.pause();
// }

for (let i = 0; i < plysong.length; i++) {
    let audio = new Audio(song[i].filePath)
    music.push(audio);
    plysong[i].addEventListener("click", () => {
        if (audio.paused) {
            plysong.forEach(btn => {
                btn.classList.remove("fa-circle-pause")
                btn.classList.add("fa-circle-play")
                for (let j= 0; j<=music.length; j++) {
                    if (music[j] instanceof Audio) {
                        music[j].pause();
                    }
                }
            })
            plysong[i].classList.remove("fa-circle-play")
            plysong[i].classList.add("fa-circle-pause")
            // makeAllpase();
            audio.play()
            gif.style.opacity="1";
        }
        else {
            plysong[i].classList.remove("fa-circle-pause")
            plysong[i].classList.add("fa-circle-play")
            audio.pause();
            gif.style.opacity="0";
        }
    })
    plysong[i].addEventListener('timeupdate', () => {
            let time = parseInt((currentSong.currentTime/ currentSong.duration)*100);
            console.log(currentSong.duration);
            sicbar.value = time
        })
    // sicbar.addEventListener('change', () => {
    // sicbar.currentTime = sicbar.value / 100;
    //     })
}



