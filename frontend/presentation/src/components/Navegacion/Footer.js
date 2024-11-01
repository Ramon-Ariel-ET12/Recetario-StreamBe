
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Github } from 'react-bootstrap-icons';

function name() {
    return (
        <>
            <Navbar expand='lg' variant='dark' className="bg-dark" style={{bottom:0}}>
                <Container>
                    <Navbar.Brand href="https://github.com/Ramon-Ariel-ET12/Recetario-StreamBe">
                        <Github/>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default name;