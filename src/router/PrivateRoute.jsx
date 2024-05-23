import { useContext } from "react"
import { AuthContex } from "../auth"
import { Navigate, useLocation } from "react-router-dom"


//Ruta privada
export const PrivateRoute = ({children}) => {

    const {logged} = useContext(AuthContex)
     const {pathname} = useLocation()
    // //console.log(location)
    const lastPath = pathname ;
    localStorage.setItem('lastPath', lastPath)

  return (logged)? children: <Navigate to='/login'/>
}

