import { GIPHY_SEARCH_API_ENDPOINT } from "./constants";

export const getGifs = async (query, options) => {
  const queryParams = new URLSearchParams({q: query, limit: 18, rating: 'g', ...options}).toString();
  const queryUrl = `${GIPHY_SEARCH_API_ENDPOINT}&${queryParams}`;
  console.log(queryUrl);
  try {
    const response = await fetch(queryUrl, {
      mode: 'cors',
    });
    const json = await response.json();
    console.log(json.data[0])
    return json;
  } catch (error) {
    console.error(`Error: ${error}`);
  }


}