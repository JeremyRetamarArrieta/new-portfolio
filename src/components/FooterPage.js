import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'

class FooterPage extends React.Component {
  render () {
    return (
      <MDBFooter
        color="purple darken-1"
        className="page-footer font-small pt-0"
      >
        <div style={{ backgroundColor: 'cyan' }}>
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow className="py-4 d-flex align-items-center">
              <MDBCol
                md="6"
                lg="5"
                className="text-center text-md-left mb-4 mb-md-0"
              >
                <h6 className="mb-0 black-text">
                  Get connected with me on social media!
                </h6>
              </MDBCol>
              <MDBCol md="6" lg="7" className="text-center text-md-right">
                <a className="gh-ic ml-0" href="https://github.com/JeremyRetamarArrieta">
                  <i className="fab fa-github black-text mr-4"> </i>
                </a>
                <a className="tw-ic" href="https://twitter.com/RetamarArrieta">
                  <i className="fab fa-twitter black-text mr-4"> </i>
                </a>
                <a
                  className="li-ic"
                  href="ttps://www.linkedin.com/in/jeremy-retamar-arrieta-63672785/"
                >
                  <i className="fab fa-linkedin black-text mr-4"> </i>
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
          <MDBRow className="mt-3">
            <MDBCol md="4" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>limitlessmatrix.com</strong>
              </h6>
              <hr
                className="teal accent-1 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '165px' }}
              />
              <p>
                I used a pre-made Gatsby theme to build this to save time since I am still working in other industrys while I try to get a programming job.
              </p>
            </MDBCol>
            <MDBCol md="2" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>My Links</strong>
              </h6>
              <hr
                className="teal accent-1 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '85px' }}
              />
              <p>
                <a href="https://www.linkedin.com/in/jeremy-retamar-arrieta-63672785/">
                  My LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com/JeremyRetamarArrieta">My Github</a>
              </p>
              <p>
                <a href="https://twitter.com/RetamarArrieta">My Twitter</a>
              </p>
            </MDBCol>
            <MDBCol md="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Useful links</strong>
              </h6>
              <hr
                className="teal accent-1 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '108px' }}
              />
              <p>
                <a href="https://mdbootstrap.com/material-design-for-bootstrap/?utm_ref_id=38136">
                  Material Design for Bootstrap
                </a>
              </p>
            </MDBCol>
            <MDBCol md="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Contact</strong>
              </h6>
              <hr
                className="teal accent-1 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '73px' }}
              />
              <p>
                <i className="fa fa-envelope mr-3" />
                <a href="mailto:jeremyretamararrieta@gmail.com">jeremyretamararrieta@gmail.com</a>
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> 801-815-4571
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            <p>&copy; {new Date().getFullYear()} Copyright: Jeremy Retamar Arrieta</p>
          </MDBContainer>
        </div>
      </MDBFooter>
    )
  }
}

export default FooterPage
