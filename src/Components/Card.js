import React, { Component } from 'react';
import "./Card.css";

class Card extends Component {

    render() {
        const { handleSetMovie, title, id, thumbnail } = this.props;
        return (
            <div className="card" onClick={() => handleSetMovie(id)}>
                <img src={thumbnail} alt="img" />
                <p className="itemName">{title}</p>
            </div>
        );

    }
}

export default Card;