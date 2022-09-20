export const fetchAPI = (url) => {
  return fetch(url)
    .then( (res) => {
      return res.json()
    })
    .catch( (err) => {
      return err;
    })
    .finally(() => {
      console.log('It is Over!');
    })
}