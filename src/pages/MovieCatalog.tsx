import * as React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { theme } from '../styles';
import { useState, useEffect } from "react";
import { MovieCard } from '../components';
import { api } from '../@services';

const MovieCatalog: React.FC = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    const url = `/movies?page=0`;

    async function fillMovies() {
        setLoading(true);
        const res = await api.get(url);
        setMovies(res.data.content);
        setLoading(false);
    }

    useEffect(() => {
        fillMovies();
    }, []);


    return (

        <ScrollView contentContainerStyle={theme.container}>
            {loading ? (<ActivityIndicator size='large' />) : (
                movies.map(movie => (<MovieCard {...movie} key={movie.id}/>))
            )}
        </ScrollView>

    );
}

export default MovieCatalog;