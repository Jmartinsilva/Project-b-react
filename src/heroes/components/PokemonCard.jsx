import React from "react"

export const PokemonCard = ({id,name,sprites = []}) => {

     


  return (
    <section className="h-36 flex mx-10 flex-row justify-center content-center rounded-lg bg-zinc-500">
        <div className="flex flex-col items-center">
            <h2  className="flex ">Name {id} - {name}</h2>

            <div className="flex ">
            {sprites.map(sprite => (
                <img   key={sprite} src={sprite} alt={name}/>
            ))}
            </div>
        </div>
    </section>
)
  
}