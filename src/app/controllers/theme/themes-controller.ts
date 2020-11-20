import { Logger, LoggerFactory, RestController } from '../../common';
import { IThemeForestService } from '../../services';
import { ThemeModel } from '../../models';

export class ThemesController extends RestController {
  constructor(private themesService: IThemeForestService) {
    super();
  }

  private static readonly LOGGER: Logger = LoggerFactory.getLogger();

  getAll(req, res, next): Promise<any> {
    ThemesController.LOGGER.debug('Retrieving all users');

    return this.themesService.getAll()
      .then((themes: Array<ThemeModel>) => {
        return this.respond(res, themes);
      });
  }

  getBycategory(req, res, next, categoryId: string): any {
    return this.themesService.getBycategory(categoryId)
      .then((theme: ThemeModel) => {
        this.validateResourceFound(theme);
        req.theme = theme;
        next();
      });
  }

}