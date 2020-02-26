import React from 'react';
import { CommentsVisibilityContext } from '../../containers/CommentsSection';

const PostActions = ({ showComments, changeVisibility }) => (
    <div>
        {!showComments ?
            (<span className="show-comments-link" onClick={() => changeVisibility(true)}>Show comments</span>) :
            (<span className="show-comments-link" onClick={() => changeVisibility(false)}>Hide comments</span>)}
    </div>
);

export default PostActions;