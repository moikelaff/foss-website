import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function AlumniActivities() {
  const events = [
    {
      id: 1,
      date: "Jan 10",
      title: "3 Minutes Thesis by PhD students of FoSS",
      image: "/campus_life/AlumniAct1.jpg",
      link: "/path-to-event-1",
    },
    {
      id: 2,
      date: "Jun 06",
      title: "Climate Talk 4 with Aichiro",
      image: "/campus_life/AlumniAct2.jpg",
      link: "/path-to-event-2",
    },
    {
      id: 3,
      date: "Sep 12",
      title:
        "Philips J. Vermonte, Ph.D., served as a speaker in the Roundtable event hosted by the National Security College (NSC) at Australian National University (ANU) on September 12, 2024.",
      image: "/campus_life/AlumniAct3.jpg",
      link: "/path-to-event-3",
    },
    {
      id: 4,
      date: "Oct 20",
      title:
        "Philips J. Vermonte, Ph.D., Our Dean of the Faculty of Social Sciences, served as a speaker at The Jakarta Post YouTube channel",
      image: "/campus_life/LecturerAct4.jpg",
      link: "/path-to-event-4",
    },
    {
      id: 5,
      date: "Oct 20",
      title:
        "Philips J. Vermonte, Ph.D., Our Dean of the Faculty of Social Sciences, published a journal",
      image: "/campus_life/LecturerAct5.jpg",
      link: "/path-to-event-5",
    },
    {
      id: 6,
      date: "Oct 20",
      title:
        "Prof. Farish A. Noor, our Political Science Lecturer, served as a speaker in the YouTube video by NU Online",
      image: "/campus_life/LecturerAct6.jpg",
      link: "/path-to-event-6",
    },
  ];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto max-w-7xl px-4">
          {events.map((event) => (
            <Link key={event.id} href={event.link}>
              <div
                className="rounded-2xl shadow-2xl overflow-hidden border border-gray-300 mb-8 transition-shadow duration-300 hover:shadow-[0px_4px_10px_rgba(0,116,141,0.5)]"
                style={{
                  backgroundColor: "#F4FDFF",
                  width: "100%",
                  maxWidth: "600px",
                  margin: "0 auto",
                  display: "flex", // Flexbox to ensure proper alignment
                  flexDirection: "column",
                  height: "450px", // Set a fixed height for the card to maintain consistency
                }}
              >
                <div className="flex w-full">
                  {/* Left Date Section */}
                  <div className="w-1/3 p-6 flex justify-center items-start">
                    <div className="flex flex-col items-start justify-start pl-2">
                      <p className="text-4xl font-bold text-[#00748D]">
                        {event.date.split(" ")[0]}
                      </p>
                      <p className="text-3xl font-bold text-gray-600 mt-1">
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
                  <h3 className="text-xl font-bold text-gray-800 mt-2">
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
