import React, { useState, useEffect } from 'react';
import './DietPlan.css';


const DietPlan = ({ dietPlan }) => {
  return (
    <div className="diet-plan-container">
      {dietPlan.map((dayPlan, index) => (
        <div key={index} className="day-card">
          <h3>{dayPlan.day}</h3>
          <ul>
            {dayPlan.meals.map((meal, mealIndex) => (
              <li key={mealIndex}><strong>{meal.meal}:</strong> {meal.description}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DietPlan;