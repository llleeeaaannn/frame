import '../style.css';
import HometreeImg from '../images/hometree.jpg';

export default class Hometree {

  constructor() {
    this.value = 'HECK';
  }

  start() {
    this.menu();
    this.createHometreeImages();
  }

  menu() {
    this.menuLinksListener();
    this.menuToggleListener();
  }

  createHometreeImages() {
    let imageContainer = document.getElementById('hometree-image-container');
    let hometreeImage = new Image();
    hometreeImage.src = HometreeImg;
    imageContainer.append(hometreeImage);
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


const hometree = new Hometree();
hometree.start();

console.log('hometree');
