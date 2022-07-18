// Library imports.
import React from 'react';
import { NextUIProvider } from '@nextui-org/react';

// Component imports.
import { SwipePresenter } from '../components/swipePresenter';
import image from '../assets/svg/wave_1.svg';

function App(props) {
  return (
    <NextUIProvider>
      <div>
        <img src={image} style={{ position: 'fixed', width: '100%', top: '-10%' }} />
        <div className='swipeStack' >
          <SwipePresenter stack_state={props.stack_state} />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
