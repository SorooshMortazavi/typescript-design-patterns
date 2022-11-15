import IHollyWoodMovie from "../interfaces/IHollyWoodMovie";

export default class HollyWoodMovieComedy implements IHollyWoodMovie {
    getName(): void {
        console.log('getName -> HollyWoodMovieComedy')
    }

}