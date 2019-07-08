import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from 'react-router-redux';

import { dashboard, State as DashboardState } from './dashboard';

interface StoreEnhancerState {
}

export interface RootState extends StoreEnhancerState {
  router: RouterState;
  dashboard: DashboardState;
}

export default combineReducers({
  router,
  dashboard
});