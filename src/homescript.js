import './style.css';
import { slogans } from './variables';
import WineImg from './images/sprezzatura-wine.jpg';
import BreadImg from './images/sprezzatura-bread.jpg';
import PastaImg from './images/sprezzatura-pasta.jpg';
import OlivesImg from './images/sprezzatura-olives.jpg';
import RedPastaImg from './images/sprezzatura-red-pasta.jpg';
import ItalianImg from './images/sprezzatura-suppliers.jpg';


export default class Home {

  constructor() {
    this.value = 'HECK';
  }

  start() {
    this.createImages();
    this.faqListener();
    this.faqOptionsListener();
    this.menu();
  }

  menu() {
    this.menuLinksListener();
    this.menuToggleListener();
  }

  createImages() {
    const topImageContainer = document.getElementById('top-image-container');
    const supplierImageContainer = document.getElementsByClassName('suppliers-image')[0];
    const galleryOneContainer = document.getElementsByClassName('gallery-one')[0];
    const galleryTwoContainer = document.getElementsByClassName('gallery-two')[0];
    const galleryThreeContainer = document.getElementsByClassName('gallery-three')[0];
    const galleryFourContainer = document.getElementsByClassName('gallery-four')[0];
    const wineImage = new Image();
    const breadImage = new Image();
    const pastaImage = new Image();
    const olivesImage = new Image();
    const redPastaImage = new Image();
    const italianImage = new Image();
    wineImage.src = WineImg;
    breadImage.src = BreadImg;
    pastaImage.src = PastaImg;
    olivesImage.src = OlivesImg;
    redPastaImage.src = RedPastaImg;
    italianImage.src = ItalianImg;
    topImageContainer.append(pastaImage);
    supplierImageContainer.append(italianImage);
    galleryOneContainer.append(wineImage);
    galleryTwoContainer.append(olivesImage);
    galleryThreeContainer.append(breadImage);
    galleryFourContainer.append(redPastaImage);
  }

  faqListener() {
    let faqs = document.getElementsByClassName('faq-outer');
    faqs = [...faqs];
    faqs.forEach((faq) => {
      faq.addEventListener('click', () => {
        if (faq.classList.contains('active')) {
          faqs.forEach(element => element.classList.remove('active'));
        } else {
          faqs.forEach(element => element.classList.remove('active'));
          faq.classList.add('active');
        }
      })
    });
  }

  faqOptionsListener() {
    const dietaryOption = document.getElementById('faq-dietary-option');
    const bookingsOption = document.getElementById('faq-bookings-option');
    const generalOption = document.getElementById('faq-general-option');
    const dietaryQuestions = document.querySelector('.faq-dietary-container');
    const bookingsQuestions = document.querySelector('.faq-bookings-container');
    const generalQuestions = document.querySelector('.faq-general-container');
    const allElements = [dietaryOption, bookingsOption, generalOption, dietaryQuestions, bookingsQuestions, generalQuestions];
    dietaryOption.addEventListener('click', () => {
      allElements.forEach(el => el.classList.remove('active'));
      dietaryQuestions.classList.add('active');
      dietaryOption.classList.add('active');
    });
    bookingsOption.addEventListener('click', () => {
      allElements.forEach(el => el.classList.remove('active'));
      bookingsQuestions.classList.add('active');
      bookingsOption.classList.add('active');
    });
    generalOption.addEventListener('click', () => {
      allElements.forEach(el => el.classList.remove('active'));
      generalQuestions.classList.add('active');
      generalOption.classList.add('active');
    });
  }

  // Nav Menu Styling (same for all pages)
  menuToggleListener() {
    const menuBars = document.querySelectorAll('.menu-bar');
    const menuToggle = document.getElementById('menu-toggle');
    const menuContainer = document.getElementById('menu-container');
    menuToggle.addEventListener('click', () => {
      menuBars.forEach(bar => bar.classList.toggle('menu-selected'));
      menuContainer.classList.toggle('menu-active');
    });
  }

  menuLinksListener() {
    const menu = document.getElementById('menu-links');
    let links = menu.getElementsByTagName('a');
    links = [...links]
    const menuBars = document.querySelectorAll('.menu-bar');
    const menuContainer = document.getElementById('menu-container');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        menuBars.forEach(bar => bar.classList.toggle('menu-selected'));
        menuContainer.classList.toggle('menu-active');
      })
    });
  }
}
