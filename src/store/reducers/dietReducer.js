// File: src/reducers/dietReducer.js

const initialState = {
    dietPlan: null,
    loading: false,
    error: null,
  };
  
  export const dietReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DIET_PLAN_REQUEST':
      case 'LOAD_DIET_PLAN_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_DIET_PLAN_SUCCESS':
      case 'LOAD_DIET_PLAN_SUCCESS':
        return { ...state, dietPlan: action.payload, loading: false };
      case 'FETCH_DIET_PLAN_FAILURE':
      case 'LOAD_DIET_PLAN_FAILURE':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  