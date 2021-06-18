import home from './home';
import menu from './menu';
import {contactComponent} from './contact';
import './style.css';
import tsunScoopsIcon from './assets/images/tsun-scoops-logo.png';
import backgroundGirl from './assets/images/icecreamgirlwhitecho1.png';
import bakaImage from './assets/images/baka.gif';

const createElementAndText = (tag, textContent) => {
  let element = document.createElement(`${tag}`);
  element.textContent = textContent;
  return element;
}

// Top left corner icon
let CORNER_LOGO = document.getElementById('corner_logo');
CORNER_LOGO.src = tsunScoopsIcon;

// Background Image
const BODY = document.getElementById('body');
BODY.style.background = `linear-gradient(#b2f5b932, #b2f5b932), url(${backgroundGirl}) no-repeat`
BODY.style.backgroundSize = 'cover';

// Footer Stuff (link, then img)
const FOOTER_LINK = document.getElementById('footer_link');
const FOOTER_IMG = document.getElementById('footer_baka_img');
FOOTER_LINK.href = 'https://tsunscoops.com/';
FOOTER_LINK.textContent = "Official Site...";
FOOTER_IMG.src = bakaImage;

const CONTACT_div = document.getElementById('div_contact')
CONTACT_div.addEventListener('click', contactComponent);
