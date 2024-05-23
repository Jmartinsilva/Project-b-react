import { useLocation, useNavigate } from 'react-router-dom'
import {useForm} from '../../hooks/useForm'
import {HeroCard} from '../components'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers'


export const SearchPage = () => {

const {searchText, onInputChange} = useForm({
  searchText: ''
})


const navigate = useNavigate();
const location = useLocation();

const {q:querypameter = ''} = queryString.parse(location.search);
const heroes = getHeroesByName(querypameter)




const onSearchSubmit = (event) =>{
  event.preventDefault()
  if (searchText.trim().length <= 1) return;
  navigate(`?q=${searchText.trim().toLowerCase()}`)
}
   

 

  return (
   <>
        <div className="flex-cols h-9 bg-black mt-6">
          <h1 className="flex justify-center text-2xl text-neutral-50"> Search</h1>
        </div>

        <div className="grid grid-cols-2 gap-10 place-content-evenly">
          <div className="col-span-1 text-3xl mt-10 pl-10 space-y-20">
            <h4 className="underline font-bold">Searching</h4>
            <form onSubmit={onSearchSubmit} className="  ">
              
              <input 
                type="text"
                placeholder="Search Superhero "
                className="searchTex outline-none border-2 rounded-md border-sky-200  hover:border-sky-400"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
                
              />

              <button className=" box-content h-10 w-28  bg-sky-400 rounded-lg hover:bg-sky-700 outline outline-offset-2 outline-1 ">
                Search
              </button>
            </form>

            
          </div>

              


          <div className="col-span-1 text-3xl mt-10 pl-10 space-y-20">
            <h4 className='underline font-bold'>Results</h4>


            {
               (searchText==='') | (querypameter === '') 
                ? <div className='bg-sky-200 rounded-lg'> Look for a hero </div>
                : ( heroes.length === 0 ) 
                  && <div className='bg-sky-200 rounded-lg'>There is not hero with <b> {querypameter} </b></div>
            }
          
            
            <div>
            {heroes.map(hero=>(<HeroCard key={hero.id} {...hero}/>))}
            </div>
            
          </div>
        </div>   

   </>
  )
}





        
      
   