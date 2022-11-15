export class Vehicle {
  vehicleInfos: string[] = [];
  constructor() {}

  add(feature: string) {
    this.vehicleInfos.push(feature);
  }

  show() {
    console.log(this.vehicleInfos);
  }
}
