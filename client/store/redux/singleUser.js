import axios from 'axios';

////////ACTION TYPES//////////
const SET_SINGLE_USER = 'SET_SINGLE_USER';

////////ACTION CREATORS///////
const _setSingleUser = (user) => {
  return {
    type: SET_SINGLE_USER,
    user,
  };
};

///////THUNK CREATORS////////
export const setSingleUser = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/auth/whoami');
    dispatch(_setSingleUser(data));
  };
};

////////SINGLE USER REDUCER//////////
export default function singleUserReducer(state = [], action) {
  if (action.type === SET_SINGLE_USER) {
    return action.user;
  }
  return state;
}
