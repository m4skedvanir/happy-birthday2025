const open = document.getElementById('open');
const message = document.getElementById('message');
const video = document.getElementById('video');

open.addEventListener('click', () => {
    video.classList.toggle('action');
    setTimeout(() => {
        open.classList.toggle('inactive');
    },500);
    setTimeout(() => {
        video.classList.toggle('action');
        message.classList.toggle('active');
    },600);
});
