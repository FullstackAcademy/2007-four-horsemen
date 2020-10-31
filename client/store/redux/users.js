import axios from 'axios';

////////ACTION TYPES//////////
const SET_USERS = 'SET_USERS';
const SET_SINGLEUSER = 'SET_SINGLEUSER';
const CREATE_USER = 'CREATE_USER';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';

////////ACTION CREATORS///////
const _setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};///////fetch all users /////admins

const _setSingleUser = (user) =>{
  return {
    type: SET_SINGLEUSER,
    user
  }
}

const _createUser = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

const _updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user,
  };
};

const _deleteUser = (id) => {
  return {
    type: DELETE_USER,
    id,
  };
};

///////THUNK CREATORS////////

export const setUsers = () => {
  return async (dispatch) => {
    const { data } = axios.get('/api/users');
    dispatch(_setUsers(data));
  };
};
export const setSingleUser = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/auth/whoami');
    dispatch(_setSingleUser(data));
  };
};

export const createUser = ({ user, history }) => {
  return async (dispatch) => {
    const { data } = axios.post('/api/users', { user });
    dispatch(_createUser(data));
    history.push('/users');
  };
};

export const updateUser = ({ user, id, history }) => {
  return async (dispatch) => {
    const { data } = axios.put(`/api/users/${id}`, { user });
    dispatch(_updateUser(data));
    history.push('/users');
  };
};

export const deleteUser = ({ id, history }) => {
  return async (dispatch) => {
    axios.delete(`/api/users/${id}`);
    dispatch(_deleteUser(id));
    history.push('/users');
  };
};

////////USERS REDUCER//////////



export default function usersReducer (state = [], action) {
  // if (action.type === SET_USERS) {
  //   state = action.users;
  // }
  if (action.type === SET_SINGLEUSER) {
    return action.user;
  }
  // if (action.type === CREATE_USER) {
  //   state = [action.user, ...state];
  // }
  // if (action.type === UPDATE_USER) {
  //   state = state.map((user) => (user.id === action.id ? action.user : user));
  // }
  // if (action.type === DELETE_USER) {
  //   state = state.filter((user) => user.id !== action.id * 1);
  // }
  return state;
}
