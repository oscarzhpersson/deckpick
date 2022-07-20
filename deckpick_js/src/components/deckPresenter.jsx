// Library imports.
import React from "react";

// Component imports.
import { DeckView } from "../views/deckView";

function DeckPresenter (props)
{

    const [display_deck, set_display_deck] = React.useState(false);

    function toggleDeck (state)
    {
        set_display_deck(state);
    }

    return (
        <div>
            <DeckView deck={props.stack_state.deck} display_deck={display_deck} toggleDeck={toggleDeck} />
        </div>
    )
}

export { DeckPresenter }