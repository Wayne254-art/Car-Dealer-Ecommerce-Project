import React from 'react';
import Countdown from 'react-countdown'
import '../Styles/under-construction.css'
import { Container, Row, Col } from 'reactstrap'

const UnderConstruction = () => {

    const countdownRenderer = ({ days, hours, minutes, seconds }) => {
        return (
            <div className='under-construction-time-box'>
                <h4>{days}</h4><label>DAYS</label>/<h4>{hours}</h4><label>HOURS</label>/<h4>{minutes}</h4><label>MINUTES</label>/<h4>{seconds}</h4><label>SECONDS</label>
            </div>
        );
    };

    // Calculate the target date (115 days from now)
    const targetDate = Date.now() + 115 * 24 * 60 * 60 * 1000;

    return (
        <div>
            <div id="em-construction">
                <Container>
                    <Row>
                        <Col lg='8' md='8' sm='12' xs='12'>
                            <div className="em-construction">
                                <div className="em-construction-holder">
                                    <div className="em-light-overlay"></div>
                                    <div className="em-construction-logo">
                                        <figure><span><img src="" alt="Wayne_Auto_Sales" /></span></figure>
                                    </div>
                                    <em><span className="em-color">Sorry!</span>We are currently working on an awesome new page.</em>
                                    <div className="em-const-counter">
                                        <Countdown
                                            date={targetDate}
                                            renderer={countdownRenderer}
                                        />
                                    </div>
                                    <p>We are spending long hours in order to launch our new updates. Join our mailing list or follow us on social media platforms to stay up to date.</p>
                                    <div class="em-form">
                                        <form>
                                            <div class="input-holder"> 
                                                <input type="email" placeholder="Enter Valid Email Address" />
                                                <label>
                                                    <input type="submit" value="submit" class="em-btn-submit" />
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default UnderConstruction;