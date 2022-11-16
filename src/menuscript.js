import './style.css';
import { slogans } from './variables';
import WineImg from './images/sprezzatura-wine.jpg';


export default class Menu {

  constructor() {
    this.value = 'HECK';
  }

  start() {
    // this.createSuppliersImages();
    // this.menu();
  }

  menu() {
    this.menuLinksListener();
    this.menuToggleListener();
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
