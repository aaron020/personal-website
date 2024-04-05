import { Col, Container, Row } from "react-bootstrap"
import headerImg from "../assets/img/header-img.svg"
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["cloud technology", "backend technology", "software engineering"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(50)
    const period = 10000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length +1)
        setText(updatedText);

        if(isDeleting){
            setDelta(10)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(250);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{`Aaron Meade: curious about `}<span className="wrap">{text}</span></h1>
                        <p>With a first-class honors degree in Computer Systems from the University of Limerick, I bring a solid foundation in technology to the table. Passionate about coding and the art of crafting innovative solutions. Presently, I am engaged in harnessing the power of backend cloud-hosted technologies in the financial services industry, contributing actively to impactful projects that drive efficiency and innovation.</p>
                        <button><span>Contact Me</span></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image"></img>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}