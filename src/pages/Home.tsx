import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import { theme, text } from '../styles';
import main from '../assets/main.png';
import arrow from '../assets/arrow.png';

const Home: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={theme.container}>
            <View style={theme.card}>
                <Image source={main} style={theme.draw} />
                <View style={theme.textContainer}>
                    <Text style={text.bold}>
                        Avalie filmes
                    </Text>
                    <Text style={text.regular}>
                        Diga o que você achou do seu filme favorito
                    </Text>
                </View>
                <TouchableOpacity
                    style={theme.primaryButton}
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate('MovieCatalog')}>
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

export default Home;