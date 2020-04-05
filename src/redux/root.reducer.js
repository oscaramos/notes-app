import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import noteReducer from './note/note.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['note']
}

const rootReducer = combineReducers({
  note: noteReducer
});

export default persistReducer(persistConfig, rootReducer);