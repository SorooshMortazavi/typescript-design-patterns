import IBollyWoodMovie from "../interfaces/IBollyWoodMovie";

export default class BollyWoodMovieAction implements IBollyWoodMovie {
    getName(): void {
        console.log('getName -> BollyWoodMovieAction')
    }

}