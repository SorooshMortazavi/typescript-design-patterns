import IAnimal from "./IAnimal";

export default class Tiger implements IAnimal {
    makeSound(): void {
        console.log('sound of tiger.')
    }
    eat(): void {
        console.log("eating meat.");
    }

}