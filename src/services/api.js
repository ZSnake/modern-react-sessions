import axios from 'axios';
import { baseUrl } from '../config';

export const getPosts = async () => {
    const response = await axios.get(`${baseUrl}/posts`);
    return response.data;
};
export const getPost = async postId => {
    const response = await axios.get(`${baseUrl}/posts/${postId}`);
    return response.data;
};
export const getComments = async postId => {
    const response = await axios.get(`${baseUrl}/posts/${postId}/comments`);
    return response.data;
};

