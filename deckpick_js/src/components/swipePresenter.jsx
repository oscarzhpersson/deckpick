//Library imports.
import React from 'react'

// Component imports.
import { SwipeView } from '../views/swipeView'
import { GenerateStack } from '../stackGenerator';
import PromiseStateView from '../views/promiseStateView';

function SwipePresenter(props)
{
    const [stack_promise, set_stack_promise] = React.useState(function initialise(){ return GenerateStack(10, true) });
    const [stack_data, set_stack_data] = React.useState();
    const [stack_error, set_stack_error] = React.useState();

    function onPromiseChangedACB()
    {
        set_stack_data(null);
        set_stack_error(null);

        // Method to render the last of successive search render from lecture.
        let cancelled = false;

        function onPromiseChangedAgainACB(){ cancelled = true; }; // Also called at teardown.

        if(!stack_promise) // If the promise is falsy, return.
            return;

        Promise.all(stack_promise).then(function saveDataACB(d){ if(!cancelled) set_stack_data(d) }).catch(function saveError(e){ if(!cancelled) set_stack_error(e) });

        return onPromiseChangedAgainACB; // onPromiseChangedACB will be called for the new value.
    }

    React.useEffect(onPromiseChangedACB, [stack_promise]); // When promise changes, run onPromiseChangedACB.

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction);
    }
      
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen');

        // TODO: If card stack is empty, refill.
    }

    return (
        <div>
            {PromiseStateView({promise: stack_promise, data: stack_data, error: stack_error}) ||
                <SwipeView stack={stack_data} onSwipe={onSwipe} onCardLeftScreen={onCardLeftScreen} /> }
        </div>
    )
}

export {SwipePresenter}