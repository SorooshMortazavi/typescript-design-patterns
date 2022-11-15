import { CarVehicleBuilder } from './vehicle-builders/CarVehicleBuilder';
import { MotorCycleVehicleBuilder } from './vehicle-builders/MotorCycleVehicleBuilder';
import VehicleDirector from './VehicleDirector';

export default class BuilderPatternDemo {
  public static main() {
    const carBuilder = new CarVehicleBuilder();
    const motorBuilder = new MotorCycleVehicleBuilder();

    const vehicleDirector = new VehicleDirector(carBuilder);
    const motorDirector = new VehicleDirector(motorBuilder);

    const car = carBuilder.getVehicle();
    const motor = motorBuilder.getVehicle()

    console.log('showing the car:')
    car.show()
    console.log('showing the motor:')
    motor.show()
  }
}
