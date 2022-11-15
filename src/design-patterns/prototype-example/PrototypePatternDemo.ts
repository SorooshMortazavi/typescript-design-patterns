import {BasicCarCache} from "./BasicCarCache";


export default class PrototypePatternDemo {
  public static main() {
    BasicCarCache.loadCachedCars();

    const benz2 = BasicCarCache.getCachedCar("BENZ")
    const benz3 = BasicCarCache.getCachedCar("BENZ")
    benz2.price = 33_000
    console.log(benz2.price)
    console.log(benz3.price)
  }
}
