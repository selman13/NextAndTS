import Banner from "../Common/Banner";
import Navbar from "../Common/Navbar";

const Header = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Banner />
      </div>
    </>
  );
};

export default Header;
