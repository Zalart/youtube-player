import ReactPlayer from 'react-player';
import { Component } from 'react';
import "./Player.css";
import Comments from './Comments';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: 0,
            dislike: 0
        }
    }
    render() {
        const { movie } = this.props;
        return (
            <div className="player">
                <ReactPlayer url={movie.source} />
                <h2>{movie.itemName}</h2>
                <div>
                    <span className="Like" onClick={() => {
                        const likeUp = this.state.like + 1;
                        this.setState({ like: likeUp })
                    }}>👍 {this.state.like} </span>
                    <span className="Like" onClick={() => {
                        const likeOff = this.state.dislike + 1;
                        this.setState({ dislike: likeOff })
                    }} >👎 {this.state.dislike}</span>
                </div>
                <Comments />
            </div>
        );
    }
}

export default Player;

