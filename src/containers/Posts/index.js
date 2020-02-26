import React, { useEffect, useState } from 'react';
import Post from '../../components/Post';
import { getPosts } from '../../services/api';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const postsResponse = await getPosts();
            setPosts(postsResponse);
        };
        fetchData();
    }, []);

    return (
        <div className="posts-container">
            <div className="header">
                <h1>Posts</h1>
            </div>
            <div>
                {posts.map(post => (<Post key={post.id} post={post} />))}
            </div>
        </div>
    );
};

export default Posts;
