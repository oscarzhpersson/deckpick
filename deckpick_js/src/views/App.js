// Library imports.
import React from 'react';
import { NextUIProvider, Image, Text, Col, Row } from '@nextui-org/react';

// Component imports.
import { SwipePresenter } from '../components/swipePresenter';
import image from '../assets/svg/wave_1.svg';
import logo from '../assets/raster/DeckPickLogo.png';

function App(props) {
  return (
    <NextUIProvider>
      <div>
        <div>
          <Col>
            <img src={logo} className='overlayed' style={{ position: 'absolute', width: '5em', left: '1%', top: '2%' }} />
          </Col>
          <Col>
            <Text h4 weight='light' className='overlayed' css={{ position: 'fixed', top: '4.9%', left: '6.5%', color: 'White' }} >DECKPICK</Text>
          </Col>
        </div>
        <img className='unselectable' src={image} css={{ position: 'relative', width: '100vw', top: '-20%' }} />
        <div className='swipeStack' >
          <SwipePresenter stack_state={props.stack_state} />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
