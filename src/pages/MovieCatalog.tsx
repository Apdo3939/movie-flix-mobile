import * as React from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { theme } from '../styles';
import movieImg from '../assets/exemplo.png';
import { MovieCard } from '../components';

const MovieCatalog: React.FC = () => {
    return (
        <View style={theme.container}>
            <ScrollView>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </ScrollView>
        </View>
    );
}

export default MovieCatalog;