// Library imports.
import { any } from 'prop-types';
import React from 'react';

// Component imports.
import { SwipePresenter } from '../presenters/swipePresenter';

function App(props: any) {

  return (
    <div className="App">
      {/* props.application_state.get_stack() ? <SwipePresenter application_state={props.application_state}/> : null */}
      <SwipePresenter application_state={props.application_state}/>
    </div>
  );
}

export default App;
