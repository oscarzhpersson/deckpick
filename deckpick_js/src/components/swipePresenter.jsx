//Library imports.
import React from 'react'
import { Modal, Image } from "@nextui-org/react";

// Component imports.
import { SwipeView } from '../views/swipeView'
import { GenerateStack } from '../stackGenerator';
import PromiseStateView from '../views/promiseStateView';

function verifyStack (stack)
{



}

function SwipePresenter (props)
{
    const [stack_promise, set_stack_promise] = React.useState(function initialise(){ return GenerateStack(10, true) });
    const [stack_data, set_stack_data] = React.useState();
    const [stack_error, set_stack_error] = React.useState();
    const [stack_index, set_stack_index] = React.useState(10);

    const [show_image_modal, set_show_image_modal] = React.useState(false);
    const [current_card, set_current_card] = React.useState();

    function showFullImage (card)
    {
        set_show_image_modal(true);
        set_current_card(card.image_uris.art_crop);
    }

    function onPromiseChangedACB ()
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

    const onSwipe = (direction, id) => {
        console.log('You swiped: ' + direction + ' on ' + id);

        var newIndex = stack_index - 1;

        set_stack_index(newIndex);

        console.log(newIndex);
        // TODO: If card stack is empty, refill.

        if (stack_index < 3)
        {
            console.log("PROLOG");
            set_stack_promise(GenerateStack(15, true));
        }
    }
      
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen');
    }

    return (
        <div>
            {PromiseStateView({promise: stack_promise, data: stack_data, error: stack_error}) ||
                <SwipeView
                    stack={stack_data}
                    showFullImage={showFullImage}
                    onSwipe={onSwipe}
                    onCardLeftScreen={onCardLeftScreen}
                    show_image_modal={show_image_modal}
                    current_card={current_card}
                    /> }
            <Modal noPadding blur aria-labelledby="modal-title" open={show_image_modal} onClose={() => set_show_image_modal(false)} >
                { current_card ? <Image objectFit='fill' src={current_card} /> : null }
            </Modal>
        </div>
    )
}

export {SwipePresenter}