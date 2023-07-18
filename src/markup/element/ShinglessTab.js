import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import * as $ from 'jquery';


class ShinglessTab extends Component {
render() {
return (
<>
    <section className="container">
        <div class="sec-title text-center textleft">
            <h2 className='textleft fontSize50 wrap-sites-poss'>
                <span className='headeingcolorblack'>POSSIBLE COMPLICATIONS </span>
                <span className='headeingcolorblue'> OF SHINGLES</span>
            </h2>
            <p class="subheading_shingles">While most people recover from Shingles infection fully, some might face
                health complications</p>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={5}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Postherpetic neuralgia (PHN)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Vision Problems</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Skin Infections</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="four">Neurological Issues</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="five">Disseminated Shingles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="six">Nerve Damage</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={7}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <div id="image_para_section">
                            <img src={require('../../assets/images/shape/possible.png')} alt=""
                                className='image_shingles' />
                            {/* <img class="image_shingles" src="shingles_image.png" /> */}
                            <p class="paragraph_after_image">
                                PHN is a health complication that affects up to 25% of people with Shingles. One of the
                                main symptoms of PHN is nerve pain that continues for months or years after the Shingles
                                rash is healed. The pain usually is experienced in the affected area.
                            </p>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>

    </section>

</>
)
}
}
export default ShinglessTab;