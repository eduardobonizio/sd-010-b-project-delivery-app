import checkPath from './checkPath';

const tokenHandler = (token, location, history) => {
  const verifyPath = checkPath(location);
  console.log(location, 'location ', verifyPath);

  // if (!verifyPath && !token) return location.push('/');
  if (!verifyPath) {
    console.log('batattinha');
    console.log(history);
    // return history.push('/');
  }
};

export default tokenHandler;
