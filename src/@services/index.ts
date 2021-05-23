import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const api = axios.create({ baseURL: 'http://localhost:8080' });

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