import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Cookie, PersonCircle } from 'react-bootstrap-icons';

function CollapsibleExample() {
    return (
        <Navbar variant='dark' className='bg-dark' collapseOnSelect expand="lg">
            <Container>

                <Navbar.Brand href="#home">
                    <Cookie size={30} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto' />
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <PersonCircle size={30} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;