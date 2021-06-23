import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const api = axios.create({ baseURL: 'http://192.168.1.4:8080' });

export const TOKEN = "Basic bW92aWU6bW92aWUxMjM=";

export async function userToken() {
    const token = await AsyncStorage.getItem('@token');
    return token;
}

export async function getMovies() {
    const authToken = await userToken();
    const result = api.get('/movies',
        {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        }
    );
    return result;
}

export async function getMoviesByGenre(id: number) {
    const authToken = await userToken();
    const result = api.get(`/movies?genreId=${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return result;
  }

  export async function getMoviesById(id: number) {
    const authToken = await userToken();
    const result = api.get(`/movies/${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return result;
  }
  
  export async function saveAvaliation(data: object) {
    const authToken = await userToken();
    const result = api.post(`/reviews?direction=ASC&orderBy=id`, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return result;
  }
  
  export async function getGenres() {
    const authToken = await userToken();
    const result = api.get(`/genres`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return result;
  }