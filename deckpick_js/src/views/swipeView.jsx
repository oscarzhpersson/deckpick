// Library imports.
import React from 'react';
import TinderCard from 'react-tinder-card';
import { Card, Col, Row, Button, Text, Image } from "@nextui-org/react";

// Component imports.
import info_icon from '../assets/svg/icon_info.svg';

function SwipeView(props)
{
    // Exit case. If the promises have not resolved, return null.
    if (!props.stack)
        return null;

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
                        <Card.Image 
                            className='cardImage' 
                            showSkeleton={true} 
                            src={data.image_uris.art_crop} 
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            alt={data.name} />
                        <Card.Footer
                            isBlurred
                            css={{
                                position: "absolute",
                                bgBlur: "#0f111466",
                                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                bottom: 0,
                                zIndex: 1,
                                height: '15%'
                            }}>
                                <Col>
                                    <Text transform="uppercase" color='white' size={15} >{ data.name }</Text>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                        <Button bordered rounded auto color='secondary' onClick={() => props.showFullImage(data)} >
                                            <Text
                                                css={{ color: "white" }}
                                                size={15}
                                                weight="bold"
                                                transform="uppercase"
                                                >
                                                    View
                                            </Text>
                                        </Button>
                                    </Row>
                                </Col>
                        </Card.Footer>
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