import './style.css';

const createElementAndText = (tag, textContent) => {
  let element = document.createElement(`${tag}`);
  element.textContent = textContent;
  return element;
}

const homeComponent = () => {
  const homeFragment = document.createDocumentFragment()
  let testDiv = document.createElement('div');
  testDiv.textContent = 'home test div'
  homeFragment.append(testDiv);
  return homeFragment;
}

export {homeComponent};
