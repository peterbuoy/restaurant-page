import './style.css';
import menuPeach from './assets/images/peachigo-kurasaki-flavor.jpg'
import menuUwube from './assets/images/uwube-flavor.jpg'
import menuRamune from './assets/images/ramune-flavor.jpg'

const createElementAndText = (tag, textContent) => {
  let element = document.createElement(`${tag}`);
  element.textContent = textContent;
  return element;
}

const createMenuItemAndImage = (title, description, imagePath) => {
	let divItem = document.createElement('div');
	divItem.style.display = 'flex';
	divItem.style.flexDirection = 'column';
	divItem.style.alignItems = 'center';
	let divParagraph = createElementAndText('p', description);
	let divImg = new Image(260, 260);
	divImg.style.borderRadius = '15px';
	divImg.src = imagePath;
	divItem.append(divParagraph);
	divItem.append(divImg);
	return divItem;
}

const menuComponent = () => {
	const CONTENT = document.getElementById('content');
	CONTENT.classList = 'content-menu';
  const menuFragment = document.createDocumentFragment();
	let peachItem = createMenuItemAndImage('', `Peach Kurasaki`, menuPeach);
	let uwubeItem = createMenuItemAndImage('', 'Uwube', menuUwube);
	let ramuneItem = createMenuItemAndImage('', 'Ramune 1/2', menuRamune);
	menuFragment.append(peachItem);
	menuFragment.append(uwubeItem);
	menuFragment.append(ramuneItem);
  return menuFragment;
}

export {menuComponent};
