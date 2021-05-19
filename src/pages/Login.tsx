import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { theme, text } from '../styles';
import arrow from '../assets/arrow.png';
import { useNavigation } from '@react-navigation/core';

const Login: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={theme.container}>
            <View style={theme.primaryInputContent}>
                <View style={theme.textContainer}>
                    <Text style={text.bold}>
                        LOGIN
                    </Text>
                </View>
                <View>
                    <TextInput
                        style={theme.primaryInput}
                        placeholder="E-mail"
                    />
                    <TextInput
                        style={theme.primaryInput}
                        placeholder="Password"
                    />
                </View>
                <TouchableOpacity
                    style={theme.primaryButton}
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate('Genre')}>
                    <Text style={text.primaryText}>
                        FAZER LOGIN
                        </Text>
                    <View style={theme.arrowContainer}>
                        <Image source={arrow} style={theme.arrow} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;