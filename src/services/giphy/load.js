import { GIPHY_API_KEY, GIPHY_SEARCH_API_ENDPOINT } from "./constants";

export const getGifs = async (query, options) => {
  const queryParams = new URLSearchParams({q: query, limit: 18, rating: 'g', ...options}).toString();
  const queryUrl = `${GIPHY_SEARCH_API_ENDPOINT}&${queryParams}`;
  try {
    const response = await fetch(queryUrl, {
      mode: 'cors',
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

export const getGifById = async (id) => {
  const queryUrl = `https://api.giphy.com/v1/gifs/${id}?api_key=${GIPHY_API_KEY}`;
  try {
    const response = await fetch(queryUrl, {
      mode: 'cors',
    });
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}