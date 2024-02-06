//import '@fortawesome/fontawesome-free/css/all.css'; //brings in fontawesome here
import Modal from './components/Modal';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';
import './css/style.css';

new Modal() ;//instantiating the Modal class we imported above

const ideaForm= new IdeaForm();

ideaForm.render(); //calling render on the ideaForm for display to the DOM

new IdeaList();



