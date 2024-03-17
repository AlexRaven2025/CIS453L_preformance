import React,{useState}from "react";
import {Container, Row,Col,Button} from 'react-bootstrap';
import LinkBar from "./components/LinksBar";
import './stylefiles/Home.css'

export function Home() {
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [weight, setWeight] = useState('');
     const [bmiResult, setBmiResult] = useState(null);

    const hendelFeetChange = e => {
        const value = parseInt(e.target.value);
        setFeet(isNaN(value) ? '' : value);
    };

    const hendelInchesChange = e => {
        const value = parseInt(e.target.value);
        setInches(isNaN(value) ? '' : value);
    };

    const hendelWeightChange = e => {
        const value = parseInt(e.target.value);
        setWeight(isNaN(value) ? '' : value);
    };

    const calculateBmi = () => {
        const heightInInches = (feet * 12) + inches;
        const bmi = (weight / (heightInInches * heightInInches)) * 703;
        console.log(parseInt(bmi));
        setBmiResult(bmi.toFixed(2));
    };
    
    return(
        <>
        <div id="home-title"><h1>BMI Calculator</h1></div>
            <Container className="home-main-cover">
                <Row className="display-flex justify-content-center home-main-input-fields">
                    <Col md={6} className="justify-content-center text-center">
                        <label><h2>Weight</h2></label>
                        <input type="number" className="numeric-input" value={weight} onChange={hendelWeightChange} placeholder="Please enter your weight" min='0'/>
                        <label><h2>Height</h2></label>
                        <Row className="height-feet-inches">
                            <Col>
                                <input type="number" className="height-feet-input" value={feet} onChange={hendelFeetChange} placeholder="Feet" min='0' max='8'/>
                            </Col>
                            <Col>
                                <input type="number" className="height-inches-input" value={inches} onChange={hendelInchesChange} placeholder="In" min='0' max='11'/>
                            </Col>
                        </Row>
                         <Container className="sm btn-container">
                            <Button className="calcutale-btn" onClick={calculateBmi}>Calculate</Button>
                            <Col className="linkBar-Home">
                                {<LinkBar/>}
                            </Col>
                            <Container className="result-bmi">
                                <Col>
                                {bmiResult !== null && <div id='bmi-result-title'><h2>Your BMI is</h2></div>}
                                </Col>
                                <Col>
                                {bmiResult !== null && <div id='bmi-reuslt'>BMI: {bmiResult}</div>}
                                </Col>
                            </Container>
                        </Container> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;