"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const DetailedEvent = () => {
  const { id } = useParams();

  const events = [
    {
      id: "1",
      date: "Jan 05",
      title: "Series Brownbag 40 with Amin Mudzakkir",
      description: (
        <>
          <div className="text-lg text-gray-600 text-justify">
            The first Brownbag Series in 2024!
            <br />
            Join us for our 40th Brownbag Series. In this engaging discussion,
            we’ll delve into how Islamic feminism’s intersection with the
            political economy in Indonesia is reshaping the conventional split
            between the politics of recognition and redistribution.
            <br />
            This session, titled ‘The Paradox of Feminism in Indonesia:
            Political Economy, Muslim Piety, and Authority,’ will feature Amin
            Mudzakkir, our COMPOSE fellow and a researcher at PRW BRIN,
            Indonesia.
          </div>
        </>
      ),
      time: "14:00 - 15:30 PM JKT",
      location: "Teleconference Room, Faculty A Building, UIII",
      image: "/campus_life/Brownbag-40.png",
      registerLink: "#",
    },
    {
      id: "2",
      date: "Dec 28",
      title: "Diseminasi Hasil Awal Penelitian Riset Jabar",
      description: (
        <>
          <div className="text-lg text-gray-600 text-justify">
            Yuk, gabung dalam diskusi tentang tantangan pembangunan ekonomi dan
            sosial di Jawa Barat!
            <br /> Kegiatan ini akan membahas hasil riset dan mencari solusi
            untuk Jawa Barat yang lebih maju.
          </div>
        </>
      ),
      time: "14:00 - 15:30 PM JKT",
      location: "Teleconference Room, Faculty A Building, UIII",
      image: "/campus_life/event2.png",
      registerLink: "#",
    },
    {
      id: "3",
      date: "Jan 04",
      title: "Brownbag 39 with Muhammad Syukri",
      description: (
        <>
          <div className="text-lg text-gray-600 text-justify">
            Let’s explore how policy changes impact village autonomy and green
            initiatives!
            <br /> Discover how the Indonesian government, led by Jokowi,
            influences villages and the environment. Are they focused on solving
            local problems like environmental degradation, or is their main
            interest in building industrial infrastructure development for
            economic growth?
            <br />
            Join us for our next Brownbag session titled ‘Village Governance and
            Environmental Sustainability in Indonesia’ featuring Muhammad
            Syukri, our COMPOSE fellow and Senior Researcher at The SMERU
            Research Institute, Indonesia.
          </div>
        </>
      ),
      time: "14:00 - 15:30 PM JKT",
      location: "Classroom 10, Faculty A Building, UIII",
      image: "/campus_life/event3.png",
      registerLink: "#",
    },
    {
      id: "4",
      date: "Dec 15",
      title: "Brownbag 38 with Fathun Karib",
      description: (
        <>
          <div className="text-lg text-gray-600 text-justify">
            How can the concept of “Just Transition” be redefined to ensure
            justice for marginalized groups in Indonesia and other Global South
            countries, addressing the limitations and potential biases embedded
            in the mainstream approach primarily designed for Northern nations?
            <br />
            Join us for a discussion with Fathun Karib, our COMPOSE fellow and
            also a Sociology lecturer at the Faculty of Social and Political
            Sciences, Universitas Islam Negeri (UIN) Syarif Hidayatullah
            Jakarta, in Brownbag Series 38 titled “Justice for Whom?: Just
            Transition and the Global South.”
          </div>
        </>
      ),
      time: "14:00 - 15:30 PM JKT",
      location: "Teleconference Room, Faculty A Building, UIII",
      image: "/campus_life/event4.png",
      registerLink: "#",
    },
    {
      id: "5",
      date: "Dec 14",
      title: "The First Climate Talk with Michiel Schaeffer",
      description: (
        <>
          <div className="text-lg text-gray-600 text-justify">
            The Conference of the Parties (COP) to the UN Framework Convention
            on Climate Change (UNFCCC) is an international climate summit held
            annually. At COPs, world leaders gather to collaborate on solutions
            to tackle climate change. This year, known as COP28, is takes place
            in Dubai, United Arab Emirates.
            <br /> Prof. Schaeffer, our adjunct Professor of Master in Public
            Policy focusing on Climate Change at FOSS UIII and Lead Science
            Advisor at Climate Analytics in Germany, just returned from the
            conference. In Dubai, he presented the Global Mitigation Potential
            Atlas, followed by a panel discussion.
          </div>
        </>
      ),
      time: "09:30 - 11:00 AM JKT",
      location: "Teleconference Room, Faculty A Building, UIII",
      image: "/campus_life/event5.svg",
      registerLink: "#",
    },
    {
      id: "6",
      date: "Dec 13",
      title: "Brownbag 37 with Nathanael G. Sumaktoyo",
      description: (
        <>
          <div className="text-lg text-gray-600 text-justify">
            How do houses of worship, especially mosques in Indonesia, shape not
            only the beliefs of their congregations but also influence the
            political ideologies of their surrounding communities?
            <br /> Join us for a discussion with Nathanael G. Sumaktoyo, an
            assistant professor at the University of Singapore, in Brownbag
            Series 37 titled “Political Theory, House of Worship, and Indonesian
            Mosque.”
          </div>
        </>
      ),
      time: "14:00 - 15:30 PM JKT",
      location: "Smart Classroom 10, Faculty A Building, UIII",
      image: "/campus_life/event6.png",
      registerLink: "#",
    },
    {
      id: "7",
      date: "Dec 08",
      title: "Brownbag 36 with Aizat bin Khairi",
      description: (
        <>
          <div className="text-lg text-gray-600 text-justify">
            How do community-based organizations (CBOs) initiated by Muslim
            Rohingya refugees in Malaysia navigate legal barriers and cultural
            adaptation challenges? What role does self-resilience play in their
            potential transformation and contribution to the community? Let’s
            discuss this with Aizat bin Khairi from Universiti Kuala Lumpur in
            Brownbag Series 36 titled “The Path towards Inclusivity: CBOs and
            Rohingya in Malaysia.”
          </div>
        </>
      ),
      time: "14:00 - 15:30 PM JKT",
      location: "Smart Classroom 10, Faculty A Building, UIII",
      image: "/campus_life/event7.png",
      registerLink: "#",
    },
    {
      id: "8",
      date: "Dec 06",
      title: "Brownbag 35 with Arya Budi",
      description: (
        <>
          <div className="text-lg text-gray-600 text-justify">
            People supporting different presidential candidates have strong
            opinions. Still, there hasn’t been enough study on why they favor a
            particular candidate. Arya Budi, a COMPOSE fellow and Ph.D.
            candidate at the Department of Political Science, University of
            Illinois Urbana-Champaign, will be the speaker in this Brownbag
            Series titled “Political Behavior and Presidential Identification in
            Indonesia.” With him, we will explore how people emotionally connect
            with a presidential candidate and feel part of a group known as
            “presidential identification” or “Pres-ID.”
          </div>
        </>
      ),
      time: "14:00 - 15:30 PM JKT",
      location: "Smart Classroom 10, Faculty A Building, UIII",
      image: "/campus_life/event8.png",
      registerLink: "#",
    },
    {
      id: "9",
      date: "Dec 01",
      title: "Brownbag 34 with Okky Madasari",
      description: (
        <>
          <div className="text-lg text-gray-600 text-justify">
            Does the lack of critical thinking emphasis in Indonesia, influenced
            by politics and religion, hinder the nation’s path to self-reliance
            in knowledge and technology for development? How can Indonesia
            overcome this challenge and enhance its capacity to generate
            authentic knowledge, progress in science and technology, and
            establish policies and development strategies based on science and
            research?
            <br /> Join the discussion on this topic at Brownbag 34, titled “The
            Destruction of Critical Thinking in Present-Day Indonesia?” with
            Okky Madasari, our COMPOSE fellow. Save the date!
          </div>
        </>
      ),
      time: "14:00 - 15:30 PM JKT",
      location: "Teleconference Room, Faculty A Building, UIII",
      image: "/campus_life/event9.png",
      registerLink: "#",
    },
  ];

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
    <div className="w-full relative">
      <header>
        <NavBar />
      </header>

      {/* Date and Title Section */}
      <section className="py-5 bg-white-50 mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-8">
            {/* Left Date Section */}
            <div className="flex flex-col items-start ml-6">
              <p className="text-[#00748D] text-5xl font-bold">
                {event.date.split(" ")[0]}
              </p>
              <p className="text-5xl font-bold font-['Halyard_Display'] text-sky-950">
                {event.date.split(" ")[1]}
              </p>
            </div>

            {/* Title Section */}
            <div className="ml-8">
              <h2 className="text-5xl font-medium font-['Halyard_Display'] text-sky-950">
                {event.title}
              </h2>
            </div>
          </div>

          {/* Event Description and Details Section */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content Section */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 lg:pl-8">
              {/* Deskripsi Event Ditulis Langsung */}
              <div className="text-lg font-['Halyard_Display'] text-sky-950 mt-4">
                {event.description}
              </div>

              <div className="mt-8 space-y-6">
                {/* Date Section */}
                <div>
                  <p className="text-xl font-medium font-['Halyard_Display'] text-sky-950">
                    Date
                  </p>
                  <p className="text-lg font-['Halyard_Display'] text-gray-600">
                    {event.date}
                  </p>
                  <hr className="border-gray-300 mt-2" />
                </div>

                {/* Time Section */}
                <div>
                  <p className="text-xl font-medium font-['Halyard_Display'] text-sky-950">
                    Time
                  </p>
                  <p className="text-lg font-['Halyard_Display'] text-gray-600">
                    {event.time}
                  </p>
                  <hr className="border-gray-300 mt-2" />
                </div>

                {/* Location Section */}
                <div>
                  <p className="text-xl font-medium font-['Halyard_Display'] text-sky-950">
                    Location
                  </p>
                  <p className="text-lg font-['Halyard_Display'] text-gray-600">
                    {event.location}
                  </p>
                  <hr className="border-gray-300 mt-2" />
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-1/3 relative mb-8 lg:mb-0 lg:pl-8">
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
        </div>

        {/* Register Button Positioned Below the Image */}
        <div className="flex justify-center mt-8">
          <a
            href={event.registerLink}
            className="px-8 py-3 bg-brandNavy text-white font-light font-halyard rounded-lg hover:bg-[#005c74] transition mt-4"
          >
            Register For Event
          </a>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DetailedEvent;
