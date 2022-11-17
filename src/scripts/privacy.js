import '../style.css';

export default class Privacy {

  constructor() {
    this.value = 'HECK';
  }

  start() {
    this.menu();
  }

  menu() {
    this.menuLinksListener();
    this.menuToggleListener();
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

const privacy = new Privacy();
privacy.start();

console.log('Privacy');
