import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const SuperHeroesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes')
            .then(res => {
                setData(res.data);
                setIsLoading(false);
                setError('');
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            });
    }, [
        data,
        error,
        isLoading
    ]);

    if (isLoading) {
        return <h2>Loading . . . </h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1
                style={{
                    textAlign: 'start',
                    margin: '10px',
                }}> Super Heroes Page </h1>
            {
                data.map(hero => <div
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

export default SuperHeroesPage;