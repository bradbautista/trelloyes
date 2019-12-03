import React from 'react';
import Card from './Card';
import './List.css';


function List(props) {
    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {props.cards.map((card) =>
                    <Card
                        onDeleteItem={props.onDeleteItem}  
                        key={card.id}
                        cardId={card.id}
                        listId={props.listId}
                        listIndex={props.listIndex}
                        title={card.title}
                        content={card.content}
                    />
                )}
                <button
                    type='button'
                    className='List-add-button'
                    onClick={() => props.onAddRandom(props.listId)}
                >
                    + Add Random Card
                </button>
            </div>
      </section>
    )
}

export default List;