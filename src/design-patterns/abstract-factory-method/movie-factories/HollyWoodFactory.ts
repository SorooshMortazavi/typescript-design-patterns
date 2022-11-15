import IHollyWoodMovie from '../interfaces/IHollyWoodMovie';
import HollyWoodMovieAction from '../movies/HollyWoodMovieAction';
import HollyWoodMovieComedy from '../movies/HollyWoodMovieComedy';

export default class HollyWoodMovieFactory {
  getHollyWoodMovie(type: string):IHollyWoodMovie {
    switch (type.toLowerCase()) {
      case 'comedy':
        return new HollyWoodMovieComedy();
      case 'action':
        return new HollyWoodMovieAction();
      default:
        break;
    }
  }
}
