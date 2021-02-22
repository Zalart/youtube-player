import React from 'react'
import ReactPlayer from 'react-player';
import { Component } from 'react';
import CommentForm from './CommentForm';
class Player extends Component {
    render() {
        const { title, description, id, channel, handleSetLikes, handleCommentSubmit, handleCommentsChange, like, dislike, comments } = this.props;
        return (

            <div className="player">
                <ReactPlayer url={'https://www.youtube.com/watch?v=' + id} controls />
                <h2>{title}</h2>
                <p className="description">{description}</p>
                <p>{channel}</p>
                <span className="Like" role="img" aria-label="Like" title="Like" onClick={() => {
                    handleSetLikes('like')
                }}>👍 {like} </span>
                <span className="Like" role="img" aria-label="Dislike" title="Dislike" onClick={() => {
                    handleSetLikes('dislike')
                }} >👎 {dislike}</span>

                <CommentForm handleCommentSubmit={handleCommentSubmit} handleCommentsChange={handleCommentsChange} comments={comments} />

            </div>
        );
    }
}

export default Player;