import IdeasApi from "../services/ideasApi";
import IdeaList from "./IdeaList";

class IdeaForm{
    constructor() {
        this._formModal = document.querySelector('#form-modal')
        this._ideaList = new IdeaList(); //instantiating the new Idealist since it's a class        
   }

   addEventListeners() {
    this._form.addEventListener('submit', this.handleSubmit.bind(this));
   }

   async handleSubmit(e) {
    e.preventDefault();

    if (
        !this._form.elements.text.value ||
        !this._form.elements.tag.value ||
        !this._form.elements.username.value
      ) {
        alert('Please enter all fields');
        return;
      }
  
    
    //instead of accessing each input separately, we want to access them at once
    const idea = { //by creating an object targeting the name tag on the elements
        text: this._form.elements.text.value,
        tag: this._form.elements.tag.value,
        username: this._form.elements.username.value,
    }
    
    //add idea to server
    const newIdea = await IdeasApi.createIdeas(idea)

    //add idea to list
    this._ideaList.addIdeaToList(newIdea.data.data);//returns the whole data

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