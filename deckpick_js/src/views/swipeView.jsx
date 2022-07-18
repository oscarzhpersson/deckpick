// Library imports.
import React from 'react'
import TinderCard from 'react-tinder-card'

function SwipeView(props)
{
    // Exit case. If the promises have not resolved, return null.
    if (!props.stack)
        return null;

    console.log(props.stack);

    function generateSwipeStack (data)
    {
        return (
            <div key={data.id} style={{ position: "absolute" }} >
                <TinderCard className={"debug_center"} onSwipe={props.onSwipe} onCardLeftScreen={props.onCardLeftScreen} >
                    <div style={{ position: "relative", width: "20em", height: "25em", backgroundColor: "#4A4A4A" }} >
                        <img src={data.image_uris.normal} />
                        <a>{ data.name }</a>
                    </div>
                </TinderCard>
            </div>
        )
    }

    return (
        // Use map function for each fetched element.
        <div>
            { props.stack.map(generateSwipeStack) }
        </div>
    )
}

export {SwipeView}