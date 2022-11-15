import IWorkshop from './IWorkshop';

//this is a concrete implementor.
export default class Assemble implements IWorkshop {
  work(): void {
    console.log('produce');
  }
}
