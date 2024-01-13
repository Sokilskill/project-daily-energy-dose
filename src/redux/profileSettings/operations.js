import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://power-pulse-6-backend.onrender.com';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async (_, thunkAPI) => {
const state = thunkAPI.getState();
const persistedToken = state.auth.token;
if (persistedToken === null) {
    toast.info('Unable to get user');
    return thunkAPI.rejectWithValue(error.message);
}
try{
    const res = await axios.get('/*****'); //'/user/current';
    return res.data;
}catch(error) {
    toast.error(error.message);
    return thunkAPI.rejectWithValue(error.message);
}
    }
);

export const updateUserInfo = createAsyncThunk(
    'auth/updateUserInfo',
    async (userData, thunkAPI) => {
        try {
            const res = await axios.put('/*****', userData) //'/user/update'
            toast.success('User information updated');
            return res.data;
        } catch (error) {
            toast.error(error.message);
            return thunkAPI.rejectWithValue(error.message);
            
        }
    }
);

export const updatedUserAvatar = createAsyncThunk(
    'auth/avatar',
    async (avatarData, thunkAPI) => {
        try {
            const formData = new FormData();
            formData.append('avatar', avatarData)
            const res = await axios.patch('/*****', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-rapidapi-host': 'file-upload8.p.rapidapi.com',
                    'x-rapidapi-key': 'your-rapidapi-key-here',
                }
            });
            toast.success('Avatar updated');
            return res.data;
        } catch (error) {
            toast.error(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addUserData = createAsyncThunk(
    'auth/addUserData',
    async (data, thunkAPI) => {
        try {
          const res = await axios.patch('/****', data);
          toast.success('Your profile updated');
          return res.data  
        } catch (error) {
            toast.error(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

