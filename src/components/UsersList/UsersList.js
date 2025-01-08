import { useEffect, useState } from 'react';
import styles from '../../assets/css/UserList.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const UsersList = () => {
    const [users, SetUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 12;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then((response) => {
                SetUsers(response.data.users);
            })
            .catch((error) => {
                console.error('Error in fetching data: ', error);
            })
    }, []);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(users.length / usersPerPage);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCardClick = (userId) => {
        navigate(`/user/${userId}`);
    };

    return (
        <>
            <div className={styles.container}>
                {currentUsers.map((user) => (
                    <div className={styles.cards} key={user.id} onClick={() => handleCardClick(user.id)} >
                        <div className={styles.cardImage}>
                            <img src={user.image} alt='profile'/>
                        </div>

                        <div className={styles.cardContent}>
                            <h1>{`${user.firstName} ${user.maidenName} ${user.lastName}`}</h1>
                            <h2>{user.email}</h2>
                            <h2>{user.phone}</h2>
                        </div>
                    </div>
                ))}


            </div>

            <div className={styles.pagination}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`${styles.button} ${currentPage === index + 1 ? styles.active : ''}`}
                        onClick={() => handlePageClick(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    )
}

export default UsersList