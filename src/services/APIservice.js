import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://petsapi.cyclic.app/api';

async function fetchData(pathParams) {
  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathParams}`,
    headers: { 'Content-Type': 'application/json' },
  });

  return await axiosInstance.get();
}

async function fetchNotice(pathParams, body) {
  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathParams}`,
    headers: { 'Content-Type': 'application/json' },
    data: {...body},
  });

  return await axiosInstance.post();
}

fetchData.propTypes = {
  pathParams: PropTypes.string.isRequired,
};

export { fetchData, fetchNotice };
