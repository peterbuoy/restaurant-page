import './style.css';

const createElementAndText = (tag, textContent) => {
  let element = document.createElement(`${tag}`);
  element.textContent = textContent;
  return element;
}

const contactComponent = () => {
  const contactFragment = document.createDocumentFragment();
  let emailInfo = document.createElement('span');
  let githubLink = document.createElement('a');
  emailInfo.textContent = 'Email: info@tsunscoops.com'
  githubLink.href = 'https://github.com/peterbuoy/restaurant-page';
  githubLink.textContent = 'Github Repo';

  contactFragment.append(emailInfo);
  contactFragment.append(githubLink);
  return contactFragment;
}

export {contactComponent};
