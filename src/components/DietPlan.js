import React, { useState } from "react";
import styles from "./DietPlan.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDailyDietPlan,
  markDayAsCompleted,
} from "../store/actions/dietActions";
import Popup from "./InstructionsPopup";
import Spinner from "./Spinner";

const DietPlan = ({ dietPlan }) => {
  const token = localStorage.getItem("token") || "";
  const dispatch = useDispatch();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedRow, setSelectedRow] = useState("");
  const loading = useSelector((state) => state.dailyDiet.loading);
  const completedDays = useSelector((state) => state.dailyDiet.completedDays);

  // Assuming the diet plan starts on the 1st of a given month
  const startDayIndex = new Date().getDay();
  const totalDaysInMonth = dietPlan.length;

  const handleDayClick = (dietData) => {
    dispatch(fetchDailyDietPlan({ dietData, token }));
  };

  const handleCompletionToggle = (index) => {
    dispatch(markDayAsCompleted(index));
  };
  console.log("start Date Index", dietPlan);

  return (
    <div className={styles.dietPlanCalendar}>
      {/* Render day headers */}
      {daysOfWeek.map((day) => (
        <div key={day} className={styles.dayHeader}>
          {day}
        </div>
      ))}

      {/* Render empty cells for the days before the 1st of the month */}
      {Array.from({ length: startDayIndex }).map((_, index) => (
        <div key={`empty-${index}`} className={styles.emptyDay}></div>
      ))}

      {/* Render day cards for the diet plan */}
      {dietPlan.map((dayPlan, index) => (
        <div
          key={index}
          className={`${styles.dayCard} ${
            completedDays.includes(index) ? styles.completedDay : ""
          }`}
        >
          <div className={styles.dayNumber}>{index + 1}</div>
          <ul className={styles.mealsList}>
            {dayPlan.meals && dayPlan.meals.length !== 0 ? (
              dayPlan.meals.map((meal, mealIndex) => (
                <React.Fragment key={mealIndex}>
                  {selectedItem === mealIndex &&
                  selectedRow === index &&
                  loading ? (
                    <div style={{ margin: "5px", marginLeft: "70px" }}>
                      <Spinner />
                    </div>
                  ) : (
                    <li
                      className={styles.mealItem}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItem(mealIndex);
                        setSelectedRow(index);
                        handleDayClick(meal);
                      }}
                    >
                      <strong>{meal.meal}</strong>
                    </li>
                  )}
                </React.Fragment>
              ))
            ) : (
              <li className={styles.specialNote}>{dayPlan.day}</li>
            )}
          </ul>
          <div className={styles.dayFooter}>
            <button
              className={`${styles.completeButton} ${
                completedDays.includes(index) ? styles.completed : ""
              }`}
              onClick={() => handleCompletionToggle(index)}
            >
              {completedDays.includes(index) ? "Completed" : "Mark as Complete"}
            </button>
          </div>
          <div className={styles.dayFooter}>{`Day ${index + 1}`}</div>
        </div>
      ))}

      {/* Fill remaining cells to complete the last week */}
      {Array.from({
        length: (7 - ((startDayIndex + totalDaysInMonth) % 7)) % 7,
      }).map((_, index) => (
        <div key={`filler-${index}`} className={styles.emptyDay}></div>
      ))}

      <Popup />
    </div>
  );
};

export default DietPlan;
