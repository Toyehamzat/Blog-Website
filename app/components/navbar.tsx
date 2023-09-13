import Link from "next/link";
import { FaYoutube, FaWhatsapp, FaTwitch, FaLaptop } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="font-bold text-3xl text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Toye Hamzat
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-3xl lg:text-4xl">
          <Link href="" className="text-white/90 no-underline hover:text-white">
            <FaYoutube />
          </Link>
          <Link href="" className="text-white/90 no-underline hover:text-white">
            <FaWhatsapp />
          </Link>
          <Link href="" className="text-white/90 no-underline hover:text-white">
            <FaTwitch />
          </Link>
          <Link href="" className="text-white/90 no-underline hover:text-white">
            <FaLaptop />
          </Link>
        </div>
      </div>
    </nav>
  );
}
