import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { Component } from 'react';
import Diagnosis from '../pages/diagnosis';
import Prevention from '../pages/prevention';
import Vaccine from '../pages/vaccine';
import Questions from '../pages/questions';

function TabAccordian() {
  const titleWithLineBreak = 'Shingles<br>Vaccine';
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3 auto-container"
      justify
    >
      <Tab eventKey="home" title="Symptoms and Diagnosis" className='linksAll'>
      <Diagnosis />      </Tab>
      <Tab eventKey="profile" title="Treatment &  Prevention">
      <Prevention />      </Tab>
      <Tab eventKey="longer-tab" title={<span dangerouslySetInnerHTML={{ __html: titleWithLineBreak }} />}>
      <Vaccine />      </Tab>
      <Tab eventKey="contact" title="Other Common Questions">
      <Questions />      </Tab>
    </Tabs>
  );
}

export default TabAccordian;