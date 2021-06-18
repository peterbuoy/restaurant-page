import './style.css';

//const CONTENT = document.getElementById('content');
const contactComponent = () => {
  const CONTENT = document.getElementById('content');
  console.log(CONTENT);
  console.log('aaaa inside contactcomponent');
  while (CONTENT.firstChild) {
    CONTENT.removeChild(CONTENT.lastChild);
  }
  return console.log('LMAO');
}

export {contactComponent};