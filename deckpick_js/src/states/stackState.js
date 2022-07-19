// Component imports.
import { GetCard, GenerateStack } from "../stackGenerator";
import { resolvePromise, resolvePromises } from "../promiseHandler";

export default class StackState
{

    constructor (deck = [])
    {
        this.deck = deck;
    }

    saveCard (card_id)
    {
        this.deck = [...this.deck, card_id];

        // TODO: Remove print statement later.
        console.log(this.deck);
    }

}