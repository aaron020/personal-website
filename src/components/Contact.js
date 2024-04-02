import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {

    const formInitDetials ={
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    const [formDetails, setFromDetails] = useState(formInitDetials);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFromDetails({
            ...formDetails,
            [category]: value
        })
    }


    return (
        <section className="contact">
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
                                    <textarea rows={8} value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message',e.target.value)}/>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}