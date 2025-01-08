import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styles from '../../assets/css/UserDetails.module.css';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const UserDetails = () => {

    const { userId } = useParams();
    const [userData, setUserData] = useState(null);

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: '#202643',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '15px',
            },
        },
        cells: {
            style: {
                backgroundColor: 'white',
                color: 'black',
                fontSize: '13px',
            },
        },
    };

    const columns = [
        { name: 'Details', selector: row => row.details, sortable: true },
        { name: 'Data', selector: row => row.value, sortable: true },
    ];

    useEffect(() => {
        axios.get(`https://dummyjson.com/users/${userId}`)
            .then((response) => {
                const data = response.data;
                setUserData(data);
            })
            .catch((error) => {
                console.error('Error in fetching user data: ', error);
            });
    }, [userId]);

    if (!userData) return <div>Loading...</div>;

    const data = [
        { details: 'User ID', value: userData.id },
        { details: 'Full Name', value: `${userData.firstName} ${userData.maidenName} ${userData.lastName}` },
        { details: 'Age', value: userData.age },
        { details: 'Email', value: userData.email },
        { details: 'Phone', value: userData.phone },
        { details: 'Date of Birth', value: userData.birthDate },
        { details: 'Address', value: `${userData.address.address}, ${userData.address.city}, ${userData.address.state}` },
        { details: 'Gender', value: userData.gender },
        { details: 'Blood Group', value: userData.bloodGroup || 'Not Available' },
    ];

    return (
        <div className={styles.detailsContainer}>
            <div className={styles.profile}>
                <img src={userData.image} alt='profile'/>
            </div>

            <div className={styles.details}>
                <div className={styles.table}>
                    <DataTable
                        columns={columns}
                        data={data}
                        fixedHeader
                        fixedHeaderScrollHeight="80vh"
                        className="data-table"
                        customStyles={customStyles}
                    />
                </div>
            </div>
        </div>
    )
}

export default UserDetails