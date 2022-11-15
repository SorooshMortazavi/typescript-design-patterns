import IDuck from './IDuck';
import ITurkey from './ITurkey';

export default class TurkeyAdapter implements IDuck {
  turkey: ITurkey;
  constructor(turkey: ITurkey) {
    this.turkey = turkey;
  }
  quack() {
    this.turkey.gobble();
  }
  fly() {
    for (let index = 0; index < 5; index++) this.turkey.fly();
  }
}
