export default class Singleton {
    private static singletonInstance:Singleton = new Singleton();
    private number:number = 0;

    private constructor(){}

    public static getInstance():Singleton {
        return this.singletonInstance
    }

    public setNumber(number:number):void {
        this.number = number;
    }

    public getData():number {
        return this.number
    }
}