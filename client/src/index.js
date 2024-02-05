import '@fortawesome/fontawesome-free/css/all.css'; //brings in fontawesome here
import './css/style.css';

const modal = document.querySelector('#modal');
const modalBtn = document.querySelector('#modal-btn');

function open() {
    modal.style.display = 'block';
}

function close() {
    modal.style.display = 'none';
}

function outsideClick(e) {
    if (e.target === modal) {
        close();
    }
}

modalBtn.addEventListener('click', open);
window.addEventListener('click', outsideClick);