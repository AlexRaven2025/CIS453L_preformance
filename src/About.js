import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import LinkBar from "./components/LinksBar";
import './stylefiles/About.css';
export function About(){
    return(
        <>
        <Container className='Main-about-container'>
            <Row className="nav-links-about">
                <Col className="col-Nav-Links">
                <LinkBar/>
                </Col>
            </Row>
                 <Row>
            <Container className="about-information-section">
                <Col className="about-information">
                    <h1>The Body Mass Index (BMI) Calculator</h1>
                    <p>
                        The Body Mass Index (BMI) Calculator can be used to calculate BMI value and corresponding weight status while taking age into consideration.
                         Use the "Metric Units" tab for the International System of Units or the "Other Units" tab to convert units into either US or metric units.
                          Note that the calculator also computes the Ponderal Index in addition to BMI, both of which are discussed below in detail.
                    </p>
                </Col>
                <Row>
                    <Col className="bmi-about-introduction">
                        <h1>BMI introduction</h1>
                        <p>
                        BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass.
                        It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained
                        from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what
                        range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into
                            subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects,
                            so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required.
                            Refer to the table below to see the different categories based on BMI that are used by the calculator.
                        </p>
                    </Col>
                   
                </Row>
            </Container>    
            </Row>
 
        </Container>
        </>
    )
}
export default About;