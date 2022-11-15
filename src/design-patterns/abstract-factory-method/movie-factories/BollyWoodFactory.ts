import IBollyWoodMovie from '../interfaces/IBollyWoodMovie';
import BollyWoodMovieAction from '../movies/BollyWoodMovieAction';
import BollyWoodMovieComedy from '../movies/BollyWoodMovieComedy';

export default class BollyWoodMovieFactory {
  getBollyWoodMovie(type: string):IBollyWoodMovie {
    switch (type.toLowerCase()) {
      case 'comedy':
        return new BollyWoodMovieComedy();
      case 'action':
        return new BollyWoodMovieAction();
      default:
        break;
    }
  }
}
