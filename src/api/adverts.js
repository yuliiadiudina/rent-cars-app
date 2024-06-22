import axios from 'axios'; 
 
axios.defaults.baseURL = "https://6661973c63e6a0189feaa096.mockapi.io/adverts"; 

export const fetchAdverts = async (page = 1, limit = 12) => {
    try {
        const response = await axios.get('/adverts', {
            params: {
                page: page,
                limit: limit
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        return [];
    }
};