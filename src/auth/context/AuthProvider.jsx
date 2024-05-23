
import { useReducer } from  'react';
import { AuthContex } from  './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

// const initialState = {
//   logged:false
// }

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  
  return{
    logged: !!user,
    user: user,
  }
}

export const AuthProvider = ({children}) => {
  //reducer
  const [authState, dispatch] = useReducer(authReducer, {}, init)

  //login
  const login = (name = '') => {

    const user = {id:'ABC',name}

    const action = {type: types.login, payload:user}

      
    localStorage.setItem('user',JSON.stringify(user))
    dispatch(action)
  }
  //logout
  const logout = () => {
    const action = {type: types.logout}
    localStorage.removeItem('user')
    dispatch(action)
    
  }

  

  return (
    <AuthContex.Provider value={{
      ...authState,
      //methods
      login,
      logout
    }}>
        { children }
    </AuthContex.Provider>
  )
}