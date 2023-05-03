import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login with</h4>
                <Button variant="outline-primary" className='px-4 my-2'><FaGoogle></FaGoogle> Login with google</Button><br />
                <Button variant="outline-secondary" className='px-4'><FaGithub></FaGithub> Login with github</Button>
            </div>
            <div className='my-4'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter
                    ></FaTwitter> twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;