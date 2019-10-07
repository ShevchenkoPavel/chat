const DEFAULT_GET_METHOD_BODY = {
  method: 'GET',
  headers: new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  })
};

function checkStatus(response: Response): boolean {
  return response.status >= 200 && response.status < 300;
}

export async function get<T>(url: string): Promise<T> {
  const response = await fetch(url, DEFAULT_GET_METHOD_BODY);
  if (!checkStatus(response)) {
    throw new Error(String(response.status || 'My error'));
  }
  return await response.json();
}
