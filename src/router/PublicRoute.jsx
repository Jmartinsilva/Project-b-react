import { useContext } from "react"
import { AuthContex } from "../auth"
import { Navigate } from "react-router-dom"

//Ruta publicas
export const PublicRoute = ({children}) => {

    const {logged} = useContext(AuthContex)
    

  return (!logged) ? children: <Navigate to='/marvel'/>
}

