function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}

function getResponseJson(response: Response) {
  return response.json();
}

export function get(url: string) {
  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    })
  })
    .then(response => checkStatus(response))
    .then(json => getResponseJson(json))
    .then(
      data => {
        return data;
      },
      data => {
        return data;
      }
    )
    .catch(error => {
      return error;
    });
}
