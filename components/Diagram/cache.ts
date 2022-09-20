interface Cache {
  [key: string]: string;
}

const cache: Cache = {};

/* We don't want to regenerate the diagram if nothing has changed */
export function generateHash(dataObj: unknown) {
  // Dark magic: https://stackoverflow.com/a/7616484/2890472

  const data = JSON.stringify(dataObj);
  let hash = 0;
  let i;
  let chr;
  if (data.length === 0) return hash;
  for (i = 0; i < data.length; i += 1) {
    chr = data.charCodeAt(i);
    // eslint-disable-next-line no-bitwise
    hash = (hash << 5) - hash + chr;
    // eslint-disable-next-line no-bitwise
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

export default cache;
