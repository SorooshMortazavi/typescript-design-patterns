import IBollyWoodMovie from "../interfaces/IBollyWoodMovie";

export default class BollyWoodMovieComedy implements IBollyWoodMovie {
    getName(): void {
        console.log('getName -> BollyWoodMovieComedy')
    }

}