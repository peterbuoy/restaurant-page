import home from './home';
import menu from './menu';
import contact from './contact';
import './style.css';
import background from './assets/images/icecreamgirlwhitecho1.png';
import bakaImage from './assets/images/baka.gif';
import tsunScoopsIcon from './assets/images/tsun-scoops-logo.png';

const createElementAndText = (tag, textContent) => {
  let element = document.createElement(`${tag}`);
  element.textContent = textContent;
  return element;
}

// Footer Stuff (link, then img)
const FOOTER = document.getElementById('footer');
const FOOTER_LINK = document.createElement('a')
FOOTER_LINK.href = 'https://tsunscoops.com/';
FOOTER_LINK.textContent = "Original website";
FOOTER.appendChild(FOOTER_LINK);

// Background Image
let footerBakaImage = new Image(40, 40);
footerBakaImage.src = bakaImage;
FOOTER.appendChild(footerBakaImage);
const myIcon = new Image();
myIcon.src = background;
document.getElementById('body').appendChild(myIcon);

// Top left corner icon
let cornerIcon = document.createElement('img');
cornerIcon.src = tsunScoopsIcon;
cornerIcon.id = 'corner_icon';
const NAV = document.getElementById('nav');
NAV.prepend(cornerIcon);
