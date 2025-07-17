import Image from "next/image";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "lucide-react";

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
            objectPosition="top"
            className="absolute top-0 left-0"
          />
        </div>
        <div className="mt-4 mb-4 text-center font-['Halyard_Display'] text-sky-950">
          <h1 className="text-7xl font-medium ">Campus Life</h1>
          <p className="text-lg mt-4 font-['Halyard_Display']">
            Explore your potential, connect with like-minded individuals, and
            make your mark at UIII
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
          <h2 className="text-6xl font-['Halyard_Display'] text-sky-950 font-medium">
            Events
          </h2>
          <p className="text-lg font-['Halyard_Display'] text-sky-950 mt-4">
            Discover endless opportunities to expand your knowledge and explore
            new passions through expert-led events. Explore the upcoming events
            and take advantage of these valuable opportunities to enrich your
            academic and personal growth.
          </p>
          <a href="/CampusLife/Events">
            <button className="px-4 py-2 bg-brandNavy text-white font-light font-halyard rounded-lg hover:bg-[#005c74] transition mt-4">
              Learn More
            </button>
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
          <h2 className="text-7xl font-['Halyard_Display'] text-sky-950 font-medium">
            Student Activities
          </h2>
          <p className="text-lg text-gray-800 mt-4 font-['Halyard_Display'] text-sky-950">
            UIII students are actively shaping their academic journey by
            pursuing their passions and achieving remarkable milestones. Dive
            into these inspiring stories of our students’ accomplishments and
            see how they’re making an impact!
          </p>
          <a href="/CampusLife/StudentActivities">
            <button className="px-4 py-2 bg-brandNavy text-white font-light font-halyard rounded-lg hover:bg-[#005c74] transition mt-4">
              Learn More
            </button>
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
          <h2 className="text-6xl font-['Halyard_Display'] text-sky-950 font-medium">
            Lecturer Activities
          </h2>
          <p className="text-lg font-['Halyard_Display'] text-sky-950 mt-4">
            UIII’s lecturers are experts in the social sciences, with a wealth
            of experience, remarkable achievements, and inspiring stories to
            share. Explore their journeys and be inspired by their dedication
            and expertise!
          </p>
          <a href="/CampusLife/LecturerActivities">
            <button className="px-4 py-2 bg-brandNavy text-white font-light font-halyard rounded-lg hover:bg-[#005c74] transition mt-4">
              Learn More
            </button>
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
          <h2 className="text-6xl font-['Halyard_Display'] text-sky-950 font-medium">
            Alumni Activities
          </h2>
          <p className="text-lg font-['Halyard_Display'] text-sky-950 mt-4">
            UIII alumni continue to make an impact in various fields, staying
            connected with the university through meaningful activities and
            collaborations. Explore the inspiring journeys of our alumni and
            discover how they contribute to shaping the future!
          </p>
          <a href="/CampusLife/AlumniActivities">
            <button className="px-4 py-2 bg-brandNavy text-white font-light font-halyard rounded-lg hover:bg-[#005c74] transition mt-4">
              Learn More
            </button>
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
