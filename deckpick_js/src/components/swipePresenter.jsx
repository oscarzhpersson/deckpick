//Library imports.
import React from 'react'

// Component imports.
import { SwipeView } from '../views/swipeView'

function SwipePresenter(props)
{
    const [stack, set_stack] = React.useState(props.stack_state.stack);

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }
      
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div>
            {stack.length < 1 ? null : <SwipeView stack={stack} onSwipe={onSwipe} onCardLeftScreen={onCardLeftScreen} /> }
        </div>
    )
}

export {SwipePresenter}