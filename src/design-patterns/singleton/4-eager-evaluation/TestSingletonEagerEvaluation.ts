import Singleton from "./Singleton";

export default class TestSingletonEagerEvaluation {
    public static main() {
        const singleton:Singleton = Singleton.getInstance()
        singleton.setNumber(55)
        console.log(singleton.getData())

        const singleton2:Singleton = Singleton.getInstance()
        console.log(singleton2.getData())
    }
}