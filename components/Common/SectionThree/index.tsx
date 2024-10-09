import photo1 from "@/app/sectionThree1.svg";
import photo2 from "@/app/sectionThree2.svg";
import photo3 from "@/app/sectionThree3.svg";
import photo4 from "@/app/sectionThree4.svg";
import Image from "next/image";

const SectionThree = () => {
  const photos = [photo1, photo2, photo3, photo4];

  return (
    <>
      <div className="container flex flex-col justify-center items-center gap-1 my-5">
        <h1>Over 30+ fresh recipes every week</h1>
        <p>Easy meals designed by professional chefs and nutritionists</p>
        <div className="flex justify-center gap-2">
          {photos.map((photo, index) => (
            <Image
              key={index}
              src={photo}
              width={250}
              height={250}
              alt={`photo-${index}`}
            />
          ))}
        </div>
        <button className="bg-transparent hover:bg-green-900 text-green-900 font-semibold hover:text-white py-2 px-4 border border-green-900 hover:border-transparent rounded">
          View our menus
        </button>
      </div>
    </>
  );
};

export default SectionThree;
