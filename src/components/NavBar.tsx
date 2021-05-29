import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import { nav } from '../styles';
import menu from '../assets/menu.png';
import { doLogout, isAuthenticated } from '../@services/auth';

const NavBar = () => {

    const [show, setShow] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

    function navigate(path: any) {
        if (path) {
            setShow(true);
            navigation.navigate(path);
        }
        setShow(false);
    }

    function logout() {
        doLogout();
        navigation.navigate('Login');
    }

    async function logged() {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    useEffect(() => {
        logged();
    }, [])

    return (
        <>{authenticated ? (
            <TouchableOpacity
                onPress={() => logout()}
                style={nav.buttonSair}>
                <Text style={nav.textOption}>Sair</Text>
            </TouchableOpacity>) : (
            <TouchableOpacity
                style={nav.rightMenuContainer}
                onPress={() => setShow(!show)}
            >
                <Image source={menu} style={nav.menuImg} />
                {show ? (
                    <View style={nav.options}>
                        <TouchableNativeFeedback
                            style={nav.option}
                            onPress={() => navigate('MovieFlix')}
                        >
                            <Text style={[nav.textOption, route.name === 'MovieFlix' ? nav.textActive : null]}>Home</Text>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback style={nav.option}
                            onPress={() => navigate('Login')}
                        >
                            <Text style={[nav.textOption, route.name === 'ADM' ? nav.textActive : null]}>Adm</Text>
                        </TouchableNativeFeedback>
                    </View>
                ) : null}
            </TouchableOpacity>
        )}
        </>
    );
}

export default NavBar;