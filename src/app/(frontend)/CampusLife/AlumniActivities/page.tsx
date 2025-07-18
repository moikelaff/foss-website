import Image from "next/image";
import Link from "next/link";
import NavBar from "@/(frontend)/components/Navbar";
import Footer from "@/(frontend)/components/Footer";

export default function AlumniActivities() {
  const events = [
    {
      id: 1,
      date: "Jun 05",
      title: "Collecting, Classifying, and Analyzing Textual Data Using R",
      image: "/campus_life/AlumniAct20.png",
    },
    {
      id: 2,
      date: "Jul 01",
      title: "Comparative Historical Analysis in the Social Sciences",
      image: "/campus_life/AlumniAct21.jpg",
    },
    {
      id: 3,
      date: "Jul 03",
      title: "Digital Ethnographic Methods",
      image: "/campus_life/AlumniAct22.jpg",
    },
    {
      id: 4,
      date: "Jul 05",
      title: "Case Study Methods",
      image: "/campus_life/AlumniAct23.jpg",
    },
    {
      id: 5,
      date: "Jul 08",
      title: "Qualitative Social Network in Social Sciences",
      image: "/campus_life/AlumniAct24.jpg",
    },
    {
      id: 6,
      date: "Jul 10",
      title: "Categorical Data Analysis",
      image: "/campus_life/AlumniAct25.jpg",
    },
    {
      id: 7,
      date: "Jul 15",
      title: "Survey Experiments in Social Sciences",
      image: "/campus_life/AlumniAct19.jpg",
    },
    {
      id: 8,
      date: "Jul 17",
      title: "Introduction to Climate Modelling",
      image: "/campus_life/AlumniAct18.jpg",
    },
    {
      id: 9,
      date: "Jul 18",
      title: "Introduction to Mixed Methods Research",
      image: "/campus_life/AlumniAct17.jpg",
    },
  ];

  return (
    <div className="w-full">
      <header>
        <NavBar />
      </header>

      {/* Hero Section */}
      <section className="py-4 bg-white-50">
        <div className="mt-4 mb-4 text-center font-['Halyard_Display'] text-sky-950">
          <h1 className="text-7xl font-medium">Alumni Activities</h1>
        </div>
        <div className="pl-32">
          <h2 className="text-4xl font-medium font-['Halyard_Display'] text-sky-950">
            Recent Activities
          </h2>
          <p className="text-lg font-['Halyard_Display'] text-sky-950 mt-4">
            See recent activities from alumni of UIII
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-5 bg-white-50 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto max-w-7xl px-4">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/CampusLife/AlumniActivities/DetailedAlumniActivities/${event.id}`}
            >
              <div
                className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
                style={{
                  backgroundColor: "#F4FDFF",
                  width: "100%",
                  maxWidth: "600px",
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  height: "450px",
                }}
              >
                <div className="flex w-full">
                  {/* Left Date Section */}
                  <div className="w-1/3 p-6 flex justify-center items-start">
                    <div className="flex flex-col items-start justify-start pl-2">
                      <p className="text-4xl font-bold font-['Halyard_Display'] text-[#00748D]">
                        {event.date.split(" ")[0]}
                      </p>
                      <p className="text-3xl font-bold font-['Halyard_Display'] text-sky-950">
                        {event.date.split(" ")[1]}
                      </p>
                    </div>
                  </div>

                  {/* Right Image Section */}
                  <div className="relative mt-6 ml-6 w-[200px] h-[250px]">
                    <Image
                      src={event.image}
                      alt={`Event ${event.id}`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>

                {/* Text Section Below Image */}
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-medium font-['Halyard_Display'] text-sky-950 mt-2">
                    {event.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
