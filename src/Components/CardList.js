import Card from './Card';
import React from 'react';

class CardList extends React.Component {
    render() {
        const { data, isEmpty, handleSetMovie } = this.props;
        return (
            <div className="CardList">
                {isEmpty ? "Nothing to show" : null}
                { data.map((video, index) => (
                    <Card key={video.itemName + index}
                        previewImage={video.previewImage}
                        itemName={video.itemName}
                        id={video.id}
                        source={video.source}
                        handleSetMovie={handleSetMovie} />
                ))
                }

            </div>
        )
    }
}

export default CardList;