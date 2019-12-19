import React from 'react'
import { MDBRow, MDBCol, MDBIcon, Animation, MDBContainer } from 'mdbreact'

const FeaturesPage = () => {
  return (
    <section id="about" className="text-center my-3">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <Animation reveal type="zoomIn" duration="500ms">
              <MDBIcon className="cyan-text mb-2" icon="user-ninja" size="3x" />
            </Animation>
            <h3 className="responsive font-weight-bold my-2">About Me</h3>
            <p className="lead black-text mx-auto mb-5">
              I have been building my web-sliging skills for about four years now. I earned three scholarships in the last two years. One from Google, Adobe and latest one from Intel. I have a growth mindset and am always seeking to add new skills to my tool belt. I've recently built simluation car-racer projects on AWS.
            </p>
            <p className="lead black-text mx-auto mb-5">
              I am from Puerto Rico, my family lived in the projects. We were in deep poverty back then. I moved to Utah because of some helpful mormons. They're community has its ups and downs. The cultural difference was one of the hardest things for me to breakthrough. I still have issues to this day. I quickly adopted a huge love for learning since there was very little educational recsources in Puerto Rico. Video Games played a huge role in my life towards tech. After my first playstation I couldn't ever let this kind of magic pass me by. I've wanted to do something in Technology whether it was biomedical engineering or programming. It's easier to teach yourself programming since there is so many online resources.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mx-auto pl-2 pr-2">
          <MDBCol lg="4" className="mx-auto">
            <Animation reveal type="zoomIn" duration="500ms">
              <MDBIcon className="cyan-text" icon="space-shuttle" size="3x" />
            </Animation>
            <h5 className="font-weight-bold my-4"> The Adventure so far...</h5>
            <p className="black-text mb-lg-0 mb-5">
              It began with just some practice with markup languages like HTML and CSS. I then tried learning Python as my first main programming language through MIT opencourse-ware. I also used Kahn Academy and other free resources. I recently earned a scholarship from Adobe. Out of over 200 canidates I was one of 12 lucky chosen. Out of those 12 only 6 earned an internship after the three month fullstack webdevelopment bootcamp. We studied vanilla Javascript as well as React. Using MongoDB, Node, and Express for most of the back-end side of things in our projects. After the bootcamp, in May I started my first realworld project with Adobe. I built a User-interface for their DNS managment. Using their own React Framework, it was like building something out of legos that only liked to work a certain way. Fully CRUD project, and interacted with a lot of API endpoints through JSON.  
            </p>
          </MDBCol>
          <MDBCol lg="4" className="mx-auto">
            <Animation reveal type="zoomIn" duration="500ms">
              <MDBIcon className="cyan-text" icon="hat-wizard" size="3x" />
            </Animation>
            <h5 className="font-weight-bold my-4">Projects</h5>
            <p className="black-text mb-lg-0 mb-5">
              Here are some of my early projects that I have deployed. My more recent ones have been on AWS and or are not able to be seen publicly due to a non-disclosure statement being signed. AWS gets expensive so I used mostly Netlify to host. 
            </p>
            <h3>To Do fully CRUD project</h3>
            <p>First project that can create, delete, and update a to do list. </p>
        <a href="http://axios-jrtodo.surge.sh/">Live Demo</a>
        <br></br>
        <br></br>
        <h3>Dad jokes</h3>
        <p>This is my first React project using an Api</p>
        <a href="https://dadhumor.netlify.com/">Live Demo</a>
        <br></br>
        <br></br>
        <h3>Chat app</h3>
        <p>Full stack application with authientication added. </p>
        <a href="https://uchatz.herokuapp.com/login">Live Demo</a>
        <br></br>
        <br></br>
          </MDBCol>
          <MDBCol lg="4" className="mx-auto">
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default FeaturesPage
