import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers'




export const HeroPage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const hero = useMemo(()=> getHeroById(id),[id])

  const onNavigateBack = () =>{
    navigate(-1)
  }
  
  if ( !hero ) {
    return <Navigate to="/marvel" />
  }
  
  return (
    <div className="flex flex-row  mt-6 border-solid border-2 border-sky-200 rounded-md  bg-sky-100 animate-shake ">

          <div className="basis-1/2  ">
            <img 
              src={ `/heroes/${ id }.jpg` } 
              alt={ hero.superhero }
              className="rounded-lg animate-shake"
            />
          </div>

          <div className="basis-1/2 text-2xl space-y-24 ">
            <h2 className='superhero underline font-bold'>{ hero.superhero }</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> <b>Alter ego:</b> { hero.alter_ego }  </li>
              <li className="list-group-item"> <b>Publisher:</b> { hero.publisher } </li>
              <li className="list-group-item"> <b>First appearance:</b> { hero.first_appearance } </li>
            </ul>

            <h5 className="mt-3"> Characters </h5>
            <p>{ hero.characters }</p>

            <button 
              className="box-content h-10 w-28  bg-sky-400 rounded-lg hover:bg-sky-700 outline outline-offset-2 outline-1"
              onClick={ onNavigateBack }
            >
              Back
            </button>

          </div>

    </div>
  )
}