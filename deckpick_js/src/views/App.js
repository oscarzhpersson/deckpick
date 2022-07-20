// Library imports.
import React from 'react';
import { NextUIProvider, Image, Text, Col, Row } from '@nextui-org/react';

// Component imports.
import { SwipePresenter } from '../components/swipePresenter';
import { DeckPresenter } from '../components/deckPresenter';
import image from '../assets/svg/wave_1.svg';
import logo from '../assets/raster/DeckPickLogo.png';

function App(props) {
  return (
    <NextUIProvider>
      <div>
        <div>
          <Col justify="flex-end">
            <img src={logo} className='overlayed' style={{ position: 'absolute', width: '5em', left: '1em', top: '1em' }} />
          </Col>
          <Col>
            <Text h4 weight='light' className='overlayed' css={{ position: 'absolute', top: '2.7em', left: '4.3em', color: 'White' }} >DECKPICK</Text>
          </Col>
        </div>
        <img className='unselectable' src={image} css={{ position: 'relative', width: '100vw', top: '-20%' }} />
        <div className='swipeStack' >
          <SwipePresenter stack_state={props.stack_state} />
        </div>
        <div>
          <DeckPresenter stack_state={props.stack_state} />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
