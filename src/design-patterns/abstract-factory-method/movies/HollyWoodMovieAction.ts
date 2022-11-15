import IHollyWoodMovie from "../interfaces/IHollyWoodMovie";

export default class HollyWoodMovieAction implements IHollyWoodMovie {
    getName(): void {
        console.log('getName -> HollyWoodMovieAction')
    }

}