import './style.css';
import { slogans } from './variables';
import WineImg from './images/sprezzatura-wine.jpg';
import BreadImg from './images/sprezzatura-bread.jpg';
import PastaImg from './images/sprezzatura-pasta.jpg';
import OlivesImg from './images/sprezzatura-olives.jpg';
import RedPastaImg from './images/sprezzatura-red-pasta.jpg';
import SuppliersImg from './images/sprezzatura-suppliers.jpg';

export default class Main {

  constructor() {
    this.value = 'HECK';
  }

  start() {
    this.createImages()
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
    const suppliersImage = new Image();
    wineImage.src = WineImg;
    breadImage.src = BreadImg;
    pastaImage.src = PastaImg;
    olivesImage.src = OlivesImg;
    redPastaImage.src = RedPastaImg;
    suppliersImage.src = SuppliersImg;
    topImageContainer.append(pastaImage);
    supplierImageContainer.append(suppliersImage);
    galleryOneContainer.append(wineImage);
    galleryTwoContainer.append(olivesImage);
    galleryThreeContainer.append(breadImage);
    galleryFourContainer.append(redPastaImage);
  }

}
