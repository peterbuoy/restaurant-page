import './style.css';

const createElementAndText = (tag, textContent) => {
  let element = document.createElement(`${tag}`);
  element.textContent = textContent;
  return element;
}

const homeComponent = () => {
	const CONTENT = document.getElementById('content');
	CONTENT.classList = 'content-home';
  const homeFragment = document.createDocumentFragment()
  let topText = document.createElement('div');
  topText.textContent = `Welcome to the tsun scoops SPA located in Hotel California.
												Not like I care if you leave or anything.`
	let bottomText = document.createElement('div');
	bottomText.textContent = `Original page is in the Footer below.
														The sauce can be found in the Contact tab.`
  homeFragment.append(topText);
	homeFragment.append(bottomText);
  return homeFragment;
}

export {homeComponent};
