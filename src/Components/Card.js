import React, { Component } from 'react';
import "./Card.css";

class Card extends Component {

    render() {
        const { handleSetMovie, title, id, thumbnail, channel } = this.props;
        return (
            <div className="card" onClick={() => handleSetMovie(id)}>
                <img src={thumbnail} alt="img" />
                <div className="cardtext">
                    <p className="title">{title}</p>
                    <p className="channel">{channel}</p>
                </div>

            </div>
        );

    }
}

export default Card;