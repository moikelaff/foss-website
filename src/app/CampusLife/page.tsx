import Image from "next/image";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function CampusLife() {
  return (
    <div className="w-full">
      <header>
        <NavBar />
      </header>

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[500px]">
          <Image
            src="/campus_life/campusLife.svg"
            alt="Campus Life"
            fill
            objectFit="cover"
            className="absolute top-0 left-0"
          />
        </div>
        <div className="text-center text-black px-4 py-8">
          <h1 className="text-5xl font-bold">Campus Life</h1>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center bg-gray-100">
        <div className="relative w-full h-full">
          <Image
            src="/campus_life/foto 1.svg"
            alt="Events"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0"
          />
        </div>
      </section>

      {/* Events Text & Image Section */}
      <section className="relative w-full flex items-center justify-between bg-white py-0 px-0">
        {/* Left Text Section */}
        <div className="w-1/2 pl-16">
          {" "}
          {/* Added padding-left (pl-8) */}
          <h2 className="text-5xl font-bold text-gray-800">Events</h2>
          <p className="text-lg text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="mt-6 text-blue-800 font-semibold flex items-center"
          >
            LEARN MORE <span className="ml-2">&#9679;</span>
          </a>
        </div>
        {/* Right Image Section */}
        <div className="w-1/3 ml-0 relative h-[400px]">
          <Image
            src="/campus_life/foto events.svg"
            alt="Event Image"
            layout="responsive"
            width={994}
            height={1185}
            objectFit="cover"
            objectPosition="center top"
            className="transform translate-y-[-20%]"
          />
        </div>
      </section>

      {/* Events Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center bg-gray-100">
        <div className="relative w-full h-full">
          <Image
            src="/campus_life/Foto 2.svg"
            alt="Events"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0"
          />
        </div>
      </section>

      {/* Events Text & Image Section */}
      <section className="relative w-full flex items-center justify-between bg-white py-0 px-0">
        {/* Left Text Section */}
        <div className="w-1/2 pl-16">
          {" "}
          {/* Added padding-left (pl-8) */}
          <h2 className="text-5xl font-bold text-gray-800">
            Student Activities
          </h2>
          <p className="text-lg text-gray-800 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="mt-6 text-blue-700 font-semibold flex items-center"
          >
            LEARN MORE <span className="ml-2">&#9679;</span>
          </a>
        </div>
        {/* Right Image Section */}
        <div className="w-1/3 ml-0 relative h-[400px]">
          <Image
            src="/campus_life/foto student activities.svg"
            alt="Event Image"
            layout="responsive"
            width={994}
            height={1185}
            objectFit="cover"
            objectPosition="center bottom"
            className="transform translate-y-[-20%]"
          />
        </div>
      </section>

      <section className="relative w-full h-[500px] flex items-center justify-center bg-gray-100">
        <div className="relative w-full h-full">
          <Image
            src="/campus_life/Foto 3.svg"
            alt="Events"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0"
          />
        </div>
      </section>

      {/* Events Text & Image Section */}
      <section className="relative w-full flex items-center justify-between bg-white py-0 px-0">
        {/* Left Text Section */}
        <div className="w-1/2 pl-16">
          {" "}
          {/* Added padding-left (pl-8) */}
          <h2 className="text-5xl font-bold text-gray-800">
            Lecturer Activities
          </h2>
          <p className="text-lg text-gray-800 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="mt-6 text-blue-700 font-semibold flex items-center"
          >
            LEARN MORE <span className="ml-2">&#9679;</span>
          </a>
        </div>
        {/* Right Image Section */}
        <div className="w-1/3 ml-0 relative h-[400px]">
          <Image
            src="/campus_life/foto lecturer activities.svg"
            alt="Event Image"
            layout="responsive"
            width={994}
            height={1185}
            objectFit="cover"
            objectPosition="center top"
            className="transform translate-y-[-10%]"
          />
        </div>
      </section>

      <section className="relative w-full h-[500px] flex items-center justify-center bg-gray-100">
        <div className="relative w-full h-full">
          <Image
            src="/campus_life/Foto 4.svg"
            alt="Events"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0"
          />
        </div>
      </section>

      {/* Events Text & Image Section */}
      <section className="relative w-full flex items-center justify-between bg-white py-0 px-0">
        {/* Left Text Section */}
        <div className="w-1/2 pl-16">
          {" "}
          {/* Added padding-left (pl-8) */}
          <h2 className="text-5xl font-bold text-gray-800">
            Alumni Activities
          </h2>
          <p className="text-lg text-gray-800 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="mt-6 text-blue-700 font-semibold flex items-center"
          >
            LEARN MORE <span className="ml-2">&#9679;</span>
          </a>
        </div>
        {/* Right Image Section */}
        <div className="w-1/3 ml-0 relative h-[400px]">
          <Image
            src="/campus_life/foto alumni activities.svg"
            alt="Event Image"
            layout="responsive"
            width={994}
            height={1185}
            objectFit="cover"
            objectPosition="center top"
            className="transform translate-y-[-10%]"
          />
        </div>
      </section>

      <section className="relative w-full h-[500px] flex items-center justify-center bg-gray-100">
        <div className="relative w-full h-full">
          <Image
            src="/campus_life/Foto 5.svg"
            alt="Events"
            layout="responsive"
            width={1920}
            height={600}
            objectFit="cover"
            className="object-none"
          />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
