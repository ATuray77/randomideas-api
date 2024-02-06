class IdeaForm{
    constructor() {
        this._formModal = document.querySelector('#form-modal')
        
   }

   addEventListeners() {
    this._form.addEventListener('submit', this.handleSubmit.bind(this));
   }

   handleSubmit(e) {
    e.preventDefault();
    
    //instead of accessing each input separately, we want to access them at once
    const idea = { //by creating an object targeting the name tag on the elements
        text: this._form.elements.text.value,
        tag: this._form.elements.tag.value,
        username: this._form.elements.username.value,
    }

    console.log(idea)
   }

   render() { //render outputs the html
    this._formModal.innerHTML = `
    <form id="idea-form">
          <div class="form-control">
            <label for="idea-text">Enter a Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div class="form-control">
            <label for="idea-text">What's Your Idea?</label>
            <textarea name="text" id="idea-text"></textarea>
          </div>
          <div class="form-control">
            <label for="tag">Tag</label>
            <input type="text" name="tag" id="tag" />
          </div>
          <button class="btn" type="submit" id="submit">Submit</button>
        </form>
    `;

    this._form = document.querySelector('#idea-form')
        this.addEventListeners();
   }
}

export default IdeaForm;