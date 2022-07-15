import React from "react";

function Test (props: any)
{

    const [s, c] = React.useState();

    var scryfall = require("scryfall-client");

    if(s == null)
    {
        scryfall.random()
            .then(function (card: any) {
                return card;
            })
            .then((result: any) => {
                c(result.image_uris.large);
            });
    }

    console.log(s);

    return (
        <div>
            { s ? <img src={s} /> : "Hello World" }
        </div>
    )
}

export { Test }