/* import React, { Component } from 'react';
import "./CommentForm.css";

class CommentForm extends Component {

    render() {
        const { comments, id, handleCommentSubmit } = this.props;
        return (
            <div className="CommentForm">
                <h3>Comments</h3>
                <div className="commentsContainer">{this.props.comments}</div>
                <hr />
                <h3>Make your point</h3>
                <form onSubmit={handleCommentSubmit(id, target.name, comments[1])}>
                    <label htmlFor="name">Имя</label>
                    <input id="name" name="author" type="text" placeholder="Имя"></input>
                    <textarea name="comment" placeholder="Есть что сказать?" value='test' />
                    <input type="submit" value="Комментировать" />
                </form>
            </div>
        );

    }
}

export default CommentForm; */