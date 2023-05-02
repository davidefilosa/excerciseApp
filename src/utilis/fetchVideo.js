const secret = process.env.REACT_APP_API_KEY;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": secret,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
const fetchVideo = async (url) => {
  console.log(url);
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export default fetchVideo;
