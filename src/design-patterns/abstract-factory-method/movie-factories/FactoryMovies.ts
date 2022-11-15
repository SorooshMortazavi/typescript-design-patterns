import BollyWoodMovieFactory from "./BollyWoodFactory";
import HollyWoodMovieFactory from "./HollyWoodFactory";

export default class FactoryMovies {
   static getFactoryMovie(type:string):BollyWoodMovieFactory | HollyWoodMovieFactory {

    switch (type.toLowerCase()) {
        case 'hollywood':
            return new HollyWoodMovieFactory()
            case 'bollywood':
            return new BollyWoodMovieFactory()
    
        default:
            break;
    }
   }

}