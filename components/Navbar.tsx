import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={` flex justify-around items-center mt-12 lg:ml-[10rem]`}>

        <a className="text-white text-xl font-bold hover:text-[#22c1c3] w-[60%] text-end" href="/cv.pdf" download={"cv.pdf"}>RESUME</a>
    </nav>
  )
}
