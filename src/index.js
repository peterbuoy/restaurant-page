import {homeComponent} from './home';
import {menuComponent} from './menu';
import {contactComponent} from './contact';
import './style.css';
import tsunScoopsIcon from './assets/images/tsun-scoops-logo.png';
import backgroundGirl from './assets/images/icecreamgirlwhitecho1.png';
import bakaImage from './assets/images/baka.gif';



const HOME = document.getElementById('div_home');
const MENU = document.getElementById('div_menu')
const CONTACT = document.getElementById('div_contact')
const CONTENT = document.getElementById('content');

const clearContent = () => {
  while (CONTENT.firstChild) {
    CONTENT.removeChild(CONTENT.lastChild);
  }
}

const renderHomeComponent = () => {
  HOME.style.textDecoration = 'underline';
  MENU.style.textDecoration = 'none';
  CONTACT.style.textDecoration = 'none';
  clearContent();
  CONTENT.append(homeComponent());
}

const renderMenuComponent = () => {
  HOME.style.textDecoration = 'none';
  MENU.style.textDecoration = 'underline';
  CONTACT.style.textDecoration = 'none';
  clearContent();
  CONTENT.append(menuComponent());
}

const renderContactComponent = () => {
  HOME.style.textDecoration = 'none';
  MENU.style.textDecoration = 'none';
  CONTACT.style.textDecoration = 'underline';
  clearContent();
  CONTENT.append(contactComponent());
}

HOME.addEventListener('click', renderHomeComponent);
MENU.addEventListener('click', renderMenuComponent);
CONTACT.addEventListener('click', renderContactComponent);


renderHomeComponent();
// Top left corner logo
let CORNER_LOGO = document.getElementById('corner_logo');
CORNER_LOGO.src = tsunScoopsIcon;

// Background Image
const BODY = document.getElementById('body');
BODY.style.background = `linear-gradient(#b2f5b932, #b2f5b932), url(${backgroundGirl}) no-repeat`
BODY.style.backgroundSize = 'cover';

const FOOTER_IMG = document.getElementById('footer_baka_img');
FOOTER_IMG.src = bakaImage;
