import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function LecturerActivities() {
  const events = [
    {
      id: 1,
      date: "Feb 25",
      title:
        "Dr. Nia Deliana Explores Human Rights in the Geography of the East",
      image: "/campus_life/LecturerAct1.jpeg",
    },
    {
      id: 2,
      date: "Oct 24",
      title:
        "Moch Faisal Karim, Ph.D., published an article titled 'The Jakarta Post: Prabowo global gambit: The Role of his Foreign Ministry Team'",
      image: "/campus_life/LecturerAct2.jpg",
    },
    {
      id: 3,
      date: "Oct 24",
      title:
        "Prof. Komaruddin Hidayat, our Political Science Lecturer, published a book entitled ‘Theology of Hope’",
      image: "/campus_life/Lecturer3.jpg",
    },
    {
      id: 4,
      date: "Oct 20",
      title:
        "Philips J. Vermonte, Ph.D., Our Dean of the Faculty of Social Sciences, served as a speaker at The Jakarta Post YouTube channel",
      image: "/campus_life/LecturerAct4.jpg",
    },
    {
      id: 5,
      date: "Oct 20",
      title:
        "Philips J. Vermonte, Ph.D., Our Dean of the Faculty of Social Sciences, published a journal",
      image: "/campus_life/LecturerAct5.jpg",
    },
    {
      id: 6,
      date: "Oct 20",
      title:
        "Prof. Farish A. Noor, our Political Science Lecturer, served as a speaker in the YouTube video by NU Online",
      image: "/campus_life/LecturerAct6.jpg",
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
          <h1 className="text-6xl font-bold">Lecturer Activities</h1>
        </div>
        <div className="pl-32">
          <h2 className="text-4xl font-bold text-gray-800">
            Recent Activities
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            See recent activities from lecturers of UIII
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-5 bg-white-50 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto max-w-7xl px-4">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/CampusLife/LecturerActivities/DetailedLecturerActivities/${event.id}`}
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
