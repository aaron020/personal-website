import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"
import '../style/Contact.css'

export const Contact = () => {

    const formInitDetials ={
        firstName: '',
        lastName: '',
        email: '',
        body: ''
    }

    const [formDetails, setFromDetails] = useState(formInitDetials);
    const [buttonText, setButtonText] = useState('Send');

    const onFormUpdate = (category, value) => {
        setFromDetails({
            ...formDetails,
            [category]: value
        })
    }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(formDetails);

        fetch('https://izca7jr95a.execute-api.eu-west-1.amazonaws.com/api2/email', {
            method: 'POST',
            headers: {"content-type": "application/json", "x-amz-docs-region": "eu-west-1"},
            mode: 'cors',
            body: JSON.stringify(formDetails)
        })
    }


    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact"></img>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName',e.target.value)}/>
                                </Col>
                                <Col sm={12} className="px-1">
                                <input type="text" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email',e.target.value)}/>
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea rows={8} value={formDetails.body} placeholder="Message" onChange={(e) => onFormUpdate('body',e.target.value)}/>
                                    <button onClick={sendEmail}><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}