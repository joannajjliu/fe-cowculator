import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.scss';

const Dashboard: React.FC = () => (
  <>
    <div className="p-4 mb-4 text-white rounded cowculator-dashboard__jumbotron">
      <div className="px-0">
        <h3 className="col-4 cowculator-dashboard__profile-text cowculator-dashboard__profile-text--cta">Settings</h3>
        <h1 className="col-4 cowculator-dashboard__profile-text cowculator-dashboard__profile-text--center">Profile</h1>
        <h3 className="col-4 cowculator-dashboard__profile-text cowculator-dashboard__profile-text--cta">Logout</h3>
        <div className="cowculator-dashboard__profile" />
      </div>
    </div>
  </>
);

export default Dashboard;
