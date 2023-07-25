import React from 'react';

const HealthPlanTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Age Group (in years)</th>
          <th>Annual Health Program</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Up to 25</td>
          <td>BH Blue</td>
        </tr>
        <tr>
          <td> 26 – 33</td>
          <td>BH Silver</td>
        </tr>
        <tr>
          <td>34 – 40</td>
          <td>BH Gold</td>
        </tr>
        <tr>
          <td>41 – 55</td>
          <td>Platinum</td>
        </tr>
        <tr>
          <td>&#62;	 55</td>
          <td>Platinum Plus</td>
        </tr>
      </tbody>
    </table>
  );
};

const contentObject = {
  content: (
    <div>
      <p>
      Our expert clinicians have created 5 Annual Health Plans to cover age groups from below 25 years to above 55 years as indicated below. These are broad guidelines, and our Health & Wellness Advisors can help you choose the right plan, based on your specific health status, family history and health goals.
      </p>
      <HealthPlanTable />
      <p>
        Talk to your health advisor today to understand the best fit for you - <span>Insert number to chat</span>.
      </p>
    </div>
  )
};

const HealthTable = () => {
  return (
    <div>
      {contentObject.content}
    </div>
  );
};

export default HealthTable;
