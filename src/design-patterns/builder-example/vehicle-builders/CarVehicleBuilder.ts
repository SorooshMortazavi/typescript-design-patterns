import { Vehicle } from '../Vehicle';
import { IVehicleBuilder } from './IVehicleBuilder';

export class CarVehicleBuilder implements IVehicleBuilder {
  vehicle = new Vehicle();

  addWheels(): void {
    this.vehicle.add('four wheels.');
  }
  addHeadLights(): void {
    this.vehicle.add('two headlights.');
  }
  addBody(): void {
    this.vehicle.add('four door body.');
  }
  getVehicle(): Vehicle {
    return this.vehicle;
  }
}
