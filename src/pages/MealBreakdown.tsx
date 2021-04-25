import React, { useState } from 'react';
import { mealsEatenData }from  '../data/mealsEatenData';
import { Link } from 'react-router-dom';
import '../styles/MealBreakdown.scss';


const MealBreakdown: React.FC = () => (
  <>
    <div className="jumbotron jumbotron-fluid Cowculator-meal-breakdown__main">
      <nav className="navbar navbar-expand-lg navbar-light bg-light Cowculator-meal-breakdown__nav">
        <a className="nav-link" href="/">Back</a>
        <a className="navbar-brand" href="#">Meal #1</a>
        <a className="nav-link" href="/">Next</a>
      </nav>

      <p>April 18, 2021</p>

      <div className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={mealsEatenData[0].imgUrl} className="d-block w-50"></img>
          </div>
          <div className="carousel-item">
            <img src={mealsEatenData[1].imgUrl} className="d-block w-50"></img>
          </div>
        </div>
      </div>
      

      <div className="list-group list-group-flush">
        <li className="list-group-item">
          <p>Statistic</p>
          <p>item</p>
        </li>
        <li className="list-group-item">
          <p>Statistic</p>
          <p>item</p>
        </li>
      </div>
    </div>
  </>
);

export default MealBreakdown;
