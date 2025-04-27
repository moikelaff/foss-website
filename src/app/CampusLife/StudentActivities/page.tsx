import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Events() {
  const events = [
    {
      id: 1,
      date: "Dec 05",
      title:
        "Elis Nurhayati, our MPP specializing in Climate Change student, wrote an article in The Jakarta Post",
      image: "/campus_life/StudentAct2.jpg",
    },
    {
      id: 2,
      date: "Nov 23",
      title:
        "Elis Nurhayati, our MPP student specializing in Climate Change, wrote an article in The Jakarta Post",
      image: "/campus_life/StudentAct3.jpg",
    },
    {
      id: 3,
      date: "Nov 01",
      title:
        "ASSIST released the result of the Electability Survey of UIII Union Candidates among FOSS Students",
      image: "/campus_life/StudentAct5.jpg",
    },
    {
      id: 4,
      date: "Oct 26",
      title:
        "Agus Firmansyah, our MPP focusing on Climate Change student was selected to represent West Sulawesi at the MTQN VII KORPRI in 2024",
      image: "/campus_life/StudentAct1.svg",
    },
    {
      id: 5,
      date: "Oct 12",
      title:
        "Ararat Kostanian, our PhD student in Political Science, served as a speaker in the Youtube Video by Armenian Business News TV",
      image: "/campus_life/StudentAct6.jpg",
    },
    {
      id: 6,
      date: "Sep 26",
      title:
        "Foss Students attended Sustainable Development for Thriving Communities (SDTC) Conference on 24 – 25 September 2024 at Monash University",
      image: "/campus_life/StudentAct7.jpg",
    },
    {
      id: 7,
      date: "Aug 30",
      title:
        "Tri Sulistianing Astuti, our MA graduate in Political Science, was awarded as the Best Outstanding Student",
      image: "/campus_life/StudentAct8.jpg",
    },
    {
      id: 8,
      date: "Aug 07",
      title:
        "Muhammad Qeyas, our MPP specializing in Climate Change student, participated in the FEB Unpad’s Summer Program 2024",
      image: "/campus_life/StudentAct9.jpg",
    },
    {
      id: 9,
      date: "Aug 06",
      title:
        "Ahmad Sabirin, an MPP Climate Change student, received the Academy Honour Roll for his Outstanding Participation and Contribution to the classroom at the ASEAN Law and Policy Academy",
      image: "/campus_life/StudentAct10.jpg",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto max-w-7xl px-4">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/CampusLife/StudentActivities/DetailedStudentActivities/${event.id}`}
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
