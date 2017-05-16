import {Injectable} from "@angular/core";
@Injectable()

export class CookieService {
  constructor(){}

  getCookie(name){
    var start = document.cookie.indexOf(name + "=")
    if (start != -1) {
      start = start + name.length + 1;
      var end = document.cookie.indexOf(";", start);
      if (end == -1){
        end = document.cookie.length;
      }
      return decodeURIComponent(document.cookie.substring(start, end));
    } else {
      return '';
    }
  }

  setCookie(name,value,expires){
    if (expires && (typeof expires == 'number' || expires.toGMTString)) {
      var date;
      if (typeof expires == 'number') {
        date = new Date();
        date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000));
      } else {
        date = expires;
      }
      expires = ';expires=' + date.toGMTString();
    }
    //设置cookie
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '' + expires;
  }

  removeCookie(name){
    let date = new Date();
    date.setTime(date.getTime() + ((-1) * 24 * 60 * 60 * 1000));
    let expires = ';expires=' + date.toUTCString();
    document.cookie = encodeURIComponent(name) + '= 1' + expires;
  }
}
