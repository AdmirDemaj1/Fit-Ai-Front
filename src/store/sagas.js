// File: src/sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { generateDietPlan, getDietPlan, fetchDailyDietPlan } from '../services/api';
import { setDailyDietPlan, openPopup } from './actions/dietActions';

function* fetchDietPlanSaga(action) {
  try {
    const response = yield call(generateDietPlan, action.payload.formData, action.payload.token);
    const parsedPlan = action.payload.parseDietPlan(response.data.dietPlan);
    yield put({ type: 'FETCH_DIET_PLAN_SUCCESS', payload: parsedPlan });
  } catch (error) {
    yield put({ type: 'FETCH_DIET_PLAN_FAILURE', payload: error.message });
  }
}

function* loadDietPlanSaga(action) {
  try {
    const response = yield call(getDietPlan, action.payload.token);
    const parsedPlan = action.payload.parseDietPlan(response.data.dietPlan);
    yield put({ type: 'LOAD_DIET_PLAN_SUCCESS', payload: parsedPlan });
  } catch (error) {
    yield put({ type: 'LOAD_DIET_PLAN_FAILURE', payload: error.message });
  }
}

function* fetchDailyDietPlanSaga(action) {
  try {
    console.log("action", action)
    const response = yield call(fetchDailyDietPlan, action.payload.dietData, action.payload.token);
    yield put(setDailyDietPlan(response.data));
    yield put(openPopup());
  } catch (error) {
    console.error('Error fetching daily diet plan:', error);
  }
}

// function* watchDietActions() {
 
// }

// export default function* rootSaga() {
//   yield watchDietActions();
// }

function* watchDietActions() {
  yield takeLatest('FETCH_DIET_PLAN_REQUEST', fetchDietPlanSaga);
  yield takeLatest('LOAD_DIET_PLAN_REQUEST', loadDietPlanSaga);
  yield takeLatest('FETCH_DAILY_DIET_PLAN_REQUEST', fetchDailyDietPlanSaga);
}

export default function* rootSaga() {
  yield watchDietActions();
}
