import React from 'react';
import CommentsSection from '../../containers/CommentsSection';

const Post = ({ post }) => (
    <div className="post">
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <CommentsSection postId={post.id} />
    </div>
);

export default Post;