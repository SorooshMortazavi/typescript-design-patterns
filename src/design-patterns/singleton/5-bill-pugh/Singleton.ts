export default class Singleton {
  // private static singletonInstance:Singleton = new Singleton();
  private number: number = 0;

  private constructor() {}

  private static SingletonHelper = class {
     static singletonInstance: Singleton = new Singleton();
  };

  public static getInstance(): Singleton {
    return this.SingletonHelper.singletonInstance;
  }

  public setNumber(number: number): void {
    this.number = number;
  }

  public getData(): number {
    return this.number;
  }
}
