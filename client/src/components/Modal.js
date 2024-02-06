class Modal {
    constructor() {
        this._modal = document.querySelector('#modal');
        this._modalBtn = document.querySelector('#modal-btn');
        this.addEventListeners(); //calling it in here cause this constructor runs right away
        
    }

    addEventListeners() {
        this._modalBtn.addEventListener('click', this.open.bind(this));
        window.addEventListener('click', this.outsideClick.bind(this));
        document.addEventListener('closemodal', () => 
            this.close());
    }

    open() {
        this._modal.style.display = 'block';
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