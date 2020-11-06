import axios from 'axios';

////////ACTION TYPES//////////
const SET_USERS = 'SET_USERS';
////////ACTION CREATORS///////
const _setUsers = (users) => {
    return {
      type: SET_USERS,
      users,
    };
  }; ///////fetch all users /////admins

  export const setUsers = () => {
    try{
        return async (dispatch) => {
        const  users  = await axios.get('/api/users');
        dispatch(_setUsers(users.data));
        }}
    catch (err) {
        console.log(err);
    }
  };

  export default function allUsersReducer(state = [], action) {
    if (action.type === SET_USERS) {
      return action.users;
    }
    return state;
}