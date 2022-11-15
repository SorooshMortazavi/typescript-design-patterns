import BasicCar from './BasicCar';

export default class Benz extends BasicCar {

  constructor(modelName: string, price: number) {
    super(modelName, price);
  }

  clone(): BasicCar {
      return  Object.create(this)
  }
}
