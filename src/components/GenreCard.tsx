import React from 'react';
import {View, Text} from 'react-native';
import { text, theme } from '../styles';

interface GenreProps {
    id: Number;
    name: String;
}

const GenreCard: React.FC<GenreProps> = ({id, name}) => {
    return(
        <View style={theme.container}>
            <View style={theme.card}>
                <Text style={text.primaryText}> {id}</Text>
                <Text style={text.primaryText}> {name}</Text>
            </View>
        </View>
    );
}

export default GenreCard;