import axios from 'axios';
import PropTypes from 'prop-types';

const { BASE_URL } = window.global;
async function fetchData(pathParams) {
  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathParams}`,
    headers: { 'Content-Type': 'application/json' },
  });

  return await axiosInstance.get();
}

async function fetchNotice(pathParams, body) {
  const formData = new FormData();
  formData.append('birthday', body.birthday);
  formData.append('breed', body.breed);
  formData.append('comments', body.comments);
  formData.append('imageUrl', body.imageUrl);
  formData.append('location', body.location);
  formData.append('name', body.name);
  formData.append('price', body.price);
  formData.append('sex', body.sex);
  formData.append('title', body.title);

  return axios.post(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

fetchData.propTypes = {
  pathParams: PropTypes.string.isRequired,
};

export { fetchData, fetchNotice };
