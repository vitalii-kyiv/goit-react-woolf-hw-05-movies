import axios from 'axios';
// 27576111afd178a98830d0cc6f086eaf
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzU3NjExMWFmZDE3OGE5ODgzMGQwY2M2ZjA4NmVhZiIsInN1YiI6IjY1ZTA3MWM2ZGFmNTdjMDE4NTljMDY4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.- fn7fteSFasdczX3yvw_sbUT1jt0wjQylWNqKdHDAHA

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '27576111afd178a98830d0cc6f086eaf';

export const getTrendingMoviesApi = async () => {
  const { data } = await axios('trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return data.results;
};

export const getSearchMoviesApi = async query => {
  const { data } = await axios('search/movie', {
    params: {
      query: query,
      api_key: API_KEY,
    },
  });
  return data.results;
};

export const getMovieDetailsApi = async id => {
  const { data } = await axios(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const getMovieCreditsApi = async id => {
  const { data } = await axios(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const getMovieReviewsApi = async id => {
  const { data } = await axios(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.results;
};
