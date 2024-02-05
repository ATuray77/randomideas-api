import '@fortawesome/fontawesome-free/css/all.css'; //brings in fontawesome here
import './css/style.css';

const modal = document.querySelector('#modal');
const modalBtn = document.querySelector('#modal-btn');

function open() {
    modal.style.display = 'block';
}

modalBtn.addEventListener('click', open);