import './style.css';
import { slogans } from './variables';
import Pasta from './images/sprezzatura-pasta.jpg';

export default class Main {

  constructor() {
    this.value = 'HECK';
  }

  start() {
    this.createImages()
  }

  createImages() {
    const topImageContainer = document.getElementById('top-image-container');
    const pastaImage = new Image();
    pastaImage.src = Pasta;
    topImageContainer.append(pastaImage);
  }

}
