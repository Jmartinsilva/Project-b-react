import { useMemo } from "react"
import { getHeroesByPublisher } from "../helpers"
import {HeroCard} from './'

export const HeroList = ({publisher}) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
  return (
    <div className="grid grid-cols-3 gap-5 p-4">
        { heroes.map(hero =>(<HeroCard
         key={hero.id} 
         {...hero}/>))

        }
    </div>

  )
}
