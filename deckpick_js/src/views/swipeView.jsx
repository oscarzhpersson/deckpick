// Library imports.
import React from 'react';
import TinderCard from 'react-tinder-card';

import { Card } from "@nextui-org/react";
import { Text } from '@nextui-org/react';
import { Image } from '@nextui-org/react';

function SwipeView(props)
{
    // Exit case. If the promises have not resolved, return null.
    if (!props.stack)
        return null;

    console.log(props.stack);

    function generateSwipeStack (data)
    {
        return (
            <div key={data.id} style={{ position: "absolute", right: "-10em", top: "-13.5em" }} >
                <TinderCard 
                    className={"debug_center"} 
                    onSwipe={props.onSwipe} 
                    onCardLeftScreen={props.onCardLeftScreen}
                    preventSwipe={['up', 'down']}
                    swipeRequirementType='velocity'
                    swipeThreshold={400}
                    >
                    <Card isHoverable variant="flat" style={{ position: "relative", width: "20em", height: "27em", backgroundColor: "#dbd7d7" }} >
                        <Card.Image className='cardImage' src={data.image_uris.art_crop} />
                        <Text className='cardTitle' size={20} >{ data.name }</Text>
                    </Card>
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