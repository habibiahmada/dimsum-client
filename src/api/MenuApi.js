const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const fetchMenu = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/`);
        if (!response.ok) throw new Error('Failed to fetch menu');
        return await response.json();
    } catch (error) {
        console.error('Error fetching menu:', error);
        throw error;
    }
};


export const fetchMenuById = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/menu/${id}`); 
      if (!response.ok) throw new Error('Failed to fetch menu by ID'); 
      return await response.json();
    } catch (error) {
      console.error('Error fetching menu by ID:', error);
      throw error;
    }
};