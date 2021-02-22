import { Component } from "react";
import "./Comments.css";

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comment: "",
            allComments: []
        };
    }

    handleOnChange = (e) => {

        this.setState({
            comment: e.target.value
        })
    }

    newComment = (text) => {
        if (this.state.comment !== "") {
            this.setState({
                allComments: [...this.state.allComments, text]
            })
        }
    }

    render() {
        const { comment, allComments } = this.state;
        return (
            <div>
                <div>
                    <input className="comment" onChange={this.handleOnChange}></input>
                    <button className="commentButton" onClick={() => { document.querySelector(".comment").value = ''; this.newComment(comment) }} >Submit</button>
                </div>
                <div>
                    {allComments.map(comment => <p>{comment}</p>)}
                </div>
            </div>

        )
    }
}

export default Comments;