import IAnimal from "./IAnimal";

export default class Duck implements IAnimal {
    makeSound(): void {
        console.log('sound of duck.')
    }
    eat(): void {
        console.log("eating vegetables.");
    }

}