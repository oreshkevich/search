import axios from 'axios';
import {QUANTITY_USER} from '../../core/constants';

const GITHUB_URL = 'https://api.github.com';

const github = axios.create({
  baseURL: GITHUB_URL,
});

export const searchUsers = async (
  text = 'oresh',
  currentPage = 1,
  quantityUser = QUANTITY_USER,
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
