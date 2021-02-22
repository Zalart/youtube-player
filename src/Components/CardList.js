import Card from './Card';
import './CardList.css'
import React from 'react';

class CardList extends React.Component {

    render() {
        const { data, handleSetMovie, pickedMovieId } = this.props;
        return (
            <div className="CardList">
                {data.length === 0 && <h2>Нет фильмов по запросу</h2>}
                { data.map((video, index) => (
                    pickedMovieId !== video.id &&
                    <Card key={video.id + index}
                        id={video.id}
                        thumbnail={video.thumbnail}
                        title={video.title}
                        channel={video.channel}
                        handleSetMovie={handleSetMovie} />
                ))
                }

            </div>
        )
    }
}

export default CardList;