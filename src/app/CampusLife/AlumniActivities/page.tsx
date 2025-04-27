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
          <h1 className="text-6xl font-bold">Alumni Activities</h1>
        </div>
        <div className="pl-32">
          <h2 className="text-4xl font-bold text-gray-800">
            Recent Activities
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            See recent activities from alumni of UIII
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-5 bg-white-50 mb-16">
        {/* Grid of Events with 3 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto max-w-7xl px-4">
          {/* Event Card 1 */}
          <a
            href="/path-to-event-1"
            className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
            style={{
              backgroundColor: "#F4FDFF",
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Jan</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">10</p>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative mr-6 ml-6">
              <Image
                src="/campus_life/AlumniAct1.jpg"
                alt="Event 2"
                layout="intrinsic"
                width={360}
                height={450}
                objectFit="cover"
                objectPosition="center top"
              />
            </div>

            {/* Text Section Below Image */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                3 Minutes Thesis by PhD students of FoSS
              </h3>
            </div>
          </a>

          {/* Event Card 2 */}
          <a
            href="/path-to-event-1"
            className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
            style={{
              backgroundColor: "#F4FDFF",
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Jun</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">06</p>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative mr-6 ml-6">
              <Image
                src="/campus_life/AlumniAct2.jpg"
                alt="Event 2"
                layout="intrinsic"
                width={360}
                height={450}
                objectFit="cover"
                objectPosition="center top"
              />
            </div>

            {/* Text Section Below Image */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                Climate Talk 4 with Aichiro
              </h3>
            </div>
          </a>

          {/* Event Card 3 */}
          <a
            href="/path-to-event-1"
            className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
            style={{
              backgroundColor: "#F4FDFF",
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Sep</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">12</p>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative mr-6 ml-6">
              <Image
                src="/campus_life/AlumniAct3.jpg"
                alt="Event 2"
                layout="intrinsic"
                width={360}
                height={450}
                objectFit="cover"
                objectPosition="center top"
              />
            </div>

            {/* Text Section Below Image */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                Philips J. Vermonte, Ph.D., served as a speaker in the
                Roundtable event hosted by the National Security College (NSC)
                at Australian National University (ANU) on September 12, 2024.
              </h3>
            </div>
          </a>

          {/* Event Card 4 */}
          <a
            href="/path-to-event-4" // Ganti dengan URL tujuan yang sesuai
            className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
            style={{
              backgroundColor: "#F4FDFF",
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Oct</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">20</p>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative mr-6 ml-6">
              <Image
                src="/campus_life/LecturerAct4.jpg"
                alt="Event 4"
                layout="intrinsic"
                width={360}
                height={450}
                objectFit="cover"
                objectPosition="center top"
              />
            </div>

            {/* Text Section Below Image */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mt-0">
                Philips J. Vermonte, Ph.D., Our Dean of the Faculty of Social
                Sciences, served as a speaker at The Jakarta Post YouTube
                channel
              </h3>
            </div>
          </a>

          {/* Event Card 5 */}
          <a
            href="/path-to-event-5" // Ganti dengan URL tujuan yang sesuai
            className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
            style={{
              backgroundColor: "#F4FDFF",
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Oct</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">20</p>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative mr-6 ml-6">
              <Image
                src="/campus_life/LecturerAct5.jpg"
                alt="Event 4"
                layout="intrinsic"
                width={360}
                height={450}
                objectFit="cover"
                objectPosition="center top"
              />
            </div>

            {/* Text Section Below Image */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                Philips J. Vermonte, Ph.D., Our Dean of the Faculty of Social
                Sciences, published a journal
              </h3>
            </div>
          </a>

          {/* Event Card 6 */}
          <a
            href="/path-to-event-6" // Ganti dengan URL tujuan yang sesuai
            className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
            style={{
              backgroundColor: "#F4FDFF",
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Oct</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">20</p>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative mr-6 ml-6">
              <Image
                src="/campus_life/LecturerAct6.jpg"
                alt="Event 4"
                layout="intrinsic"
                width={360}
                height={450}
                objectFit="cover"
                objectPosition="center top"
              />
            </div>

            {/* Text Section Below Image */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                Prof. Farish A. Noor, our Political Science Lecturer, served as
                a speaker in the YouTube video by NU Online
              </h3>
            </div>
          </a>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
