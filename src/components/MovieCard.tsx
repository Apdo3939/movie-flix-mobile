import  React from 'react';
import { View, Image, Text, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { theme, text } from '../styles';

interface MovieProps {
    id: Number;
    imgUrl: ImageSourcePropType;
    title: String;
    subTitle: String;
    year: Number;
    synopsis: String;
    genre: Object;
}

const MovieCard: React.FC<MovieProps> = ({ id, imgUrl, title, year, subTitle }) => {
    const navigation = useNavigation();
    return (
        <View style={theme.moviecard}>
            <Image source={{uri:imgUrl}} style={theme.drawProducts} />
            <View style={theme.textContainer}>
                <Text style={text.titleText}>{title}</Text>
                <Text style={text.yearText}>{year}</Text>
                <Text style={text.subtitleText}>{subTitle}</Text>
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