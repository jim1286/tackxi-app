export const generateQueryString = (object: any = {}): string => {
  if (typeof object !== 'object') {
    throw new Error('The object must be object type.');
  }

  const isNotEmpty = (value: any) =>
    value !== undefined && value !== null && value !== '';

  const keys = Object.keys(object).filter(key => isNotEmpty(object[key]));

  return keys.reduce(
    (acc, key, index, arr) =>
      acc +
      key.concat(
        '=',
        object[key] !== undefined && object[key] !== null ? object[key] : '',
      ) +
      (index !== arr.length - 1 ? '&' : ''),
    '',
  );
};

export const generateArrayQueryString = (object: any = {}): string => {
  const queryString = Object.keys(object)
    .map(key => {
      if (typeof object[key] === 'object') {
        if (object[key].length === 0) {
          return `${key}[]=`;
        }

        const arrayQuery: any[] = [];
        for (const params of object[key]) {
          if (params) {
            arrayQuery.push(`${key}[]=` + params);
          }
        }

        return arrayQuery.join('&');
      }

      return key + '=' + object[key];
    })
    .join('&');

  return queryString;
};
