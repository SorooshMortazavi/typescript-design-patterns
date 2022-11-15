import Singleton from "./Singleton";

export default class TestSingletonLazyInit {
    public static main() {
        const singleton:Singleton = Singleton.getInstance()
        singleton.setNumber(55)
        console.log(singleton.getData())

        const singleton2:Singleton = Singleton.getInstance()
        console.log(singleton2.getData())
    }
}