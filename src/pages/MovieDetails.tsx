import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ScrollView, ActivityIndicator, Image, TextInput } from 'react-native';
import { getMoviesById, saveAvaliation } from '../@services';
import { details } from '../styles';
import { useNavigation } from '@react-navigation/native';


const MovieDetails = ({ route: { params: { id } } }) => {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState({
        id: 0,
        title: null,
        subTitle: null,
        year: null,
        imgUrl: null,
        synopsis: null,
        reviews: [
            {
                id: null,
                text: null,
                user: [
                    {
                        id: null,
                        name: null,
                    },
                ],
            },
        ],
    });
    const [userAvaliation, setUserAvaliation] = useState({
        movieId: id,
        text: '',
    });

    function handleSave() {
        saveAvaliable();
        navigation.goBack();
    }

    async function saveAvaliable() {
        setLoading(true);
        const res = await saveAvaliation(userAvaliation);
        setUserAvaliation(res.data);
        setLoading(false);
    }

    async function loadMovieData() {
        setLoading(true);
        const res = await getMoviesById(id);
        setMovie(res.data);
        setLoading(false);
    }

    useEffect(() => {
        loadMovieData();
    }, []);


    return (
        <View style={details.container}>
            {loading ? (<ActivityIndicator size="large" />) : (
                <ScrollView contentContainerStyle={details.content}>
                    <View style={details.card}>
                        <TouchableOpacity
                            style={details.primaryButton}
                            onPress={(() => navigation.goBack())}>
                            <Text style={details.textButton}>
                                Catalogo
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <View style={details.cardMovie}>
                            <Text style={details.titleText}>{movie.title}</Text>
                            <Image source={{ uri: movie.imgUrl }} style={details.imgDraw} />
                            <Text style={details.yearText}>{movie.year}</Text>
                            <Text style={details.subTitleText}>{movie.subTitle}</Text>
                            <Text style={details.titleText}>SINOPSE</Text>
                            <View style={details.synopsesContent}>
                                <Text style={details.synopsesText}>
                                    {movie.synopsis}
                                </Text>
                            </View>
                        </View>

                        <View style={details.cardSaveAvaliables}>
                            <TextInput
                                placeholder="Deixe sua avaliação aqui"
                                multiline={true}
                                value={userAvaliation.text}
                                onChangeText={e => {
                                    const newUserAvaliation = { ...userAvaliation };
                                    newUserAvaliation.text = e;
                                    setUserAvaliation(newUserAvaliation);
                                }}
                                style={details.inputText}>
                            </TextInput>
                            <TouchableOpacity
                                style={details.saveButton}
                                onPress={(() => handleSave())}>
                                <Text style={details.textButton}>
                                    SALVAR AVALIAÇÃO
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={details.cardMovie}>
                            <Text style={details.titleText}>Avaliações</Text>
                            {movie.reviews.map(review => (
                                <View style={details.synopsesContent} key={review.id}>
                                    <Text >{review.user.name}</Text>
                                    <Text style={details.synopsesText}>{review.text}</Text>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </ScrollView>
            )}
        </View>
    );
}

export default MovieDetails;