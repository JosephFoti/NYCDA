import Russia from './russia';

class Soviet extends Russia {

  constructor(place,drunk) {
    super(place,drunk);
    this.gov = 'Communist';

  }

  isBear() {
    console.log('Yea, thats a fucking bear!');
  }

  }

export default Soviet;
