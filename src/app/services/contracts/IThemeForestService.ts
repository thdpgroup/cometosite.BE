import { ThemeModel } from "../../models";

export interface IThemeForestService {
  getAll(): Promise<Array<ThemeModel>>;
  getBycategory(id: string): Promise<ThemeModel>;
}