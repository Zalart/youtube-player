import Card from './Card';
import data from './data';
import React from 'react';

class CardList extends React.Component {

    render() {
        return (
            <div className="CardList">
                {
                    data.map((video) => (
                        <Card
                            name={element.name}
                            id={element.id}
                            birth_year={element.birth_year} />
                    ))
                }

            </div>
        )
    }
}

export default CardList;