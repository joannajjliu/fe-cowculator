import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { format as formatDate } from 'date-fns';

import { mealsEatenData } from '../data/mealsEatenData';
import '../styles/Dashboard.scss';
import '../styles/MealsSummary.scss';

const Dashboard: React.FC = () => {
  const history = useHistory();

  function navigateToMealBreakdown(mealId: string) {
    localStorage.setItem('mealId', mealId);
    history.push(`/meal-breakdown/${mealId}`);
  }

  return (
    <>
      <div className="p-4 mb-4 text-white rounded cowculator-dashboard__jumbotron">
        <div className="px-0">
          <h3 className="col-4 cowculator-dashboard__profile-text cowculator-dashboard__profile-text--cta">Settings</h3>
          <h1 className="col-4 cowculator-dashboard__profile-text cowculator-dashboard__profile-text--center">
            Profile
          </h1>
          <Link to="/">
            <h3 className="col-4 cowculator-dashboard__profile-text cowculator-dashboard__profile-text--cta">Logout</h3>
          </Link>
          <div className="cowculator-dashboard__profile" />
        </div>
      </div>

      <div className="album py-5 cowculator-meals-summary__album-container">
        <div className="container">
          <h1>Meals taken</h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {mealsEatenData.map((meal: any, index: number) => (
              <div className="col" key={index} onClick={() => navigateToMealBreakdown(meal.mealId)}>
                <div className="card shadow-sm">
                  <div
                    className="cowculator-meals-summary__image-thumbnail"
                    style={{
                      backgroundImage: `url(${meal.imgUrl})`,
                    }}
                  />
                  <div className="card-body cowculator-meals-summary__card-body">
                    <p className="card-text cowculator-meals-summary__card-title">Meal #{index + 1}</p>
                    <small className="text-muted cowculator-meals-summary__card-subtext">
                      {formatDate(new Date(meal.dateUploaded), 'PP')}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
