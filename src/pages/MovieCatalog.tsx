import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator, View, Modal, TouchableOpacity, Text } from 'react-native';
import { catalogTheme } from '../styles';
import { MovieCard } from '../components';
import { getGenres, getMoviesByGenre } from '../@services';


const MovieCatalog: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [showGenres, setShowGenres] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState(0);
    const [genres, setGenres] = useState([
        {
            id: null,
            name: null,
        },
    ]);
    const [movie, setMovie] = useState({
        id: null,
        title: null,
        subTitle: null,
        year: null,
        imgUrl: null,
        synopsis: null,
        genre: null,
    });


    async function fillMovies() {
        setLoading(true);
        const res = await getMoviesByGenre(selectedGenre);
        setMovies(res.data.content);
        setLoading(false);
    }

    async function loadGenres() {
        const response = await getGenres();
        setGenres(response.data);
    }

    useEffect(() => {
        loadGenres();
    }, []);

    useEffect(() => {
        fillMovies();
    }, [selectedGenre]);

    return (
        <View style={catalogTheme.container} >
            <View style={catalogTheme.card}>
                <Modal
                    visible={showGenres}
                    animationType='fade'
                    transparent={true}
                    presentationStyle='overFullScreen'
                >
                    <View style={catalogTheme.modalOptions}>
                        <View style={catalogTheme.modalContent}>
                            <ScrollView>
                                {genres.map(gen => (
                                    <TouchableOpacity
                                        key={gen.id}
                                        onPress={() => {
                                            setMovie({ ...movie, genre: gen.name });
                                            setShowGenres(!showGenres);
                                            setSelectedGenre(gen.id);
                                        }}
                                        style={catalogTheme.modalOption}
                                    >
                                        <Text style={catalogTheme.modalText}>{gen.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </Modal>

                <View style={catalogTheme.modalContainer}>
                    <TouchableOpacity
                        onPress={() => setShowGenres(!showGenres)}
                        style={catalogTheme.modalContent}
                    >
                        <Text style={catalogTheme.modalText}>
                            {movie.genre === null ? 'Escolha um Gênero' : movie.genre}
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {loading ? (<ActivityIndicator size='large' />) : (
                        movies.map(movie => <MovieCard {...movie} key={movie.id} />)
                    )}
                </ScrollView>
            </View>
        </View>
    );
}

export default MovieCatalog;