import { Route, Routes } from "react-router-dom"
import { HeroesRoutes } from "../heroes/routes"
import { LoginPage } from "../auth"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (

    
    <>  
      <div className="font-serif">
        <Routes>

              <Route path="login/*" element={
                <PublicRoute>
                  {/* <LoginPage /> */}
                  <Routes>
                    <Route path="/*" element={<LoginPage />} />
                  </Routes>
                </PublicRoute>
              }
            />  

            {/* <Route path="login" element={<LoginPage/>}/> */}
            
            
            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute>
            }/>

            {/* <Route path="/*" element={<HeroesRoutes/>}/> */}

        </Routes>
      </div>
    </>
  )
}


            
            