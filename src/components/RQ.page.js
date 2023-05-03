import React from 'react';
import Navbar from './Navbar';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

export const superHeroQueryKey = 'super-heroes';

export const fetchSuperHeroes = async () => {
    return axios.get('http://localhost:4000/superheroes');
};


const addSuperHero = (hero) => {
    return axios.post('http://localhost:4000/superheroes', hero);
};

export const useAddSuperHeroes = () => {
    const queryClient = useQueryClient();
    return useMutation(addSuperHero, {
        onSuccess: () => {
            queryClient.invalidateQueries(superHeroQueryKey);
        }
    });
}

const RQSuperHeroesPage = () => {

    const { isLoading, data, isError, error, isFetching } = useQuery(superHeroQueryKey, fetchSuperHeroes,
        {
            // cacheTime: 5000,
            staleTime: 30000,
        });
    console.log(isLoading, isFetching);

    if (isLoading) {
        return <h2>Loading . . . </h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }



    console.log(data?.data);




    return (
        <div>
            <Navbar></Navbar>
            <h2
                style={{
                    textAlign: 'start',
                    margin: '10px',
                }}>RQ Super Heroes Page</h2>
            {
                data?.data.map(hero => <div
                    key={hero?.id}
                    style={{
                        display: 'flex',
                        justifyContent: 'left',
                        margin: '20px',
                        lineHeight: 0,
                    }}>
                    <h3>{hero?.name}</h3>
                </div>)
            }
        </div>
    );
};

export default RQSuperHeroesPage;