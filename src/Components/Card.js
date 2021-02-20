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
        this.state = {
            error: null,
            isLoaded: false,
            item: {}
        }
    }


    componentDidMount() {
        fetch(`http://noembed.com/embed?url=${this.props.source}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        item: result
                    });
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const { handleSetMovie, itemName, id } = this.props;
        const { error, isLoaded, item } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <div className="card" onClick={() => handleSetMovie(id)}>
                    <img src={item.thumbnail_url} alt="img" />
                    <p className="itemName">{itemName}</p>
                </div>
            );
        }
    }
}

export default Card;