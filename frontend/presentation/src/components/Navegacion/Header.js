import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Cookie, PersonCircle } from 'react-bootstrap-icons';

function NavBar() {
    return (
        <Navbar variant='dark' sticky='top' className='bg-dark' expand="lg">
            <Container>

                <Navbar.Brand href="#home">
                    <Cookie size={30} />
                </Navbar.Brand>

                <Nav className='me-auto' />
                <Nav>
                    <Nav.Link href="#memes"></Nav.Link>
                    <Dropdown type="button" data-bs-toggle="dropdown" aria-expanded="false" className="d-inline mx-2">
                        <PersonCircle size={30} />

                        <Dropdown.Menu style={{ position: 'absolute' }} >
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default NavBar;