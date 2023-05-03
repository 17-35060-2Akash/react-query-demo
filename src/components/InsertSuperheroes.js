import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useAddSuperHeroes } from './RQ.page';
import { useQuery } from 'react-query';

export const fetchSuperHeroes = async () => {
    return axios.get('http://localhost:4000/superheroes');
}

const InsertSuperheroes = () => {
    const [name, setName] = useState('');
    const [alterEgo, setAlterEgo] = useState('');

    const { data: heroes, isLoading, isError, error, isFetching } = useQuery('super-heroes', fetchSuperHeroes);

    const { mutate: addHero, isLoading: heroIsLoading, isError: heroIsError, error: heroError } = useAddSuperHeroes();

    const handleAddHeroOnClick = () => {
        // console.log({ name, alterEgo });
        const hero = { name, alterEgo };
        addHero(hero);
    };


    if (isLoading || isFetching) {
        return <h2>Loading . . . </h2>
    };

    if (isError) {
        return <h2>{error?.message}</h2>
    };

    if (heroIsLoading) {
        return <h2>New Hero Loading . . . </h2>
    };

    if (heroError) {
        return <h2>Hero Error: {heroError?.message}</h2>
    };

    return (
        <div>
            <Navbar></Navbar>
            RG Insert SuperHeroes
            <div style={{
                position: 'left'
            }}>
                <input type="text" name={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Superhero Name' />

                <input type="text" name={alterEgo}
                    onChange={(e) => setAlterEgo(e.target.value)}
                    placeholder='Alter Ego' />

            </div>
            <button onClick={handleAddHeroOnClick}>Fetch Heroes</button>
            <div>
                <h2
                    style={{
                        textAlign: 'start',
                        margin: '10px',
                    }}>RQ Super Heroes Page</h2>
                {
                    heroes?.data.map(hero => <div
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
        </div>
    );
};

export default InsertSuperheroes;