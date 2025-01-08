import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/SecondNav';
import UserDetails from '../components/UserDetails/UserDetails';

const SinglePage = () => {
    return (
        <>
            <div>
                <NavBar />
                <UserDetails />
                <Footer />
            </div>
        </>
    )
}

export default SinglePage