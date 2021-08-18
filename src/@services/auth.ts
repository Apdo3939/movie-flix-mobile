import AsyncStorage from '@react-native-async-storage/async-storage';
import queryString from 'query-string';
import { api, TOKEN } from '.';


interface AuthProps {
    username: string;
    password: string;
}

export async function loginUser(userInfo: AuthProps) {
    const data = queryString.stringify({
        ...userInfo, grant_type: 'password'
    });

    const result = await api.post('oauth/token', data, {
        headers: {
            Authorization: TOKEN,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    const { access_token } = result.data;
    setAsynckeys('@token', access_token);
    return result;
}

async function setAsynckeys(Key: string, value: string) {
    try {
        await AsyncStorage.setItem(Key, value);
    } catch (error) {
        console.warn(error);
    }
}

export async function isAuthenticated() {
    try {
        const token = await AsyncStorage.getItem('@token');
        return token ? true : false;

    } catch (error) {
        console.warn(error);
    }
}

export async function doLogout() {
    try {
        AsyncStorage.removeItem('@token');

    } catch (error) {
        console.warn(error);
    }
}
