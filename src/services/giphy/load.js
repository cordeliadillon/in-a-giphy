import { GIPHY_SEARCH_API_ENDPOINT } from "./constants";

export const getGifs = async (query, options) => {
  if (!query || query.length < 2) {
    return;
  }
  const queryParams = new URLSearchParams({q: query, limit: 10, ...options}).toString();
  const queryUrl = `${GIPHY_SEARCH_API_ENDPOINT}&${queryParams}`;
  console.log(queryUrl);
  try {
    const response = await fetch(queryUrl, {
      mode: 'cors',
      headers: { "User-Agent": "chrome" },
    });
    const json = await response.json();
    console.log(json);
    return json.data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }


}