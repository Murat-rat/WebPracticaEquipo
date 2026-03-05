import { createContext, useContext, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pantallas/Login'
import Admin from './pantallas/Admin'
import User from './pantallas/User'
import Error404 from './pantallas/Error404'

export const AuthenticationContext = createContext();

const PrivateRoute = ({ children }) => {
  const { authentication } = useContext(AuthenticationContext);
  return authentication.isLoggedIn ? children : <Navigate to="/"/>
}

function App() {
  const [authentication, setAuthentication] = useState({
    isLoggedIn : false,
    user : null
  });

  return (
    <>
      <AuthenticationContext.Provider value = {{ authentication, setAuthentication }}>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>}/>
          <Route path="/user" element= {<PrivateRoute><User/></PrivateRoute>}/>
          <Route path="*" element= {<Error404/>}/>
        </Routes>
      </AuthenticationContext.Provider>
    </>
  )
}

export default App
