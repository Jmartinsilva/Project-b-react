
import { useContext } from "react"
import { NavLink,useNavigate } from "react-router-dom"
import { AuthContex } from "../../auth/context/AuthContext"


export const Navbar = () => {

  const {user,logout} = useContext(AuthContex)
  

  const navigate = useNavigate()

  

  const onLogout = () => {
    
    logout();

    navigate('/login',
    {replace: true});
  }

    

  return (
    <>
      <nav className="h-16 flex justify-between gap-x-2 bg-zinc-500  " >
        <div className="flex p-4 text-xl items-start text-sky-400 hover:text-sky-700  ">
          <NavLink
          className="Navbar-heroes"
          to="/"
         >
            Heroes
          </NavLink>
        </div>

        <div className="flex p-4  " >
          <NavLink
          className="{({isActive}) => `Navbar-dc ${isActive ? 'Active': ''}`}"
          to="/dc"
          >
          DC
          </NavLink>
        </div>
        
        <div className="flex p-4">
          <NavLink
          className="{({isActive}) => `Navbar-search ${isActive ? 'Active': ''}`}"
          to="/search"
          >
          Search
          </NavLink>
        </div>

        <div className="flex p-4">
          <NavLink
          className="{({isActive}) => `Navbar-marvel ${isActive ? 'Active': ''}`}"
          to="/marvel"
          >
          Marvel
          </NavLink>
        </div>

        <div className="flex p-4">
          <NavLink
          className="{({isActive}) => `Navbar-marvel ${isActive ? 'Active': ''}`}"
          to="/pokemon"
          >
           Pokemon
          </NavLink>
        </div>

        <div className="flex   ">
          <ul className="flex items-center ">
            
            <div className="flex p-4 w-25 h-10 items-center bg-sky-400 rounded-xl ">
               {user?.name}
            </div>
              

            <button className="flex p-4  text-sky-400 hover:text-sky-700"
            onClick={onLogout}
            >
              Logout
            </button>
          </ul>
        </div>
          


      </nav>
    

    </>
  )
}
         



