"use client";
import { useParams } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";

const AlumniActivityDetail = () => {
  const { id } = useParams();

  const events = [
    {
      id: "1",
      date: "Jun 05",
      title: "Collecting, Classifying, and Analyzing Textual Data Using R",
      description:
        "PhD students of the Faculty of Social Sciences (FoSS) participated in a 3-minute thesis competition, presenting their research in a concise and engaging format.",
      image: "/campus_life/AlumniAct20.png",
    },
    {
      id: "2",
      date: "Jul 01",
      title: "Comparative Historical Analysis in the Social Sciences",
      description:
        "Aichiro delivered a powerful talk on the role of climate change in contemporary global politics, offering insights into how international collaborations can address this pressing issue.",
      image: "/campus_life/AlumniAct21.jpg",
    },
    {
      id: "3",
      date: "Sep 12",
      title:
        "Philips J. Vermonte, Ph.D., served as a speaker in the Roundtable event hosted by the National Security College (NSC) at Australian National University (ANU) on September 12, 2024.",
      description:
        "Philips J. Vermonte, Ph.D., shared his expertise on Southeast Asia's security landscape during a roundtable discussion at ANU's National Security College.",
      image: "/campus_life/AlumniAct3.jpg",
    },
    {
      id: "4",
      date: "Oct 20",
      title:
        "Philips J. Vermonte, Ph.D., Our Dean of the Faculty of Social Sciences, served as a speaker at The Jakarta Post YouTube channel",
      description:
        "Our esteemed Dean, Philips J. Vermonte, Ph.D., was invited as a speaker on The Jakarta Post's YouTube channel to discuss key political trends in Southeast Asia.",
      image: "/campus_life/LecturerAct4.jpg",
    },
    {
      id: "5",
      date: "Oct 20",
      title:
        "Philips J. Vermonte, Ph.D., Our Dean of the Faculty of Social Sciences, published a journal",
      description:
        "Philips J. Vermonte, Ph.D., made significant contributions to the field of political science with the publication of his latest journal on international relations.",
      image: "/campus_life/LecturerAct5.jpg",
    },
    {
      id: "6",
      date: "Oct 20",
      title:
        "Prof. Farish A. Noor, our Political Science Lecturer, served as a speaker in the YouTube video by NU Online",
      description:
        "Prof. Farish A. Noor addressed key social and political issues in Southeast Asia as part of a YouTube video produced by NU Online.",
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
              <p className="text-4xl font-bold font-['Halyard_Display'] text-[#00748D]">
                {event.date.split(" ")[0]}
              </p>
              <p className="text-3xl font-bold font-['Halyard_Display'] text-sky-950">
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

          <h2 className="text-4xl font-medium font-['Halyard_Display'] text-sky-950 mt-8">
            {event.title}
          </h2>
          <p className="text-lg font-['Halyard_Display'] text-sky-950 mt-4">
            {event.description}
          </p>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AlumniActivityDetail;
