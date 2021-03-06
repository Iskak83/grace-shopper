import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */

const GET_ALL_USERS = 'GET_ALL_USERS'

/**
 * ACTION CREATORS
 */

const getAllUsers = users => ({type: GET_ALL_USERS, users})

/**
 * THUNK CREATORS
 */

export const getAllUsersThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users')
    dispatch(getAllUsers(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users
    default:
      return state
  }
}
