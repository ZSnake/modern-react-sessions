import React from 'react';
import { CommentsVisibilityContext } from '../../containers/CommentsSection';

const Comment = ({ comment }) => (
    <div className="comment-container">
        <p className="comment-body">{comment.body}</p>
        <div className="comment-author">{comment.email}</div>
    </div>
);

const Comments = ({ showComments, comments }) => (
    <div>{showComments && comments.length > 0 && (
        <div>
            <h4>Comments</h4>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    )}</div>
);

export default Comments;