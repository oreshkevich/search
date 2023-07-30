import axios from 'axios';
const GITHUB_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {Authorization: `${GITHUB_TOKEN}`},
});

export const searchUsers = async (
  text = 'oresh',
  currentPage = 1,
  quantityUser = 10,
  repositories = 'start'
) => {
  if (text === '') {
    text = 'oresh';
  }
  try {
    const response = await github.get(
      `/search/users?q=${text}&sort=${repositories}&per_page=${quantityUser}&page=${currentPage}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const getUserAndRepos = async (login) => {
  try {
    const response = await github.get(`/users/${login}`);
    return {user: response.data};
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

