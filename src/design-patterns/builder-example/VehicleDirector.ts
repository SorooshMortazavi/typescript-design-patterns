import { IVehicleBuilder } from './vehicle-builders/IVehicleBuilder';

export default class VehicleDirector {
  builder: IVehicleBuilder;
  constructor(builder: IVehicleBuilder) {
    this.builder = builder;
    builder.addBody();
    builder.addHeadLights();
    builder.addWheels();
  }
}
