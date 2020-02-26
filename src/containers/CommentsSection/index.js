import React, { useState, createContext, useEffect } from 'react';
import PostActions from '../../components/PostActions';
import Comments from '../../components/Comments';
import { getComments } from '../../services/api';

export const CommentsVisibilityContext = createContext(false);

const CommentsSection = ({ postId }) => {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        {/*...*/}
    }, [showComments, comments])
    return (
        <div>
            <div className="post-actions-container">
                <PostActions changeVisibility={setShowComments} />
            </div>
            <Comments comments={comments} />
        </div>
    );
};

export default CommentsSection