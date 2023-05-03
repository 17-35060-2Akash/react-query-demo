import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchUser = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
};

const fetchCoursesByCannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
};

const DependentQueries = ({ email }) => {
    const { data: user } = useQuery(['user', email], () => fetchUser(email));

    const channelId = user?.data.channelId;

    const { data } = useQuery(['courses', channelId], fetchCoursesByCannelId(channelId), {
        enabled: !!channelId,
    });
    // console.log(channelId);
    return (
        <div>
            <Navbar></Navbar>
            <h2>Dependednt Queries</h2>
        </div>
    );
};

export default DependentQueries;