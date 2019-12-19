import React from 'react'
import {
  MDBRow,
  MDBCol,
  MDBCard,
  Animation,
  MDBIcon,
  MDBContainer
} from 'mdbreact'
import card1 from '../images/IMG_5317.jpg'
import card2 from '../images/IMG_5715.jpg'

const SkillsPage = () => {
  return (
    <section id="skills" className="text-center mx-auto my-3">
      <h2 className="h2-responsive font-weight-bold my-3">Services</h2>
      <Animation reveal type="zoomIn" duration="500ms">
        <MDBIcon className="cyan-text mb-5" icon="laptop-code" size="3x" />
      </Animation>
      <MDBContainer>
        <MDBRow>
          <MDBCol className="mb-4">
            <Animation reveal type="slideInLeft" duration="350ms">
              <MDBCard
                className="card-image img-fluid"
                style={{ backgroundImage: 'url(' + card1 + ')' }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                    <h3 className="py-3 font-weight-bold">
                      <strong>
                        Cloud infrasctuture, Security Groups, Building Relational and Non-Relational Databases, Forms, and Designing User-Interfaces.
                      </strong>
                    </h3>
                    <h5 className="pb-3">
                      <p>
                           Most of my experience has been with Firebase, and MongoDB. I also taught myself mySQL and schema building.
                        </p>
                        <p>
                           I have mainly used AWS for cloud services. I have been messing with some light project work with Azure and Google Cloud.
                        </p>
                        <p>
                           I use React mostly for building User-Interfaces. I like Material-Ui, Gatsby and Reactstrap as frameworks. I will be adding more projects to show off my new skills. 
                        </p>
                        <p>
                           I like back-end applications as well. Mostly I've used Javascript to build everything but I do know some Python and will be adding a project that has a Python back-end and a Javascript front-end to prove I can use both.
                        </p>
                    </h5>
                  </div>
                </div>
              </MDBCard>
            </Animation>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol className="mb-4">
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default SkillsPage
