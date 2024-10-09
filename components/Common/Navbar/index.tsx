import Image from "next/image";
import logo from "../../../app/logo.svg";
import { HeaderMenu } from "@/Data/Header";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className="container py-5 px-8 flex justify-between items-center">
    <div className="left flex gap-3 items-center">
      <div className="logo">
        <Image src={logo} width={100} height={100} alt="logo" />
      </div>
      <div className="menu">
        <ul className="flex gap-5">
          {HeaderMenu.map(({ id, title }) => {
            return <Link href="/" key={id}>{title}</Link>;
          })}
        </ul>
      </div>
    </div>
    <div className="right">
      <button className="bg-transparent hover:bg-green-900 text-green-900 font-semibold hover:text-white py-2 px-4 border border-green-900 hover:border-transparent rounded">
        Log in
      </button>
    </div>
  </div>
  )
}

export default Navbar