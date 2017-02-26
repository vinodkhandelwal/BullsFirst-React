import React from 'react';
import {Link} from 'react-router';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';

const Header = () => {
    return (
        <Navbar id="header">
            <Navbar.Header>
                <Navbar.Brand>
                    <span>bullsfirst</span>
                    <div className="subtitle">Calling All Bull Markets</div>
                </Navbar.Brand>
            </Navbar.Header>

            <Nav bsStyle="pills" pullRight>
                <IndexLinkContainer to="/" activeHref="active">
                    <NavItem>Accounts</NavItem>
                </IndexLinkContainer>

                <LinkContainer to="/trades" activeHref="active">
                    <NavItem>Trade</NavItem>
                </LinkContainer>

                <LinkContainer to="/transfer" activeHref="active">
                    <NavItem>Transfer</NavItem>
                </LinkContainer>
            </Nav >
        </Navbar>
    );
};

export default Header;