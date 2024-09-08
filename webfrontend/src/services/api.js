// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// export const fetchData = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/data`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

// export const addData = async (data) => {
//     try {
//       const response = await axios.post(`${API_URL}/data/add`, data);
//       return response.data;
//     } catch (error) {
//       console.error('Error adding data:', error);
//       throw error;
//     }
//   };


import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response?.data || error.message);
    throw error;
  }
};

export const addData = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/data/add`, data);
    return response.data;
  } catch (error) {
    console.error('Error adding data:', error.response?.data || error.message);
    throw error;
  }
};