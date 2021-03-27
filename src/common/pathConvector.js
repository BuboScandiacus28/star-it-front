const imageStorageHost = 'https://star-it-api.herokuapp.com';

const pathConvector = (path) => {
  const substringPosition = path.indexOf('/assets/');

  return `${imageStorageHost}${path.slice(substringPosition)}`;
};

export default pathConvector;
