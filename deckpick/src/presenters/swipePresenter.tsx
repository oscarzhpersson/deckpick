//Library imports.
import React from 'react'

// Component imports.
import { SwipeView } from '../views/swipeView'
import { StackGenerator } from '../api/stackGenerator';
import { resolvePromises } from '../api/promiseHandler';

function SwipePresenter(props: any)
{
    const [stack, set_stack] = React.useState([]); //React.useState(props.application_state.stack); //React.useState(props.application_state.get_stack());

    var scryfall = require("scryfall-client");
    
    scryfall.random()
            .then(function (card: any) {
                return card;
            })
            .then((result: any) => {
                set_stack([...stack, result]);
            });

    const onSwipe = (direction: String) => {
        console.log('You swiped: ' + direction)
    }
      
    const onCardLeftScreen = (myIdentifier: String) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div>
            {stack.length != 0 ? null : <SwipeView stack={stack} onSwipe={onSwipe} onCardLeftScreen={onCardLeftScreen} /> }
        </div>
    )
}

export {SwipePresenter}