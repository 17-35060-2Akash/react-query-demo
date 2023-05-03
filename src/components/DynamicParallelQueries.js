import axios from 'axios';
import React from 'react';
import Navbar from './Navbar';
import { useQueries } from 'react-query';

const fetchSuperHero = async (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
}

/* const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends');
};
 */

const DynamicParallelQueries = ({ heroIds }) => {
    const queryResults = useQueries(
        heroIds.map(id => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHero(id),
            }
        })
    );

    console.log(queryResults);
    return (
        <div>
            <Navbar></Navbar>

        </div>
    );
};

export default DynamicParallelQueries;