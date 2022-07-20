// Library imports.
import { React } from "react";
import { Button, Modal, Card, Grid, Image, Text, Col, Row, Dropdown } from "@nextui-org/react";

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
                    width='85%'
                    css={{ height: '95vh' }}
                    blur
                    >
                    <Modal.Body>
                        <Grid.Container gap={1} justify='center'>
                            { props.deck.map(renderDeck) }
                        </Grid.Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Dropdown>
                            <Dropdown.Button light>EXPORT</Dropdown.Button>
                            <Dropdown.Menu>
                                <Dropdown.Item key="archideck">Archideck</Dropdown.Item>
                                <Dropdown.Item key="prolog">Prolog</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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