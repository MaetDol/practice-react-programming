import { createReducer, createSetValueAction, FETCH_KEY, NOT_IMMUTABLE, setValueReducer } from "../../common/redux-helper";

export const Types = {
  SetValue: 'user/SetValue',
  FetchUser: 'user/FetchUser',
  FetchUpdateUser: 'user/FetchUpdateUser',
  FetchUserHistory: 'user/FetchUserHistory',
  AddHistory: 'user/AddHistory',
  Initialize: 'user/Initialize',
  AppendLoadedHistory: 'user/AppendLoadedHistory',
};

export const actions = {
  setValue: createSetValueAction( Types.SetValue ),
  fetchUser: name => ({ type: Types.FetchUser, name }),
  fetchUpdateUser: ({user, key, value, fetchKey}) => ({
    type: Types.FetchUpdateUser,
    user,
    key,
    value,
    [FETCH_KEY]: fetchKey,
  }),
  fetchUserHistory: name => ({ type: Types.FetchUserHistory, name }),
  addHistory: history => ({ type: Types.AddHistory, history }),
  initialize: () => ({ type: Types.Initialize, [NOT_IMMUTABLE]:true }),
  appendLoadedHistory: loadedHistory => ({ type: Types.AppendLoadedHistory, loadedHistory }),
};

const INITIAL_STATE = {
  user: undefined,
  userHistory: [],
};

const reducer = createReducer( INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
  [Types.AddHistory]: (state, action) => 
    (state.userHistory = [action.history, ...state.userHistory]),
  [Types.Initialize]: () => INITIAL_STATE,
  [Types.AppendLoadedHistory]: (state, action) => state.userHistory.push( ...action.loadedHistory ),
});

export default reducer;