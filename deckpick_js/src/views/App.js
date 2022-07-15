// Library imports.
import React from 'react';

// Component imports.
import { SwipePresenter } from '../components/swipePresenter';


function App(props) {
  return (
    <div className="App">
      <SwipePresenter stack_state={props.stack_state} />
    </div>
  );
}

export default App;
