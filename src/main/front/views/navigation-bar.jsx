import React, { Component } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button } from 'reactstrap';
import logo from 'images/logo.png';
import { registerView } from 'services/views.jsx';
import { t } from 'services/translation.jsx';
import { sessionEmail, logout } from 'services/session.jsx';
import views from 'constants/views.json';

class NavigationBar extends Component {

    state = {
        navbarTogglerActive: false,
        email: sessionEmail(true)
    };

    constructor(props) {

        super(props);
        registerView('navigationBar', this);

    }

    toggleNavbarToggler = () => {

        this.setState({
            navbarTogglerActive: !this.state.navbarTogglerActive
        });

    }

    render() {

        return (
            <div>
                <Navbar color="light" light expand="md" style={{ marginBottom: "3rem" }}>

                    <NavbarBrand><img src={logo} height="25" width="25" style={{ verticalAlign: "bottom", margin: "0 1rem 0 0.5rem" }} />
                        {t('global.app-name')}
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbarToggler} />

                    <Collapse isOpen={this.state.navbarTogglerActive} navbar>

                        <Nav className="mr-auto" navbar>
                            <NavItem><NavLink tag={RRNavLink} to={views.viewPaths.mySecrets} activeClassName="active">
                                {t('my-secrets.title')}
                            </NavLink></NavItem>
                            <NavItem><NavLink tag={RRNavLink} to={views.viewPaths.secretsSharedWithMe} activeClassName="active">
                                {t('secrets-shared-with-me.title')}
                            </NavLink></NavItem>
                            <NavItem><NavLink tag={RRNavLink} to={views.viewPaths.groups} activeClassName="active">
                                {t('groups.title')}
                            </NavLink></NavItem>
                            <NavItem><NavLink tag={RRNavLink} to={views.viewPaths.myAccount} activeClassName="active">
                                {t('my-account.title')}
                            </NavLink></NavItem>
                        </Nav>

                        <Nav className="ml-auto" navbar>
                            <span style={{ margin: '8px' }}>{this.state.email}</span>
                            <div className="form-inline"><Button color="secondary" size="sm" onClick={logout}>{t('global.logout')}</Button></div>
                        </Nav>

                    </Collapse>

                </Navbar>
            </div>
        );

    }

}

export default NavigationBar;