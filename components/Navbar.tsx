import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={` flex justify-around items-center mt-12 lg:ml-[10rem]`}>
        <Link href="/" className={` text-[#6666FF] text-5xl font-bold hover:text-[#FFF]`}>JW</Link>

        <a className="text-white text-xl font-bold hover:text-[#BB33FF]" href="/cv.pdf" download={"cv.pdf"}>RESUME</a>
    </nav>
  )
}
