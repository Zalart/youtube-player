import React, { Component } from 'react';
import "./Card.css";
// const Card = ({ source, previewImage, itemName }) => {
//     return (
//         <div className="card">
//             <a className="cardLink" href={source}>
//                 <img className="previewImage" src={previewImage} alt="img" />
//                 <p className="itemName">{itemName}</p>
//             </a>


//         </div>
//     )
// }

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { handleSetMovie, itemName, previewImage, id } = this.props;
        return (
            <div className="card" onClick={() => handleSetMovie(id)}>
                <img src={previewImage} alt="img" />
                <p className="itemName">{itemName}</p>

            </div>
        );
    }
}

export default Card;