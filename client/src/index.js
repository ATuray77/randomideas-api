import '@fortawesome/fontawesome-free/css/all.css'; //brings in fontawesome here
import './css/style.css';

const modal = document.querySelector('#modal');
const modalBtn = document.querySelector('#modal-btn');



modalBtn.addEventListener('click', open);
window.addEventListener('click', outsideClick);