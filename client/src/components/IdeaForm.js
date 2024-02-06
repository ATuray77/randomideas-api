import IdeasApi from "../services/ideasApi";

class IdeaForm{
    constructor() {
        this._formModal = document.querySelector('#form-modal')
        
   }

   addEventListeners() {
    this._form.addEventListener('submit', this.handleSubmit.bind(this));
   }

   async handleSubmit(e) {
    e.preventDefault();
    
    //instead of accessing each input separately, we want to access them at once
    const idea = { //by creating an object targeting the name tag on the elements
        text: this._form.elements.text.value,
        tag: this._form.elements.tag.value,
        username: this._form.elements.username.value,
    }
    
    const newIdea = await IdeasApi.createIdeas(idea)

    //clear fields
    this._form.elements.text.value = ''
    this._form.elements.tag.value = ''
    this._form.elements.username.value = ''

    document.dispatchEvent(new Event('closemodal'));// now we have to listen for this event in modal
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