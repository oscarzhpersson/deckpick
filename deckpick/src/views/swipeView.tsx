// Library imports.
import React from 'react'
import TinderCard from 'react-tinder-card'

function SwipeView(props: any)
{

    // Exit case. If the promises have not resolved, return null.
    if (!props.stack)
        return null;

    // Wraps the TinderCard component as a workaround to the "children" problem introduced in React 18.0.
    type TinderCardProps = Parameters<typeof TinderCard>[0];
    type TinderCardPropsWithChildren = TinderCardProps & { children?: React.ReactNode };

    const TinderCardWithChildren: React.FC<TinderCardPropsWithChildren> = TinderCard;

    console.log("PROLOG4Life");
    console.log(props.stack);

    function generateSwipeStack (data: any)
    {
        return (
            <div style={{ position: "absolute" }} >
                <TinderCardWithChildren key={data.id} className={"debug_center"} onSwipe={props.onSwipe} onCardLeftScreen={props.onCardLeftScreen} >
                    <div style={{ position: "relative", width: "20em", height: "25em", backgroundColor: "#4A4A4A" }} >
                        {/*<img src={data.image_uris.normal} />*/}
                        <a>{ data.name }</a>
                    </div>
                </TinderCardWithChildren>
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