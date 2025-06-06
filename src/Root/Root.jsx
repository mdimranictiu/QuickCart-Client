import React from 'react';
import Navbar from '../Pages/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet/>
        </>
    );
};

export default Root;