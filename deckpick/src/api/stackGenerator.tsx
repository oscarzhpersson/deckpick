import { promises } from "stream";

function GetCard (returned: any)
{
    // Create Scryfall client singleton.
    var scryfall = require("scryfall-client");

    var fetched_card: any;

    scryfall.random().then((card: any) => {
        console.log(card);
        returned = card;
    });
}

function StackGenerator (props: any)
{
    const stacksize: Number = props.size;
    var promise_stack: any = [];
    var stack: any = [];

    // Create Scryfall client singleton.
    var scryfall = require("scryfall-client");

    for (let i = 0; i < stacksize; i++)
    {
        const card: any = scryfall.random();

        if (props.prevent_duplicates && !stack.includes(card))
            stack.push(card.then((data: any) => {return data}));
    }

    Promise.all(stack)
        .then((result) => {
            return result;
            //stack.push(card);
            //console.log(card);
        })

    //for (let i = 0; i < stacksize; i++)
    //{
    //    Promise.resolve(scryfall.random())
    //    //scryfall.random()
    //        .then((card: any) => {
    //            // TODO: Pick out only the relevant properties.

    //            if (!props.prevent_duplicates && !stack.includes(card))
    //            {
    //                stack.push(card);
    //            }
    //        });
            /*.then(() => {
                return stack;
            });*/
    //    // TODO: Add error handling.
    //}

    return null;
}

export { StackGenerator, GetCard }