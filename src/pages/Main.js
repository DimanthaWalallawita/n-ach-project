import React, { useState } from 'react'
import UsersList from '../components/UsersList/UsersList'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Welcome from '../components/Welcome';

const Main = () => {

    const [showUsers, setShowUsers] = useState(false);

    const handleLoadUsersClick = () => {
        setShowUsers((prevState) => !prevState);
      };

    return (
        <div>
            <NavBar onToggleUsersList={handleLoadUsersClick} showUsers={showUsers}/>
            {showUsers ? (
            <UsersList />
            ) : (
                <Welcome />
            )}
            <Footer />
        </div>
    )
}

export default Main