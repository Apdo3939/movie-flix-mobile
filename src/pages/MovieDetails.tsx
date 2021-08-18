import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ScrollView, ActivityIndicator, Image, TextInput } from 'react-native';
import { getMoviesById, saveAvaliation } from '../@services';
import { details } from '../styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

type decode = {
    authorities: []
}

//como consertar este erro do id?
const MovieDetails = ({ route: { params: { id } } }) => {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState({
        id: 0,
        title: null,
        subTitle: null,
        year: null,
        imgUrl: '',
        synopsis: null,
        reviews: [
            {
                id: null,
                text: null,
                user: [
                    {
                        id: null,
                        name: null,
                        roles: [
                            {
                                id: null,
                                authority: null,
                            }
                        ],
                    },
                ],
            },
        ],
    });
    const [userAvaliation, setUserAvaliation] = useState({
        movieId: id,
        text: '',
    });

    const [role, setRole] = useState('');

    async function getAuthoty() {
        const token = await AsyncStorage.getItem('@token');

        if (token !== undefined) {
            let decode: decode = jwt_decode(String(token)) || [];
            let { authorities } = decode;
            authorities.map((auth) => {
                setRole(auth);
            });
        }
    }

    function handleSave() {
        saveAvaliable();
    }

    async function saveAvaliable() {
        setLoading(true);
        await saveAvaliation(userAvaliation);
        loadMovieData();
        setUserAvaliation({
            movieId: id,
            text: '',
        });
    }

    async function loadMovieData() {
        setLoading(true);
        const res = await getMoviesById(id);
        setMovie(res.data);
        setLoading(false);
    }

    useEffect(() => {
        getAuthoty();
        loadMovieData();
    }, [])

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
                        {role === "ROLE_MEMBER" && 
                            <>
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
                            </>
                        }
                        <View style={details.cardMovie}>
                                    <Text style={details.titleText}>Avaliações</Text>
                                    {movie.reviews.map(newReview => (
                                        <View style={details.synopsesContent} key={newReview.id}>
                                            <Text >{newReview.user.name}</Text>
                                            <Text style={details.synopsesText}>{newReview.text}</Text>
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