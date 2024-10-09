import { SectionOneMenu } from "@/Data/SectionOne";
import s1 from "@/app/sectionOne1.svg";
import s2 from "@/app/sectionOne2.svg";
import s3 from "@/app/sectionOne3.svg";
import s4 from "@/app/sectionOne4.svg";
import Image from "next/image";

const SectionOne = () => {
  const photos = [s1, s2, s3, s4];

  return (
    <>
      <div className="container my-3">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-3xl">Why HelloFresh?</h1>

          <div className="flex justify-center gap-1">
            {SectionOneMenu.map(({ id, title, subtitle }, index) => {
              return (
                <div
                  key={id}
                  className="flex flex-col justify-center items-center gap-2"
                >
                  <Image
                    key={id}
                    src={photos[index]}
                    alt="sectionOneLogo"
                    width={100}
                    height={100}
                  />
                  <h1 className="text-xl">{title}</h1>
                  <span className="text-sm">{subtitle}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
