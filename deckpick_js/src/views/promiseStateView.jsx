// Library imports.
import { Loading } from '@nextui-org/react';

// Provides user with visibility of system status based on feedback from user actions.
function PromiseStateView(promise_state)
{
    var promise = promise_state.promise;
    var data = promise_state.data;
    var error = promise_state.error;

    // Promise, Data, Error:
    //  Falsy, _, _:
    if(!promise)
        return <div id="promiseData">No data</div>;

    // Promise parts are redundant here, but kept to maintain consistency.
    if(promise && !data && !error)
        return <div id="promiseData" className="loadingScreen"><Loading size="xl" /></div>;

    if(promise && !data && error)
        return <div id="promiseData">{error.toString()}</div>; // TODO: Possibly add a class?

    if(promise && data && !error)
        return false;
}

export default PromiseStateView;