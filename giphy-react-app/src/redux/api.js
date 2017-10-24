import axios from "axios";

const host = "api.giphy.com";
const path = "v1/gifs/search";

export function fetchGiphy({
  apiKey = "",
  query = "",
  pagination: { limit = 25, offset = 0 }
}) {
  axios.get(
    `https://${host}/${path}?api_key=${apiKey}&q=${query}&limit=${limit}&offset={offset}`
  );
}
