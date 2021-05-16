import * as React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { theme, text } from '../styles';
import movieImg from '../assets/exemplo.png';

const MovieCard: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={theme.moviecard}>
            <Image source={movieImg} style={theme.draw} />
            <View style={theme.textContainer}>
                <Text style={text.titleText}>007 sem tempo para morrer</Text>
                <Text style={text.yearText}>2021</Text>
                <Text style={text.subtitleText}>
                    Mais um filme do 007 estreçado por daniel craig.
                </Text>
            </View>
            <TouchableOpacity
                style={theme.secondaryButton}
                onPress={() => navigation.navigate('MovieDetails')}>
                <Text style={text.secondaryText}>VER DETALHES</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MovieCard;