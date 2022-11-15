import IDuck from "./IDuck";
import MallardDuck from "./MallardDuck";
import TurkeyAdapter from "./TurkeyAdapter";
import WildTurkey from "./WildTurky";

export default class AdapterPatternDemo {
    public static main() {
        const mallardDuck = new MallardDuck()
        const wildTurkey = new WildTurkey()
        const turkeyAdapter = new TurkeyAdapter(wildTurkey)

        console.log("mallard duck actions:")
        this.duckActions(mallardDuck)

        console.log("wild turkey actions:")
        wildTurkey.gobble();
        wildTurkey.fly();

        console.log("turkey adapter actions:")
        this.duckActions(turkeyAdapter)

        

    }

    private static duckActions(duck:IDuck){
        duck.quack()
        duck.fly()
    }
}