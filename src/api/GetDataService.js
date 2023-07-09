import { URL } from '../config/constants';


export class GetDataService  {

  static async getData(route = URL) {
      const response = await fetch(route);
      const parser = new DOMParser();
      return parser.parseFromString(await response.text(), 'text/xml');
  }
}

// ВТОРОЙ ВАРИАНТ ЗАПРОСА - POST метод,
// также работает только в режиме блокировки CORS ограничений

// const url = 'https://api.forismatic.com/api/1.0/';
// export class GetDataService  {

//   static async getData(route = url) {
//       const response = await fetch(route, {
//         method: 'POST',
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: 'method=getQuote&key=random&format=xml&lang=ru',
//       });
//       const parser = new DOMParser();
//       return parser.parseFromString(await response.text(), 'text/xml');
//   }
// }
