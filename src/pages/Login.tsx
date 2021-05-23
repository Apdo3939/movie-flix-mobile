import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { login } from '../styles';
import { useNavigation } from '@react-navigation/core';
import { isAuthenticated, loginUser } from '../@services/auth';

const Login: React.FC = () => {

    const navigation = useNavigation();
    const [userFetchData, setUserFetchData] = useState({});
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
    });
    const newUserInfo = { ...userInfo }

    async function handleLogin() {
        const data = await loginUser(userInfo);
        setUserFetchData(data);
        navigation.navigate('MovieCatalog');
    }
    
    return (
        <View style={login.container}>
            <View style={login.card}>
                <Text style={login.title}>Login</Text>
                <View style={login.form}>
                    <TextInput
                        placeholder='Email'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        value={userInfo.username}
                        onChangeText={(e) => {
                            newUserInfo.username = e;
                            setUserInfo(newUserInfo)
                        }}
                        style={login.inputUser}
                    />
                    <TextInput
                        placeholder='Password'
                        autoCapitalize='none'
                        secureTextEntry={true}
                        value={userInfo.password}
                        onChangeText={(e) => {
                            newUserInfo.password = e;
                            setUserInfo(newUserInfo)
                        }}
                        style={login.inputUser}
                    />
                    <TouchableOpacity
                        style={login.primaryButton}
                        activeOpacity={0.8}
                        onPress={() => handleLogin()}
                    >
                        <Text style={login.textButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Login;