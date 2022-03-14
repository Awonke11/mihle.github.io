playBtn = document.getElementById("playBtn");
stopBtn = document.getElementById("stopBtn");
volumeBtn = document.getElementById("volumeBtn");

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#FFCCCB',
    progressColor: '#FF0000',
    barWidth: 3,
    responsive: true,
    hideScrollbar: true,
    barRadius: 3
});
wavesurfer.load('assests/Dusk till dawn lyrics ( cover by Tyler & Ryan) (192 kbps).mp3');

playBtn.onclick = function(){
    wavesurfer.playPause();
    if(playBtn.src.match("play")){
        playBtn.src  = "assests/pause.png";
    }
    else{
        playBtn.src = "assests/play.png"
    }
}

stopBtn.onclick = function(){
    wavesurfer.stop();
    playBtn.src = "assests/play.png"
}

volumeBtn.onclick = function(){
    wavesurfer.toggleMute();
    if(volumeBtn.src.match("volume")){
        volumeBtn.src  = "assests/mute.png";
    }
    else{
        volumeBtn.src = "assests/volume.png"
    }
}

const texts = ["Happy Birthday"]
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".main-heading").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 400)
}());