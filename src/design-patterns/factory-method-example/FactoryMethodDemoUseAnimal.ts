import AnimalFactory from "./AnimalFactory";
import IAnimal from "./IAnimal";

export default  class FactoryMethodDemoUseAnimal {

    public static main() {
        const animalFactory = new AnimalFactory()

        const tiger:IAnimal = animalFactory.createAnimal('tiger')
        tiger.eat()
        tiger.makeSound()

        const duck:IAnimal = animalFactory.createAnimal('duck')
        duck.eat()
        duck.makeSound()
    }
} 