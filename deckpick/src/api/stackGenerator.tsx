import { promises } from "stream";

function GetCard (returned: any)
{
    // Create Scryfall client singleton.
    var scryfall = require("scryfall-client");

    scryfall.random().then((card: any) => {
        console.log(card);
        returned = card;
    });
}

function StackGenerator (props: any)
{
    const stacksize: Number = props.size;
    var stack: any = [];

    // Create Scryfall client singleton.
    var scryfall = require("scryfall-client");

    for (let i = 0; i < stacksize; i++)
    {
        const card: any = scryfall.random();

        if (props.prevent_duplicates && !stack.includes(card))
            stack.push(card.then((data: any) => {return data}));
    }

    return stack;
}

export { StackGenerator, GetCard }