// File: src/actions/dietActions.js

export const fetchDietPlan = (payload) => ({
  type: "FETCH_DIET_PLAN_REQUEST",
  payload,
});

export const loadDietPlan = (payload) => ({
  type: "LOAD_DIET_PLAN_REQUEST",
  payload,
});

export const fetchDailyDietPlan = (payload) => ({
  type: "FETCH_DAILY_DIET_PLAN_REQUEST",
  payload,
});

export const setDailyDietPlan = (plan) => ({
  type: "SET_DAILY_DIET_PLAN",
  payload: plan,
});

export const openPopup = () => ({
  type: "OPEN_POPUP",
});

export const closePopup = () => ({
  type: "CLOSE_POPUP",
});

export const markDayAsCompleted = (dayIndex) => ({
  type: "MARK_DAY_AS_COMPLETED",
  payload: dayIndex,
});
