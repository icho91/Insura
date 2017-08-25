import { combineReducers } from 'redux';
import ClientsReducer from './reducer_clients';
import ActiveClient from './reducer_active_client';

const rootReducer = combineReducers({
  clients: ClientsReducer,
  activeClient: ActiveClient
});

export default rootReducer;
