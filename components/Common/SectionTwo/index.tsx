import Image from "next/image";
import photo from "@/app/sectionTwoPhoto.svg";
import { SectionTwoMenu } from "@/Data/SectionTwo";

const SectionTwo = () => {
  return (
    <>

      <div className="container flex justify-center gap-5">
        <div className="left">
        <Image src={photo} alt="section two photo" width={500} height={500}/>
        </div>
        <div className="right flex flex-col justify-center items-center gap-5">
        <h1>What’s inside each box?</h1>
        {
                SectionTwoMenu.map(({id, text}) => {
                    return (
                        <p key={id}>{text}</p>
                    )
                })
        }
        <button className="bg-green-900 w-[400px] hover:bg-white text-white font-semibold hover:text-green-900 py-2 px-4 border border-white hover:border-green-900 rounded">
          View our plans
        </button>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
