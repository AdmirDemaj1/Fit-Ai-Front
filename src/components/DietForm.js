import React, { useState } from 'react';
import styles from './DietPlanForm.module.css';
import Spinner from './Spinner';
import DietPlan from './DietPlan';

const INITIAL_FORM_DATA = {
  weight: '',
  height: '',
  age: '',
  gender: '',
  favoriteFoods: '',
  dislikedFoods: '',
  typeOfWorkout: '',
  days: ''
};

const FORM_FIELDS = [
  { name: 'weight', placeholder: 'Weight' },
  { name: 'height', placeholder: 'Height' },
  { name: 'age', placeholder: 'Age' },
  { name: 'gender', placeholder: 'Gender' },
  { name: 'favoriteFoods', placeholder: 'Favorite Foods' },
  { name: 'dislikedFoods', placeholder: 'Disliked Foods' },
  { name: 'typeOfWorkout', placeholder: 'Workout Type' },
  { name: 'days', placeholder: 'Days' }
];


const DietForm = ({ dietPlan, loading, fetchDietPlan, loadDietPlan }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDietPlan(formData, parseDietPlan);
  };

  const handleLoadDietPlan = () => {
    loadDietPlan(parseDietPlan);
  };

  const parseDietPlan = (dietPlanText) => {
    return dietPlanText
      .split('\n\n')
      .map((dayText) => {
        const [dayName, ...mealLines] = dayText.trim().split('\n');
        const meals = mealLines.map((line) => {
          const [mealType, description] = line.split(' - ').map((str) => str.trim());
          return { meal: mealType, description };
        });
        return { day: dayName, meals };
      });
  };

  


  return (
    <div className={styles.dietPlanFormPage}>
      {loading && (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      )}
      {!dietPlan && !loading && (
        <div className={styles.dietPlanFormContainer}>
          <form className={styles.dietPlanForm} onSubmit={handleSubmit}>
            {FORM_FIELDS.map(({ name, placeholder }) => (
              <input
                key={name}
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                required
                className={styles.inputField}
              />
            ))}
            <button type="submit" className={styles.formButton}>Generate Diet Plan</button>
          </form>
        </div>
      )}

      

      {dietPlan && !loading && (
        <>
          <button onClick={handleLoadDietPlan} className={styles.formButton}>
            Load Saved Diet Plan
          </button>
          <DietPlan dietPlan={dietPlan} />
        </>
      )}
    </div>
  );
};



export default DietForm;
