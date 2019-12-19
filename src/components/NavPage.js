import React, { Component } from 'react'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBNavLink,
  Animation
} from 'mdbreact'
import { Link } from 'gatsby'
import src1 from '../images/face.jpg'
import TwitterModalPage from './TwitterModalPage'
import BlogModalPage from './BlogModalPage'
import ContactModalPage from './ContactModalPage'

class NavPage extends Component {
  state = {
    collapseID: ''
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }))

  render () {
    const overlay = <div id="sidenav-overlay" onClick={this.toggleCollapse('navbarCollapse')} />
    return (
        <div id="navpage">
          <MDBNavbar color="cyan accent-1" light expand="md" fixed="top">
            <Link to="/">
              <Animation type="bounce" duration="2s">
                <img src={src1} type="image/png" height="40" alt="" waves />
              </Animation>
            </Link>
            <MDBNavbarToggler tag="button" className="aqua-gradient" onClick={this.toggleCollapse('navbarCollapse')} />
            <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <TwitterModalPage />
                </MDBNavItem>
                <MDBNavItem>
                  <BlogModalPage />
                </MDBNavItem>
                <MDBNavItem>
                  <ContactModalPage />
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <a
                    className="nav-link text-dark navbar-link hover"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/jeremy-retamar-arrieta-63672785/"
                  >
                    <MDBIcon fab icon="linkedin" />
                  </a>
                </MDBNavItem>
                <MDBNavItem>
                  <a
                    className="nav-link text-dark navbar-link hover"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/JeremyRetamarArrieta"
                  >
                    <MDBIcon fab icon="github" />
                  </a>
                </MDBNavItem>
                <MDBNavItem>
                  <a
                    className="nav-link text-dark navbar-link hover"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://twitter.com/RetamarArrieta"
                  >
                    <MDBIcon fab icon="twitter" />
                  </a>
                </MDBNavItem>
                <MDBNavItem>
                  <a
                    className="nav-link text-dark navbar-link hover"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://hub.docker.com/"
                  >
                    <MDBIcon fab icon="docker" />
                  </a>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {this.state.collapseID && overlay}
        </div>
    )
  }
}

export default NavPage
