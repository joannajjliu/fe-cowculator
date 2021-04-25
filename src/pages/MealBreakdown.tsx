import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { format as formatDate } from 'date-fns';

import { mealsEatenData } from '../data/mealsEatenData';
import '../styles/MealBreakdown.scss';

const MealBreakdown: React.FC = (props: any) => {
  const { mealId } = useParams() as any;
  const [currentMeal, setCurrentMeal] = useState<any>({});
  const [ingredients, setIngredients] = useState<any>([]);
  useEffect(() => {
    const selectedMeal = mealsEatenData.find((meal: any) => {
      return meal.mealId === parseInt(mealId);
    });
    setCurrentMeal(selectedMeal);
    setIngredients(selectedMeal?.ingredients);
  }, [mealId]);
  return (
    <div className="cowculator-meal-breakdown__container">
      <div className="cowculator-meal-breakdown__top-container">
        {console.log('mealId', mealId)}
        <Link to="/dashboard">
          <h3 className="col-4 cowculator-dashboard__profile-text cowculator-meal-breakdown__back-btn">Back</h3>
        </Link>
      </div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          {/* <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
        </div>
        <div className="carousel-inner">
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <div className="carousel-item active">
            <div className="cowculator-meal-breakdown__carousel-container" />
            <div className="carousel-caption text-start cowculator-meal-breakdown__carousel-text-container">
              <h1 className="cowculator-meal-breakdown__carousel-text-title">Meal #{mealId}</h1>
              <p className="cowculator-meal-breakdown__carousel-text-date">
                {currentMeal?.dateUploaded && formatDate(new Date(currentMeal?.dateUploaded), 'PP')}
              </p>
              <div
                className="cowculator-meal-breakdown__carousel-food-image"
                style={{
                  backgroundImage: `url(${currentMeal?.imgUrl})`,
                }}
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className="cowculator-meal-breakdown__carousel-container" />
            <div className="carousel-caption text-start cowculator-meal-breakdown__carousel-text-container">
              <h1 className="cowculator-meal-breakdown__carousel-text-title">Pie chart</h1>
              <p className="cowculator-meal-breakdown__carousel-text-date">
                {currentMeal?.dateUploaded && formatDate(new Date(currentMeal?.dateUploaded), 'PP')}
              </p>
              <div
                className="cowculator-meal-breakdown__carousel-food-image"
                style={{
                  backgroundImage: `url(${currentMeal?.imgUrl})`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cowculator-meal-breakdown__table-container">
        <h1>Food Breakdown</h1>
        <table className="table">
          <tbody>
            {ingredients.map((ingredient: any, index: number) => (
              <tr key={index}>
                <th scope="row">
                  <i
                    className={'bi bi-circle-fill icon--green'}
                    style={{
                      color:
                        parseFloat(ingredient.carbonEquivalent) >= 20
                          ? '#B05D5D'
                          : parseFloat(ingredient.carbonEquivalent) >= 10
                          ? '#F2994A'
                          : parseFloat(ingredient.carbonEquivalent) >= 2.5
                          ? '#4B9460'
                          : '#5DB075',
                    }}
                  ></i>
                </th>
                <td className="cowculator-meal-breakdown__table-text-item">
                  {/* RegEx to capitalize the first letter of each word */}
                  {ingredient.item.replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) => letter.toUpperCase())}
                </td>
                <td>{ingredient.carbonEquivalent} kg CO2e</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MealBreakdown;
