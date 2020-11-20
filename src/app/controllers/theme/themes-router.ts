import { RestRouter } from '../../common';
import { ThemesController } from './themes-controller';
import { IThemeForestService } from '../../services';

export class ThemesRouter extends RestRouter {
  themesCtrl: ThemesController;

  constructor(usersService: IThemeForestService) {
    super();
    this.themesCtrl = new ThemesController(usersService);
    this.initRoutes();
  }

  initRoutes() {
    this.router.get('/', this.wrapRouteFn(this.themesCtrl, this.themesCtrl.getAll));
    this.router.get('/:categoryId', this.wrapRouteFn(this.themesCtrl, this.themesCtrl.getBycategory));

    this.router.all('/', this.wrapRouteFn(this.themesCtrl,
      this.themesCtrl.throwMethodNotAllowedError));
  }
}