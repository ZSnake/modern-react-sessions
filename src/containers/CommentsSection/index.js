import React, { useState, createContext, useEffect } from 'react';
import PostActions from '../../components/PostActions';
import Comments from '../../components/Comments';
import { getComments } from '../../services/api';

export const CommentsVisibilityContext = createContext(false);

const CommentsSection = ({ postId }) => {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const fetchComments = async () => {
            const response = await getComments(postId);
            setComments(response);
        }
        if (showComments || comments.length === 0) fetchComments();
    }, [showComments, comments])
    return (
        <CommentsVisibilityContext.Provider value={showComments}>
            <div className="post-actions-container">
                <PostActions changeVisibility={setShowComments} />
            </div>
            <Comments comments={comments} />
        </CommentsVisibilityContext.Provider>
    );
};

export default CommentsSection