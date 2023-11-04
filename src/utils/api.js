import axios from "axios";

// const BASE_URL = "https://youtube138.p.rapidapi.com";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// const options = {
//   method: "GET",
//   url: "https://youtube138.p.rapidapi.com/",
//   params: {
//     hl: "en",
//     gl: "US",
//   },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
//     "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
//   },
// };

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/captions',
  params: {
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': 'c8af751e28mshfa0b26ae9c60bbfp12afb9jsn4a9da31b566d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
