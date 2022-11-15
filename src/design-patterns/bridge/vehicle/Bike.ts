import IWorkshop from '../workshop/IWorkshop';
import Vehicle from './Vehicle';

export default class Bike extends Vehicle {
  constructor(workshop1: IWorkshop, workshop2: IWorkshop) {
    super(workshop1, workshop2);
  }

  manufacture(): void {
      console.log("manufacturing Bike")
      this.workshopProduce.work()
      this.workshopAssemble.work()
  }
}
