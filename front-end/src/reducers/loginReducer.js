const INITIAL_STATE = {
  state: '',
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_EMAIL':
    return [...state, action.state];
  case 'SET_PASSWORD':
    return [...state, action.state];
  default:
    return state;
  }
}

export default loginReducer;
