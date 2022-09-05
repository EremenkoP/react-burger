function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name: string, value: string | number | boolean, props?: { [x: string]: any; expires?: any } | undefined) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
}

function saveToken(nameToken: string, data:string ) {
  let authToken;
  if (data.indexOf('Bearer') === 0) {
      authToken = data.split('Bearer ')[1];
  }
  if (authToken) {
  setCookie(nameToken, authToken);
  }
}

 const deleteCookie = (name: string) => {
  setCookie(name, '', { expires: -1 });
}

export {getCookie, saveToken, setCookie, deleteCookie}
