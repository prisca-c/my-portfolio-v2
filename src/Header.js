import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const Header = [
    {
        title: 'Compétences',
        url: '#skills',
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
        <header id='header' className='fixed-top'>
            <Navbar sticky='top'>
                <Container>
                    <Navbar.Brand> 
                        <img src={"./assets/img/Logo.svg"} alt="Logo Prisca" height={100}/>
                    </Navbar.Brand>

                    <Nav className="roboto-slab fw-bold">

                        {Header.map(item =>{
                            return (
                            <Nav.Link key={item.id} href={item.url} className="text-white">
                                {item.title}
                            </Nav.Link>
                            );
                        })}

                    </Nav>

                </Container>
            </Navbar>
        </header>
    )
}

export default GetHeader;