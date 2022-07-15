// Component imports.
import { GetCard, GenerateStack } from "../stackGenerator";
import { resolvePromise, resolvePromises } from "../promiseHandler";

export default class StackState
{
    

    constructor (stack = [], stackState = {})
    {
        this.stack = GenerateStack(5, true);
        //resolvePromises( GenerateStack(5, true), stackState );
        //console.log(stackState);
        //this.stack = this.fillStack();
        //this.stack = GetCard();
    }

    fillStack ()
    {
        var promiseState = {promise: null, data: null, error: null}
        resolvePromises( GenerateStack(5, true), promiseState );

        return promiseState.data;
    }

}