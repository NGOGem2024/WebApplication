import axios from 'axios';

   const API_URL = process.env.NODE_ENV === 'production' 
     ? 'hellobackend-hggsgxgrcfbscafj.eastasia-01.azurewebsites.net/api'
     : 'http://localhost:5000/api';

   export const fetchData = async () => {
     try {
       const response = await axios.get(`${API_URL}/data`);
       return response.data;
     } catch (error) {
       console.error('Error fetching data:', error.response ? error.response.data : error.message);
       throw error;
     }
   };

   export const addData = async (newData) => {
     try {
       const response = await axios.post(`${API_URL}/data/add`, newData);
       return response.data;
     } catch (error) {
       console.error('Error adding data:', error.response ? error.response.data : error.message);
       throw error;
     }
   };