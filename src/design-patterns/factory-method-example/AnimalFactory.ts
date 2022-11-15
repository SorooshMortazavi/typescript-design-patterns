import Duck from './Duck';
import IAnimal from './IAnimal';
import Tiger from './Tiger';

abstract class AnimalFactoryAbstract {
  abstract createAnimal(animalName: string): IAnimal;
}
export default class AnimalFactory extends AnimalFactoryAbstract {
  createAnimal(animalName: string): IAnimal {
    switch (animalName.toLowerCase()) {
      case 'duck':
        return new Duck();
      case 'tiger':
        return new Tiger();
      default:
        throw new Error('Wrong animal selected.');
    }
  }
}
