import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg='light' className='py-4'>
                <Container >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mx-auto">

                            <Link className='text-decoration-none me-4 text-secondary' to='/category/0'>Home</Link>

                            <Link className='text-decoration-none me-4 text-secondary' to='/about'>About</Link>
                            <Link className='text-decoration-none me-4 text-secondary' to="/career">Career</Link>
                        </Nav>
                        <Nav>
                            {
                                user &&

                                <FaUserCircle size={40} />
                            }
                            {
                                user ?
                                    <Button onClick={handleSignOut} variant="secondary">Logout</Button> :
                                    <Link to='/login'><Button variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;