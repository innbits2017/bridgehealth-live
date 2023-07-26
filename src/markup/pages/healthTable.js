import React from 'react';

const HealthPlanTable = () => {
  return (
    <div className="table-container">
      <table className="health-plan-table">
        <thead>
          <tr>
            <th className="header-cell">Age Group (in years)</th>
            <th className="header-cell">Annual Health Program</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="age-cell">Up to 25</td>
            <td className="program-cell">BH Blue</td>
          </tr>
          <tr>
            <td className="age-cell">26 – 33</td>
            <td className="program-cell">BH Silver</td>
          </tr>
          <tr>
            <td className="age-cell">34 – 40</td>
            <td className="program-cell">BH Gold</td>
          </tr>
          <tr>
            <td className="age-cell">41 – 55</td>
            <td className="program-cell">Platinum</td>
          </tr>
          <tr>
            <td className="age-cell">&gt; 55</td>
            <td className="program-cell">Platinum Plus</td>
          </tr>
        </tbody>
      </table>
    </div>
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
