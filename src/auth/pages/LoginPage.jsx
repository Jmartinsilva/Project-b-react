import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContex } from '../context/AuthContext';

export const LoginPage = () => {
  
  const {login} = useContext(AuthContex);
  
  const navigate = useNavigate();

  

  const onLogin = () => {

   
    const lastPath = localStorage.getItem('lastPath')|| '/';

    login('Martin Silva');
    

    navigate( lastPath, {
      replace: true
    });
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center text-xl gap-3 font-serif"> 
        <h1 className='text-2xl'>Press to access</h1>
        

        <button 
          className="flex w-50 bg-sky-400 p-5  rounded-2xl justify-center hover:bg-sky-700"
          onClick={ onLogin }
        >
          Login
        </button>

      </div>
    </>
  )
}
