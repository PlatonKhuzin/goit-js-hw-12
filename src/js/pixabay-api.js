import axios from "axios";

const API_KEY = "ТВОЙ_PIXABAY_API_KEY";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page,
      per_page: 15,
    },
  });

  return response.data;
}