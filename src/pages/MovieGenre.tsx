import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { api } from '../@services';
import { GenreCard } from '../components';

const MovieGenre: React.FC = () => {

    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    const url = `/genres`;

    async function fillGenres() {
        setLoading(true);
        const res = await api.get(url);
        setGenres(res.data);
        setLoading(false);
    }

    useEffect(() => { fillGenres() }, []);

    return (
        <ScrollView >
            {loading ?
                (<ActivityIndicator size='large' />) :
                (genres.map(genre =>
                (
                    <GenreCard {...genre} key={genre.id} />
                )))
            }
        </ScrollView>
    );
}

export default MovieGenre;