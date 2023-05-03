import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = async () => {
    return axios.get('http://localhost:4000/superheroes');
}

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends');
};

const ParallelQueries = () => {

    const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes);
    const { data: friends } = useQuery('friends', fetchFriends);

    return (
        <div>
            <Navbar></Navbar>
            Parallel Queries Page
        </div>
    );
};

export default ParallelQueries;