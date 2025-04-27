import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Events() {
  return (
    <div className="w-full">
      <header>
        <NavBar />
      </header>

      {/* Hero Section */}
      <section className="py-4 bg-white-50">
        <div className="text-center text-black px-4 py-8">
          <h1 className="text-6xl font-bold">Events</h1>
        </div>
        <div className="pl-32">
          <h2 className="text-4xl font-bold text-gray-800">Upcoming Events</h2>
          <p className="text-lg text-gray-600 mt-4">
            See upcoming events from UIII
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-5 bg-white-50 mb-16">
        {/* Grid of Events with 3 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto max-w-7xl px-4">
          {/* Event Card 1 */}
          <div
            className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
            style={{
              backgroundColor: "#F4FDFF",
              width: "100%",
              maxWidth: "600px", // Increased card width
              margin: "0 auto", // Keep the cards centered
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                {/* Text Container */}
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Jan</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">05</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/Brownbag-40.png"
                  alt="Event 1"
                  layout="intrinsic"
                  width={360}
                  height={450}
                  objectFit="cover"
                  objectPosition="center top"
                />
              </div>
            </div>

            {/* Text Section Below Image */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                Series Brownbag 40 with Amin Mudzakkir
              </h3>
              <a
                href="#"
                className="mt-4 text-blue-700 font-semibold flex items-center"
              >
                LEARN MORE <span className="ml-2">&#9679;</span>
              </a>
            </div>
          </div>

          {/* Event Card 2 */}
          <div
            className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
            style={{
              backgroundColor: "#F4FDFF",
              width: "100%",
              maxWidth: "600px", // Increased card width
              margin: "0 auto", // Keep the cards centered
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                {/* Text Container */}
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Dec</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">28</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/event2.png"
                  alt="Event 2"
                  layout="intrinsic"
                  width={360}
                  height={450}
                  objectFit="cover"
                  objectPosition="center top"
                />
              </div>
            </div>

            {/* Text Section Below Image */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                Diseminasi Hasil Awal Penelitian Riset Jabar
              </h3>
              <a
                href="#"
                className="mt-4 text-blue-700 font-semibold flex items-center"
              >
                LEARN MORE <span className="ml-2">&#9679;</span>
              </a>
            </div>
          </div>

          {/* Event Card 3 */}
          <div
            className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
            style={{
              backgroundColor: "#F4FDFF",
              width: "100%",
              maxWidth: "600px", // Increased card width
              margin: "0 auto", // Keep the cards centered
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                {/* Text Container */}
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Dec</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">20</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/event3.png"
                  alt="Event 3"
                  layout="intrinsic"
                  width={360}
                  height={450}
                  objectFit="cover"
                  objectPosition="center top"
                />
              </div>
            </div>

            {/* Text Section Below Image */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                Series Brownbag 39 with Muhammad Syukri
              </h3>
              <a
                href="#"
                className="mt-4 text-blue-700 font-semibold flex items-center"
              >
                LEARN MORE <span className="ml-2">&#9679;</span>
              </a>
            </div>
          </div>

          {/* Event Card 4 */}
          <div
            className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
            style={{
              backgroundColor: "#F4FDFF",
              width: "100%",
              maxWidth: "600px", // Increased card width
              margin: "0 auto", // Keep the cards centered
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                {/* Text Container */}
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Dec</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">15</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/event4.png"
                  alt="Event 4"
                  layout="intrinsic"
                  width={360}
                  height={450}
                  objectFit="cover"
                  objectPosition="center top"
                />
              </div>
            </div>

            {/* Text Section Below Image */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                Series Brownbag 38 with Fathun Karib
              </h3>
              <a
                href="#"
                className="mt-4 text-blue-700 font-semibold flex items-center"
              >
                LEARN MORE <span className="ml-2">&#9679;</span>
              </a>
            </div>
          </div>

          {/* Event Card 5 */}
          <div
            className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
            style={{
              backgroundColor: "#F4FDFF",
              width: "100%",
              maxWidth: "600px", // Increased card width
              margin: "0 auto", // Keep the cards centered
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                {/* Text Container */}
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Dec</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">14</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/event5.svg"
                  alt="Event 5"
                  layout="intrinsic"
                  width={360}
                  height={450}
                  objectFit="cover"
                  objectPosition="center top"
                />
              </div>
            </div>

            {/* Text Section Below Image */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                The First Climate Talk with Michiel Schaeffer
              </h3>
              <a
                href="#"
                className="mt-4 text-blue-700 font-semibold flex items-center"
              >
                LEARN MORE <span className="ml-2">&#9679;</span>
              </a>
            </div>
          </div>

          {/* Event Card 6 */}
          <div
            className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
            style={{
              backgroundColor: "#F4FDFF",
              width: "100%",
              maxWidth: "600px", // Increased card width
              margin: "0 auto", // Keep the cards centered
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                {/* Text Container */}
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Dec</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">13</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/event6.png"
                  alt="Event 6"
                  layout="intrinsic"
                  width={360}
                  height={450}
                  objectFit="cover"
                  objectPosition="center top"
                />
              </div>
            </div>

            {/* Text Section Below Image */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                Series Brownbag 37 with Nathanael G. Sumaktoyo
              </h3>
              <a
                href="#"
                className="mt-4 text-blue-700 font-semibold flex items-center"
              >
                LEARN MORE <span className="ml-2">&#9679;</span>
              </a>
            </div>
          </div>

          {/* Event Card 7 */}
          <div
            className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
            style={{
              backgroundColor: "#F4FDFF",
              width: "100%",
              maxWidth: "600px", // Increased card width
              margin: "0 auto", // Keep the cards centered
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                {/* Text Container */}
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Dec</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">8</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/event7.png"
                  alt="Event 7"
                  layout="intrinsic"
                  width={360}
                  height={450}
                  objectFit="cover"
                  objectPosition="center top"
                />
              </div>
            </div>

            {/* Text Section Below Image */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                Series Brownbag 36 with Aizat bin Khairi
              </h3>
              <a
                href="#"
                className="mt-4 text-blue-700 font-semibold flex items-center"
              >
                LEARN MORE <span className="ml-2">&#9679;</span>
              </a>
            </div>
          </div>

          {/* Event Card 8 */}
          <div
            className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
            style={{
              backgroundColor: "#F4FDFF",
              width: "100%",
              maxWidth: "600px", // Increased card width
              margin: "0 auto", // Keep the cards centered
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                {/* Text Container */}
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Dec</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">6</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/event8.png"
                  alt="Event 8"
                  layout="intrinsic"
                  width={360}
                  height={450}
                  objectFit="cover"
                  objectPosition="center top"
                />
              </div>
            </div>

            {/* Text Section Below Image */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                Series Brownbag 35 with Arya Budi
              </h3>
              <a
                href="#"
                className="mt-4 text-blue-700 font-semibold flex items-center"
              >
                LEARN MORE <span className="ml-2">&#9679;</span>
              </a>
            </div>
          </div>

          {/* Event Card 9 */}
          <div
            className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
            style={{
              backgroundColor: "#F4FDFF",
              width: "100%",
              maxWidth: "600px", // Increased card width
              margin: "0 auto", // Keep the cards centered
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                {/* Text Container */}
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Dec</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">1</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/event9.png"
                  alt="Event 9"
                  layout="intrinsic"
                  width={360}
                  height={450}
                  objectFit="cover"
                  objectPosition="center top"
                />
              </div>
            </div>

            {/* Text Section Below Image */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                Series Brownbag 34 with Okky Madasari
              </h3>
              <a
                href="#"
                className="mt-4 text-blue-700 font-semibold flex items-center"
              >
                LEARN MORE <span className="ml-2">&#9679;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
