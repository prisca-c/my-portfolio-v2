import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const Header = [
    {
        title: 'À propos',
        url: '#about',
        id: '1'
    },
    {
        title: 'Portfolio',
        url: '#portfolio',
        id: '2'
    },
    {
        title: 'Contact',
        url: '#contact',
        id: '3'
    }
]

function GetHeader() {
    return(
        <div id='header'>
            <Navbar>
                <Container>
                <Navbar.Brand> <img src={"./assets/Logo.svg"} alt="Logo Prisca" /> </Navbar.Brand>

                    <Nav className="me-auto">

                        {Header.map(item =>{
                                return (
                                <Nav.Link key={item.id} href={item.url}>
                                    {item.title}
                                </Nav.Link>
                                );
                        })}

                    </Nav>

                </Container>
            </Navbar>
        </div>
    )
}

export default GetHeader;