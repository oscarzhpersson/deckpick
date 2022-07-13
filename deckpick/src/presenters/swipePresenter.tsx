//Library imports.
import React from 'react'

// Component imports.
import { SwipeView } from '../views/swipeView'
import { StackGenerator } from '../api/stackGenerator';

function SwipePresenter(props: any)
{
    const [stack, set_stack] = React.useState(props.application_state.stack); //React.useState(props.application_state.get_stack()); //React.useState(StackGenerator({size: 5, prevent_duplicates: true}));

    const onSwipe = (direction: String) => {
        console.log('You swiped: ' + direction)
    }
      
    const onCardLeftScreen = (myIdentifier: String) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div>
            <SwipeView stack={stack} onSwipe={onSwipe} onCardLeftScreen={onCardLeftScreen} />
        </div>
    )
}

export {SwipePresenter}