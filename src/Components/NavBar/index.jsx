import Nav from 'react-bootstrap/Nav';

import './NavBar.css';

const NavBar = () => {
    return (
        <Nav variant="tabs" defaultActiveKey="#inicio">
            <div>
                <Nav.Item>
                    <Nav.Link href="#inicio">Início</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="#sobre" href="#sobre">Sobre</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Projetos</Nav.Link>
                </Nav.Item>
            </div>

        </Nav>
    )
}

export default NavBar;


