import {Carte} from '../../curs1/Carte.js';

// import {Carte} from '../js/Carte.js';
  import {Carte as MyCarte} from './modules/Cartea.js';



let carte = new Carte('Poezii','Mihai Eminescu', 'Polirom',2007, 25);
carte.deschideCartea();
let mycarte = new MyCarte('Poezii','Mihai Eminescu', 'Polirom',2007, 25);
mycarte.deschidCartea();