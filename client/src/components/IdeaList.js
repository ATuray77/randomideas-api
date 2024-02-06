import IdeasApi from "../services/ideasApi" //from IdeasApi component
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

    async getIdeas(){
        try {
            const res = await IdeasApi.getIdeas();
            this._ideas = res.data
        } catch (error) {
            
        }
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
            <div class="card">
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

    }
}

export default IdeaList;