import IBollyWoodMovie from "./IBollyWoodMovie";
import IHollyWoodMovie from "./IHollyWoodMovie";

export default interface IFactoryMovies {
    getHollyWoodMovie(type:string):IHollyWoodMovie;
    getBollyWoodMovie(type:string):IBollyWoodMovie;
}