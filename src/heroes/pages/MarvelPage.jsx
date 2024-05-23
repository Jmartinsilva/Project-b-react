import { HeroList } from "../components"

export const MarvelPage = () => {
  return (
    <>
      <div className="flex-cols h-9 bg-black mt-6">
      <h1 className="flex justify-center text-2xl text-neutral-50"> Marvel Comics</h1>
      <HeroList publisher='Marvel Comics'/>
      </div>
      
    </>
  )
}