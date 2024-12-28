const baseURL = import.meta.env.VITE_BASE_URL;

export const fetchAllProducts = async () => {
    const response = await fetch(baseURL);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();
}