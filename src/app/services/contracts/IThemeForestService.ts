import { ThemeModel } from "../../models";

export interface IThemeForestService {
  getAll(): Promise<ThemeModel[]>;
  getBycategory(id: string): Promise<ThemeModel>;
}