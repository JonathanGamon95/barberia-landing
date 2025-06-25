const modal = document.getElementById('videoModal');
const openBtn = document.getElementById('BUTTOM-VIDEO');
const closeBtn = document.getElementById('closeModal');
const video = document.getElementById('videoElement');

openBtn.onclick = () => {
    modal.style.display = 'flex';
    video.pause(); // asegurarse que empiece pausado
    video.currentTime = 0; // reiniciar el video
};

closeBtn.onclick = () => {
    modal.style.display = 'none';
    video.pause();
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        video.pause();
    }
};

video.onclick = () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};