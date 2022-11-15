import IWorkshop from '../workshop/IWorkshop';

//this is the abstraction part of the bridge pattern.
//this is an abstract  class it could be an interface too.
// the key concept in this pattern is the decouple the abstraction and implementation
// we can change the implementations at run-time.
export default abstract class Vehicle {
  workshopProduce: IWorkshop;
  workshopAssemble: IWorkshop;
  constructor(workshopProduce: IWorkshop, workshopAssemble: IWorkshop) {
    this.workshopProduce = workshopProduce;
    this.workshopAssemble = workshopAssemble;
  }

  manufacture(): void {}
}
