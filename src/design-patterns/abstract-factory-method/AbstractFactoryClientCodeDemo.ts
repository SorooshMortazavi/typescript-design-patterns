import BollyWoodMovieFactory from "./movie-factories/BollyWoodFactory";
import FactoryMovies from "./movie-factories/FactoryMovies";
import HollyWoodMovieFactory from "./movie-factories/HollyWoodFactory";

export default class AbstractFactoryClientCodeDemo {

    public static main():void {

        const bFactory:BollyWoodMovieFactory = FactoryMovies.getFactoryMovie('bollywood') as BollyWoodMovieFactory
        const hFactory:HollyWoodMovieFactory = FactoryMovies.getFactoryMovie('hollywood') as HollyWoodMovieFactory
        
        const bComedyMovie = bFactory.getBollyWoodMovie('comedy')
        const bActionMovie = bFactory.getBollyWoodMovie('action')

        const hComedyMovie = hFactory.getHollyWoodMovie('comedy')
        const hActionMovie = hFactory.getHollyWoodMovie('action')

        bComedyMovie.getName()
        bActionMovie.getName()
        hComedyMovie.getName()
        hActionMovie.getName()

    }
}
