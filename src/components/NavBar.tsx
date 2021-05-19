import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { nav } from '../styles';
import menu from '../assets/menu.png';

const NavBar = () => {

    const [show, setShow] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

    function navigate(path: any) {
        if (path) {
            setShow(true);
            navigation.navigate(path);
        }
        setShow(false);
    }

    return (
        <TouchableOpacity
            style={nav.rightMenuContainer}
            onPress={() => setShow(!show)}
        >
            <Image source={menu} style={nav.menuImg} />
            {show ? (
                <View style={nav.options}>
                    <TouchableOpacity
                        style={nav.option}
                        onPress={() => navigate('MovieFlix')}
                    >
                        <Text style={[nav.textOption, route.name === 'MovieFlix' ? nav.textActive : null]}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={nav.option}
                        onPress={() => navigate('Login')}
                    >
                        <Text style={[nav.textOption, route.name === 'Login' ? nav.textActive : null]}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={nav.option}
                        onPress={() => navigate('Login')}
                    >
                        <Text style={[nav.textOption, route.name === 'ADM' ? nav.textActive : null]}>Adm</Text>
                    </TouchableOpacity>
                </View>
            ) : null}
        </TouchableOpacity>
    );
}

export default NavBar;