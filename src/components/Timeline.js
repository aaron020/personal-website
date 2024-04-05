import { Container,Row } from "react-bootstrap"
import '../style/Timeline.css'

export const Timeline = () => {
    return(
        <section className="experience" id="experience">
            <Container>
                <Row>
                <div class="timeline">
                    <div class="timeline-container right">
                        <div class="content">
                        <h3>Semptember 2000</h3>
                        <p><strong>Born</strong> I was born :)</p>
                        </div>
                    </div>
                    <div class="timeline-container left">
                        <div class="content">
                        <h3>June 2021 - January 2022</h3>
                        <p><strong>Associate Software Engineer</strong> completed an 8 month intership with ACI worldwide.  I worked as a quality engineer. Here are some of the skills I learnt and developed during this time:</p>
                        <ul>
                            <li><strong>Agile Development:</strong>  
                                Part of a scrum team, participated in daily standup calls, sprint planning and sprint reviews. 
                                Extensive experience with Jira. </li>
                            <li><strong>Automated Testing:</strong>  
                                Maintained the automated weekly regression. This involved, starting the regression through 
                                Jenkins, analyzing failed testcases, logging bugs, and fixing testcases. </li>
                            <li><strong>Leadership Skills:</strong> 
                                Helped onboard new hires, acted as a mentor, assigned work, and led knowledge transfer 
                                calls.  </li>
                        </ul>
                        </div>
                    </div>
                    <div class="timeline-container right">
                        <div class="content">
                        <h3>June 2022 - Semptember 2022</h3>
                        <p><strong>Associate Software Engineer</strong> returned to ACI worldwide for the summer months. during this time I worked as a release engineer and learnt many new skills, including: </p>
                        <ul>
                            <li>Experience with shipping software to customers</li>
                            <li>Managing and monitoring builds</li>
                            <li>Version Control using SVN </li>
                        </ul>
                        </div>
                    </div>
                    <div class="timeline-container left">
                        <div class="content">
                        <h3>May 2023</h3>
                        <p><strong>Bsc, Computer Systems</strong> graduated from the university of limerick.</p>
                        </div>
                    </div>
                    <div class="timeline-container right">
                        <div class="content">
                        <h3>August 2023 - December 2023</h3>
                        <p><strong>Associate Software Engineer</strong> joined Fidelity Investments LEAP graudate program. During this time I developed the following skills:</p>
                        <ul>
                            <li><strong>Frontend Development:</strong> was trained on the basics of Angular, learnt how to write high quality tested code.</li>
                        </ul>
                        </div>
                    </div>
                    <div class="timeline-container left">
                        <div class="content">
                        <h3>January 2023 - Present</h3>
                        <p><strong>Associate Software Engineer</strong> joined a team within Fidelity Investments</p>
                        </div>
                    </div>
                    </div>
                </Row>
            </Container>
           </section>
    )
}