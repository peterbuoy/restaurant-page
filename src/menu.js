import './style.css';

const createElementAndText = (tag, textContent) => {
  let element = document.createElement(`${tag}`);
  element.textContent = textContent;
  return element;
}

const menuComponent = () => {
  const menuFragment = document.createDocumentFragment();
  let testDiv = document.createElement('div');
  testDiv.textContent = 'menu test div'
  menuFragment.append(testDiv);
  return menuFragment;
}

export {menuComponent};
