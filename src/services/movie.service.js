import axios from 'axios';

const API_TOKEN = '5f51ffe747b574c1a20a7e62b22b47f5';
export default {
  fetchMovies(keyword) {
    return axios.get(`/search/movie?api_key=${API_TOKEN}&query=${keyword}`);
  },

  fetchMovieDetail(movieId) {
    return axios.get(`/movie/${movieId}?api_key=${API_TOKEN}`);
  },
};
