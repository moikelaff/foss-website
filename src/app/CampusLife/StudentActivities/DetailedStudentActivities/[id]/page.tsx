"use client";
import { useParams } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";

const EventDetail = () => {
  const { id } = useParams();

  // Ensure all event ids are strings to avoid type issues
  const events = [
    {
      id: "1", // Keep all ids as strings
      date: "Dec 05",
      title:
        "Elis Nurhayati, our MPP specializing in Climate Change student, wrote an article in The Jakarta Post",
      description:
        "Elis Nurhayati, our MPP specializing in Climate Change student, wrote an article in The Jakarta Post titled “Why a UN plastics treaty matters for climate change and Indonesia” on December 5, 2024.",
      image: "/campus_life/StudentAct2.jpg",
    },
    {
      id: "2",
      date: "Nov 23",
      title:
        "Elis Nurhayati, our MPP student specializing in Climate Change, wrote an article in The Jakarta Post",
      description:
        "Elis Nurhayati, our MPP student specializing in Climate Change, wrote an article in The Jakarta Post titled “Bridging the climate finance gap: COP29’s defining moment” on November 23, 2024.",
      image: "/campus_life/StudentAct3.jpg",
    },
    {
      id: "3",
      date: "Nov 01",
      title:
        "ASSIST released the result of the Electability Survey of UIII Union Candidates among FOSS Students",
      description:
        "ASSIST released the result of the Electability Survey of UIII Union Candidates among FOSS Students on November 1. During the Election of the UIII Student Union, ASSIST conducted an online survey on FOSS students to find out the preferences of candidates for the Student Union elections. The survey was conducted by phone and was conducted on October 30-31, 2024. The results of this survey can help friends see the political dynamics that occur in FOSS and help friends who have not decided on the election to be wiser.",
      image: "/campus_life/StudentAct5.jpg",
    },
    {
      id: "4",
      date: "Oct 26",
      title:
        "Agus Firmansyah, our MPP focusing on Climate Change student was selected to represent West Sulawesi at the MTQN VII KORPRI in 2024",
      description:
        "Agus Firmansyah, our MPP focusing on Climate Change student, also a Forestry Officer from Sulbar (Western Sulawesi), was selected to represent West Sulawesi at the MTQN VII KORPRI in 2024, held in Palangkaraya, Central Kalimantan. Despite working at the Regional Device Organization (OPD) in October 2024",
      image: "/campus_life/StudentAct1.svg",
    },
    {
      id: "5",
      date: "Oct 12",
      title:
        "Ararat Kostanian, our PhD student in Political Science, served as a speaker in the Youtube Video by Armenian Business News TV",
      description:
        "Ararat Kostanian, our PhD student in Political Science, served as a speaker in the Youtube Video by Armenian Business News TV with the title “ԿԱՅՈՒՆ ԽԱՂԱՂՈՒԹՅԱՆ ԲԱՆԱՁԵՎԸ.» ԻՆԴՈՆԵԶԻԱ – ԱՐԵՎԵԼՅԱՆ ԹԻՄՈՐ” on October 12, 2024.",
      image: "/campus_life/StudentAct6.jpg",
    },
    {
      id: "6",
      date: "Sep 26",
      title:
        "Foss Students attended Sustainable Development for Thriving Communities (SDTC) Conference on 24 – 25 September 2024 at Monash University",
      description:
        "Izzul Fatchu Reza, our PhD student in Political Science; Nurul Fatin Afifah, MA student in Political Science; and Fuad Muhamad Fahrudin, MPP focusing on Climate Change student, together with Dea Fajria Tatarizqa Japal (Sustainable Finance Master Student) attended Sustainable Development for Thriving Communities (SDTC) Conference on 24 – 25 September 2024 at Monash University, Indonesia.",
      image: "/campus_life/StudentAct7.jpg",
    },
    {
      id: "7",
      date: "Aug 30",
      title:
        "Tri Sulistianing Astuti, our MA graduate in Political Science, was awarded as the Best Outstanding Student",
      description:
        "Tri Sulistianing Astuti, our MA graduate in Political Science, was awarded as the Best Outstanding Student. Nizar Lukman and Musa Bah, also MA graduates in Political Science, won the Best Thesis award in the Faculty of Social Sciences on August 30, 2024.",
      image: "/campus_life/StudentAct8.jpg",
    },
    {
      id: "8",
      date: "Aug 07",
      title:
        "Muhammad Qeyas, our MPP specializing in Climate Change student, participated in the FEB Unpad’s Summer Program 2024",
      description:
        "Muhammad Qeyas, our MPP specializing in Climate Change student, participated in the FEB Unpad’s Summer Program 2024: “ESG Challenges: The Role of AI and Reporting Practices” held at the Faculty of Economics and Business Universitas Padjadjaran in Bandung, West Java, Indonesia, on August 1st-5th 2024.",
      image: "/campus_life/StudentAct9.jpg",
    },
    {
      id: "9",
      date: "Aug 06",
      title:
        "Ahmad Sabirin, an MPP Climate Change student, received the Academy Honour Roll for his Outstanding Participation and Contribution to the classroom at the ASEAN Law and Policy Academy",
      description:
        "Ahmad Sabirin, an MPP Climate Change student, received the Academy Honour Roll for his Outstanding Participation and Contribution to the classroom at the ASEAN Law and Policy Academy from 29 July to 5 August 2024 at the National University of Singapore. He presented his paper entitled 'Is There an ASEAN Policy on Climate Change, Energy, and the Environment?'",
      image: "/campus_life/StudentAct10.jpg",
    },
  ];

  // Ensure `id` is treated as a string for comparison
  const event = events.find((event) => event.id === String(id));

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

export default EventDetail;
