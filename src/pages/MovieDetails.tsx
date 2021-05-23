import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { details } from '../styles';


const MovieDetails: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={details.container}>
            <View style={details.card}>
                <TouchableOpacity
                    style={details.primaryButton}
                    onPress={(() => navigation.goBack())}>
                    <Text style={details.textButton}>
                        Catalogo
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default MovieDetails;