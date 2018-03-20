export function  Json2Url(obj: any) {
  let parts: any = [];
  for (let key in obj) {
    if (key === 'includes') {
      key = 'with';
    }
    parts.push(key + '=' + obj[key]);
  }
  return parts.join('&');
}
