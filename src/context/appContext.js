import React, { useReducer, useContext } from 'react'

import reducer from './reducer'
import axios from 'axios'

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  UPLOAD_IMAGE,
  HANDLE_CHANGE,
  CLEAR_UPLOADS,
  CHANGE_PAGE,
  UPLOAD_IMAGE_REGISTER,
  OPEN_BIGSIDEBAR,
  CLOSE_BIGSIDEBAR,
  SHOW_MENU,
  HIDE_MENU
 
} from './actions'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')


const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  image:"",
  totalPages:1,
  page:1,
  registerImage:"",
  openBigSideBar:false,
  menu:false
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)


  function changeFunction(e){
    dispatch({type:HANDLE_CHANGE,
    payload:{
      name:e.target.name,
      value:e.target.value
    }})
  }


  function clearuploads(){
    dispatch({type:CLEAR_UPLOADS})
  }



  function changepage(page){
      dispatch({type:CHANGE_PAGE,payload:{page:page}})
  }


  function openBig(){
    dispatch({type:OPEN_BIGSIDEBAR})
  }
  
  function closeBig(){
    dispatch({type:CLOSE_BIGSIDEBAR})
  }
  


  function showMenu(){
    dispatch({type:SHOW_MENU})
  }


  function closeMenu(){
    dispatch({type:HIDE_MENU})
  }
 




  

  return (
    <AppContext.Provider
      value={{
        ...state,
        changeFunction,
        clearuploads,
        changepage,
        openBig,
        closeBig,
        showMenu,
        closeMenu,
        closeMenu,
        showMenu    
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
