import{Link} from 'react-router-dom'



export const HeroCard = ({ 
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters ,}) => {

 
  const heroImageUrl= `heroes/${id}.jpg`

  return (

 
        <div className="grid grid-cols-2  gap-5 p-4 border-solid border-2 border-sky-200 rounded-md ">
           
                    <div className=" primer-bloque grid ">
                        <img src={ heroImageUrl } className="card-img rounded-lg" alt={ superhero } />
                    </div>

                    <div className='segundo-bloque justify-items-stretch'>
                        <h5 className='text-lg '>{superhero}</h5>
                        <p>{alter_ego}</p>
                        <p className="mt-6">
                                <small className="bg-zinc-400 rounded-sm">{ first_appearance }</small>
                        </p>
                        
                        <div>
                        {(alter_ego!==characters)&&<p><span className='text-sky-400'>Characters :</span> {characters}</p> }
                        </div>
                        
                        
                        <div className='mt-6 text-sky-400 hover:text-sky-700'>
                          <Link to={`/hero/${ id }`}>
                                  
                                  See more...
                          </Link>
                        </div>

                      </div>  
        </div>
            
       
      
  
  )
}

