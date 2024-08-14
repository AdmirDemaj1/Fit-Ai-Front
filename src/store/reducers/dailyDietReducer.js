// const initialState = {
//   dailyDietInfo: null,
//   loading: false,
//   error: null,
// };

// export const dailyDietReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_DAILY_DIET_PLAN_REQUEST":
//       return { ...state, loading: true };
//     case "SET_DAILY_DIET_PLAN":
//       return { ...state, loading: false, dailyDietInfo: action.payload };
//     case "OPEN_POPUP":
//       return { ...state, popupVisible: true };
//     case "CLOSE_POPUP":
//       return { ...state, popupVisible: false, dailyDietInfo: null };
//     default:
//       return state;
//   }
// };

// File: src/reducers/dietReducer.js

const initialState = {
  dietPlan: null,
  completedDays: [], // Array to track completed days
  loading: false,
  error: null,
  dailyDietInfo: null,
  popupVisible: false,
};

export const dailyDietReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MARK_DAY_AS_COMPLETED":
      return {
        ...state,
        completedDays: state.completedDays.includes(action.payload)
          ? state.completedDays.filter((day) => day !== action.payload) // Unmark day if it's already completed
          : [...state.completedDays, action.payload],
      };
    case "FETCH_DAILY_DIET_PLAN_REQUEST":
      return { ...state, loading: true };
    case "SET_DAILY_DIET_PLAN":
      return { ...state, loading: false, dailyDietInfo: action.payload };
    case "OPEN_POPUP":
      return { ...state, popupVisible: true };
    case "CLOSE_POPUP":
      return { ...state, popupVisible: false, dailyDietInfo: null };
    default:
      return state;
  }
};
