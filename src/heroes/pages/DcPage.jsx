import { HeroList } from "../components"

export const DcPage = () => {

  return (
    <>
      <div className="flex-cols h-9 bg-black mt-6">
        <h1 className="flex justify-center text-2xl text-neutral-50"> DC Comics</h1>
        <HeroList publisher='DC Comics'/>
      </div>
      
    </>
  )
}
