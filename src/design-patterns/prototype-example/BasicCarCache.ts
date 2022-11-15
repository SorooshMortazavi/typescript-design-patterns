import BasicCar from './BasicCar';
import Benz from './Benz';

export  class BasicCarCache {
  public static cachedCars = new Map<String, BasicCar>();

  public static getCachedCar(modelName: string): BasicCar {
    return this.cachedCars.get(modelName).clone()
  }

  public static loadCachedCars(): void {
    const benz = new Benz('BENZ', 100_000);
    const bmw = new Benz('BMW', 200_000);
    this.cachedCars.set('BENZ', benz);
    this.cachedCars.set('BMW', bmw);
    return;
  }
}
