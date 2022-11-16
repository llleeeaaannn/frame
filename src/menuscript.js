import './style.css';
import { slogans } from './variables';
import WineImg from './images/sprezzatura-wine.jpg';


export default class Menu {

  constructor() {
    this.value = 'HECK';
  }

  start() {
    this.createSuppliersImages();
    // this.faqListener();
    // this.faqOptionsListener();
    // this.menuToggleListener();
  }

  createSuppliersImages() {
    let nodes = {}
    for (let i = 1; i < 19; i++) {
      let name = `supplier-image-${i}`
      // nodes[name] = document.getElementById(name);
      let node = document.getElementById(name);
      let supplierImage = new Image();
      supplierImage.src = WineImg;
      node.append(supplierImage)
    }
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

  menuToggleListener() {
    const menuBars = document.querySelectorAll('.menu-bar');
    const menuToggle = document.getElementById('menu-toggle');
    const menuContainer = document.getElementById('menu-container');
    menuToggle.addEventListener('click', () => {
      menuBars.forEach(bar => bar.classList.toggle('menu-selected'));
      menuContainer.classList.toggle('menu-active');
    });
  }
}
