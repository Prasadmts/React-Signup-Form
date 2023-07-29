import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserData } from '../redux/ActionRedux';
import axios from 'axios';


import { useParams } from 'react-router-dom';

const Profile = ({userId}) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/users/${userId}`);
        const userData = response.data;
        dispatch(saveUserData(userData));
      } catch (error) {
        console.log('Error fetching user details:', error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId, dispatch]);
    
      return (
        <div>
          <h1>Profile</h1>
          {user && (
            <div>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Other user details...</p>
            </div>
          )}
        </div>
      );
    };
export default Profile