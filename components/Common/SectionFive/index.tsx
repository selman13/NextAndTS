import Image from "next/image";
import banner2 from "@/app/banner2.svg";

const SectionFive = () => {
  return (
    <>
      <div className="ml-20">
        <Image src={banner2} width={1920} height={200} alt="banner" />
      </div>
    </>
  );
};

export default SectionFive;
