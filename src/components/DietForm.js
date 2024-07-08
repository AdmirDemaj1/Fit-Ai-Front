import React, { useState } from 'react';
import { generateDietPlan, getDietPlan } from '../services/api';
import Spinner from './Spinner';
import DietPlan from './DietPlan';

const DietForm = ({ token }) => {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    gender: '',
    favoriteFoods: '',
    dislikedFoods: '',
  });
  const [dietPlan, setDietPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await generateDietPlan(formData, token);
      const parsedPlan = parseDietPlan(data.dietPlan);
      console.log("parsed", parsedPlan)
        setDietPlan(parsedPlan);
    } catch (error) {
      console.error('Generate Diet Plan error:', error);
    } finally {
      setLoading(false);
    }
  };

    const parseDietPlan = (dietPlanText) => {
    // Split the diet plan text into days
    const days = dietPlanText.split('\n\n');

    // Map each day's details into an array of objects
    const parsedDays = days.map((day, index) => {
      const lines = day.trim().split('\n');
      const dayName = lines[0].trim();
      const meals = lines.slice(1).map(line => {
        const [mealType, description] = line.trim().split(' - ');
        return { meal: mealType, description };
      });

      return { day: dayName, meals };
    });

    return parsedDays;
  };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { data } = await generateDietPlan(formData, token);
//     console.log("data",data)
//     setDietPlan(data.dietPlan);
//   };

const handleLoadDietPlan = async () => {
    setLoading(true);
    try {
      const { data } = await getDietPlan(token);
      const parsedPlan = parseDietPlan(data.dietPlan);
      console.log("parsed", parsedPlan)
        setDietPlan(parsedPlan);
    } catch (error) {
      console.error('Load Diet Plan error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight" required />
        <input type="text" name="height" value={formData.height} onChange={handleChange} placeholder="Height" required />
        <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" required />
        <input type="text" name="favoriteFoods" value={formData.favoriteFoods} onChange={handleChange} placeholder="Favorite Foods" required />
        <input type="text" name="dislikedFoods" value={formData.dislikedFoods} onChange={handleChange} placeholder="Disliked Foods" required />
        <button type="submit">Generate Diet Plan</button>
      </form>
      <button onClick={handleLoadDietPlan}>Load Saved Diet Plan</button>
      {loading && <Spinner />}
      {dietPlan && <DietPlan dietPlan={dietPlan} />}
    </div>
  );
};

export default DietForm;
