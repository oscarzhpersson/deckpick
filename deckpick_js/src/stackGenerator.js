import { getCard } from "scryfall-client/dist/api-routes/cards";

function GetCard ()
{
    var scryfall = require("scryfall-client");

    var card;
    
    card = scryfall.random()
            .then(function (result) {
                return result;
            })

    return card;
}

function GenerateStack (number, avoid_duplicates)
{
    var scryfall = require("scryfall-client");

    var stack = [];
    
    for (let i = 0; i < number; i++)
    {
        var card = getCard();

        if (stack.includes(card) && avoid_duplicates)
        {
            continue;
        }

        stack = [...stack, card];
    }
    
    return stack;
}

export { GetCard, GenerateStack }