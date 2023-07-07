import { url } from '../config/constants';


export class GetDataService  {

  static async getData(route=url) {
      const response = await fetch(`${route}`, { credentials:"include" });
      const parser = new DOMParser();
      return parser.parseFromString(await response.text(), 'text/xml');
  }
}
