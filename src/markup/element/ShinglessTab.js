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
                                            <img src={require('../../assets/images/shape/possible.png')} alt="" className='image_shingles' />
                                            <p class="paragraph_after_image">
                                                Approximately 10-20% of individuals who have had shingles develop PHN,
                                                which can cause persistent pain for months or even years.
                                            </p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div id="image_para_section">
                                            <img src={require('../../assets/images/shape/possible.png')} alt="" className='image_shingles' />
                                            <p class="paragraph_after_image">
                                                Shingles affecting the eyes (known as ophthalmic shingles) can lead to vision problems in around 10-25% of cases,
                                                and without prompt treatment, it can result in permanent vision loss.
                                            </p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div id="image_para_section">
                                            <img src={require('../../assets/images/shape/possible.png')} alt="" className='image_shingles' />
                                            <p class="paragraph_after_image">
                                                The risk of bacterial skin infections increases when shingles blisters are scratched or become contaminated,
                                                affecting around 2-5% of shingles cases.
                                            </p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four">
                                        <div id="image_para_section">
                                            <img src={require('../../assets/images/shape/possible.png')} alt="" className='image_shingles' />
                                            <p class="paragraph_after_image">
                                                Neurological complications from shingles, such as encephalitis (inflammation of the brain) or myelitis (inflammation of the spinal cord),
                                                are rare but can occur in approximately 1 in 1,000 cases.
                                            </p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="five">
                                        <div id="image_para_section">
                                            <img src={require('../../assets/images/shape/possible.png')} alt="" className='image_shingles' />
                                            <p class="paragraph_after_image">
                                                Shingles can cause nerve damage, known as post-shingles neuralgia,
                                                which can affect up to 30% of individuals aged 60 and older.
                                            </p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="six">
                                        <div id="image_para_section">
                                            <img src={require('../../assets/images/shape/possible.png')} alt="" className='image_shingles' />
                                            <p class="paragraph_after_image">
                                                Disseminated shingles, where the rash spreads beyond the initial area, is relatively rare, occurring in less than 1% of cases.
                                                It is more commonly seen in individuals with weakened immune systems.
                                            </p>

                                        </div>
                                    </Tab.Pane>
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