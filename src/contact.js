import './style.css';
import githubMark from './assets/images/Github-Mark-64px.png';

const createElementAndText = (tag, textContent) => {
  let element = document.createElement(`${tag}`);
  element.textContent = textContent;
  return element;
}

const contactComponent = () => {
	const CONTENT = document.getElementById('content');
	CONTENT.classList = 'content-contact';
  const contactFragment = document.createDocumentFragment();
  let emailSpan = document.createElement('span');
	let githubSpan = document.createElement('span');
	// githubSpan.style.display = 'flex';
	// githubSpan.style.justifyContent = 'center';
	// githubSpan.style.alignItems = 'center';
	let githubIcon = new Image(30, 30);
	githubIcon.src = githubMark;
  let githubLink = document.createElement('a');
  emailSpan.textContent = 'Email: info@tsunscoops.com'
	emailSpan.style.color = '#000FFF';
  githubLink.href = 'https://github.com/peterbuoy/restaurant-page';
  githubLink.textContent = 'Github Repo';
	githubSpan.append(githubIcon);
	githubSpan.append(githubLink);

  contactFragment.append(emailSpan);
  contactFragment.append(githubSpan);
  return contactFragment;
}

export {contactComponent};
