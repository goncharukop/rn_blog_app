const BASE_URL = 'http://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server';

export async function request(url) {
  const response = await fetch(`${BASE_URL}${url}`);
  const data = await response.json();

  return data;
};
