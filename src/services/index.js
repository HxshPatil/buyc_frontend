import axios from "axios";

export const fetchSearchData = async (searchQuery) => {
    try {
        const response = await axios.get(`https://buyc-backend-nu.vercel.app/api/oemSpecsByModelYear?query=${searchQuery}`);
        return response
    } catch (error) {
      console.error('Error searching cars:', error);
    }
};

// export const fetchCars = async () => {
//     try {
//       const response = await axios.get('https://buyc-backend-nu.vercel.app/api/all');
//       setCars(response.data.cars);
//     } catch (error) {
//       console.error('Error fetching cars:', error.message);
//     }
// };