import Bike from './vehicle/Bike';
import Car from './vehicle/Car';
import Assemble from './workshop/Assemble';
import Produce from './workshop/Produce';

export class BridgePatternDemo {
  static main(): void {
    const produce = new Produce();
    const assemble = new Assemble();

    // we can use any implementation of IWorkshop that we need
    // for the abstraction part that client use.
    const car = new Car(produce, assemble);
    const bike = new Bike(produce, assemble);

    car.manufacture()
    bike.manufacture()
  }
}
