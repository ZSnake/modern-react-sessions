import React from 'react';
import { CommentsVisibilityContext } from '../../containers/CommentsSection';

const PostActions = ({ changeVisibility }) => (
    <CommentsVisibilityContext.Consumer>
        {showComments => !showComments ?
            (<span className="show-comments-link" onClick={() => changeVisibility(true)}>Show comments</span>) :
            (<span className="show-comments-link" onClick={() => changeVisibility(false)}>Hide comments</span>)}
    </CommentsVisibilityContext.Consumer>
);

export default PostActions;