import { SectionFourTexts } from "@/Data/SectionFour";
import photo1 from "@/app/sectionFour1.svg";
import photo2 from "@/app/sectionFour2.svg";
import photo3 from "@/app/sectionFour3.svg";
import photo4 from "@/app/sectionFour4.svg";
import Image from "next/image";

const SectionFour = () => {
  const photos = [photo1, photo2, photo3, photo4];

  return (
    <>
      <div className="container my-3 flex flex-col justify-center items-center">
        <div className="text-center mb-4">
          <h1 className="text-4xl">Cook it. Love it. Tag it #HelloFreshPics</h1>
          <h6>Follow us on Instagram @hellofresh</h6>
        </div>
        <div className="flex justify-center items-center gap-8">
          {SectionFourTexts.map(({ id, mainText, desc }, index) => {
            return (
              <div
                key={id}
                className="flex flex-col justify-center items-center text-center"
                style={{ width: "250px" }}
              >
                <Image
                  src={photos[index]}
                  alt="photo"
                  className="w-full h-auto"
                />
                <h5 className="font-semibold mt-2">{mainText}</h5>
                <h6 className="text-sm text-gray-600">{desc}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SectionFour;
