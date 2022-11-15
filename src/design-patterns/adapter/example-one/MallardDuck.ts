import { ConfigurableModuleBuilder } from '@nestjs/common';
import IDuck from './IDuck';

export default class MallardDuck implements IDuck {

  quack() {
    console.log('duck quack')
  }

  fly() {
    console.log('duck fly')
  }
}
