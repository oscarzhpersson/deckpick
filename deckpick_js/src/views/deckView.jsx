// Library imports.
import { React } from "react";
import { Button, Modal, Card, Grid, Image, Text, Col, Row } from "@nextui-org/react";

function DeckView (props)
{

    function renderDeck (card)
    {
        return (
            <Grid key={card.id}>
                <Image width='15em' src={card.art.large} />
            </Grid>
        )
    }

    return (
        <div>
            <div>
                <Modal
                    open={props.display_deck}
                    closeButton
                    onClose={() => props.toggleDeck(false)}
                    width='95%'
                    css={{ height: '95vh' }}
                    blur
                    >
                    <Modal.Body>
                        <Grid.Container gap={1} justify='center'>
                            { props.deck.map(renderDeck) }
                        </Grid.Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button shadow>
                            EXPORT
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div>
                <Button onPress={() => props.toggleDeck(true)}>
                    Prolog
                </Button>
            </div>
        </div>
    )
}

export { DeckView }