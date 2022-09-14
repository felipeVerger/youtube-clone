import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


/**
 * It takes a url as an argument, and returns the data from the API.
 * @param url - The URL of the API endpoint you want to call.
 * @returns The data object from the axios response.
 */
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}