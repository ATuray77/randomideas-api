import axios from 'axios';

class IdeasApi {
  constructor() {
    this._apiUrl = 'http://localhost:5000/api/ideas';
  }

  getIdeas() {
    return axios.get(this._apiUrl);
  }

  createIdeas(data) {
    return axios.post(this._apiUrl, data);//this data is going to come from the form
  }

}

export default new IdeasApi();//export and initiate IdeasApi class all at once