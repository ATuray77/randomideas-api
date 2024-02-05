class Modal {
    constructor() {
        this._modal = document.querySelector('#modal');
        this._modalBtn = document.querySelector('#modal-btn');
        this.addEventListeners(); //calling it in here cause this constructor runs right away
    }

    addEventListeners() {
        this._modalBtn.addEventListener('click', this.open.bind(this));
        window.addEventListener('click', this.outsideClick.bind(this));
    }

    open() {
        this._modal._style.display = 'block';
    }
    
    close() {
        this._modal.style.display = 'none';
    }
    
    outsideClick(e) {
        if (e.target === this._modal) {
            close();
        }
    }
}

export default Modal; 