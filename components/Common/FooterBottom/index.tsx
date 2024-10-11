import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const FooterBottom = () => {
  return (
    <div className="container flex justify-between items-center p-10">
      <div className="left">
        <ul className="flex gap-9">
          <li>© HelloFresh 2022</li>
          <li className="text-green-900">Terms and Conditions</li>
          <li className="text-green-900">Privacy</li>
          <li className="text-green-900">Accessibility</li>
        </ul>
      </div>
      <div className="right flex gap-10">
    <Link href="/"><FaFacebookF className="text-blue-900"/></Link>
    <Link href="/"><FaTwitter className="text-blue-300"/></Link>
    <Link href="/"><FaInstagram className="text-purple-900"/></Link>
      </div>
    </div>
  );
};

export default FooterBottom;
