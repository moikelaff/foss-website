import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getUpcomingEvents, getMediaUrl } from '@/payload';

export default async function Events() {
  // Fetch CMS events
  const cmsEvents = await getUpcomingEvents();

  // Your existing hardcoded events as fallback (with slugs added)
  const fallbackEvents = [
    {
      id: 1,
      date: "Jan 05",
      title: "Series Brownbag 40 with Amin Mudzakkir",
      image: "/campus_life/Brownbag-40.png",
      slug: "brownbag-40-amin-mudzakkir"
    },
    {
      id: 2,
      date: "Dec 28",
      title: "Diseminasi Hasil Awal Penelitian Riset Jabar",
      image: "/campus_life/event2.png",
      slug: "riset-jabar-dissemination"
    },
    {
      id: 3,
      date: "Dec 20",
      title: "Series Brownbag 39 with Muhammad Syukri",
      image: "/campus_life/event3.png",
      slug: "brownbag-39-muhammad-syukri"
    },
    {
      id: 4,
      date: "Dec 15",
      title: "Series Brownbag 38 with Fathun Karib",
      image: "/campus_life/event4.png",
      slug: "brownbag-38-fathun-karib"
    },
    {
      id: 5,
      date: "Dec 14",
      title: "The First Climate Talk with Michiel Schaeffer",
      image: "/campus_life/event5.svg",
      slug: "climate-talk-michiel-schaeffer"
    },
    {
      id: 6,
      date: "Dec 13",
      title: "Series Brownbag 37 with Nathanael G. Sumaktoyo",
      image: "/campus_life/event6.png",
      slug: "brownbag-37-nathanael-sumaktoyo"
    },
    {
      id: 7,
      date: "Dec 08",
      title: "Series Brownbag 36 with Aizat bin Khairi",
      image: "/campus_life/event7.png",
      slug: "brownbag-36-aizat-khairi"
    },
    {
      id: 8,
      date: "Dec 06",
      title: "Series Brownbag 35 with Arya Budi",
      image: "/campus_life/event8.png",
      slug: "brownbag-35-arya-budi"
    },
    {
      id: 9,
      date: "Dec 01",
      title: "Series Brownbag 34 with Okky Madasari",
      image: "/campus_life/event9.png",
      slug: "brownbag-34-okky-madasari"
    },
  ];

  // Use CMS events if available, otherwise fallback
  const eventsData = cmsEvents.length > 0 ? cmsEvents : fallbackEvents;

  // Format events for display
  const events = eventsData.map((event: any) => ({
    ...event,
    // Format date for CMS events
    date: event.eventDate 
      ? new Date(event.eventDate).toLocaleDateString('en-US', { 
          month: 'short', 
          day: '2-digit' 
        })
      : event.date,
    // Handle image URLs
    image: event.image 
      ? (typeof event.image === 'string' ? event.image : getMediaUrl(event.image))
      : event.image,
    // Use slug for routing (support both CMS and fallback)
    slug: event.slug || `event-${event.id}`,
    id: event.id || event.slug
  }));

  return (
    <div className="w-full">
      <header>
        <NavBar />
      </header>

      {/* Hero Section */}
      <section className="py-4 bg-white-50">
        <div className="text-center text-black px-4 py-8">
          <h1 className="text-6xl font-bold">Events</h1>
        </div>
        <div className="pl-32">
          <h2 className="text-4xl font-bold text-gray-800">Upcoming Events</h2>
          <p className="text-lg text-gray-600 mt-4">
            See upcoming events from UIII
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-5 bg-white-50 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto max-w-7xl px-4">
          {events.map((event: any) => (
            <Link
              key={event.id || event.slug}
              href={`/CampusLife/Events/DetailedEvents/${event.slug}`} // Use slug instead of ID
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
                      alt={event.title}
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