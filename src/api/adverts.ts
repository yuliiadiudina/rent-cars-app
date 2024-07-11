import axios from 'axios'; 
 
axios.defaults.baseURL = "https://6661973c63e6a0189feaa096.mockapi.io/adverts"; 

export interface AdvertProp {
  id: number;
  make: string;
  model: string;
  year: number;
  address: string;
  type: string;
  fuelConsumption?: string;
  engineSize?: string;
  description?: string;
  accessories?: string[];
  functionalities: string[];
  rentalConditions?: string;
  mileage?: number;
  rentalPrice: string;
  img: string;
  rentalCompany: string;
}
 
export const fetchAdverts = async (page: number = 1, limit: number = 12): Promise<AdvertProp[]> => {
    try {
        const response = await axios.get<AdvertProp[]>('/adverts', {
            params: {
                page: page,
                limit: limit,
            }
        });
        return response.data;
    } catch (error: any) {
        console.error('Error:', error.message);
        return [];
    }
};