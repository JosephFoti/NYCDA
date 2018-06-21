import module1 from './module1.js';

import Prescription from './Prescription';

let rx = new Prescription('Advil',40);

console.log(rx.getDrug());

module1('Mantis');
