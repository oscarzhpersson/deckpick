// Component imports.
import { GetCard, GenerateStack } from "../stackGenerator";
import { resolvePromise, resolvePromises } from "../promiseHandler";

export default class StackState
{

    constructor (stack = [], stackPromiseState = {})
    {
        this.stack = stack;//GenerateStack(5, true);
        this.stackPromiseState = stackPromiseState;
    }

    getStack ()
    {
        if (!this.stack || this.stack.length <= 0)
        {
            resolvePromises(GenerateStack(5, true), this.stackPromiseState);
            this.stack = this.stackPromiseState.data;
        }

        return this.stack;
    }

    fillStack ()
    {
        var promiseState = {promise: null, data: null, error: null}
        resolvePromises( GenerateStack(5, true), promiseState );

        return promiseState.data;
    }

}