// Library imports.
import React from 'react';
import { NextUIProvider } from '@nextui-org/react';

// Component imports.
import { SwipePresenter } from '../components/swipePresenter';


function App(props) {
  return (
    <NextUIProvider>
      <div className="swipeStack">
        <SwipePresenter stack_state={props.stack_state} />
      </div>
    </NextUIProvider>
  );
}

export default App;
