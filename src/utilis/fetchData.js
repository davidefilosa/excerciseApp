const secret = process.env.REACT_APP_API_KEY;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": secret,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const fetchData = async (url) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export default fetchData;
