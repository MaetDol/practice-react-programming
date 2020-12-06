import {
  createReducer,
  createSetValueAction,
  FETCH_PAGE,
  setValueReducer,
} from '../../common/redux-helper';

export const Types = {
  SetValue: 'search/SetValue',
  FetchAutoComplete: 'search/FetchAutoComplete',
  FetchAllHistory: 'search/FetchAllHistory',
  AppendHistory: 'search/AppendHistory',
};

export const actions = {
  setValue: createSetValueAction( Types.SetValue ),
  fetchAutoComplete: keyword => ({
    type: Types.FetchAutoComplete,
    keyword,
  }),
  fetchAllHistory: page => ({ 
    type: Types.FetchAllHistory, 
    [FETCH_PAGE]: page 
  }),
  appendHistory: newHistory => ({
    type: Types.AppendHistory,
    newHistory,
  })
};

const INITIAL_STATE = {
  keyword: '',
  autoComplete: [],
  history: [],
};

const reducer = createReducer( INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
  [Types.AppendHistory]: (state, action) => state.history.push( ...action.newHistory ),
});

export default reducer;