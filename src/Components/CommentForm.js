import React, { Component } from 'react';
import "./CommentForm.css";

class CommentForm extends Component {

    render() {
        const { handleCommentSubmit, handleCommentsChange, comments = [] } = this.props;
        const listComments = comments.map((comment, idx) =>
            <div className="comment" key={idx}>{comment}</div>
        );
        return (
            <div className="CommentForm">
                <h3>Comments</h3>
                {listComments}
                <hr />
                <h3>Make your point</h3>
                <form onSubmit={handleCommentSubmit} >
                    <textarea name="comment" placeholder="Есть что сказать?" onChange={handleCommentsChange} />
                    <input type="submit" value="Комментировать" />
                </form>
            </div>
        );

    }
}

export default CommentForm;