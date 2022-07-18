function GetCard ()
{
    var scryfall = require("scryfall-client");

    var card;
    
    card = scryfall.random()
            .then(function (result) {
                return result;
            })
            .catch((error) => {
                // TODO: Add proper error handling.
                console.log("ERROR: " + error);
            })

    return card;
}

function GenerateStack (number, avoid_duplicates)
{
    var stack = [];
    
    for (let i = 0; i < number; i++)
    {
        var card = GetCard();

        if (stack.includes(card) && avoid_duplicates)
        {
            continue;
        }

        stack = [...stack, card];
    }

    return stack;
}

export { GetCard, GenerateStack }