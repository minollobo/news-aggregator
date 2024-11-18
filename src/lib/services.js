import axios from "axios";

export const fetchArticles = (searchInput, date, sortby, currentDate) => {
  const Api_Key = 'd33e2ca85370466b93fe7f3b25647b93';
  // const Api_Key = 'bcd8c0bcfef843e1a3f81c4272def665';
  const url = `https://newsapi.org/v2/everything?q=${searchInput}&from=${date}&to=${currentDate}&sortBy=${sortby}&apiKey=${Api_Key}`;
  const response = axios.get(url);
  return response;
};

