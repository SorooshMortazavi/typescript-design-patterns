import ITurkey from './ITurkey';

export default class WildTurkey implements ITurkey {
  gobble() {
    console.log('gobble');
  }
  fly() {
    console.log('flying a short distance');
  }
}
