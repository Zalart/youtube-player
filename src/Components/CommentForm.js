import React, { Component } from 'react';
import "./CommentForm.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={5}
                        variant="outlined" color="secondary" size="small" label="Ваш комментарий..." name="comment" onChange={handleCommentsChange} />
                    <Button size="medium" variant="contained" color="secondary" type="submit">Комментировать</Button>
                </form>
            </div>
        );

    }
}

export default CommentForm;