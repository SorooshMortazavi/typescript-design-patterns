import { Vehicle } from "../Vehicle";

export interface IVehicleBuilder {
  addWheels(): void;
  addHeadLights(): void;
  addBody(): void;
  getVehicle(): Vehicle;
}
