import React from 'react'
import { Footer } from './Footer';
import Header from './Header';
import StyledAboutPage from './styles/StyledAboutPage';

const About = () => {
    return (
        <>
        <Header />
        <StyledAboutPage>
           <div className="make-life-easy">
           <p>This product uses the TMDb API but is not endorsed or certified by TMDb.
                The TMDb logo should be less prominent then the application logo and the logo
                should be placed in a way that does not give the appearance that your
                application is endorsed by TMDb <br />
                Read about attribution requirements on the FAQ page 
            </p>
            <h2>The Developer</h2>
            <p>
               Emmanuel is a front-end developer currently in Vancouver. I opted-out of using the current 'Hamburger-navigation' and it's likes. I think it is time to challenge ourselves to come up with something new.
               Are you a "if it's not broken don't fix it" person or do you agree with me?, <br /> Do you have a project in mind? let's connect on Linkedin. Click on "Get in touch" located in the Footer   
            </p>
           </div>
            
        </StyledAboutPage>
        <Footer />
        </>
    )
}

export default About
