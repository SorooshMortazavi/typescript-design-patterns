import { Vehicle } from '../Vehicle';
import { IVehicleBuilder } from './IVehicleBuilder';

export class MotorCycleVehicleBuilder implements IVehicleBuilder {
  vehicle = new Vehicle();

  addWheels(): void {
    this.vehicle.add('two wheels.');
  }
  addHeadLights(): void {
    this.vehicle.add('one headlights.');
  }
  addBody(): void {
    this.vehicle.add('motor body.');
  }
  getVehicle(): Vehicle {
    return this.vehicle;
  }
}
