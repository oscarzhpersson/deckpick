// Library imports.
import { Button, Text, Card, Loading, Modal } from '@nextui-org/react';

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
    {
        // TODO: Finish this.
        return (
            <div id="promiseData">
                <Modal
                    open={true}
                    blur={false}
                >
                    <Card color='primary' css={{ bottom: '20%', backgroundColor: '#0072F5' }}>
                        <Text color='white' >
                            {error.toString()}
                        </Text>
                    </Card>
                </Modal>
            </div>
        );
    }

    if(promise && data && !error)
        return false;
}

export default PromiseStateView;