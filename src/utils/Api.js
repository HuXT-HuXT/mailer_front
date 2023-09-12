export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const HEADER = {
  authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  'Content-Type': 'application/json',
}

export const getEvents = () => fetch(`${BASE_URL}/letters`, {
  method: 'GET',
  headers: HEADER,
})
  .then(handleResponse);

export const getStatus = (id) => fetch(`${BASE_URL}/letters/${id}`, {
  method: 'GET',
  headers: HEADER,
})
  .then(handleResponse);

export const scheduleCamp = (id) => fetch(`${BASE_URL}/letters/${id}/schedule`, {
  method: 'POST',
  headers: HEADER,
})
  .then(handleResponse);

export const removeCamp = (id) => fetch(`${BASE_URL}/letters/${id}/delete`, {
  method: 'POST',
  headers: HEADER,
})
  .then(handleResponse);

const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response.status);
};
