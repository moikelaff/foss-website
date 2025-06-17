"use client";
import { useParams } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";

const LecturerActivityDetail = () => {
  const { id } = useParams(); // Get the `id` from the URL

  const events = [
    {
      id: "1",
      date: "Feb 25",
      title:
        "Dr. Nia Deliana Explores Human Rights in the Geography of the East",
      description:
        "Dr. Nia Deliana explores the complex intersection of human rights within the geographic context of the East, focusing on its impact on regional development.",
      image: "/campus_life/LecturerAct1.jpeg",
    },
    {
      id: "2",
      date: "Oct 24",
      title:
        "Moch Faisal Karim, Ph.D., published an article titled 'The Jakarta Post: Prabowo global gambit: The Role of his Foreign Ministry Team'",
      description:
        "Moch Faisal Karim, Ph.D., published an in-depth article discussing the global political strategies of Prabowo and the role his Foreign Ministry Team plays.",
      image: "/campus_life/LecturerAct2.jpg",
    },
    {
      id: "3",
      date: "Oct 24",
      title:
        "Prof. Komaruddin Hidayat, our Political Science Lecturer, published a book entitled ‘Theology of Hope’",
      description:
        "Prof. Komaruddin Hidayat published a book titled ‘Theology of Hope,’ exploring themes of hope within the realm of theological discourse and its political implications.",
      image: "/campus_life/Lecturer3.jpg",
    },
    {
      id: "4",
      date: "Oct 20",
      title:
        "Philips J. Vermonte, Ph.D., Our Dean of the Faculty of Social Sciences, served as a speaker at The Jakarta Post YouTube channel",
      description:
        "Philips J. Vermonte, Ph.D., spoke at The Jakarta Post’s YouTube channel, providing insights into social science and global political dynamics in the Southeast Asia region.",
      image: "/campus_life/LecturerAct4.jpg",
    },
    {
      id: "5",
      date: "Oct 20",
      title:
        "Philips J. Vermonte, Ph.D., Our Dean of the Faculty of Social Sciences, published a journal",
      description:
        "Philips J. Vermonte, Ph.D., Our Dean, published a groundbreaking journal in the realm of international relations, contributing significantly to the academic field.",
      image: "/campus_life/LecturerAct5.jpg",
    },
    {
      id: "6",
      date: "Oct 20",
      title:
        "Prof. Farish A. Noor, our Political Science Lecturer, served as a speaker in the YouTube video by NU Online",
      description:
        "Prof. Farish A. Noor discussed global political issues on a YouTube video by NU Online, with a focus on Southeast Asian politics and social transformation.",
      image: "/campus_life/LecturerAct6.jpg",
    },
  ];

  // Find the event based on `id` parameter from the URL
  const event = events.find((event) => event.id === id);

  if (!event) {
    return (
      <div className="w-full">
        <header>
          <NavBar />
        </header>
        <section className="py-5 bg-white-50 mb-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800">
              Event not found
            </h2>
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }

  return (
    <div className="w-full">
      <header>
        <NavBar />
      </header>

      <section className="py-5 bg-white-50 mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-start">
            <div className="flex flex-col items-start">
              <p className="text-4xl font-bold text-[#00748D]">
                {event.date.split(" ")[0]}
              </p>
              <p className="text-3xl font-bold text-gray-600">
                {event.date.split(" ")[1]}
              </p>
            </div>

            <div className="w-1/2 ml-8">
                          <Image
                            src={event.image}
                            alt={`Event ${event.id}`}
                            width={500}
                            height={500}
                            objectFit="cover"
                            objectPosition="center"
                          />
                        </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mt-8">
            {event.title}
          </h2>
          <p className="text-lg text-gray-600 mt-4">{event.description}</p>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LecturerActivityDetail;
