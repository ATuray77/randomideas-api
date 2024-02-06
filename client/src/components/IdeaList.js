import IdeasApi from '../services/ideasApi'//from IdeasApi component
class IdeaList{
    constructor() {
        this._ideaListEl = document.querySelector('#idea-list');
        this._ideas = [];
        this.getIdeas();

        this._validTags = new Set(); //to maintain unique values
        this._validTags.add('technology');//using the add method to fill them in 
        this._validTags.add('software');
        this._validTags.add('business');
        this._validTags.add('education');
        this._validTags.add('health');
        this._validTags.add('inventions');
    }

    addEventLIsteners() { //using event delegation to put the click event on the entire but target the icon
        this._ideaListEl.addEventListener('click', (e) => {
            if (e.target.classList.contains('fa-times')) {
                e.stopImmediatePropagation(); //targeting only the x button and prevent that action to propagate up
                const ideaId = e.target.parentElement.parentElement.dataset.id;//dataset is the custom id
                this.deleteIDea(ideaId)
            }
        })
    }

    async getIdeas(){
        try {
            const res = await IdeasApi.getIdeas();
            this._ideas = res.data.data;
            this.render();
        } catch (error) {
            console.log(error)
            
        }
    }

    async deleteIDea(ideaId) {
        try {
           //delete from server 
           const res = await IdeasApi.deleteIdea(ideaId);
           this._ideas.filter((idea) => idea._id !== ideaId);//to delete from the DOM. filter out the idea id that was passed in
           this.getIdeas(); //grabs all the new ideas without the one that was filtered out 
        } catch (error) {
            alert("You cannot delete this resource")
        }
    }

    addIdeaToList(idea) { //this will push post to the dom automatically
        this._ideas.push(idea);
        this.render(); //rerender the component after pushing the idea
    }

    getTagClass(tag){ //we want to be able to call the cards in our render to get the correct class to add as tag
        tag = tag.toLowerCase();
        let tagClass = ''; 
        if (this._validTags.has(tag)) { //checking if the tag passed in is in the set
            tagClass = `tag-${tag}`;
        } else {
            tagClass = '';
        }

        return tagClass;
    }

    render() { //using map on the array for each one and display them
        this._ideaListEl.innerHTML = this._ideas.map((idea) => {
            const tagClass = this.getTagClass(idea.tag)
            return `
            <div class="card" data-id="${idea._id}">
            <button class="delete"><i class="fas fa-times"></i></button>
            <h3>
              ${idea.text}
            </h3>
            <p class="tag ${tagClass}">${idea.tag.toUpperCase()}</p>
            <p>
              Posted on <span class="date">${idea.date}</span> by
              <span class="author">${idea.username}</span>
            </p>
          </div>
            `;
        }).join('');//turn it back into a string

        this.addEventLIsteners(); //we place it here cause we want it to run after the html page is rendered

    }
}

export default IdeaList;