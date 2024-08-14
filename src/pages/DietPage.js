import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DietForm from '../components/DietForm';
import { fetchDietPlan, loadDietPlan } from '../store/actions/dietActions';

const DietPage = () => {
  const token = localStorage.getItem('token') || '';
  const dispatch = useDispatch();

  const dietPlan = useSelector((state) => state.diet.dietPlan);
  const loading = useSelector((state) => state.diet.loading);

  const handleFetchDietPlan = (formData, parseDietPlan) => {
    dispatch(fetchDietPlan({ formData, token, parseDietPlan }));
  };

  const handleLoadDietPlan = (parseDietPlan) => {
    dispatch(loadDietPlan({ token, parseDietPlan }));
  };
  console.log("loading", loading)

  return (
    <div>
      <DietForm
        dietPlan={dietPlan}
        loading={loading}
        fetchDietPlan={handleFetchDietPlan}
        loadDietPlan={handleLoadDietPlan}
      />
    </div>
  );
};

export default DietPage;
