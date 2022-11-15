export default abstract class BasicCar {
  modelName: string;
  price: number;

  constructor(modelName: string, price: number) {
    this.modelName = modelName;
    this.price = price;
  }

  clone(): BasicCar {

    // Object.create this will create a realCopy not refrence.
    // Object.assign this isn't a real copy it's kind of reference assignment.
    return Object.create(this);
  }
}
