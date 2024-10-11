import { SectionSixMenus } from "@/Data/SectionSix"

const SectionSix = () => {
  return (
    <div className="container flex flex-col justify-center items-center">
      <h1 className="text-3xl text-center">More questions?</h1>
      <ul className="flex flex-col justify-center items-center gap-3">
        {
          SectionSixMenus.map(({id, question})=> {
            return (
              <li key={id}>{question}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default SectionSix