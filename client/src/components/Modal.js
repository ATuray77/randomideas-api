class Modal {
    constructor() {
        this._modal = document.querySelector('#modal');
        this._modalBtn = document.querySelector('#modal-btn');
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