import React, { Component } from 'react';
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
        return (
            <div className="card">
                <a className="cardLink" href={props.source}>
                    <img className="previewImage" src={previewImage} alt="img" />
                    <p className="itemName">{itemName}</p>
                </a>
            </div>
        );
    }
}

export default Card;