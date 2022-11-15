import IWorkshop from './IWorkshop';

//this is a concrete implementor.
export default class Produce implements IWorkshop {
  work(): void {
    console.log('worked');
  }
}
