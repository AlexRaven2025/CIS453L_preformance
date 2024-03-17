import React from "react";
import {Container,Row,Col,Image} from 'react-bootstrap';
import './stylefiles/Charts.css';
import Chats from './images/BMICHARTS.png';
import Chats2 from './images/obesityChart.png';
import LinkBar from "./components/LinksBar";

export function Chart(){
    return(
        <>
        <Container className="charts-main-container">
           <Row className="nav-links-chart">
                <Col>
                <LinkBar/>
                </Col>
            </Row>
            <Row>
                <Col className="image-Col">
                    <Image src={Chats}/>
                </Col>
                <Container className="charts-info-section">
                <Col className="information-text">
                    <h1>Risks associated with being overweight</h1>
                    <p>Being overweight increases the risk of a number of serious diseases and health conditions. Below is a</p>
                    <p>list of said risks, according to the Centers for Disease Control and Prevention (CDC):</p>
                     <ul className="list">
                        <li>High blood pressure</li>
                        <li>Higher levels of LDL cholesterol, which is widely considered "bad cholesterol," lower levels of HDL cholesterol, considered to be good cholesterol in moderation, and high levels of triglycerides</li>
                        <li>Type II diabetes</li>
                        <li>Coronary heart disease</li>
                        <li>Stroke</li>
                        <li>Gallbladder disease</li>
                        <li>Osteoarthritis, a type of joint disease caused by breakdown of joint cartilage</li>
                        <li>Sleep apnea and breathing problems</li>
                        <li>Certain cancers (endometrial, breast, colon, kidney, gallbladder, liver)</li>
                        <li>Low quality of life</li>
                        <li>Mental illnesses such as clinical depression, anxiety, and others</li>
                        <li>Body pains and difficulty with certain physical functions</li>
                        <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
                        <p>As can be seen from the list above, there are numerous negative, in some cases fatal, outcomes that</p>
                        <p>may result from being overweight. Generally, a person should try to maintain a BMI below 25 kg/m2,</p>
                        <p>but ideally should consult their doctor to determine whether or not they need to make any changes to</p>
                        <p>their lifestyle in order to be healthier.</p>
                    </ul>
                </Col>
                </Container>
                <Col className="ml-5 d-flex justify-content-center">
                <Image src={Chats2}/>
                </Col>

            </Row>
        </Container>
        </>
    )
}
export default Chart;