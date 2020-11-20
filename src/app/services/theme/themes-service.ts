import { Logger, LoggerFactory } from '../../common';
import { ThemeModel } from '../../models';
import { IThemeForestService } from '../contracts';
import axios from 'axios';

export class ThemesService implements IThemeForestService {

  private static THEME_FOREST_URL: string = process.env.THEME_FOREST_URL;
  private readonly LOGGER: Logger = LoggerFactory.getLogger();

  constructor() {
  }

  getAll(): Promise<ThemeModel[]> {
    const url = "https://themeforest.net/category/ecommerce?sort=sales&tags=fashion#content";
    return axios.get(url).then(result => {
      this.LOGGER.debug(result.data);
      return (result ? result.data : null);
    }).catch((exception) => {
      this.LOGGER.debug("Error of Notify user status changed API:");
      this.LOGGER.debug(exception);
    });;
  };

  getBycategory(id: string): Promise<ThemeModel> {
    // let user = this.userMap.get(id);

    // if (user == null) { return Promise.resolve(null); }

    // return Promise.resolve(user);
    return null;
  }
}