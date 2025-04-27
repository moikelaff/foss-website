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
          <h1 className="text-6xl font-bold">Student Activities</h1>
        </div>
        <div className="pl-32">
          <h2 className="text-4xl font-bold text-gray-800">
            Recent Activities
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            See recent activities from students of UIII
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-5 bg-white-50 mb-16">
        {/* Grid of Events with 3 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto max-w-7xl px-4">
          {/* Event Card 1 */}
          <a
            href="/path-to-event-1" // Ganti dengan URL tujuan yang sesuai
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
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Dec</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">05</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/StudentAct1.svg"
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
                Elis Nurhayati, our MPP specializing in Climate Change student,
                wrote an article in The Jakarta Post
              </h3>
            </div>
          </a>

          {/* Event Card 2 */}
          <a
            href="/path-to-event-2" // Ganti dengan URL tujuan yang sesuai
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
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Nov</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">23</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/StudentAct1.svg"
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
                Elis Nurhayati, our MPP student specializing in Climate Change,
                wrote an article in The Jakarta Post
              </h3>
            </div>
          </a>

          {/* Event Card 3 */}
          <a
            href="/path-to-event-3" // Ganti dengan URL tujuan yang sesuai
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
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Nov</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">01</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/StudentAct1.svg"
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
                ASSIST released the result of the Electability Survey of UIII
                Union Candidates among FOSS Students
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
              maxWidth: "600px", // Increased card width
              margin: "0 auto", // Keep the cards centered
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Oct</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">26</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/StudentAct1.svg"
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
                Agus Firmansyah, our MPP focusing on Climate Change student was
                selected to represent West Sulawesi at the MTQN VII KORPRI in
                2024
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
              maxWidth: "600px", // Increased card width
              margin: "0 auto", // Keep the cards centered
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Oct</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">12</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/StudentAct1.svg"
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
                Ararat Kostanian, our PhD student in Political Science, served
                as a speaker in the Youtube Video by Armenian Business News TV
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
              maxWidth: "600px", // Increased card width
              margin: "0 auto", // Keep the cards centered
            }}
          >
            <div className="flex">
              {/* Left Date Section */}
              <div className="w-1/3 p-6 flex justify-center items-start">
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Sep</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">26</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/StudentAct1.svg"
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
                Foss Students attended stainable Development for Thriving
                Communities (SDTC) Conference on 24 – 25 September 2024 at
                Monash University
              </h3>
            </div>
          </a>

          {/* Event Card 7 */}
          <a
            href="/path-to-event-7" // Ganti dengan URL tujuan yang sesuai
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
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Aug</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">30</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/StudentAct1.svg"
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
                Tri Sulistianing Astuti, our MA graduate in Political Science,
                was awarded as the Best Outstanding Student
              </h3>
            </div>
          </a>

          {/* Event Card 8 */}
          <a
            href="/path-to-event-8" // Ganti dengan URL tujuan yang sesuai
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
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Aug</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">07</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/StudentAct1.svg"
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
                Muhammad Qeyas, our MPP specializing in Climate Change student,
                participated in the FEB Unpad’s Summer Program 2024
              </h3>
            </div>
          </a>

          {/* Event Card 9 */}
          <a
            href="/path-to-event-9" // Ganti dengan URL tujuan yang sesuai
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
                <div className="flex flex-col items-start justify-start pl-2">
                  <p className="text-4xl font-bold text-[#00748D]">Aug</p>
                  <p className="text-3xl font-bold text-gray-600 mt-1">06</p>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-2/3 relative mt-4 mr-6">
                <Image
                  src="/campus_life/StudentAct1.svg"
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
                Ahmad Sabirin, an MPP Climate Change student, received the
                Academy Honour Roll for his Outstanding Participation and
                Contribution to the classroom at the ASEAN Law and Policy
                Academy
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
