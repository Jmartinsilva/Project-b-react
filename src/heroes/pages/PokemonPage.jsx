import React from "react"
import { useCounter } from '../../hooks/useCounter';
import {useFetch} from '../../hooks/useFetch'
import { LoadingMessage, PokemonCard } from '../components';




export const PokemonPage = () => {

  const {counter,increment,decrement} = useCounter(1)

  const {data, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);



  return (
    <>
      <div className='flex-cols h-9 bg-black mt-6' >
        <h1 className='flex justify-center text-2xl text-neutral-50 '>  Pokemon</h1>
        <div className="grid grid-cols text-3xl mt-10 pl-10 space-y-20">
        { isLoading ? 
        <LoadingMessage/>
        : <PokemonCard 
          
          id={data.id} 
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
          />
        }

        <pre  className='text-2xl flex justify-center p-5 '> The pokemon's name is {data?.name }</pre>
        </div>

        <div className="flex justify-center space-x-8">
          <button 
          className='box-content h-10 w-28  bg-sky-400 rounded-lg hover:bg-sky-700 outline outline-offset-2 outline-1 '
          onClick={() => counter > 1 ? decrement () : null}
          >
          Back  
          </button>

          <button 
          className=' box-content h-10 w-28  bg-sky-400 rounded-lg hover:bg-sky-700 outline outline-offset-2 outline-1 '
          onClick={() => increment ()}
          >
          Next
          </button>
        </div>
      </div>
    </>

  )
}