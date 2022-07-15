

function resolvePromise(promise, promiseState)
{

    if(promise === null)
        return;

    // Get the new promise.
    promiseState.promise = promise;

    // Reset the saved data from the old promise.
    promiseState.data = null;
    promiseState.error = null;

    // Saves the result in the promise state.
    function saveDataACB(result)
    {
        // Only save if promiseState.promise is the same.
        if(promiseState.promise !== promise) return; // If the promises are not the same (matching), do nothing.

        promiseState.data = result; // Triggers UI update because of state change.
    }

    // Saves the error in the promise state.
    function saveErrorACB(err)
    {
        // Only save if promiseState.promise is the same.
        if(promiseState.promise !== promise) return; // If the promises are not the same (matching), do nothing.

        promiseState.error = err; // Triggers UI update because of state change.
    }

    promise.then(saveDataACB).catch(saveErrorACB);
}

function resolvePromises(promises, promiseState)
{
    if(promises === null)
        return;

    // Get the new promise.
    promiseState.promise = promises;

    // Reset the saved data from the old promise.
    promiseState.data = null;
    promiseState.error = null;

    // Saves the result in the promise state.
    function saveDataACB(result)
    {
        // Only save if promiseState.promise is the same.
        if(promiseState.promise !== promises) return; // If the promises are not the same (matching), do nothing.

        promiseState.data = result; // Triggers UI update because of state change.
    }

    // Saves the error in the promise state.
    function saveErrorACB(err)
    {
        // Only save if promiseState.promise is the same.
        if(promiseState.promise !== promises) return; // If the promises are not the same (matching), do nothing.

        promiseState.error = err; // Triggers UI update because of state change.
    }

    //promises.then(saveDataACB).catch(saveErrorACB);
    Promise.all(promises).then(saveDataACB).catch(saveErrorACB);
}

// Export the function.
export { resolvePromise, resolvePromises };