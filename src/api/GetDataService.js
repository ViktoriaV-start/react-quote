import { URL } from '../config/constants';


export class GetDataService  {

  static async getData(route = URL) {
      const response = await fetch(`${route}`);
      const parser = new DOMParser();
      return parser.parseFromString(await response.text(), 'text/xml');
  }
}
