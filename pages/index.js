import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Typed from 'react-typed';
import { Button, Container, Row, Col } from 'reactstrap';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.roles = [
      'Josh sucks',
      'Major dick',
      'Like I am talking about a lot of dick',
      'Sorry Nat',
      'It is just the truth'
    ];
  }

  render() {
    return (
      <BaseLayout className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/section-1.png"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>Dux Development</h1>
                </div>
                <Typed
                  typeSpeed={65}
                  backSpeed={65}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                  className="self-typed"
                />
                <div className="hero-welcome-bio">
                  <h1>Bring your creative ideas to life.</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
