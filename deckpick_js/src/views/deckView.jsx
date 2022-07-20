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
                    >
                    <Card style={{ height: '85vh'/*, backgroundColor: '#BABABA'*/ }} >
                        <Card.Header css={{ height: '2em' }}>
                            <Text h3 weight='normal' >
                                Your Deck
                            </Text>
                        </Card.Header>
                        <Card.Body>
                            <Grid.Container gap={1} justify='center'>
                                { props.deck.map(renderDeck) }
                            </Grid.Container>
                        </Card.Body>
                        <Card.Footer css={{ height: '3em' }}>
                            <Button size='sm' rounded shadow>
                                EXPORT
                            </Button>
                        </Card.Footer>
                    </Card>
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