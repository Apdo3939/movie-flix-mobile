import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import { catalogTheme } from '../styles';
import { MovieCard } from '../components';
import { getMovies } from '../@services';

type FilterForm = {
    genreId?: number;
};

type Props = {
    onSearch: (filter: FilterForm) => void;
};

const MovieCatalog: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [showGenres, setShowGenres] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState(0);

    const [movie, setMovie] = useState({
        id: null,
        title: null,
        subTitle: null,
        year: null,
        imgUrl: null,
        synopsis: null,
        genre: null,
    });

    const [genres, setGenres] = useState([
        {
            id: null,
            name: null,
        },
    ]);

    async function fillMovies() {
        setLoading(true);
        const res = await getMovies();
        setMovies(res.data.content);
        setLoading(false);
    }

    useEffect(() => {
        fillMovies();
    }, []);

    

    return (
        <ScrollView contentContainerStyle={catalogTheme.container} >
            <View style={catalogTheme.card}>
                <View style={catalogTheme.cardDetails}>
                    {loading ? (<ActivityIndicator size='large' />) : (
                        movies.map(movie => <MovieCard {...movie} key={movie.id} />)
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

export default MovieCatalog;