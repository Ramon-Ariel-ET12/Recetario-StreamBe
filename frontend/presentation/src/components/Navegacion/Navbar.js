import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Cookie, PersonCircle } from 'react-bootstrap-icons';

function NavBar() {
    return (
        <Navbar variant='dark' className='bg-dark fixed-top' collapseOnSelect expand="lg">
            <Container>
                
                <Navbar.Brand href="#home">
                    <Cookie size={30} />
                </Navbar.Brand>

                <Nav className='me-auto' />
                <Nav>
                    <Nav.Link href="#memes">
                        <PersonCircle size={30} />
                    </Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default NavBar;