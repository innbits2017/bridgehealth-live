import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { Component } from 'react';
import Diagnosis from '../pages/diagnosis';

function TabAccordian() {
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
      <Diagnosis />      </Tab>
      <Tab eventKey="longer-tab" title="Shingles Vaccine">
      <Diagnosis />      </Tab>
      <Tab eventKey="contact" title="Other Common Questions">
      <Diagnosis />      </Tab>
    </Tabs>
  );
}

export default TabAccordian;