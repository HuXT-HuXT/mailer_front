export const BASE_URL = 'http://127.0.0.1:80';

export const getEvents = () => fetch(`${BASE_URL}/letters`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then(handleResponse);

export const getStatus = (id) => fetch(`${BASE_URL}/letters/${id}/status`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then(handleResponse);

const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response.status);
};
